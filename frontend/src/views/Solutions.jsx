'use client'

import { useRef } from 'react'
import { SOLUTIONS, INDUSTRIES, GOALS, PRINCIPLES } from '../data/services'
import { A } from '../data/site'
import { useReveal } from '../hooks/useReveal'
import { Eyebrow, H, It, Section, SectionHeader } from '../components/ui/Type'
import { Frame, Obj } from '../components/ui/Img'
import { Button } from '../components/ui/Button'
import { Tabs } from '../components/ui/Accordion'
import { CTAPanel } from '../components/ui/CTAPanel'
import { ProcessTimeline } from '../components/sections/ProcessTimeline'
import { GradientBackdrop } from '../components/ui/GradientBackdrop'

export default function Solutions() {
  const root = useRef(null)
  useReveal(root)

  return (
    <div ref={root} className="relative isolate w-full pt-28">
      <GradientBackdrop variant="solutions" />
      {/* 1. Hero */}
      <Section bg="light" className="pt-8 pb-16">
        <div className="max-w-3xl">
          <Eyebrow intro dot="#3B5BFF">Solutions Architecture</Eyebrow>
          <H as="h1" intro size="xl" className="mt-4">
            Engineered for measurable <It>business outcomes.</It>
          </H>
          <p className="lede mt-6 text-lg">
            Eight interconnected software paradigms tailored for category leaders, venture-backed scaleups, and visionary enterprises.
          </p>
        </div>
      </Section>

      {/* 2. 8 Category Tiles Overview */}
      <Section bg="light" tight>
        <div data-reveal="stagger" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOLUTIONS.map((s, idx) => (
            <div
              key={s.id}
              className={`tinted tint-${s.tint} card p-6 rounded-[24px] flex flex-col justify-between min-h-[260px] relative overflow-hidden group`}
            >
              <div className="flex items-center justify-between z-10">
                <span className="ico-sq"><s.icon /></span>
                <span className="mono text-ink/40">0{idx + 1}</span>
              </div>
              <div className="z-10 mt-6">
                <h3 className="display h-sm text-ink">{s.t}</h3>
                <p className="text-xs text-ink/70 mt-1.5">{s.line}</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-1 z-10">
                {s.chips.slice(0, 2).map((chip) => (
                  <span key={chip} className="text-[10px] font-mono uppercase bg-white/60 px-2 py-0.5 rounded-full">
                    {chip}
                  </span>
                ))}
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 opacity-80 group-hover:scale-110 transition-transform duration-500">
                <Obj img={A.obj[s.obj]} className="w-full h-full object-contain" />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 3. Alternating Split Rows (Drop.Studio style: text left, image right) */}
      <Section bg="light">
        <SectionHeader
          eyebrow="Deep Dive"
          dot="#7B61FF"
          title={<>Focus areas built to <It>scale.</It></>}
          line="Explore our flagship technical solutions with architectural clarity."
        />

        <div className="mt-16 space-y-24">
          {SOLUTIONS.slice(0, 4).map((s, idx) => {
            const isReversed = idx % 2 === 1
            return (
              <div
                key={s.id}
                data-reveal="up"
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : ''}`}>
                  <span className="tag mb-4">{s.t}</span>
                  <h3 className="display h-md text-ink mb-4">{s.line}</h3>
                  <p className="text-ink/70 text-base leading-relaxed mb-6">
                    We eliminate operational bottlenecks through deliberate software craftsmanship, hardened APIs, and production-ready machine learning.
                  </p>

                  <div className="space-y-3 mb-8">
                    {s.outcomes.map((out) => (
                      <div key={out} className="flex items-center gap-3">
                        <span className="size-2 rounded-full bg-[#3B5BFF]" />
                        <span className="text-sm font-medium text-ink/80">{out}</span>
                      </div>
                    ))}
                  </div>

                  <Button to="/contact" size="sm">Design this solution</Button>
                </div>

                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-1' : ''}`}>
                  <Frame
                    img={s.img}
                    ratio="16/10"
                    alt={s.t}
                    eager={idx === 0}
                    grade
                    radius={28}
                    className="shadow-md"
                  />
                </div>
              </div>
            )
          })}
        </div>
      </Section>

      {/* 4. Industries as Pastel Tiles */}
      <Section bg="warm">
        <SectionHeader
          eyebrow="Sector Expertise"
          dot="#FFD93D"
          title={<>Proven across <It>industries.</It></>}
          line="Tailored architecture respecting regulatory rigor and high throughput."
        />

        <div data-reveal="stagger" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.t}
              className={`tinted tint-${ind.tint} p-6 rounded-[22px] flex flex-col justify-between min-h-[180px] shadow-sm`}
            >
              <div className="flex items-center justify-between">
                <span className="ico-sq"><ind.icon /></span>
                <span className="mono text-[10px] text-ink/50">SECTOR</span>
              </div>
              <div>
                <h4 className="display text-xl text-ink font-semibold">{ind.t}</h4>
                <p className="text-xs text-ink/70 mt-1">{ind.d}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. Tabbed Goals in Dark Section ("what are you trying to achieve") */}
      <Section bg="dark" className="dark-ui !bg-[#0A0A12] text-white border-y border-white/[0.08]">
        <div className="mb-12">
          <Eyebrow dot="#FFD93D" className="!text-white/60">Strategic Alignment</Eyebrow>
          <H size="lg" className="mt-4">
            What are you trying to <It>achieve?</It>
          </H>
        </div>

        <Tabs tabs={GOALS.map((g) => g.tab)} className="mt-8">
          {(active) => {
            const goal = GOALS[active]
            return (
              <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-6">
                  <div className="inline-flex p-3 rounded-2xl bg-white/10 text-[#FFD93D] mb-6">
                    <goal.icon className="size-8" />
                  </div>
                  <h3 className="display h-md text-white mb-6">{goal.t}</h3>
                  <ul className="space-y-4 mb-8">
                    {goal.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-3 text-base text-white/80">
                        <span className="size-2 rounded-full bg-[#3B5BFF]" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                  <Button to="/contact" variant="yellow">Schedule a consult</Button>
                </div>

                <div className="lg:col-span-6">
                  <Frame
                    img={goal.img}
                    ratio="16/10"
                    alt={goal.t}
                    radius={24}
                    className="border border-white/10 shadow-2xl"
                  />
                </div>
              </div>
            )
          }}
        </Tabs>
      </Section>

      {/* 6. Principles Bento */}
      <Section bg="light">
        <SectionHeader
          eyebrow="Our Principles"
          dot="#C45CB0"
          title={<>Standards that ensure <It>quality.</It></>}
          line="How we maintain engineering rigour without compromising speed."
        />

        <div data-reveal="stagger" className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {PRINCIPLES.map((pr) => (
            <div
              key={pr.t}
              className={`tinted tint-${pr.tint} ${pr.span} p-8 rounded-[24px] flex flex-col justify-between min-h-[220px] shadow-sm`}
            >
              <div className="flex items-center justify-between">
                <span className="ico-sq"><pr.icon /></span>
                <span className="tag">STANDARD</span>
              </div>
              <div className="mt-8">
                <h4 className="display text-2xl text-ink mb-2">{pr.t}</h4>
                <p className="text-sm text-ink/70 max-w-[36ch] leading-relaxed">{pr.d}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 7. Process Timeline */}
      <ProcessTimeline />

      {/* 8. Final CTA */}
      <CTAPanel title={<>Ready to architect your <It>system?</It></>} />
    </div>
  )
}

