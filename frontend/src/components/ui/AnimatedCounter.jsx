import { useEffect, useRef, useState } from 'react'
import { gsap } from '../../lib/gsap'

/**
 * Animated counter that smoothly counts up to target `value` when scrolled into view.
 * Uses GSAP power2.out easing for an organic, buttery smooth deceleration.
 */
export function AnimatedCounter({
  value,
  duration = 2.2,
  decimals = 0,
  className = '',
}) {
  const [displayValue, setDisplayValue] = useState(0)
  const nodeRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = nodeRef.current
    if (!el) return

    const target = typeof value === 'number' ? value : parseFloat(value) || 0

    // IntersectionObserver triggers counter animation when entering viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true

            const proxy = { val: 0 }
            gsap.to(proxy, {
              val: target,
              duration,
              ease: 'power2.out',
              onUpdate: () => {
                setDisplayValue(
                  decimals > 0
                    ? proxy.val.toFixed(decimals)
                    : Math.round(proxy.val)
                )
              },
              onComplete: () => {
                setDisplayValue(
                  decimals > 0 ? target.toFixed(decimals) : target
                )
              },
            })
          }
        })
      },
      { threshold: 0.15 }
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
    }
  }, [value, duration, decimals])

  return (
    <span ref={nodeRef} className={`tabular-nums ${className}`}>
      {displayValue}
    </span>
  )
}
