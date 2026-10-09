import { createContext, useContext, useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import { gsap, ScrollTrigger, prefersReducedMotion } from '../lib/gsap'

/**
 * ONE scroll engine: Locomotive Scroll v5 (Lenis-powered) driven by gsap.ticker
 * and synced to ScrollTrigger via lenis.on('scroll', ScrollTrigger.update).
 * (Locomotive v5 *is* Lenis under the hood – we never mount Lenis separately.)
 */
export const engine = { loco: null }
const ScrollCtx = createContext(engine)

export function ScrollProvider({ children }) {
  useEffect(() => {
    if (prefersReducedMotion()) return undefined
    let loco
    // deferred a tick so React StrictMode's mount → unmount → mount never leaks an instance
    const t = setTimeout(() => {
      gsap.ticker.lagSmoothing(0)
      loco = new LocomotiveScroll({
        lenisOptions: { lerp: 0.085, smoothWheel: true, wheelMultiplier: 1, touchMultiplier: 1.4 },
        autoStart: true,
        initCustomTicker: (render) => gsap.ticker.add(render),
        destroyCustomTicker: (render) => gsap.ticker.remove(render),
      })
      engine.loco = loco
      loco.lenisInstance.on('scroll', ScrollTrigger.update)
      ScrollTrigger.refresh()
    }, 0)
    return () => {
      clearTimeout(t)
      if (loco) {
        loco.destroy()
        engine.loco = null
      }
    }
  }, [])

  return <ScrollCtx.Provider value={engine}>{children}</ScrollCtx.Provider>
}

export const useScrollEngine = () => useContext(ScrollCtx)

/** Scroll helper that works with or without the smooth engine. */
export function scrollToTarget(target, opts = {}) {
  if (engine.loco) engine.loco.scrollTo(target, { duration: 1.4, ...opts })
  else if (typeof target === 'number') window.scrollTo({ top: target, behavior: opts.immediate ? 'auto' : 'smooth' })
  else {
    const el = typeof target === 'string' ? document.querySelector(target) : target
    el?.scrollIntoView({ behavior: opts.immediate ? 'auto' : 'smooth' })
  }
}

export function scrollToTop(immediate = true) {
  scrollToTarget(0, { immediate })
  if (immediate) window.scrollTo(0, 0)
}

export function stopScroll(stop = true) {
  const l = engine.loco?.lenisInstance
  if (!l) {
    document.documentElement.style.overflow = stop ? 'hidden' : ''
    return
  }
  stop ? l.stop() : l.start()
}
