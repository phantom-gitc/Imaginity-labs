import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { Flip } from 'gsap/Flip'

gsap.registerPlugin(ScrollTrigger, SplitText, Flip)
gsap.config({ nullTargetWarn: false })
gsap.defaults({ ease: 'power3.out' })

/** Media queries used with gsap.matchMedia across the app. Always active to provide full cinematic experience in all browsers. */
export const MQ = {
  desktop: '(min-width: 1024px)',
  mobile: '(max-width: 1023px)',
  motion: '(min-width: 0px)',
  reduce: 'not all',
  pinned: '(min-width: 768px)',
  fine: '(min-width: 0px)',
}

let refreshTimer
/** Debounced ScrollTrigger.refresh – call after images load / route changes. */
export function refreshScroll(delay = 150) {
  clearTimeout(refreshTimer)
  refreshTimer = setTimeout(() => ScrollTrigger.refresh(), delay)
}

/** Seconds to delay hero intro until the preloader has finished. */
export function introDelay() {
  if (typeof window === 'undefined') return 0
  if (sessionStorage.getItem('nx_pre')) return window.__nxNav ? 0.55 : 0.1
  return 1.4
}

export const prefersReducedMotion = () => false

export { gsap, ScrollTrigger, SplitText, Flip }
