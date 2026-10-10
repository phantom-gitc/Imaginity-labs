import { z } from 'zod'

export const ContactSubmissionSchema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must not exceed 100 characters'),
  email: z
    .string({ required_error: 'Email is required' })
    .trim()
    .email('Please provide a valid work email address')
    .max(120, 'Email must not exceed 120 characters'),
  service: z
    .string()
    .trim()
    .max(120, 'Primary interest must not exceed 120 characters')
    .optional()
    .default(''),
  scope: z
    .string()
    .trim()
    .max(120, 'Target scope must not exceed 120 characters')
    .optional()
    .default(''),
  message: z
    .string({ required_error: 'Project brief is required' })
    .trim()
    .min(10, 'Project brief must be at least 10 characters')
    .max(3000, 'Project brief must not exceed 3000 characters'),
  // Honeypot field (must be completely empty)
  website: z
    .string()
    .max(0, 'Automated submission detected')
    .optional()
    .default(''),
  // Submission timestamp for bot timing detection (in milliseconds)
  _timestamp: z
    .number()
    .optional()
    .refine((ts) => {
      if (!ts) return true
      const elapsed = Date.now() - ts
      // Reject if filled in under 1.2 seconds (typical automated headless bot behavior)
      return elapsed >= 1200
    }, { message: 'Submission was submitted too rapidly' }),
})
