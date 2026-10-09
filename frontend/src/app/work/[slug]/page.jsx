import { notFound } from 'next/navigation'
import CaseDetail from '../../../views/CaseDetail'
import { CASES } from '../../../data/work'
import { buildMetadata } from '../../../lib/seo'

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
    title: `${c.title}: ${c.line} | Imaginity Labs`,
    description: `${c.challenge} ${c.solution}`,
    image: c.img.src,
  })
}

export default async function Page({ params }) {
  const { slug } = await params
  if (!CASES.some((item) => item.slug === slug)) notFound()
  return <CaseDetail slug={slug} />
}
