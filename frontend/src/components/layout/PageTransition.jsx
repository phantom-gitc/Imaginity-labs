'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { gsap, refreshScroll, prefersReducedMotion } from '../../lib/gsap'
import { TransitionContext } from '../../lib/transition'
import { scrollToTop } from '../../motion/useSmoothScroll'

const COLORS = ['#3B5BFF', '#7B61FF', '#0A0A12']

const ROUTE_LABELS = {
  '/': 'SureNext',
  '/solutions': 'Solutions',
  '/services': 'Services',
  '/work': 'Work',
  '/about': 'About',
  '/insights': 'Insights',
  '/careers': 'Careers',
  '/contact': 'Contact',
}

function getRouteLabel(targetPath) {
  if (ROUTE_LABELS[targetPath]) return ROUTE_LABELS[targetPath]
  if (targetPath.startsWith('/work/')) return 'Work'
  if (targetPath.startsWith('/insights/')) return 'Insights'
  const segment = targetPath.replace('/', '').split('/')[0]
  return segment ? segment.charAt(0).toUpperCase() + segment.slice(1) : 'SureNext'
}

/**
 * Editorial colour-panel wipe with large serif destination title.
 * Provides `go(path)` via context (used by TLink).
 */
export function PageTransition({ children }) {
  const router = useRouter()
  const pathname = usePathname()
  const panels = useRef([])
  const titleRef = useRef(null)
  const [targetLabel, setTargetLabel] = useState('')
  const busy = useRef(false)
  const pending = useRef(false)
  const path = useRef(pathname)
  const tlRef = useRef(null)
  const safety = useRef(null)

  useEffect(() => {
    path.current = pathname
  }, [pathname])

  // Reset state on unmount
  useEffect(
    () => () => {
      clearTimeout(safety.current)
      tlRef.current?.kill()
      busy.current = false
      pending.current = false
      window.__nxNav = false
    },
    []
  )

  // Immediately release panels if browser back/forward (popstate) is triggered
  useEffect(() => {
    const handlePopState = () => {
      clearTimeout(safety.current)
      if (tlRef.current) {
        tlRef.current.kill()
        tlRef.current = null
      }
      gsap.killTweensOf([panels.current, titleRef.current])
      gsap.set(panels.current, { scaleY: 0 })
      gsap.set(titleRef.current, { opacity: 0 })
      busy.current = false
      pending.current = false
      window.__nxNav = false
      setTargetLabel('')
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const go = useCallback(
    (to) => {
      const target = to.split('#')[0] || '/'
      const targetPath = target.split('?')[0] || '/'
      if (busy.current) return

      // Same-route links (query/hash changes or a repeat click) should not play a wipe.
      if (targetPath === path.current) {
        if (to === path.current) scrollToTop(false)
        else router.push(to, { scroll: false })
        return
      }

      const label = getRouteLabel(targetPath)
      const from = path.current
      setTargetLabel(label)

      busy.current = true
      window.__nxNav = true
      clearTimeout(safety.current)

      // Panels wipe up from bottom
      gsap.set(panels.current, { transformOrigin: '50% 100%' })
      gsap.set(titleRef.current, { opacity: 0, y: 30, scale: 0.96 })

      tlRef.current = gsap.timeline({
        onComplete: () => {
          // Browser back/forward (or another navigation) may have resolved the route
          // while the wipe was playing. Never override it with a stale push.
          if (path.current !== from) {
            tlRef.current = null
            return
          }
          scrollToTop(true)
          pending.current = true
          // We own the scroll reset, so stop Next from fighting Lenis during the wipe.
          router.push(to, { scroll: false })
          // If the router cannot resolve the target, release the overlay instead of
          // leaving the page covered by a frozen transition panel.
          safety.current = setTimeout(() => {
            if (path.current === from) {
              gsap.set(panels.current, { scaleY: 0 })
              gsap.set(titleRef.current, { opacity: 0 })
              tlRef.current = null
              busy.current = false
              pending.current = false
              window.__nxNav = false
              setTargetLabel('')
            }
          }, 2500)
        },
      })
      const tl = tlRef.current

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
    [router]
  )

  // Intercept every internal <a> in the capture phase, including plain <Link>s and
  // CTAs. TLink still works (its handler sees defaultPrevented and bails), while hash
  // links stay with the smooth-scroll engine and external/mail links stay native.
  useEffect(() => {
    const handleLinkClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      if (document.documentElement.classList.contains('nx-pre')) {
        e.preventDefault()
        return
      }
      const a = e.target instanceof Element ? e.target.closest('a[href]') : null
      if (!a || a.hasAttribute('download') || (a.target && a.target !== '_self')) return
      if (a.closest('[data-no-transition]')) return

      const rawHref = a.getAttribute('href') || ''
      if (!rawHref || rawHref === '#' || rawHref.startsWith('#')) return
      if (rawHref.startsWith('mailto:') || rawHref.startsWith('tel:') || rawHref.startsWith('javascript:')) return

      try {
        const url = new URL(rawHref, window.location.href)
        if (url.origin !== window.location.origin) return
        if (url.hash && url.pathname === window.location.pathname) return

        e.preventDefault()
        go(url.pathname + url.search + url.hash)
      } catch {}
    }

    document.addEventListener('click', handleLinkClick, true)
    return () => document.removeEventListener('click', handleLinkClick, true)
  }, [go])

  useEffect(() => {
    clearTimeout(safety.current)

    if (pending.current) {
      pending.current = false
      gsap.set(panels.current, { transformOrigin: '50% 0%' })

      const tl = gsap.timeline({
        delay: 0.08,
        onComplete: () => {
          tlRef.current = null
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
      // External navigation (browser back/forward, plain links). Do NOT reset scroll —
      // the browser/Next scroll restoration owns it. Just make sure a wipe that was
      // interrupted cannot leave the viewport covered.
      if (tlRef.current) {
        tlRef.current.kill()
        tlRef.current = null
      }
      gsap.killTweensOf([panels.current, titleRef.current])
      gsap.set(panels.current, { scaleY: 0 })
      gsap.set(titleRef.current, { opacity: 0 })
      busy.current = false
      pending.current = false
      window.__nxNav = false
      setTargetLabel('')
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
            className="absolute inset-0 flex items-center justify-center will-change-transform pointer-events-none"
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
