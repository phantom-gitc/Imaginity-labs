import { notFound } from 'next/navigation'
import Article from '../../../views/Article'
import { ARTICLES } from '../../../data/articles'
import { buildMetadata } from '../../../lib/seo'
import { BreadcrumbJsonLd, ArticleJsonLd } from '../../../components/seo/JsonLd'
import { SITE_NAME } from '../../../lib/site-url'

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
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Insights', url: '/insights' },
          { name: a.title, url: `/insights/${a.slug}` },
        ]}
      />
      <ArticleJsonLd a={a} />
      <Article slug={slug} />
    </>
  )
}
