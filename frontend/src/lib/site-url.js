/**
 * Public canonical production origin.
 * Set NEXT_PUBLIC_SITE_URL in the deployment environment if deploying to a custom domain.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}` : null) ||
  (process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : null) ||
  'https://surenext.studio'
).replace(/\/+$/, '')

export const SITE_NAME = 'SureNext'
export const BRAND_SHORT_NAME = 'SureNext'
export const ALTERNATE_SITE_NAMES = [
  'SureNext',
  'Sure Next',
  'surenext',
  'SureNext Studio',
  'SureNext Digital',
  'SureNext Software',
  'SureNext Technology',
  'SureNext Technologies',
  'SureNext Product Studio',
  'surenext.studio',
  'surenext.com',
  'surenext.in',
  'surenext.io',
  'SureNext Bhubaneswar',
]
export const ALTERNATE_SITE_NAME = 'SureNext Digital Studio'

/** Absolute URL for a site-relative path with guaranteed leading slash. */
export const absoluteUrl = (path = '/') => `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
