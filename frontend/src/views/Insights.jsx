'use client'

import { useState, useRef } from 'react'
import { ARTICLES, INSIGHTS_CATEGORIES } from '../data/articles'
import { BlogCard } from '../components/ui/Cards'
import { Eyebrow, H, It, Section } from '../components/ui/Type'
import { Frame } from '../components/ui/Img'
import { ArrowLink } from '../components/ui/Button'
import { CTAPanel } from '../components/ui/CTAPanel'
import { useReveal } from '../hooks/useReveal'
import { GradientBackdrop } from '../components/ui/GradientBackdrop'

export default function Insights() {
  const [activeCat, setActiveCat] = useState('All')
  const root = useRef(null)
  useReveal(root)

  const featured = ARTICLES.find((a) => a.isFeatured) || ARTICLES[0]
  const list = ARTICLES.filter((a) => a.slug !== featured.slug)
  const filtered = activeCat === 'All'
    ? list
    : list.filter((a) => a.category.toLowerCase().includes(activeCat.toLowerCase()))

  return (
    <div ref={root} className="relative isolate w-full pt-28">
      <GradientBackdrop variant="insights" />
      {/* 1. Header */}
      <Section bg="light" className="pt-8 pb-12">
        <div className="max-w-3xl">
          <Eyebrow intro dot="#3B5BFF">Studio Publications</Eyebrow>
          <H as="h1" intro size="xl" className="mt-4">
            Notes from the <It>engineering floor.</It>
          </H>
          <p className="lede mt-6 text-lg">
            Notes on software design, AI in production, and systems that hold up under load.
          </p>
        </div>
      </Section>

      {/* 2. Featured Post */}
      <Section bg="light" tight>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 md:p-12 rounded-[28px] bg-[#E9E4FF]/40 border border-line">
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <span className="tag mb-4">{featured.category} &middot; FEATURED</span>
              <h2 className="display text-3xl md:text-5xl text-ink font-semibold leading-[1.08] mb-4">
                {featured.title}
              </h2>
              <p className="text-base text-ink/70 leading-relaxed mb-6 max-w-[42ch]">
                {featured.summary}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="mono text-xs text-ink/40">{featured.readTime}</span>
              <ArrowLink to={`/insights/${featured.slug}`}>Read article</ArrowLink>
            </div>
          </div>

          <div className="lg:col-span-6">
            <Frame
              img={featured.cover}
              ratio="16/10"
              alt={featured.title}
              eager={true}
              radius={24}
              className="shadow-md"
            />
          </div>
        </div>
      </Section>

      {/* 3. Category Filter + Grid */}
      <Section bg="light">
        <div className="flex flex-wrap gap-2 mb-12">
          {INSIGHTS_CATEGORIES.map((cat) => (
            <button
              key={cat}
              suppressHydrationWarning
              onClick={() => setActiveCat(cat)}
              className={`chip ${activeCat === cat ? 'on' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div data-reveal="stagger" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map((article) => (
            <BlogCard key={article.slug} a={article} ratio="4/5" />
          ))}
        </div>
      </Section>

      {/* 4. CTA */}
      <CTAPanel title={<>Looking for an engineering <It>partner?</It></>} />
    </div>
  )
}

