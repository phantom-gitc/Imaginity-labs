import { useEffect } from 'react'
import { gsap, MQ, prefersReducedMotion } from '../lib/gsap'
import { EASES } from './tokens'

/**
 * Magnetic button / element interaction with elastic snap-back.
 * Only active on desktop fine pointers.
 */
export function useMagnetic(ref, max = 12) {
  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return undefined

    const mm = gsap.matchMedia()
    mm.add({ ok: `${MQ.fine} and ${MQ.motion}` }, () => {
      const move = (e) => {
        const r = el.getBoundingClientRect()
        const dx = e.clientX - (r.left + r.width / 2)
        const dy = e.clientY - (r.top + r.height / 2)
        gsap.to(el, {
          x: gsap.utils.clamp(-max, max, dx * 0.35),
          y: gsap.utils.clamp(-max, max, dy * 0.35),
          duration: 0.45,
          ease: 'power2.out',
          overwrite: 'auto',
        })
      }

      const leave = () => {
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.9,
          ease: EASES.elastic,
          overwrite: 'auto',
        })
      }

      el.addEventListener('mousemove', move)
      el.addEventListener('mouseleave', leave)

      return () => {
        el.removeEventListener('mousemove', move)
        el.removeEventListener('mouseleave', leave)
        gsap.set(el, { x: 0, y: 0 })
      }
    })

    return () => mm.revert()
  }, [ref, max])
}
