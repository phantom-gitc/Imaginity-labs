import { createContext, useContext, useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger, prefersReducedMotion } from '../lib/gsap'

/**
 * IMAGINITY LABS — Single Unified Scroll Engine (Lenis + GSAP Ticker)
 * Synchronized directly with GSAP ticker & ScrollTrigger.
 */
export const scrollState = {
  lenis: null,
}

const SmoothScrollContext = createContext(scrollState)

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

    // 4. Smooth Anchor Link Navigation
    const handleAnchorClick = (e) => {
      const link = e.target.closest('a[href^="#"]')
      if (!link) return
      const hash = link.getAttribute('href')
      if (hash && hash !== '#') {
        const target = document.querySelector(hash)
        if (target) {
          e.preventDefault()
          lenis.scrollTo(target, { offset: -80, duration: 1.2 })
        }
      }
    }
    document.addEventListener('click', handleAnchorClick)

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
export function stopScroll(stop = true) {
  const l = scrollState.lenis
  if (l) {
    stop ? l.stop() : l.start()
  } else {
    document.documentElement.style.overflow = stop ? 'hidden' : ''
  }
}

/** Recalculate dimensions across route changes and layout shifts */
export function syncScrollEngine() {
  if (scrollState.lenis) {
    scrollState.lenis.resize()
  }
  ScrollTrigger.refresh()
}
