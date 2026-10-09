import { useEffect, useRef, useState } from 'react'
import { gsap, prefersReducedMotion } from '../lib/gsap'
import { EASES } from './tokens'

/**
 * Animated count-up number hook.
 * Uses IntersectionObserver + GSAP for buttery smooth deceleration.
 */
export function useCountUp(targetValue, { duration = 2, decimals = 0 } = {}) {
  const [val, setVal] = useState(0)
  const nodeRef = useRef(null)
  const animatedRef = useRef(false)

  useEffect(() => {
    const el = nodeRef.current
    if (!el) return undefined

    const end = typeof targetValue === 'number' ? targetValue : parseFloat(targetValue) || 0

    if (prefersReducedMotion()) {
      queueMicrotask(() => {
        setVal(decimals > 0 ? end.toFixed(decimals) : end)
      })
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true

            const proxy = { v: 0 }
            gsap.to(proxy, {
              v: end,
              duration,
              ease: EASES.power2,
              onUpdate: () => {
                setVal(decimals > 0 ? proxy.v.toFixed(decimals) : Math.round(proxy.v))
              },
              onComplete: () => {
                setVal(decimals > 0 ? end.toFixed(decimals) : end)
              },
            })
          }
        })
      },
      { threshold: 0.15 }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [targetValue, duration, decimals])

  return [val, nodeRef]
}
