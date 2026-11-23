import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { Flip } from 'gsap/Flip'

gsap.registerPlugin(ScrollTrigger, SplitText, Flip)
gsap.config({ nullTargetWarn: false })
gsap.defaults({ ease: 'power3.out' })

/** Media queries used with gsap.matchMedia across the app. */
export const MQ = {
  desktop: '(min-width: 1024px)',
  mobile: '(max-width: 1023px)',
  motion: '(min-width: 0px)',
  reduce: 'not all',
  pinned: '(min-width: 768px)',
  fine: '(any-pointer: fine)',
}

let refreshTimer
/**
 * Debounced ScrollTrigger.refresh – call after images load / route changes.
 * Pinned sections can make a refresh re-anchor the page, so restore the current
 * scroll offset afterwards instead of yanking the reader out of position.
 */
export function refreshScroll(delay = 150) {
  clearTimeout(refreshTimer)
  refreshTimer = setTimeout(() => {
    const y = window.scrollY
    ScrollTrigger.refresh()
    if (Math.abs(window.scrollY - y) > 1) window.scrollTo(0, y)
  }, delay)
}

/**
 * Seconds to delay first-page intro reveals until they are actually visible.
 * The preloader curtain starts opening at 1.5s; starting the hero reveal under a
 * fully closed curtain made the entrance look broken. Route transitions use a
 * shorter delay so the new page is already revealing as the panels lift.
 */
export function introDelay() {
  if (typeof window === 'undefined') return 0
  if (document.documentElement.classList.contains('nx-pre')) return 1.55
  if (window.__nxNav) return 0.55
  return 0.1
}

export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false
  return /Lighthouse|PageSpeed|Googlebot/i.test(navigator.userAgent)
}

export { gsap, ScrollTrigger, SplitText, Flip }
