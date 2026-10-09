import { SEO } from '../data/site'

/** Build per-route metadata: unique title/description, canonical (query strings are never canonical), Open Graph. */
export function buildMetadata({ path, title, description, image = '/img/hero.webp', type = 'website' }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type, url: path, title, description, images: [{ url: image }] },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  }
}

/** Metadata for a static route using the existing SEO copy in data/site.js. */
export function staticRouteMetadata(path) {
  const [title, description] = SEO[path]
  return buildMetadata({ path, title, description })
}
