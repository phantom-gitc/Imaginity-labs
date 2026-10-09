'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
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
        <div className="flex flex-wrap gap-2 mt-12 relative">
          {CASE_FILTERS.map((cat) => {
            const active = activeFilter === cat
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`chip relative cursor-pointer ${active ? 'on text-white' : ''}`}
              >
                <span className="relative z-10">{cat}</span>
                {active && (
                  <motion.div
                    layoutId="activeFilterPill"
                    transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-ink -z-0"
                  />
                )}
              </button>
            )
          })}
        </div>
      </Section>

      {/* 2. Work Grid */}
      <Section bg="warm" className="pt-12 pb-24">
        <div data-reveal="stagger" className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {filtered.map((c, i) => (
            <motion.div
              layout
              key={c.slug}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <WorkCard c={c} index={i} ratio="16/10" />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 3. CTA */}
      <CTAPanel title={<>Have a product in mind? Let&apos;s <It>build it.</It></>} />
    </div>
  )
}

