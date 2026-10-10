import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger, prefersReducedMotion, MQ } from '../../lib/gsap'

const VARIANTS = {
  home: {
    blue: 'rgba(215, 232, 252, 0.9)',
    peach: 'rgba(255, 233, 205, 0.85)',
  },
  solutions: {
    blue: 'rgba(224, 230, 255, 0.9)',
    peach: 'rgba(221, 245, 230, 0.85)',
  },
  services: {
    blue: 'rgba(220, 228, 255, 0.9)',
    peach: 'rgba(255, 235, 215, 0.85)',
  },
  work: {
    blue: 'rgba(215, 232, 252, 0.9)',
    peach: 'rgba(255, 233, 205, 0.85)',
  },
  about: {
    blue: 'rgba(255, 225, 235, 0.85)',
    peach: 'rgba(255, 243, 190, 0.85)',
  },
  insights: {
    blue: 'rgba(225, 230, 255, 0.9)',
    peach: 'rgba(255, 230, 215, 0.85)',
  },
  careers: {
    blue: 'rgba(221, 245, 230, 0.85)',
    peach: 'rgba(255, 235, 210, 0.85)',
  },
  contact: {
    blue: 'rgba(220, 228, 255, 0.9)',
    peach: 'rgba(255, 235, 220, 0.85)',
  },
}

/**
 * Reusable hero mesh gradient backdrop.
 * Renders an airy, subtle, low-contrast two-color glow (cool top-left, warm top-right)
 * that melts seamlessly into the page base with soft blur, grain, and subtle motion.
 */
export function GradientBackdrop({
  variant = 'home',
  blue,
  peach,
  base = '#FBFCFD',
  className = '',
}) {
  const rootRef = useRef(null)
  const coolDriftRef = useRef(null)
  const warmDriftRef = useRef(null)
  const coolMouseRef = useRef(null)
  const warmMouseRef = useRef(null)

  const palette = VARIANTS[variant] || VARIANTS.home
  const colorBlue = blue || palette.blue
  const colorPeach = peach || palette.peach

  useEffect(() => {
    if (typeof window === 'undefined' || prefersReducedMotion()) return

    const root = rootRef.current
    if (!root) return

    const mm = gsap.matchMedia()
    const ctx = gsap.context(() => {
      // 1. Slow, organic ambient drift of the two glows
      if (coolDriftRef.current) {
        gsap.to(coolDriftRef.current, {
          x: 35,
          y: 28,
          scale: 1.1,
          duration: 14,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      }

      if (warmDriftRef.current) {
        gsap.to(warmDriftRef.current, {
          x: -32,
          y: 35,
          scale: 1.12,
          duration: 16,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 1.2,
        })
      }

      // 2. Mouse move shift (max ±18px) for gentle natural depth
      mm.add(MQ.fine, () => {
        if (!coolMouseRef.current || !warmMouseRef.current) return

        const setCoolX = gsap.quickTo(coolMouseRef.current, 'x', { duration: 1.4, ease: 'power2.out' })
        const setCoolY = gsap.quickTo(coolMouseRef.current, 'y', { duration: 1.4, ease: 'power2.out' })
        const setWarmX = gsap.quickTo(warmMouseRef.current, 'x', { duration: 1.4, ease: 'power2.out' })
        const setWarmY = gsap.quickTo(warmMouseRef.current, 'y', { duration: 1.4, ease: 'power2.out' })

        let winW = window.innerWidth
        let winH = window.innerHeight
        const onResize = () => {
          winW = window.innerWidth
          winH = window.innerHeight
        }
        window.addEventListener('resize', onResize, { passive: true })

        const handlePointerMove = (e) => {
          const nx = (e.clientX / (winW || 1) - 0.5) * 36
          const ny = (e.clientY / (winH || 1) - 0.5) * 36
          setCoolX(nx)
          setCoolY(ny)
          setWarmX(-nx * 0.8)
          setWarmY(-ny * 0.8)
        }

        window.addEventListener('pointermove', handlePointerMove, { passive: true })
        return () => {
          window.removeEventListener('resize', onResize)
          window.removeEventListener('pointermove', handlePointerMove)
        }
      })

      // 3. ScrollTrigger: parallax translate up at 0.3x speed & fade out
      ScrollTrigger.create({
        trigger: root,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => {
          gsap.set(root, {
            y: self.progress * 180,
            opacity: 1 - self.progress * 1.1,
          })
        },
      })
    }, root)

    return () => {
      mm.revert()
      ctx.revert()
    }
  }, [])

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className={`gradient-backdrop pointer-events-none absolute inset-x-0 top-0 h-[100vh] min-h-[640px] overflow-hidden select-none -z-10 ${className}`}
      style={{
        '--grad-base': base,
        '--grad-blue': colorBlue,
        '--grad-peach': colorPeach,
      }}
    >
      {/* Cool glow: pale sky/lavender, top-left */}
      <div ref={coolDriftRef} className="absolute inset-0 pointer-events-none">
        <div ref={coolMouseRef} className="gradient-blob-cool pointer-events-none" />
      </div>

      {/* Warm glow: pale peach/cream, top-right */}
      <div ref={warmDriftRef} className="absolute inset-0 pointer-events-none">
        <div ref={warmMouseRef} className="gradient-blob-warm pointer-events-none" />
      </div>

      {/* Tactile SVG noise grain overlay to prevent banding */}
      <div className="gradient-grain" />
    </div>
  )
}
