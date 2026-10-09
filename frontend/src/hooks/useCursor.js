import { useEffect } from 'react'
import { gsap, MQ } from '../lib/gsap'

/**
 * Custom cursor: dot + ring. Ring grows on links, shows a label for
 * [data-cursor="View|Drag|..."] targets. Disabled on touch / reduced motion.
 */
export function useCursor(dotRef, ringRef, labelRef) {
  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    const label = labelRef.current
    if (!dot || !ring) return undefined
    const mm = gsap.matchMedia()
    mm.add({ ok: `${MQ.fine} and ${MQ.motion}` }, () => {
      document.documentElement.classList.add('has-cursor')
      const dx = gsap.quickTo(dot, 'x', { duration: 0.12, ease: 'power3.out' })
      const dy = gsap.quickTo(dot, 'y', { duration: 0.12, ease: 'power3.out' })
      const rx = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3.out' })
      const ry = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3.out' })
      gsap.set([dot, ring], { opacity: 0 })

      const move = (e) => {
        dx(e.clientX)
        dy(e.clientY)
        rx(e.clientX)
        ry(e.clientY)
        gsap.to([dot, ring], { opacity: 1, duration: 0.3, overwrite: 'auto' })
      }
      const over = (e) => {
        const t = e.target instanceof Element ? e.target : null
        const labelled = t?.closest('[data-cursor]')
        const link = t?.closest('a, button, [role="tab"], [role="button"], input, textarea, select, summary')
        ring.classList.remove('is-link', 'is-label')
        if (labelled) {
          label.textContent = labelled.dataset.cursor
          ring.classList.add('is-label')
        } else if (link) {
          ring.classList.add('is-link')
        }
      }
      const out = (e) => {
        if (!e.relatedTarget) gsap.to([dot, ring], { opacity: 0, duration: 0.3 })
      }
      window.addEventListener('mousemove', move, { passive: true })
      document.addEventListener('mouseover', over, { passive: true })
      document.addEventListener('mouseout', out)
      return () => {
        document.documentElement.classList.remove('has-cursor')
        window.removeEventListener('mousemove', move)
        document.removeEventListener('mouseover', over)
        document.removeEventListener('mouseout', out)
      }
    })
    return () => mm.revert()
  }, [dotRef, ringRef, labelRef])
}
