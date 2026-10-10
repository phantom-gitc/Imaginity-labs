import assert from 'node:assert/strict'
import { ContactSubmissionSchema } from '../src/lib/validations/contact.js'
import { NewsletterSubscriptionSchema } from '../src/lib/validations/newsletter.js'
import { sanitizeText, sanitizeEmail } from '../src/lib/security/sanitize.js'
import { checkRateLimit } from '../src/lib/security/rate-limit.js'
import { securityHeaders } from '../src/lib/security/headers.js'

console.log('🧪 Starting Imaginity Labs Backend Test Suite...\n')

// 1. Sanitization Tests
console.log('--- Test 1: Sanitization ---')
const rawInput = '<script>alert("hack")</script>Hello World! & "quotes"'
const sanitized = sanitizeText(rawInput)
assert.equal(sanitized, '&lt;script&gt;alert(&quot;hack&quot;)&lt;/script&gt;Hello World! &amp; &quot;quotes&quot;')
console.log('  ✔ HTML tags escaped properly')

const rawEmail = '   Test.User+Sub@Domain.COM   '
const cleanEmail = sanitizeEmail(rawEmail)
assert.equal(cleanEmail, 'test.user+sub@domain.com')
console.log('  ✔ Email normalized and trimmed properly')

// 2. Validation Tests - Contact Schema
console.log('\n--- Test 2: Contact Form Validation ---')
const validContact = {
  name: 'Acme Corp',
  email: 'founder@acme.com',
  service: 'Agentic AI Platform',
  scope: 'Q4 2026',
  message: 'We want to build an autonomous multi-agent pipeline for customer onboarding.',
  website: '', // honeypot empty
  _timestamp: Date.now() - 3000, // 3s ago
}
const validResult = ContactSubmissionSchema.safeParse(validContact)
assert.equal(validResult.success, true, 'Valid payload should succeed')
console.log('  ✔ Valid contact payload passed schema')

// Honeypot trap check
const honeypotBot = { ...validContact, website: 'http://spam-link.ru' }
const botResult = ContactSubmissionSchema.safeParse(honeypotBot)
assert.equal(botResult.success, false, 'Honeypot should fail')
console.log('  ✔ Honeypot successfully trapped spam payload')

// Rapid submission trap check
const instantBot = { ...validContact, _timestamp: Date.now() }
const instantResult = ContactSubmissionSchema.safeParse(instantBot)
assert.equal(instantResult.success, false, 'Rapid submission should fail')
console.log('  ✔ Fast sub-second bot submission rejected')

// Invalid email check
const invalidEmail = { ...validContact, email: 'not-an-email' }
const invalidResult = ContactSubmissionSchema.safeParse(invalidEmail)
assert.equal(invalidResult.success, false)
console.log('  ✔ Invalid email rejected')

// 3. Validation Tests - Newsletter Schema
console.log('\n--- Test 3: Newsletter Validation ---')
const validNewsletter = { email: 'subscriber@venture.io', hp: '' }
assert.equal(NewsletterSubscriptionSchema.safeParse(validNewsletter).success, true)
console.log('  ✔ Valid newsletter subscription passed')

const invalidNewsletterHp = { email: 'subscriber@venture.io', hp: 'bot-content' }
assert.equal(NewsletterSubscriptionSchema.safeParse(invalidNewsletterHp).success, false)
console.log('  ✔ Newsletter honeypot rejected bot')

// 4. Rate Limiter Tests
console.log('\n--- Test 4: Rate Limiting ---')
const testKey = 'test-ip-' + Date.now()
const limit = 3
const windowMs = 5000

const r1 = await checkRateLimit(testKey, limit, windowMs)
assert.equal(r1.success, true)
assert.equal(r1.remaining, 2)

const r2 = await checkRateLimit(testKey, limit, windowMs)
assert.equal(r2.success, true)
assert.equal(r2.remaining, 1)

const r3 = await checkRateLimit(testKey, limit, windowMs)
assert.equal(r3.success, true)
assert.equal(r3.remaining, 0)

const r4 = await checkRateLimit(testKey, limit, windowMs)
assert.equal(r4.success, false)
assert.equal(r4.remaining, 0)
assert.ok(r4.retryAfter > 0)
console.log('  ✔ Sliding window rate limiter enforced limit threshold and returned retryAfter')

// 5. Security Headers Tests
console.log('\n--- Test 5: Security Headers Configuration ---')
const headerKeys = securityHeaders.map(h => h.key)
assert.ok(headerKeys.includes('Content-Security-Policy'))
assert.ok(headerKeys.includes('X-Frame-Options'))
assert.ok(headerKeys.includes('X-Content-Type-Options'))
assert.ok(headerKeys.includes('Strict-Transport-Security'))
assert.ok(headerKeys.includes('Permissions-Policy'))
console.log('  ✔ All essential HTTP security headers declared')

console.log('\n🎉 ALL BACKEND & SECURITY TESTS PASSED SUCCESSFULLY!\n')
