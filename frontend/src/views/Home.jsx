'use client'

import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import { GradientBackdrop } from '../components/ui/GradientBackdrop'
import { Hero } from '../components/sections/Hero'
import { TickerBand } from '../components/sections/Marquees'
import { Statement } from '../components/sections/Statement'
import { StatsRow } from '../components/sections/StatsRow'
import { Capabilities } from '../components/sections/Capabilities'
import { ServicesScroller } from '../components/sections/ServicesScroller'
import { SelectedWork } from '../components/sections/SelectedWork'
import { WhatWeSolve } from '../components/sections/WhatWeSolve'
import { ProcessTimeline } from '../components/sections/ProcessTimeline'
import { InsightsPreview } from '../components/sections/InsightsPreview'
import { FAQSection } from '../components/sections/FAQSection'
import { CTAPanel } from '../components/ui/CTAPanel'

export default function Home() {
  const containerRef = useRef(null)
  useReveal(containerRef)

  return (
    <div ref={containerRef} className="relative isolate w-full">
      <GradientBackdrop variant="home" />
      {/* 1. Hero */}
      <Hero />

      {/* 2. Belief statement with pastel pill chips & scroll-fade words */}
      <Statement />

      {/* 3. Giant stat numbers */}
      <StatsRow />

      {/* 4. Capabilities: 6 pastel tiles with hover expand */}
      <Capabilities />

      {/* Mid-page ticker band */}
      <TickerBand />

      {/* 5. Services horizontal scroll */}
      <ServicesScroller />

      {/* 6. Selected Work on the warm beige band */}
      <SelectedWork />

      {/* 7. What We Solve: problem-solution matrix & technology ecosystem */}
      <WhatWeSolve />

      {/* 8. Process: dark section with interactive dotted timeline */}
      <ProcessTimeline />

      {/* 9. Insights 3 blog cards */}
      <InsightsPreview />

      {/* 10. FAQ Accordion */}
      <FAQSection />

      {/* 11. Final CTA panel */}
      <CTAPanel />
    </div>
  )
}
