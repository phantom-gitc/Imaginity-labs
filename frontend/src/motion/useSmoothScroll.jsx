import { createContext, useContext, useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger, prefersReducedMotion } from '../lib/gsap'

/**
 * SURENEXT — Single Unified Scroll Engine (Lenis + GSAP Ticker)
 * Synchronized directly with GSAP ticker & ScrollTrigger.
 */
export const scrollState = {
  lenis: null,
}

const SmoothScrollContext = createContext(scrollState)

// Named owners prevent unrelated shell effects from releasing each other's scroll locks.
// The preloader's child effect runs before Navbar's and before the parent provider, so a
// simple boolean would be cleared by
//  Navbar's initial `stopScroll(false)` on mount.
const scrollLocks = new Set()

export function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') return undefined
    if (prefersReducedMotion()) return undefined

    // 1. Initialize Lenis instance with responsive, buttery-smooth cinematic duration
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.0,
      syncTouch: false,
      autoResize: true,
      infinite: false,
    })

    lenisRef.current = lenis
    scrollState.lenis = lenis

    // 2. Synchronize with ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    // 3. Drive Lenis through GSAP ticker for 120fps sync with zero lagSmoothing skips
    const tickerUpdate = (time) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(tickerUpdate)
    gsap.ticker.lagSmoothing(0)

    ScrollTrigger.refresh()

    // 4. Smooth Anchor Link Navigation. Ignore modified/non-primary clicks and
    // anything already handled by React so this never steals accordion/button clicks.
    const handleAnchorClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const link = e.target instanceof Element ? e.target.closest('a[href^="#"]') : null
      if (!link) return
      const hash = link.getAttribute('href')
      if (hash && hash !== '#' && hash.length > 1) {
        try {
          const target = document.querySelector(hash)
          if (target) {
            e.preventDefault()
            lenis.scrollTo(target, { offset: -80, duration: 1.2 })
          }
        } catch {}
      }
    }
    document.addEventListener('click', handleAnchorClick)

    // The preloader child effect runs before this provider effect, so it may already
    // have requested a scroll lock. Honour it on the freshly created Lenis instance.
    if (scrollLocks.size > 0) lenis.stop()

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      gsap.ticker.remove(tickerUpdate)
      lenis.destroy()
      lenisRef.current = null
      scrollState.lenis = null
    }
  }, [])

  return (
    <SmoothScrollContext.Provider value={scrollState}>
      {children}
    </SmoothScrollContext.Provider>
  )
}

export const useSmoothScroll = () => useContext(SmoothScrollContext)

/** Helper function to scroll to a number, selector, or element */
export function scrollToTarget(target, opts = {}) {
  const l = scrollState.lenis
  if (l) {
    l.scrollTo(target, { duration: 1.2, ...opts })
  } else if (typeof target === 'number') {
    window.scrollTo({ top: target, behavior: opts.immediate ? 'auto' : 'smooth' })
  } else {
    const el = typeof target === 'string' ? document.querySelector(target) : target
    el?.scrollIntoView({ behavior: opts.immediate ? 'auto' : 'smooth' })
  }
}

/** Reset scroll position to top */
export function scrollToTop(immediate = true) {
  if (scrollState.lenis) {
    scrollState.lenis.scrollTo(0, { immediate })
  }
  window.scrollTo(0, 0)
}

/** Freeze / unfreeze scroll during overlays, modals, and preloader */
export function stopScroll(stop = true, owner = 'default') {
  if (stop) scrollLocks.add(owner)
  else scrollLocks.delete(owner)

  const locked = scrollLocks.size > 0
  document.documentElement.style.overflow = locked ? 'hidden' : ''

  const l = scrollState.lenis
  if (l) {
    locked ? l.stop() : l.start()
  }
}

export function isScrollLocked() {
  return scrollLocks.size > 0
}

/**
 * Recalculate dimensions after route changes or major layout shifts
 * while safely preserving the current scroll position.
 */
export function syncScrollEngine() {
  if (typeof window === 'undefined') return

  const lenis = scrollState.lenis
  const startY = window.scrollY

  if (lenis) lenis.resize()
  ScrollTrigger.refresh()

  const maxY = Math.max(0, document.documentElement.scrollHeight - window.innerHeight)
  const targetY = Math.max(0, Math.min(startY, maxY))

  if (lenis) lenis.scrollTo(targetY, { immediate: true, force: true })
  if (Math.abs(window.scrollY - targetY) > 0.5) window.scrollTo(0, targetY)
  ScrollTrigger.update()
}

/** Resize Lenis safely after layout transitions settle without triggering pinned layout shifts. */
export function syncScrollAfter(delay = 400) {
  return setTimeout(() => {
    if (typeof window !== 'undefined' && scrollState.lenis) {
      scrollState.lenis.resize()
    }
  }, delay)
}
