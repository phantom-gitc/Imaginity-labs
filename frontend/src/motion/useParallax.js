import { useEffect } from 'react'
import { gsap, ScrollTrigger, prefersReducedMotion, MQ } from '../lib/gsap'

/**
 * Scroll-driven parallax scrub hook.
 * Moves element along Y axis proportional to scroll progression.
 */
export function useParallax(ref, distance = 10) {
  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return undefined

    const mm = gsap.matchMedia()
    mm.add(MQ.desktop, () => {
      const parent = el.parentElement || el
      const tween = gsap.fromTo(
        el,
        { yPercent: -distance },
        {
          yPercent: distance,
          ease: 'none',
          scrollTrigger: {
            trigger: parent,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      )

      return () => {
        tween.kill()
      }
    })

    return () => mm.revert()
  }, [ref, distance])
}
