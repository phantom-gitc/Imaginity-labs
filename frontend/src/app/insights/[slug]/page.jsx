import { notFound } from 'next/navigation'
import Article from '../../../views/Article'
import { ARTICLES } from '../../../data/articles'
import { buildMetadata } from '../../../lib/seo'
import { JsonLd } from '../../../components/seo/JsonLd'
import { absoluteUrl, SITE_NAME } from '../../../lib/site-url'

export const dynamicParams = false

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const a = ARTICLES.find((item) => item.slug === slug)
  if (!a) return {}
  return buildMetadata({
    path: `/insights/${a.slug}`,
    title: `${a.title} | ${SITE_NAME}`,
    description: a.summary,
    image: a.cover.src,
    type: 'article',
  })
}

export default async function Page({ params }) {
  const { slug } = await params
  const a = ARTICLES.find((item) => item.slug === slug)
  if (!a) notFound()
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: a.title,
          description: a.summary,
          author: { '@type': 'Organization', name: a.author },
          publisher: { '@type': 'Organization', name: SITE_NAME },
          image: absoluteUrl(a.cover.src),
          mainEntityOfPage: absoluteUrl(`/insights/${a.slug}`),
        }}
      />
      <Article slug={slug} />
    </>
  )
}
