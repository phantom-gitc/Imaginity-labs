import { z } from 'zod'

export const NewsletterSubscriptionSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .trim()
    .email('Please provide a valid email address')
    .max(120, 'Email must not exceed 120 characters'),
  // Honeypot field (hidden from real users)
  hp: z
    .string()
    .max(0, 'Spam detected')
    .optional()
    .default(''),
})
