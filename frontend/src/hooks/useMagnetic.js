import { useEffect } from 'react'
import { gsap, MQ } from '../lib/gsap'

/** Magnetic hover (max 12px) for any element ref. Desktop / fine pointer only. */
export function useMagnetic(ref, max = 12) {
  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    const mm = gsap.matchMedia()
    mm.add({ ok: `${MQ.fine} and ${MQ.motion}` }, () => {
      const xTo = gsap.quickTo(el, 'x', { duration: 0.95, ease: 'power3.out' })
      const yTo = gsap.quickTo(el, 'y', { duration: 0.95, ease: 'power3.out' })
      const move = (e) => {
        const r = el.getBoundingClientRect()
        const dx = e.clientX - (r.left + r.width / 2)
        const dy = e.clientY - (r.top + r.height / 2)
        xTo(gsap.utils.clamp(-max, max, dx * 0.25))
        yTo(gsap.utils.clamp(-max, max, dy * 0.25))
      }
      const leave = () => {
        gsap.to(el, { x: 0, y: 0, duration: 0.8, ease: 'power3.out', overwrite: 'auto' })
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
