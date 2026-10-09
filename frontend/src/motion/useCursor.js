import { useEffect } from 'react'
import { gsap, MQ } from '../lib/gsap'

/**
 * Custom cursor with lerp smoothing, contextual states:
 * - Grows over links and buttons
 * - Becomes contextual badge for [data-cursor="View|Drag|Play"]
 * - Automatically hides over text inputs (input, textarea)
 * - Disabled on touch and reduced motion
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

      const dx = gsap.quickTo(dot, 'x', { duration: 0.1, ease: 'power3.out' })
      const dy = gsap.quickTo(dot, 'y', { duration: 0.1, ease: 'power3.out' })
      const rx = gsap.quickTo(ring, 'x', { duration: 0.42, ease: 'power2.out' })
      const ry = gsap.quickTo(ring, 'y', { duration: 0.42, ease: 'power2.out' })

      gsap.set([dot, ring], { opacity: 0 })

      const move = (e) => {
        dx(e.clientX)
        dy(e.clientY)
        rx(e.clientX)
        ry(e.clientY)
        gsap.to([dot, ring], { opacity: 1, duration: 0.25, overwrite: 'auto' })
      }

      const over = (e) => {
        const t = e.target instanceof Element ? e.target : null
        const isInput = t?.closest('input, textarea, [contenteditable="true"]')
        const labelled = t?.closest('[data-cursor]')
        const link = t?.closest('a, button, [role="tab"], [role="button"], select, summary')

        ring.classList.remove('is-link', 'is-label', 'is-hidden')
        dot.classList.remove('is-hidden')

        if (isInput) {
          ring.classList.add('is-hidden')
          dot.classList.add('is-hidden')
        } else if (labelled) {
          if (label) label.textContent = labelled.dataset.cursor
          ring.classList.add('is-label')
        } else if (link) {
          ring.classList.add('is-link')
        }
      }

      const out = (e) => {
        if (!e.relatedTarget) {
          gsap.to([dot, ring], { opacity: 0, duration: 0.25 })
        }
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
