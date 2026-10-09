import { useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { gsap, refreshScroll, prefersReducedMotion } from '../../lib/gsap'
import { TransitionContext } from '../../lib/transition'
import { scrollToTop } from '../../motion/useSmoothScroll'

const COLORS = ['#3B5BFF', '#7B61FF', '#0A0A12']

const ROUTE_LABELS = {
  '/': 'Imaginity',
  '/solutions': 'Solutions',
  '/services': 'Services',
  '/work': 'Work',
  '/about': 'About',
  '/insights': 'Insights',
  '/careers': 'Careers',
  '/contact': 'Contact',
}

/**
 * Editorial colour-panel wipe with large serif destination title.
 * Provides `go(path)` via context (used by TLink).
 */
export function PageTransition({ children }) {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const panels = useRef([])
  const titleRef = useRef(null)
  const [targetLabel, setTargetLabel] = useState('')
  const busy = useRef(false)
  const pending = useRef(false)
  const path = useRef(pathname)
  path.current = pathname

  const go = useCallback(
    (to) => {
      const target = to.split('#')[0] || '/'
      if (busy.current) return
      if (target === path.current) {
        scrollToTop(false)
        return
      }
      if (prefersReducedMotion()) {
        navigate(to)
        return
      }

      const label = ROUTE_LABELS[target] || target.replace('/', '').toUpperCase()
      setTargetLabel(label)

      busy.current = true
      window.__nxNav = true

      // Panels wipe up from bottom
      gsap.set(panels.current, { transformOrigin: '50% 100%' })
      gsap.set(titleRef.current, { opacity: 0, y: 30, scale: 0.96 })

      const tl = gsap.timeline({
        onComplete: () => {
          scrollToTop(true)
          pending.current = true
          navigate(to)
        },
      })

      tl.to(panels.current, {
        scaleY: 1,
        duration: 0.65,
        ease: 'power3.inOut',
        stagger: 0.08,
      }).to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.45,
          ease: 'power3.out',
        },
        '-=0.35'
      )
    },
    [navigate]
  )

  useLayoutEffect(() => {
    scrollToTop(true)
    if (pending.current) {
      pending.current = false
      gsap.set(panels.current, { transformOrigin: '50% 0%' })

      const tl = gsap.timeline({
        delay: 0.1,
        onComplete: () => {
          busy.current = false
          window.__nxNav = false
          setTargetLabel('')
        },
      })

      tl.to(titleRef.current, {
        opacity: 0,
        y: -25,
        duration: 0.35,
        ease: 'power2.in',
      }).to(
        panels.current,
        {
          scaleY: 0,
          duration: 0.72,
          ease: 'power3.inOut',
          stagger: 0.07,
        },
        '-=0.15'
      )
    } else {
      busy.current = false
    }
    refreshScroll(300)
  }, [pathname])

  const value = useMemo(() => ({ go }), [go])

  return (
    <TransitionContext.Provider value={value}>
      {children}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[350] overflow-hidden"
      >
        {COLORS.map((c, i) => (
          <div
            key={c}
            ref={(el) => (panels.current[i] = el)}
            className="absolute inset-0 flex items-center justify-center will-change-transform"
            style={{ background: c, transform: 'scaleY(0)', zIndex: i }}
          >
            {i === COLORS.length - 1 && (
              <div
                ref={titleRef}
                className="display text-[clamp(48px,10vw,120px)] italic text-white/95 select-none pointer-events-none font-serif tracking-tight"
              >
                {targetLabel}
              </div>
            )}
          </div>
        ))}
      </div>
    </TransitionContext.Provider>
  )
}
