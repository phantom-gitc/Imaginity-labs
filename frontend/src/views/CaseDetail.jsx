'use client'

import { useRef } from 'react'
import { CASES } from '../data/work'
import { useReveal } from '../hooks/useReveal'
import { H, It, Section } from '../components/ui/Type'
import { Frame } from '../components/ui/Img'
import { Button, ArrowLink } from '../components/ui/Button'
import { CTAPanel } from '../components/ui/CTAPanel'
import { GradientBackdrop } from '../components/ui/GradientBackdrop'
import { ArrowLeft } from 'lucide-react'

export default function CaseDetail({ slug }) {
  const root = useRef(null)
  useReveal(root)

  const c = CASES.find((item) => item.slug === slug)
  if (!c) return null

  return (
    <div ref={root} className="relative isolate w-full pt-28">
      <GradientBackdrop variant="work" />
      {/* Back to Work */}
      <div className="wrap pt-6">
        <ArrowLink to="/work" className="inline-flex items-center gap-2 text-sm text-ink/60 hover:text-ink">
          <ArrowLeft size={16} /> Back to all projects
        </ArrowLink>
      </div>

      {/* 1. Hero with Full-bleed photograph */}
      <Section bg="light" className="pt-6 pb-16">
        <div className="flex flex-col gap-6 max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="tag">{c.category}</span>
            <span className="mono text-xs text-ink/40">COMPLETED {c.year}</span>
          </div>
          <H as="h1" size="xl">
            {c.title} — <It>{c.line}</It>
          </H>
        </div>

        <div className="mt-12">
          <Frame
            img={c.img}
            ratio="21/9"
            alt={c.title}
            eager
            radius={28}
            className="shadow-lg"
          />
        </div>
      </Section>

      {/* 2. Sticky Meta Sidebar + Case Breakdown */}
      <Section bg="light" tight>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Sticky Meta Sidebar */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-8 p-6 rounded-[24px] bg-[#F4EFE6]/60 border border-line">
            <div>
              <span className="mono text-xs text-ink/40">CLIENT</span>
              <p className="font-medium text-ink mt-1">{c.client}</p>
            </div>
            <div>
              <span className="mono text-xs text-ink/40">DISCIPLINES</span>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {c.role.map((r) => (
                  <span key={r} className="chip !text-xs !h-7 bg-white">
                    {r}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className="mono text-xs text-ink/40">CORE STACK</span>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {c.stack.map((s) => (
                  <span key={s} className="tag !text-[11px] !h-7">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-4 border-t border-line">
              <Button to="/contact" size="sm" className="w-full justify-center">
                Build something similar
              </Button>
            </div>
          </div>

          {/* Narrative content */}
          <div className="lg:col-span-8 space-y-16 lg:pl-6">
            {/* Results numbers */}
            <div>
              <span className="mono text-xs text-ink/40">KEY METRICS ACHIEVED</span>
              <div className="grid grid-cols-3 gap-6 mt-4 pt-4 border-t border-line">
                {c.results.map((res) => (
                  <div key={res.l}>
                    <div className="display text-3xl md:text-5xl text-ink font-bold">
                      {res.n}<span className="text-[#3B5BFF]">{res.s}</span>
                    </div>
                    <p className="text-xs font-mono uppercase text-ink/60 mt-1">{res.l}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="display text-3xl text-ink mb-4">The Challenge</h2>
              <p className="text-lg text-ink/80 leading-relaxed max-w-[55ch]">
                {c.challenge} As operations expanded, legacy manual procedures and brittle ad-hoc scripting created unpredictable friction and severe engineering bottlenecks.
              </p>
            </div>

            <div>
              <h2 className="display text-3xl text-ink mb-4">The Imaginity Solution</h2>
              <p className="text-lg text-ink/80 leading-relaxed max-w-[55ch]">
                {c.solution} We architected and delivered a unified, fault-tolerant infrastructure equipped with real-time feedback loops, comprehensive telemetry, and intuitive operator dashboards.
              </p>
            </div>

            {/* Gallery with parallax */}
            <div>
              <h2 className="display text-3xl text-ink mb-6">Gallery &amp; Interface Assets</h2>
              <div className="space-y-8">
                {c.gallery.map((gImg, idx) => (
                  <Frame
                    key={idx}
                    img={gImg}
                    ratio="16/10"
                    alt={`${c.title} interface asset ${idx + 1}`}
                    radius={24}
                    parallax={4}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. CTA */}
      <CTAPanel title={<>Discuss a project like <It>{c.title}</It></>} />
    </div>
  )
}

