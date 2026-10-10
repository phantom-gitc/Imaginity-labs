import { useEffect } from 'react'
import { gsap, MQ, prefersReducedMotion } from '../lib/gsap'
import { EASES } from './tokens'

/**
 * 3D Card Tilt hook with pointer tracking and elastic spring recovery.
 * Animates rotationX, rotationY, and exposes specular glare coordinates.
 */
export function useTilt(ref, { maxAngle = 6, glare = true } = {}) {
  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return undefined

    const mm = gsap.matchMedia()
    mm.add(MQ.fine, () => {
      const rxTo = gsap.quickTo(el, 'rotationX', { duration: 0.6, ease: 'power2.out' })
      const ryTo = gsap.quickTo(el, 'rotationY', { duration: 0.6, ease: 'power2.out' })

      gsap.set(el, { transformPerspective: 1000, transformStyle: 'preserve-3d' })

      const handlePointerMove = (e) => {
        const rect = el.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width
        const y = (e.clientY - rect.top) / rect.height

        const rotX = (0.5 - y) * maxAngle * 2
        const rotY = (x - 0.5) * maxAngle * 2

        rxTo(rotX)
        ryTo(rotY)

        if (glare) {
          el.style.setProperty('--glare-x', `${(x * 100).toFixed(1)}%`)
          el.style.setProperty('--glare-y', `${(y * 100).toFixed(1)}%`)
        }
      }

      const handlePointerLeave = () => {
        gsap.to(el, {
          rotationX: 0,
          rotationY: 0,
          duration: 0.8,
          ease: EASES.elastic,
          overwrite: 'auto',
        })
      }

      el.addEventListener('pointermove', handlePointerMove)
      el.addEventListener('pointerleave', handlePointerLeave)

      return () => {
        el.removeEventListener('pointermove', handlePointerMove)
        el.removeEventListener('pointerleave', handlePointerLeave)
        gsap.set(el, { rotationX: 0, rotationY: 0 })
      }
    })

    return () => mm.revert()
  }, [ref, maxAngle, glare])
}
