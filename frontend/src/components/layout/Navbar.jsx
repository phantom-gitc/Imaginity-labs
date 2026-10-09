import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { gsap, ScrollTrigger } from '../../lib/gsap'
import { NAV } from '../../data/site'
import { TLink } from '../ui/TLink'
import { Button } from '../ui/Button'
import { Logo } from './Logo'
import { stopScroll } from '../../motion/useSmoothScroll'

const listV = { open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } }, closed: {} }
const itemV = {
  closed: { y: '110%', opacity: 0 },
  open: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

/** Floating pill nav: hides on scroll down, returns on scroll up. Enhanced with layoutId pill & text roll. */
export function Navbar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const bar = useRef(null)
  const openRef = useRef(false)
  openRef.current = open

  useEffect(() => {
    let hidden = false
    const st = ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => {
        if (openRef.current) return
        const scrollY = self.scroll()
        setScrolled(scrollY > 40)
        const shouldHide = self.direction === 1 && scrollY > 140
        if (shouldHide !== hidden) {
          hidden = shouldHide
          gsap.to(bar.current, { yPercent: hidden ? -170 : 0, duration: 0.55, ease: 'power2.inOut', overwrite: 'auto' })
        }
      },
    })
    return () => st.kill()
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    stopScroll(open)
    if (!open) return undefined
    const esc = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', esc)
    return () => window.removeEventListener('keydown', esc)
  }, [open])

  const isActive = (to) => pathname === to || pathname.startsWith(`${to}/`)

  return (
    <>
      <header ref={bar} className="fixed inset-x-0 top-3 z-[70] flex justify-center px-3 md:top-4 transition-all duration-300">
        <nav
          aria-label="Primary"
          className={`nav-pill w-full max-w-[1120px] justify-between transition-shadow duration-300 ${
            scrolled ? 'shadow-[0_12px_36px_-10px_rgba(10,10,30,0.12)]' : ''
          }`}
        >
          <TLink to="/" aria-label="Imaginity Labs home" className="mr-2 flex min-h-11 items-center">
            <Logo />
          </TLink>

          <ul className="hidden items-center lg:flex relative">
            {NAV.map((l) => {
              const active = isActive(l.to)
              return (
                <li key={l.to} className="relative">
                  <TLink
                    to={l.to}
                    className={`nav-link group relative z-10 ${active ? 'active text-ink font-semibold' : ''}`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {/* Text Roll Swap Effect on Hover */}
                    <span className="relative inline-block h-[1.3em] overflow-hidden leading-[1.3em]">
                      <span className="block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
                        {l.label}
                      </span>
                      <span className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 text-ink">
                        {l.label}
                      </span>
                    </span>

                    {/* Shared Layout Active Pill */}
                    {active && (
                      <motion.div
                        layoutId="activeNavPill"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        className="absolute inset-0 rounded-full bg-black/[0.06] -z-10"
                      />
                    )}
                  </TLink>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-1">
            <Button to="/contact" size="sm" className="hidden sm:inline-flex">
              Let&apos;s Talk
            </Button>

            {/* Morphing Hamburger / Close Icon */}
            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((o) => !o)}
              className="relative grid size-11 place-items-center rounded-full bg-ink text-white lg:hidden"
            >
              <div className="relative flex flex-col justify-center items-center w-5 h-5 gap-1.5">
                <span
                  className={`block h-0.5 w-5 bg-white transition-all duration-300 ${
                    open ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 bg-white transition-opacity duration-200 ${
                    open ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 bg-white transition-all duration-300 ${
                    open ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="dark-ui fixed inset-0 z-[65] flex flex-col justify-between bg-dark px-6 pb-8 pt-28 text-white lg:hidden"
          >
            <div className="blob left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 opacity-50" aria-hidden="true" />
            <motion.ul variants={listV} initial="closed" animate="open" className="relative flex flex-col gap-1">
              {NAV.map((l, i) => (
                <li key={l.to} className="overflow-hidden">
                  <motion.div variants={itemV}>
                    <TLink to={l.to} className="flex min-h-14 items-baseline gap-4 py-1">
                      <span className="mono text-white/40">0{i + 1}</span>
                      <span className={`display text-[clamp(40px,12vw,64px)] ${isActive(l.to) ? 'italic text-yellow' : ''}`}>{l.label}</span>
                    </TLink>
                  </motion.div>
                </li>
              ))}
            </motion.ul>
            <div className="relative flex items-center justify-between">
              <a href="mailto:hello@imaginitylabs.io" className="mono text-white/70">hello@imaginitylabs.io</a>
              <Button to="/contact" variant="yellow" size="sm">Let&apos;s Talk</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export { ArrowUpRight }
