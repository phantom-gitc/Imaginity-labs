import { useState, useRef, useEffect } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { CAPABILITIES } from '../../data/services'
import { A } from '../../data/site'
import { Obj } from '../ui/Img'
import { TLink } from '../ui/TLink'
import { It, Section, SectionHeader } from '../ui/Type'
import { gsap } from '../../lib/gsap'

/** Pastel capability tiles with buttery-smooth accordion expansion and decrease. */
export function Capabilities() {
  const [hoveredIdx, setHoveredIdx] = useState(null)
  const cardsRef = useRef([])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleResize = () => {
      if (window.innerWidth < 1024) {
        cardsRef.current.forEach((card) => {
          if (card) gsap.set(card, { clearProps: 'flexGrow' })
        })
      }
    }
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth < 1024) return

    cardsRef.current.forEach((card, i) => {
      if (!card) return
      const isHovered = hoveredIdx === i
      const isAnyHovered = hoveredIdx !== null

      // Award-winning smooth flex accordion interpolation
      const targetFlex = isHovered ? 2.8 : isAnyHovered ? 0.72 : 1

      gsap.to(card, {
        flexGrow: targetFlex,
        duration: 0.95,
        ease: 'power2.out',
        overwrite: 'auto',
      })

      // 3D floating object fluid momentum
      const objEl = card.querySelector('[data-card-obj]')
      if (objEl) {
        gsap.to(objEl, {
          scale: isHovered ? 1.14 : 1,
          rotation: isHovered ? -5 : 0,
          y: isHovered ? -6 : 0,
          duration: 0.95,
          ease: 'power2.out',
          overwrite: 'auto',
        })
      }
    })
  }, [hoveredIdx])

  return (
    <Section bg="light">
      <SectionHeader
        eyebrow="Capabilities"
        dot="#7B61FF"
        title={<>Six crafts, <It>one team</It></>}
        line="Pick one, or combine them in a single squad."
        cta={{ label: 'Explore solutions', to: '/solutions' }}
      />
      <div
        data-reveal="stagger"
        onMouseLeave={() => setHoveredIdx(null)}
        className="mt-12 flex flex-col gap-3 md:mt-16 lg:h-[480px] lg:flex-row"
      >
        {CAPABILITIES.map((c, i) => {
          const isHovered = hoveredIdx === i
          return (
            <TLink
              key={c.t}
              ref={(el) => (cardsRef.current[i] = el)}
              to="/solutions"
              onMouseEnter={() => setHoveredIdx(i)}
              onFocus={() => setHoveredIdx(i)}
              onBlur={() => setHoveredIdx(null)}
              style={{ flexBasis: '0%', flexShrink: 1, flexGrow: 1 }}
              className={`group tinted tint-${c.tint} card relative flex min-h-[200px] flex-col justify-between overflow-hidden p-5 md:p-6 lg:min-h-0 will-change-[flex-grow] cursor-pointer ${
                isHovered ? 'is-active shadow-md' : ''
              }`}
            >
              <div className="flex items-start justify-between">
                <span className="ico-sq"><c.icon /></span>
                <span className="mono text-ink/50">0{i + 1}</span>
              </div>

              <div data-card-obj className="absolute -bottom-4 -right-4 w-[46%] max-w-[190px] will-change-transform lg:bottom-auto lg:top-[22%] lg:w-[58%] lg:max-w-none pointer-events-none">
                <Obj img={A.obj[c.obj]} className="w-full h-auto" />
              </div>

              <div className="relative z-10">
                <h3 className="display h-sm max-w-[8ch] lg:max-w-none">{c.t}</h3>
                <div className="reveal-rows">
                  <div className="flex items-end justify-between gap-4 overflow-hidden">
                    <p className="mt-3 max-w-[22ch] text-[14px] leading-snug text-ink/70">{c.d}</p>
                    <span className="arrow-btn mt-3"><ArrowUpRight /></span>
                  </div>
                </div>
              </div>
            </TLink>
          )
        })}
      </div>
    </Section>
  )
}
