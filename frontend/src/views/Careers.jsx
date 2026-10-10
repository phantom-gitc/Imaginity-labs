'use client'

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
import { Check, ArrowUpRight } from 'lucide-react'
import { syncScrollEngine } from '../hooks/useScrollSmooth'

const ROLE_DEPARTMENTS = {
  fs: 'Engineering',
  ai: 'AI & Data',
  mern: 'Engineering',
  java: 'Engineering',
  python: 'Engineering',
  pd: 'Design & UX',
  dl: 'Operations',
  cr: 'Engineering',
}

const CATEGORIES = ['All', 'Engineering', 'AI & Data', 'Design & UX', 'Operations']


export default function Careers() {
  const root = useRef(null)
  useReveal(root)
  const [expandedRole, setExpandedRole] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const toggleRole = (id) => {
    setExpandedRole((prev) => (prev === id ? null : id))
    setTimeout(() => syncScrollEngine(), 100)
    setTimeout(() => syncScrollEngine(), 420)
  }

  const filteredRoles = selectedCategory === 'All'
    ? ROLES
    : ROLES.filter((r) => ROLE_DEPARTMENTS[r.id] === selectedCategory)

  return (
    <div ref={root} className="relative isolate w-full pt-28">
      <GradientBackdrop variant="careers" />
      {/* 1. Hero */}
      <Section bg="light" className="pt-8 pb-16">
        <div className="max-w-3xl">
          <Eyebrow intro dot="#C45CB0">Careers at Imaginity</Eyebrow>
          <H as="h1" intro size="xl" className="mt-4">
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
              alt="Imaginity team workshop"
              eager={true}
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
      <Section bg="warm">
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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <SectionHeader
              eyebrow="Open Positions"
              dot="#3B5BFF"
              title={<>Current <It>openings.</It></>}
              line="Explore our open seats across software engineering, AI, and design."
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-black/[0.06]">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat
            const count = cat === 'All' 
              ? ROLES.length 
              : ROLES.filter((r) => ROLE_DEPARTMENTS[r.id] === cat).length
            return (
              <button
                key={cat}
                type="button"
                suppressHydrationWarning
                onClick={() => setSelectedCategory(cat)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-ink text-white shadow-sm'
                    : 'bg-white/80 text-ink/70 hover:text-ink hover:bg-white border border-line shadow-[0_1px_2px_rgba(0,0,0,0.03)]'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-black/[0.05] text-ink/60'
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Roles List (Full-width, Straight Edge, Ultra-smooth Grayish Transition) */}
        <div className="mt-10 border-t border-black/[0.08]">
          {filteredRoles.map((role) => {
            const isOpen = expandedRole === role.id
            const department = ROLE_DEPARTMENTS[role.id] || 'Engineering'
            const metaParts = role.meta ? role.meta.split('·').map((t) => t.trim()) : []
            const location = 'Remote'
            const commitment = metaParts[1] || 'Full-time'
            const exp = metaParts[2] || role.exp || ''

            return (
              <div
                key={role.id}
                className={`border-b border-black/[0.08] transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isOpen
                    ? 'bg-black/[0.02]'
                    : 'hover:bg-black/[0.025]'
                }`}
              >
                <button
                  type="button"
                  suppressHydrationWarning
                  onClick={() => toggleRole(role.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left cursor-pointer group px-3 sm:px-6 py-7 sm:py-8 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-3 sm:gap-4 w-full">
                    {/* Column 1: Title in the cursive/serif display font */}
                    <div className="md:col-span-6 min-w-0">
                      <h3 className="display text-2xl sm:text-3xl md:text-4xl font-normal text-ink group-hover:text-[#3B5BFF] transition-colors duration-300 tracking-normal pl-1.5 flex items-center">
                        <span className="group-hover:translate-x-1.5 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] inline-block">
                          {role.t}
                        </span>
                      </h3>
                    </div>

                    {/* Column 2: Department */}
                    <div className="hidden md:block md:col-span-2 text-sm text-ink/50 font-sans font-medium">
                      {department}
                    </div>

                    {/* Column 3: Commitment & Experience */}
                    <div className="hidden md:block md:col-span-3 text-sm text-ink/60 font-sans font-medium">
                      {commitment} · {exp}
                    </div>

                    {/* Column 4: Remote & Arrow */}
                    <div className="flex items-center justify-between md:justify-end gap-3 md:col-span-1">
                      <div className="flex items-center gap-2 md:hidden text-xs text-ink/50 font-sans">
                        <span>{commitment}</span>
                        <span>·</span>
                        <span>{exp}</span>
                      </div>
                      <ArrowUpRight
                        className={`size-4 shrink-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          isOpen
                            ? 'text-[#3B5BFF] rotate-90 scale-110'
                            : 'text-ink/30 group-hover:text-[#3B5BFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                        }`}
                      />
                    </div>
                  </div>
                </button>

                {/* Expanded Details Drawer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-3 sm:px-6 pb-12 pt-3 border-t border-black/[0.05]">
                        {/* Role Overview */}
                        <p className="text-base sm:text-lg text-ink/75 leading-relaxed max-w-3xl mb-9 font-normal">
                          {role.d}
                        </p>

                        {/* Tech Stack */}
                        {role.stack && (
                          <div className="mb-9">
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink/40 mb-3.5 font-sans">
                              Technologies &amp; Tools
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {role.stack.map((item) => (
                                <span
                                  key={item}
                                  className="text-xs sm:text-sm font-medium text-ink/80 bg-black/[0.04] border border-black/[0.06] px-3.5 py-1.5 rounded-md hover:bg-black/[0.08] transition-colors font-sans"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Responsibilities & Qualifications Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 mb-10">
                          {role.responsibilities && (
                            <div>
                              <h4 className="text-xs font-semibold uppercase tracking-wider text-ink/40 mb-3.5 font-sans">
                                Key Responsibilities
                              </h4>
                              <ul className="space-y-3">
                                {role.responsibilities.map((resp) => (
                                  <li key={resp} className="flex items-start gap-3 text-sm sm:text-base text-ink/75 leading-relaxed font-sans">
                                    <span className="size-1.5 rounded-full bg-ink/40 shrink-0 mt-2.5" />
                                    <span>{resp}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {role.req && (
                            <div>
                              <h4 className="text-xs font-semibold uppercase tracking-wider text-ink/40 mb-3.5 font-sans">
                                Qualifications &amp; Skills
                              </h4>
                              <ul className="space-y-3">
                                {role.req.map((r) => (
                                  <li key={r} className="flex items-start gap-3 text-sm sm:text-base text-ink/75 leading-relaxed font-sans">
                                    <span className="size-1.5 rounded-full bg-ink/40 shrink-0 mt-2.5" />
                                    <span>{r}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>

                        {/* Minimal Apply Action Bar */}
                        <div className="pt-8 border-t border-black/[0.05] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                          <div>
                            <h5 className="display text-xl sm:text-2xl text-ink font-normal mb-1">
                              Ready to apply for {role.t}?
                            </h5>
                            <p className="text-sm text-ink/60">
                              Submit your resume or email{' '}
                              <a
                                href={`mailto:hello@imaginitylabs.io?subject=Application for ${encodeURIComponent(role.t)}`}
                                className="text-ink font-medium underline underline-offset-4 hover:text-[#3B5BFF]"
                              >
                                hello@imaginitylabs.io
                              </a>
                              .
                            </p>
                          </div>

                          <Button to={`/contact?role=${encodeURIComponent(role.t)}`} size="sm" className="shrink-0">
                            Apply for this Position
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}

          {filteredRoles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-ink/50 text-sm font-medium">No positions currently open in this category.</p>
              <button
                type="button"
                suppressHydrationWarning
                onClick={() => setSelectedCategory('All')}
                className="mt-3 text-xs font-mono uppercase tracking-wider text-[#3B5BFF] hover:underline"
              >
                View all open positions &rarr;
              </button>
            </div>
          )}
        </div>
      </Section>

      {/* 5. CTA */}
      <CTAPanel title={<>Don&apos;t see your role? Reach <It>out anyway.</It></>} />
    </div>
  )
}

