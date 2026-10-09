import { useCallback, useLayoutEffect, useMemo, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { gsap, refreshScroll, prefersReducedMotion } from '../../lib/gsap'
import { TransitionContext } from '../../lib/transition'
import { scrollToTop } from '../../hooks/useScrollSmooth'

const COLORS = ['#3B5BFF', '#7B61FF', '#0A0A12']

/** Colour-panel wipe between routes. Provides `go(path)` via context (used by TLink). */
export function PageTransition({ children }) {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const panels = useRef([])
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
      busy.current = true
      window.__nxNav = true
      gsap.set(panels.current, { transformOrigin: '50% 100%' })
      gsap.to(panels.current, {
        scaleY: 1,
        duration: 0.65,
        ease: 'power3.inOut',
        stagger: 0.08,
        onComplete: () => {
          scrollToTop(true)
          pending.current = true
          navigate(to)
        },
      })
    },
    [navigate],
  )

  useLayoutEffect(() => {
    scrollToTop(true)
    if (pending.current) {
      pending.current = false
      gsap.set(panels.current, { transformOrigin: '50% 0%' })
      gsap.to(panels.current, {
        scaleY: 0,
        duration: 0.75,
        ease: 'power3.inOut',
        stagger: 0.07,
        delay: 0.12,
        onComplete: () => {
          busy.current = false
          window.__nxNav = false
        },
      })
    } else {
      busy.current = false
    }
    refreshScroll(350)
  }, [pathname])

  const value = useMemo(() => ({ go }), [go])
  return (
    <TransitionContext.Provider value={value}>
      {children}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[350]">
        {COLORS.map((c, i) => (
          <div key={c} ref={(el) => (panels.current[i] = el)} className="absolute inset-0" style={{ background: c, transform: 'scaleY(0)', zIndex: i }} />
        ))}
      </div>
    </TransitionContext.Provider>
  )
}
