import { SEO } from '../data/site'
import { absoluteUrl, SITE_NAME } from './site-url'

/**
 * Build production-ready per-route metadata for Next.js App Router:
 * - Unique, descriptive page title & meta description
 * - Absolute canonical HTTPS URL
 * - Complete Open Graph (type, siteName, locale, image with dimensions)
 * - Twitter Card specifications
 * - Strict Googlebot / search engine crawl directives
 */
export function buildMetadata({
  path,
  title,
  description,
  image = '/img/hero.webp',
  type = 'website',
}) {
  const canonicalUrl = absoluteUrl(path)
  const imageUrl = image.startsWith('http') ? image : absoluteUrl(image)

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type,
      url: canonicalUrl,
      title,
      description,
      siteName: SITE_NAME,
      locale: 'en_US',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} — ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
      creator: '@imaginitylabs',
      site: '@imaginitylabs',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

/** Metadata for a static route using the verified brand SEO copy in data/site.js. */
export function staticRouteMetadata(path) {
  const [title, description] = SEO[path] || [
    'Imaginity Labs | Software Development & AI Solutions',
    'Software, agentic AI, and automation studio for teams that ship.',
  ]
  return buildMetadata({ path, title, description })
}
