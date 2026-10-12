'use client'

import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import { GradientBackdrop } from '../components/ui/GradientBackdrop'
import { Hero } from '../components/sections/Hero'
import { LogoMarquee, TickerBand } from '../components/sections/Marquees'
import { Statement } from '../components/sections/Statement'
import { StatsRow } from '../components/sections/StatsRow'
import { Capabilities } from '../components/sections/Capabilities'
import { ServicesScroller } from '../components/sections/ServicesScroller'
import { SelectedWork } from '../components/sections/SelectedWork'
import { WhatWeSolve } from '../components/sections/WhatWeSolve'
import { ProcessTimeline } from '../components/sections/ProcessTimeline'
import { TeamSection } from '../components/sections/TeamSection'
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

      {/* 2. Logo Marquee */}
      <LogoMarquee />

      {/* 3. Belief statement with pastel pill chips & scroll-fade words */}
      <Statement />

      {/* 4. Giant stat numbers */}
      <StatsRow />

      {/* 5. Capabilities: 6 pastel tiles with hover expand */}
      <Capabilities />

      {/* Mid-page ticker band */}
      <TickerBand />

      {/* 6. Services horizontal scroll (Maxflow style) */}
      <ServicesScroller />

      {/* 7. Selected Work on the warm beige band */}
      <SelectedWork />

      {/* 7.5 What We Solve: problem-solution matrix & technology ecosystem */}
      <WhatWeSolve />

      {/* 8. Process: dark section with interactive dotted timeline */}
      <ProcessTimeline />

      {/* 9. Creative minds team portraits */}
      <TeamSection />

      {/* 11. Insights 3 blog cards */}
      <InsightsPreview />

      {/* 12. FAQ Accordion */}
      <FAQSection />

      {/* 13. Final CTA panel */}
      <CTAPanel />
    </div>
  )
}

