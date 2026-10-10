import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote } from 'lucide-react'
import { TESTIMONIALS } from '../../data/work'
import { A } from '../../data/site'
import { Eyebrow, H, It, Section } from '../ui/Type'

/** Black rounded testimonial card with large quote, portrait & interactive name switcher. */
export function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0)
  const current = TESTIMONIALS[activeIdx]

  return (
    <Section bg="light">
      <div className="mb-12">
        <Eyebrow dot="#7B61FF">Client Stories</Eyebrow>
        <H size="lg" className="mt-4">
          Trusted by founders who <It>care.</It>
        </H>
      </div>

      <div className="dark-ui bg-[#0A0A12] text-white rounded-[28px] p-8 md:p-14 lg:p-16 relative overflow-hidden">
        <div className="blob right-0 bottom-0 h-96 w-96 opacity-20 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
          {/* Main active quote & portrait */}
          <div className="lg:col-span-8 flex flex-col justify-between min-h-[300px]">
            <Quote className="size-12 text-[#3B5BFF]/60 mb-6" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <blockquote className="display text-2xl md:text-4xl lg:text-5xl leading-[1.1] text-white mb-8">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="size-14 rounded-full overflow-hidden border-2 border-white/20 bg-white/10 relative">
                    <Image
                      src={A.portrait[current.p].src}
                      alt={current.name}
                      width={56}
                      height={56}
                      className="size-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-white">{current.name}</h4>
                    <p className="text-sm text-white/50">{current.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Interactive client name switcher on right */}
          <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-10 flex flex-col gap-3">
            <span className="mono text-xs text-white/40 mb-2">PARTNER PERSPECTIVES</span>
            {TESTIMONIALS.map((t, idx) => {
              const isActive = idx === activeIdx
              return (
                <button
                  key={t.name}
                  type="button"
                  suppressHydrationWarning
                  onClick={() => setActiveIdx(idx)}
                  className={`text-left p-4 rounded-xl transition-all duration-300 flex items-center justify-between ${
                    isActive
                      ? 'bg-white/10 text-white border border-white/20'
                      : 'text-white/50 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div>
                    <p className="font-medium text-sm">{t.name}</p>
                    <p className="text-xs text-white/40">{t.role}</p>
                  </div>
                  {isActive && (
                    <span className="size-2 rounded-full bg-[#FFD93D]" />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </Section>
  )
}
