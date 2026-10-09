import { CASES } from '../data/work'
import { ARTICLES } from '../data/articles'
import { absoluteUrl } from '../lib/site-url'

const STATIC_ROUTES = ['/', '/solutions', '/services', '/work', '/about', '/insights', '/careers', '/contact']

export default function sitemap() {
  return [
    ...STATIC_ROUTES.map((path) => ({ url: absoluteUrl(path), priority: path === '/' ? 1 : 0.8 })),
    ...CASES.map((c) => ({ url: absoluteUrl(`/work/${c.slug}`), priority: 0.6 })),
    ...ARTICLES.map((a) => ({ url: absoluteUrl(`/insights/${a.slug}`), priority: 0.6 })),
  ]
}
