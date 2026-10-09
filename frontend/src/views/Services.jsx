'use client'

import { useEffect, useRef } from 'react'
import { SERVICES } from '../data/services'
import { PRICING, FAQ } from '../data/site'
import { useReveal } from '../hooks/useReveal'
import { gsap } from '../lib/gsap'
import { Eyebrow, H, It, Section, SectionHeader } from '../components/ui/Type'
import { Frame } from '../components/ui/Img'
import { Button } from '../components/ui/Button'
import { Accordion } from '../components/ui/Accordion'
import { CTAPanel } from '../components/ui/CTAPanel'
import { GradientBackdrop } from '../components/ui/GradientBackdrop'
import { Check } from 'lucide-react'

export default function Services() {
  const root = useRef(null)
  const cardsRef = useRef([])
  const stackRef = useRef(null)
  useReveal(root)

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean)
    if (cards.length <= 1) return undefined

    const mm = gsap.matchMedia()
    const ROTATIONS = [-1.8, 1.5, -1.2, 1.8, -1.0, 0]

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const isMobile = window.innerWidth < 768
      const rotMultiplier = isMobile ? 0.45 : 1

      cards.forEach((card, idx) => {
        if (idx === cards.length - 1) return

        const nextCard = cards[idx + 1]
        const targetRot = (ROTATIONS[idx] || 0) * rotMultiplier

        gsap.to(card, {
          scale: isMobile ? 0.96 : 0.94,
          rotation: targetRot,
          y: isMobile ? -6 : -10,
          filter: 'brightness(0.96)',
          transformOrigin: '50% 12%',
          ease: 'none',
          scrollTrigger: {
            trigger: nextCard,
            start: isMobile ? 'top 90%' : 'top 82%',
            end: isMobile ? 'top 22%' : 'top 18%',
            scrub: true,
            invalidateOnRefresh: true,
          },
        })
      })
    })

    return () => mm.revert()
  }, [])

  return (
    <div ref={root} className="relative isolate w-full pt-28">
      <GradientBackdrop variant="services" />
      {/* 1. Services Hero */}
      <Section bg="light" className="pt-8 pb-16">
        <div className="max-w-3xl">
          <Eyebrow dot="#7B61FF">Studio Services</Eyebrow>
          <H as="h1" size="xl" className="mt-4">
            Direct collaboration with senior <It>craftspeople.</It>
          </H>
          <p className="lede mt-6 text-lg">
            We partner with ambitious teams to conceive, design, code, and deploy resilient digital flagships.
          </p>
        </div>
      </Section>

      {/* 2. Pinned Stacking & Rotating Cards Section */}
      <Section bg="light" tight className="overflow-x-clip">
        <div ref={stackRef} className="relative pb-16 md:pb-24">
          {SERVICES.map((s, idx) => (
            <div
              key={s.id}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="sticky top-24 md:top-28 rounded-[28px] md:rounded-[36px] bg-white border border-line/90 p-6 sm:p-8 lg:p-10 shadow-[0_18px_45px_-15px_rgba(15,15,40,0.08)] mb-8 md:mb-12 will-change-transform transition-shadow duration-500 hover:shadow-[0_24px_55px_-15px_rgba(15,15,40,0.12)]"
              style={{
                zIndex: idx + 1,
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-1 mono text-ink/30 text-sm">
                  0{idx + 1}
                </div>

                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    <h2 className="display text-3xl md:text-4xl text-ink font-semibold mb-3">
                      {s.t}
                    </h2>
                    <p className="text-base text-ink/70 max-w-[42ch] leading-relaxed mb-6">
                      {s.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {s.chips.map((chip) => (
                      <span key={chip} className="chip">
                        {chip}
                      </span>
                    ))}
                  </div>

                  <div>
                    <Button to="/contact" size="sm" variant="outline">
                      Inquire for {s.t}
                    </Button>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <Frame
                    img={s.preview}
                    ratio="16/10"
                    alt={s.t}
                    radius={24}
                    className="shadow-sm"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 3. Pricing / Engagement Cards */}
      <Section bg="warm">
        <SectionHeader
          eyebrow="Engagement Models"
          dot="#FFD93D"
          title={<>Predictable terms, <It>no surprises.</It></>}
          line="Flexible structures designed for rapid sprints or dedicated engineering squads."
        />

        <div data-reveal="stagger" className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {PRICING.map((plan) => (
            <div
              key={plan.id}
              className={`tinted tint-${plan.tint} p-8 rounded-[26px] flex flex-col justify-between shadow-sm relative ${
                plan.featured ? 'ring-2 ring-[#3B5BFF]' : ''
              }`}
            >
              {plan.featured && (
                <span className="sticker rot-b absolute -top-3 right-6 bg-[#3B5BFF] text-white">
                  RECOMMENDED
                </span>
              )}

              <div>
                <span className="tag mb-4">{plan.name}</span>
                <div className="display text-3xl md:text-4xl text-ink mt-2 font-bold">
                  {plan.price}
                </div>
                <p className="text-sm text-ink/70 mt-2 mb-8">{plan.line}</p>

                <div className="space-y-3 pt-4 border-t border-black/10">
                  {plan.includes.map((inc) => (
                    <div key={inc} className="flex items-center gap-3 text-sm text-ink/80">
                      <span className="size-4 rounded-full bg-white flex items-center justify-center text-[#3B5BFF]">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <Button
                  to="/contact"
                  variant={plan.featured ? 'primary' : 'outline'}
                  className="w-full justify-center"
                >
                  Get started
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. FAQ */}
      <Section bg="light">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <Eyebrow dot="#3B5BFF">Clarity First</Eyebrow>
            <H size="lg" className="mt-4">
              Engagement <It>details.</It>
            </H>
            <p className="lede mt-6">
              Everything you need to know about code ownership, sprints, and security compliance.
            </p>
          </div>

          <div className="lg:col-span-7">
            <Accordion items={FAQ} />
          </div>
        </div>
      </Section>

      {/* 5. CTA */}
      <CTAPanel title={<>Let&apos;s assemble your <It>squad.</It></>} />
    </div>
  )
}

