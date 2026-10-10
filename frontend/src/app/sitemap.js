import { CASES } from '../data/work'
import { ARTICLES } from '../data/articles'
import { absoluteUrl } from '../lib/site-url'

const STATIC_ROUTES = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/solutions', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/work', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/insights', priority: 0.85, changeFrequency: 'daily' },
  { path: '/careers', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },
]

export default function sitemap() {
  const now = new Date().toISOString()

  return [
    ...STATIC_ROUTES.map(({ path, priority, changeFrequency }) => ({
      url: absoluteUrl(path),
      lastModified: now,
      changeFrequency,
      priority,
    })),
    ...CASES.map((c) => ({
      url: absoluteUrl(`/work/${c.slug}`),
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
    ...ARTICLES.map((a) => ({
      url: absoluteUrl(`/insights/${a.slug}`),
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
  ]
}
