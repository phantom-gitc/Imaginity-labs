/**
 * Public canonical production origin.
 * Set NEXT_PUBLIC_SITE_URL in the deployment environment if deploying to a custom domain.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://imaginitylabs.io').replace(/\/+$/, '')

export const SITE_NAME = 'Imaginity Labs'
export const ALTERNATE_SITE_NAME = 'Imaginity'

/** Absolute URL for a site-relative path with guaranteed leading slash. */
export const absoluteUrl = (path = '/') => `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
