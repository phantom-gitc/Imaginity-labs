import { useRef, useState } from 'react'
import { ROLES, PERKS } from '../data/work'
import { A } from '../data/site'
import { useReveal } from '../hooks/useReveal'
import { Eyebrow, H, It, Section, SectionHeader } from '../components/ui/Type'
import { Frame } from '../components/ui/Img'
import { Button } from '../components/ui/Button'
import { CTAPanel } from '../components/ui/CTAPanel'
import { GradientBackdrop } from '../components/ui/GradientBackdrop'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus, Minus, Check } from 'lucide-react'

export default function Careers() {
  const root = useRef(null)
  useReveal(root)
  const [expandedRole, setExpandedRole] = useState(null)

  return (
    <div ref={root} className="relative isolate w-full pt-28">
      <GradientBackdrop variant="careers" />
      {/* 1. Hero */}
      <Section bg="light" className="pt-8 pb-16">
        <div className="max-w-3xl">
          <Eyebrow dot="#C45CB0">Careers at Nexora</Eyebrow>
          <H as="h1" size="xl" className="mt-4">
            Build products that matter, <It>autonomously.</It>
          </H>
          <p className="lede mt-6 text-lg">
            We are a compact, senior squad. No bureaucracy, no micromanagement, just deep work and shared pride in what we ship.
          </p>
        </div>
      </Section>

      {/* 2. Culture Photography */}
      <Section bg="light" tight>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8">
            <Frame
              img={A.team}
              ratio="16/9"
              alt="Nexora team workshop"
              grade
              radius={28}
            />
          </div>
          <div className="md:col-span-4 flex flex-col justify-between p-8 rounded-[28px] bg-[#E9E4FF]/60 border border-line">
            <div>
              <span className="tag mb-4">OUR PHILOSOPHY</span>
              <h3 className="display text-2xl text-ink mb-3 font-semibold">Small pods. High trust.</h3>
              <p className="text-sm text-ink/75 leading-relaxed">
                We believe two senior engineers with autonomy outperform a bloated twenty-person committee every single time.
              </p>
            </div>
            <div className="pt-6 border-t border-black/10">
              <span className="mono text-xs text-ink/50">LOCATION AGNOSTIC</span>
              <p className="text-sm font-medium text-ink mt-1">Work from wherever you produce your best code.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. Perks Pastel Tiles */}
      <Section bg="warm" className="!bg-[#F4EFE6]">
        <SectionHeader
          eyebrow="Studio Perks"
          dot="#FFD93D"
          title={<>Designed for sustainable <It>high performance.</It></>}
          line="Benefits intended to honor focus, health, and intellectual growth."
        />

        <div data-reveal="stagger" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {PERKS.map((perk) => (
            <div
              key={perk.t}
              className={`tinted tint-${perk.tint} p-7 rounded-[24px] flex flex-col justify-between min-h-[190px] shadow-sm`}
            >
              <div className="flex items-center justify-between">
                <span className="ico-sq"><perk.icon /></span>
                <span className="tag">PERK</span>
              </div>
              <div className="mt-4">
                <h4 className="display text-xl text-ink font-semibold mb-1">{perk.t}</h4>
                <p className="text-xs text-ink/70 leading-relaxed">{perk.d}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. Open Roles List (Expandable Rows) */}
      <Section bg="light">
        <SectionHeader
          eyebrow="Open Positions"
          dot="#3B5BFF"
          title={<>Current <It>openings.</It></>}
          line="Explore our open seats across software engineering, AI, and design."
        />

        <div className="mt-14 space-y-4">
          {ROLES.map((role) => {
            const isOpen = expandedRole === role.id
            return (
              <div
                key={role.id}
                className="border border-line rounded-[22px] overflow-hidden transition-all duration-300 hover:border-black/30"
              >
                <button
                  type="button"
                  onClick={() => setExpandedRole(isOpen ? null : role.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4"
                >
                  <div>
                    <span className="mono text-xs text-ink/40 uppercase">{role.meta}</span>
                    <h3 className="display text-2xl text-ink mt-1">{role.t}</h3>
                  </div>

                  <span className="size-10 rounded-full border border-line flex items-center justify-center text-ink/60">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 border-t border-line/60">
                        <p className="text-base text-ink/80 mb-6">{role.d}</p>
                        <h4 className="mono text-xs text-ink/40 mb-3 uppercase">What we look for:</h4>
                        <ul className="space-y-2 mb-8">
                          {role.req.map((r) => (
                            <li key={r} className="flex items-center gap-2.5 text-sm text-ink/80">
                              <span className="size-4 rounded-full bg-[#E9E4FF] text-[#3B5BFF] flex items-center justify-center">
                                <Check size={11} strokeWidth={3} />
                              </span>
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>

                        <Button to={`/contact?role=${encodeURIComponent(role.t)}`} size="sm">
                          Apply for this role
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </Section>

      {/* 5. CTA */}
      <CTAPanel title={<>Don&apos;t see your role? Reach <It>out anyway.</It></>} />
    </div>
  )
}

