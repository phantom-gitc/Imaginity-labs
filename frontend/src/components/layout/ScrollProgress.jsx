import { useEffect, useRef, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { gsap, ScrollTrigger, prefersReducedMotion } from '../../lib/gsap'
import { scrollToTop } from '../../motion/useSmoothScroll'
import { useMagnetic } from '../../motion/useMagnetic'

/**
 * Thin top gradient progress bar + floating Back to Top button with circular progress ring.
 */
export function ScrollProgress() {
  const barRef = useRef(null)
  const buttonRef = useRef(null)
  const circleRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useMagnetic(buttonRef, 8)

  useEffect(() => {
    if (typeof window === 'undefined' || prefersReducedMotion()) return undefined

    const circle = circleRef.current
    const radius = 18
    const circumference = 2 * Math.PI * radius

    if (circle) {
      circle.style.strokeDasharray = `${circumference}`
      circle.style.strokeDashoffset = `${circumference}`
    }

    const st = ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => {
        const p = self.progress
        // 1. Top progress bar
        if (barRef.current) {
          barRef.current.style.transform = `scaleX(${p})`
        }

        // 2. Circular progress ring
        if (circle) {
          const offset = circumference - p * circumference
          circle.style.strokeDashoffset = `${offset}`
        }

        // 3. Show button after 400px scroll
        const isPastHero = self.scroll() > 400
        setVisible(isPastHero)
      },
    })

    return () => st.kill()
  }, [])

  return (
    <>
      {/* Top Gradient Progress Bar */}
      <div
        ref={barRef}
        aria-hidden="true"
        className="fixed top-0 inset-x-0 h-[2.5px] z-[120] origin-left bg-gradient-to-r from-blue via-violet to-pink pointer-events-none"
        style={{ transform: 'scaleX(0)' }}
      />

      {/* Floating Back to Top Button with Circular Ring */}
      <div
        className={`fixed bottom-6 right-6 z-[60] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          visible ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : 'opacity-0 translate-y-4 scale-90 pointer-events-none'
        }`}
      >
        <button
          ref={buttonRef}
          type="button"
          onClick={() => scrollToTop(false)}
          aria-label="Scroll back to top"
          className="group relative flex size-12 items-center justify-center rounded-full bg-white/90 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-md border border-line text-ink hover:text-blue hover:shadow-lg transition-colors cursor-pointer"
        >
          {/* SVG Progress Circle */}
          <svg className="absolute inset-0 size-12 -rotate-90 pointer-events-none" viewBox="0 0 44 44">
            <circle
              cx="22"
              cy="22"
              r="18"
              fill="none"
              stroke="rgba(10,10,30,0.08)"
              strokeWidth="2.5"
            />
            <circle
              ref={circleRef}
              cx="22"
              cy="22"
              r="18"
              fill="none"
              stroke="#7B61FF"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="transition-all duration-75"
            />
          </svg>

          <ArrowUp size={18} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </>
  )
}
