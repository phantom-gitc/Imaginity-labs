import { useEffect, useRef } from 'react'
import { PROCESS } from '../../data/site'
import { Eyebrow, H, It, Section } from '../ui/Type'
import { gsap, MQ } from '../../lib/gsap'

/** Dark process section with faint grid, horizontal dotted timeline with drawing line & activating dots. */
export function ProcessTimeline() {
  const rootRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    const mm = gsap.matchMedia()
    const ctx = gsap.context(() => {
      mm.add({ ok: MQ.motion }, () => {
        const root = rootRef.current
        const line = lineRef.current
        const dots = root?.querySelectorAll('.timeline-node')
        if (!root || !line || !dots) return

        gsap.fromTo(
          line,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: root,
              start: 'top 70%',
              end: 'bottom 80%',
              scrub: 0.5,
            },
          }
        )

        dots.forEach((d) => {
          gsap.fromTo(
            d,
            { scale: 0.6, borderColor: 'rgba(255,255,255,0.15)', backgroundColor: '#0A0A12' },
            {
              scale: 1.15,
              borderColor: '#3B5BFF',
              backgroundColor: '#3B5BFF',
              scrollTrigger: {
                trigger: d,
                start: 'top 75%',
                toggleActions: 'play none none reverse',
              },
            }
          )
        })
      })
    }, rootRef)

    return () => {
      mm.revert()
      ctx.revert()
    }
  }, [])

  return (
    <Section ref={rootRef} bg="dark" className="dark-ui !bg-[#0A0A12] text-white relative overflow-hidden border-y border-white/[0.08]">
      <div className="line-grid" aria-hidden="true" />
      <div className="blob left-1/4 -top-20 h-96 w-96 opacity-25" aria-hidden="true" />
      <div className="blob -right-20 bottom-0 h-80 w-80 opacity-20" aria-hidden="true" />

      <div className="relative z-10 mb-16 md:mb-20">
        <Eyebrow dot="#FFD93D" className="!text-white/70">Our Process</Eyebrow>
        <H size="lg" className="mt-4 text-white">
          From first talk to <It>continuous launch.</It>
        </H>
      </div>

      <div className="relative z-10">
        {/* Timeline Desktop Guide Bar */}
        <div className="hidden lg:block relative mb-12">
          <div className="h-[2px] w-full bg-white/10" />
          <div
            ref={lineRef}
            className="absolute top-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-[#3B5BFF] via-[#7B61FF] to-[#C45CB0]"
          />
        </div>

        {/* 5 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {PROCESS.map((p, idx) => (
            <div
              key={p.t}
              data-reveal="up"
              className="glass-dark bg-white/[0.035] !border-white/10 p-6 rounded-[22px] flex flex-col justify-between relative group hover:!border-white/30 hover:bg-white/[0.07] hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-black/30"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="timeline-node size-4 rounded-full border-2 border-white/20 bg-[#0A0A12] transition-all duration-500" />
                  <span className="mono text-xs text-white/50">STEP 0{idx + 1}</span>
                </div>
                <h3 className="display h-sm text-white mb-2 font-medium">{p.t}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{p.d}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <ul className="space-y-1.5">
                  {p.detail.map((item) => (
                    <li key={item} className="text-xs text-white/60 flex items-center gap-2">
                      <span className="size-1 rounded-full bg-[#FFD93D] shadow-[0_0_8px_#FFD93D]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
