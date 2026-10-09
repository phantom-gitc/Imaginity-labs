'use client'

import { useRef } from 'react'
import { ARTICLES } from '../data/articles'
import { useReveal } from '../hooks/useReveal'
import { H, It, Section } from '../components/ui/Type'
import { Frame } from '../components/ui/Img'
import { ArrowLink } from '../components/ui/Button'
import { CTAPanel } from '../components/ui/CTAPanel'
import { GradientBackdrop } from '../components/ui/GradientBackdrop'
import { ArrowLeft } from 'lucide-react'

export default function Article({ slug }) {
  const root = useRef(null)
  useReveal(root)

  const a = ARTICLES.find((item) => item.slug === slug)
  if (!a) return null

  return (
    <div ref={root} className="relative isolate w-full pt-28">
      <GradientBackdrop variant="insights" />
      <div className="wrap pt-6">
        <ArrowLink to="/insights" className="inline-flex items-center gap-2 text-sm text-ink/60 hover:text-ink">
          <ArrowLeft size={16} /> Back to insights
        </ArrowLink>
      </div>

      <Section bg="light" className="pt-6 pb-12">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag">{a.category}</span>
            <span className="mono text-xs text-ink/40">{a.publishedDate} &middot; {a.readTime}</span>
          </div>
          <H as="h1" size="xl">
            {a.title}
          </H>
          <p className="lede mt-6 text-xl leading-relaxed text-ink/75 max-w-[45ch]">
            {a.subtitle || a.summary}
          </p>
        </div>

        <div className="mt-12">
          <Frame
            img={a.cover}
            ratio="21/9"
            alt={a.title}
            eager
            radius={28}
            className="shadow-lg"
          />
        </div>
      </Section>

      {/* Body Content */}
      <Section bg="light" tight>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          {/* Author info */}
          <div className="lg:col-span-4 p-6 rounded-[22px] bg-[#FAFAFB] border border-line">
            <span className="mono text-xs text-ink/40">WRITTEN BY</span>
            <h4 className="font-semibold text-ink text-base mt-2">{a.author || 'Imaginity Labs Engineering'}</h4>
            <p className="text-xs text-ink/60 mt-1">{a.authorRole || 'Studio Core Team'}</p>
            <p className="text-xs text-ink/75 mt-3 leading-relaxed">{a.authorBio || 'We design and build production-ready digital products.'}</p>
          </div>

          {/* Article sections */}
          <div className="lg:col-span-8 space-y-10">
            {a.introQuote && (
              <blockquote className="display text-2xl text-ink/90 border-l-2 border-[#3B5BFF] pl-6 py-2 italic">
                &ldquo;{a.introQuote}&rdquo;
              </blockquote>
            )}

            {a.sections && a.sections.length > 0 ? (
              a.sections.map((sec) => (
                <div key={sec.num || sec.title} className="space-y-3">
                  <div className="flex items-center gap-2">
                    {sec.num && <span className="mono text-xs text-[#3B5BFF] font-semibold">{sec.num}</span>}
                    <h3 className="display text-2xl text-ink font-semibold">{sec.title}</h3>
                  </div>
                  <p className="text-base text-ink/80 leading-relaxed">
                    {sec.content}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-base text-ink/80 leading-relaxed">
                {a.detailedSummary || a.summary}
              </p>
            )}
          </div>
        </div>
      </Section>

      <CTAPanel title={<>Discuss these patterns with our <It>engineers.</It></>} />
    </div>
  )
}

