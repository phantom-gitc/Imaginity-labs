import { NextResponse } from 'next/server'
import { NewsletterSubscriptionSchema } from '../../../lib/validations/newsletter'
import { checkRateLimit, getClientIp } from '../../../lib/security/rate-limit'
import { sanitizeEmail } from '../../../lib/security/sanitize'
import { saveSubscriber } from '../../../lib/db/mongodb'

export const runtime = 'nodejs'

export async function POST(request) {
  try {
    const ip = getClientIp(request)
    const userAgent = request.headers.get('user-agent') || 'unknown'

    // Rate limiting check
    const maxSubmissions = Number(process.env.RATE_LIMIT_NEWSLETTER_MAX) || 5
    const windowMs = Number(process.env.RATE_LIMIT_NEWSLETTER_WINDOW_MS) || 3600000
    const rateCheck = await checkRateLimit(`newsletter:${ip}`, maxSubmissions, windowMs)

    if (!rateCheck.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Too many subscription attempts. Please try again later.',
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

    let rawBody
    try {
      rawBody = await request.json()
    } catch {
      return NextResponse.json(
        { success: false, error: 'Malformed JSON payload' },
        { status: 400 }
      )
    }

    const validation = NewsletterSubscriptionSchema.safeParse(rawBody)
    if (!validation.success) {
      const firstIssue = validation.error.issues[0]
      return NextResponse.json(
        {
          success: false,
          error: firstIssue ? firstIssue.message : 'Please provide a valid email address',
        },
        { status: 422 }
      )
    }

    const cleanEmail = sanitizeEmail(validation.data.email)

    // Save to database
    await saveSubscriber({
      email: cleanEmail,
      ip,
      userAgent,
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for subscribing to SureNext field notes.',
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
    console.error('[API /api/newsletter] Internal server error:', error)
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    )
  }
}
