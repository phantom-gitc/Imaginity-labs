import { notFound } from 'next/navigation'
import CaseDetail from '../../../views/CaseDetail'
import { CASES } from '../../../data/work'
import { buildMetadata } from '../../../lib/seo'
import { BreadcrumbJsonLd, CaseStudyJsonLd } from '../../../components/seo/JsonLd'
import { SITE_NAME } from '../../../lib/site-url'

export const dynamicParams = false

export function generateStaticParams() {
  return CASES.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const c = CASES.find((item) => item.slug === slug)
  if (!c) return {}
  return buildMetadata({
    path: `/work/${c.slug}`,
    title: `${c.title}: ${c.line} | ${SITE_NAME}`,
    description: `${c.challenge} ${c.solution}`,
    image: c.img.src,
  })
}

export default async function Page({ params }) {
  const { slug } = await params
  const c = CASES.find((item) => item.slug === slug)
  if (!c) notFound()

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Work', url: '/work' },
          { name: c.title, url: `/work/${c.slug}` },
        ]}
      />
      <CaseStudyJsonLd c={c} />
      <CaseDetail slug={slug} />
    </>
  )
}
