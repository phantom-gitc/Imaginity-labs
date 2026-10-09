import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { Flip } from 'gsap/Flip'

gsap.registerPlugin(ScrollTrigger, SplitText, Flip)
gsap.config({ nullTargetWarn: false })
gsap.defaults({ ease: 'power3.out' })

/** Media queries used with gsap.matchMedia across the app. */
export const MQ = {
  desktop: '(min-width: 1024px) and (prefers-reduced-motion: no-preference)',
  mobile: '(max-width: 1023px) and (prefers-reduced-motion: no-preference)',
  motion: '(prefers-reduced-motion: no-preference)',
  reduce: '(prefers-reduced-motion: reduce)',
  pinned: '(min-width: 768px) and (prefers-reduced-motion: no-preference)',
  fine: '(hover: hover) and (pointer: fine)',
}

let refreshTimer
/** Debounced ScrollTrigger.refresh – call after images load / route changes. */
export function refreshScroll(delay = 150) {
  clearTimeout(refreshTimer)
  refreshTimer = setTimeout(() => ScrollTrigger.refresh(), delay)
}

/** Seconds to delay hero intro until the preloader has finished (first visit per session only). */
export function introDelay() {
  if (typeof window === 'undefined') return 0
  if (sessionStorage.getItem('nx_pre')) return window.__nxNav ? 0.55 : 0.1
  return 1.6
}

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export { gsap, ScrollTrigger, SplitText, Flip }
