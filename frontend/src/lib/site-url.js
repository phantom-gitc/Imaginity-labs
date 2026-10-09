/** Public production origin. Set NEXT_PUBLIC_SITE_URL in the deployment environment. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/+$/, '')

export const SITE_NAME = 'Imaginity Labs'

/** Absolute URL for a site-relative path. */
export const absoluteUrl = (path = '/') => `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
