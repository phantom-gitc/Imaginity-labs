import { NextResponse } from 'next/server'
import { ContactSubmissionSchema } from '../../../lib/validations/contact'
import { checkRateLimit, getClientIp } from '../../../lib/security/rate-limit'
import { sanitizeText, sanitizeEmail } from '../../../lib/security/sanitize'
import { saveEnquiry } from '../../../lib/db/mongodb'
import { sendEnquiryNotification } from '../../../lib/email/mailer'

export const runtime = 'nodejs'

export async function POST(request) {
  try {
    const ip = getClientIp(request)
    const userAgent = request.headers.get('user-agent') || 'unknown'

    // 1. Rate limiting check (5 submissions per 10 minutes per IP)
    const maxSubmissions = Number(process.env.RATE_LIMIT_CONTACT_MAX) || 5
    const windowMs = Number(process.env.RATE_LIMIT_CONTACT_WINDOW_MS) || 600000
    const rateCheck = await checkRateLimit(`contact:${ip}`, maxSubmissions, windowMs)

    if (!rateCheck.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Too many requests. Please wait before submitting another enquiry.',
          retryAfter: rateCheck.retryAfter,
        },
        {
          status: 429,
          headers: {
            'Retry-After': String(rateCheck.retryAfter),
            'X-RateLimit-Limit': String(rateCheck.limit),
            'X-RateLimit-Remaining': String(rateCheck.remaining),
            'X-RateLimit-Reset': String(rateCheck.reset),
          },
        }
      )
    }

    // 2. Parse request payload
    let rawBody
    try {
      rawBody = await request.json()
    } catch {
      return NextResponse.json(
        { success: false, error: 'Malformed JSON payload' },
        { status: 400 }
      )
    }

    // 3. Schema validation with Zod
    const validation = ContactSubmissionSchema.safeParse(rawBody)
    if (!validation.success) {
      const firstIssue = validation.error.issues[0]
      return NextResponse.json(
        {
          success: false,
          error: firstIssue ? firstIssue.message : 'Invalid form submission',
          errors: validation.error.flatten().fieldErrors,
        },
        { status: 422 }
      )
    }

    const data = validation.data

    // 4. Input sanitization
    const sanitizedRecord = {
      name: sanitizeText(data.name, 100),
      email: sanitizeEmail(data.email),
      service: sanitizeText(data.service, 120),
      scope: sanitizeText(data.scope, 120),
      message: sanitizeText(data.message, 3000),
      ip,
      userAgent,
    }

    // 5. Database persistence (if MONGODB_URI configured in .env)
    const dbResult = await saveEnquiry(sanitizedRecord)

    // 6. Transactional email dispatch
    await sendEnquiryNotification(sanitizedRecord)

    return NextResponse.json(
      {
        success: true,
        message: 'Your brief has been dispatched. Our founding partners will review and reply within one business day.',
        persisted: dbResult.persisted,
      },
      {
        status: 200,
        headers: {
          'X-RateLimit-Limit': String(rateCheck.limit),
          'X-RateLimit-Remaining': String(rateCheck.remaining),
          'X-RateLimit-Reset': String(rateCheck.reset),
        },
      }
    )
  } catch (error) {
    console.error('[API /api/contact] Internal server error:', error)
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred while processing your request. Please try again or email us directly.' },
      { status: 500 }
    )
  }
}
