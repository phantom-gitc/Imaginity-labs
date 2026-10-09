import { useEffect, useRef } from 'react'

/**
 * Looping ticker. Speed is tied to scroll velocity and reverses with scroll direction.
 * Renders children 4× and wraps at -25%.
 */
export function Marquee({ children, speed = 3.2, className = '', trackClass = '' }) {
  const inner = useRef(null)
  useEffect(() => {
    const el = inner.current
    if (!el) return undefined

    let x = 0
    let rafId = null
    let lastTime = performance.now()
    const dir = -1 // standard smooth continuous marquee flow
    const baseSpeed = speed * 0.75

    const tick = (now) => {
      const dt = Math.min(32, now - lastTime) / 16.666
      lastTime = now

      // Steady continuous movement
      x += dir * baseSpeed * dt

      // Wrap seamlessly using the first track's width
      const firstTrack = el.firstElementChild
      const trackWidth = firstTrack ? firstTrack.offsetWidth : (el.offsetWidth / 4)

      if (trackWidth > 0) {
        while (x > 0) x -= trackWidth
        while (x < -trackWidth) x += trackWidth
        el.style.transform = `translate3d(${x}px, 0, 0)`
      }

      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [speed])

  return (
    <div className={`marquee ${className}`}>
      <div ref={inner} className="flex w-max">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className={`marquee-track ${trackClass}`} aria-hidden={i > 0 ? 'true' : undefined}>
            {children}
          </div>
        ))}
      </div>
    </div>
  )
}
