import { useState, useRef } from 'react'
import { CASES, CASE_FILTERS } from '../data/work'
import { WorkCard } from '../components/ui/Cards'
import { Eyebrow, H, It, Section } from '../components/ui/Type'
import { CTAPanel } from '../components/ui/CTAPanel'
import { useReveal } from '../hooks/useReveal'
import { GradientBackdrop } from '../components/ui/GradientBackdrop'

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('All')
  const root = useRef(null)
  useReveal(root)

  const filtered = activeFilter === 'All'
    ? CASES
    : CASES.filter((c) => c.category === activeFilter)

  return (
    <div ref={root} className="relative isolate w-full pt-28">
      <GradientBackdrop variant="work" />
      {/* 1. Hero */}
      <Section bg="light" className="pt-8 pb-12">
        <div className="max-w-3xl">
          <Eyebrow dot="#FFD93D">Portfolio</Eyebrow>
          <H as="h1" size="xl" className="mt-4">
            Products shipped, metrics <It>measured.</It>
          </H>
          <p className="lede mt-6 text-lg">
            A curated gallery of recent work engineered for velocity, scale, and uncompromising craft.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mt-12">
          {CASE_FILTERS.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`chip ${activeFilter === cat ? 'on' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </Section>

      {/* 2. Work Grid */}
      <Section bg="warm" className="!bg-[#F4EFE6] pt-12 pb-24">
        <div data-reveal="stagger" className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {filtered.map((c, i) => (
            <WorkCard key={c.slug} c={c} index={i} ratio="16/10" />
          ))}
        </div>
      </Section>

      {/* 3. CTA */}
      <CTAPanel title={<>Have a product in mind? Let&apos;s <It>build it.</It></>} />
    </div>
  )
}

