/**
 * Public canonical production origin.
 * Set NEXT_PUBLIC_SITE_URL in the deployment environment if deploying to a custom domain.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://imaginitylabs.io').replace(/\/+$/, '')

export const SITE_NAME = 'Imaginity Labs'
export const BRAND_SHORT_NAME = 'iLabs'
export const ALTERNATE_SITE_NAMES = [
  // Acronyms & Short forms
  'iLabs',
  'i Labs',
  'ilabs',
  'i lbas',
  'ilbas',
  'i-labs',
  'Imaginity',
  'Imaginity iLabs',
  'Imaginity Labs (iLabs)',

  // Technology & Compound variations
  'imaginitytechnology',
  'Imaginity Technology',
  'Imaginity Technologies',
  'Imaginity Tech',
  'Imaginity Software',
  'Imaginity Solutions',
  'Imaginity Studio',
  'Imaginity Studios',
  'Imaginity AI',
  'ilabs tech',
  'ilabs technology',
  'ilabs software',
  'ilabs ai',
  'ilabs studio',

  // Domain-based search queries
  'imaginity.com',
  'imaginity.in',
  'imaginity.io',
  'imaginitylabs.io',
  'imaginitylabs.com',
  'imaginitylabs.in',
  'ilabs.io',
  'ilabs.in',
  'ilabs.com',

  // Website queries
  'imaginity website',
  'imaginiti website',
  'imaginity web',
  'imaginity official website',
  'imaginiti webisite',

  // Misspellings, typos & phonetic variations
  'imaginii',
  'imaginiti',
  'imaginiti labs',
  'imaginiti technology',
  'imaginty',
  'imaginty labs',
  'imaginty.com',
  'imaginty.in',
  'imaginiity',
  'imaginityy',
  'imaginitty',
  'imaginety',
  'imaginaty',
]
export const ALTERNATE_SITE_NAME = 'iLabs'

/** Absolute URL for a site-relative path with guaranteed leading slash. */
export const absoluteUrl = (path = '/') => `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
