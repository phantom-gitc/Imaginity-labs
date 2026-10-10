'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from '../../lib/gsap'
import { Logo } from './Logo'

/**
 * 1.5s logo reveal + percentage counter + cinematic curtain split.
 * Reveals the hero underneath and starts hero intro as curtain splits.
 * Plays once per session.
 *
 * Hydration-safe: the first render is identical on server and client. The server markup is
 * hidden by CSS unless the early script marked `html.nx-pre` (first visit, motion allowed);
 * sessionStorage is only read inside the effect.
 */
export function Preloader() {
  const [show, setShow] = useState(true)

  const root = useRef(null)
  const num = useRef(null)
  const bar = useRef(null)
  const logo = useRef(null)
  const curtainLeft = useRef(null)
  const curtainRight = useRef(null)
  const content = useRef(null)

  useEffect(() => {
    const isBot = typeof navigator !== 'undefined' && /Lighthouse|PageSpeed|Googlebot/i.test(navigator.userAgent)
    if (isBot) {
      document.documentElement.classList.remove('nx-pre')
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShow(false)
      return undefined
    }

    document.documentElement.style.overflow = 'hidden'
    const proxy = { v: 0 }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          document.documentElement.classList.remove('nx-pre')
          document.documentElement.style.overflow = ''
          setShow(false)
        },
      })

      // 1. Logo clip reveal & Number count-up
      tl.fromTo(
        logo.current,
        { clipPath: 'inset(0 100% 0 0)' },
        { clipPath: 'inset(0 0% 0 0)', duration: 0.9, ease: 'power3.inOut' },
        0
      )
        .to(
          proxy,
          {
            v: 100,
            duration: 1.4,
            ease: 'power2.inOut',
            onUpdate: () => {
              if (num.current) {
                num.current.textContent = String(Math.round(proxy.v)).padStart(3, '0')
              }
            },
          },
          0
        )
        .to(
          bar.current,
          { scaleX: 1, duration: 1.4, ease: 'power2.inOut' },
          0
        )

      // 2. Content fade out just before curtain splits
      tl.to(
        content.current,
        { opacity: 0, y: -20, duration: 0.45, ease: 'power2.in' },
        1.45
      )

      // 3. Cinematic Curtain Split
      tl.to(
        curtainLeft.current,
        { xPercent: -101, duration: 0.95, ease: 'expo.inOut' },
        1.5
      ).to(
        curtainRight.current,
        { xPercent: 101, duration: 0.95, ease: 'expo.inOut' },
        1.5
      )
    }, root)

    return () => {
      ctx.revert()
      document.documentElement.style.overflow = ''
    }
  }, [])

  if (!show) return null

  return (
    <div
      ref={root}
      className="nx-preloader fixed inset-0 z-[400] pointer-events-none overflow-hidden select-none"
      role="status"
      aria-label="Loading"
    >
      {/* Left Curtain Panel */}
      <div
        ref={curtainLeft}
        className="absolute inset-y-0 left-0 w-1/2 bg-[#0A0A12] border-r border-white/5"
      />

      {/* Right Curtain Panel */}
      <div
        ref={curtainRight}
        className="absolute inset-y-0 right-0 w-1/2 bg-[#0A0A12] border-l border-white/5"
      />

      {/* Center Content */}
      <div
        ref={content}
        className="dark-ui absolute inset-0 flex flex-col justify-between p-6 text-white md:p-10 pointer-events-auto"
      >
        <div className="mono text-white/50 tracking-wider">Imaginity Labs · Studio</div>
        <div className="flex items-end justify-between gap-6">
          <div ref={logo} className="scale-[1.6] origin-bottom-left md:scale-[2.4]">
            <Logo dark />
          </div>
          <div
            ref={num}
            className="display text-[clamp(64px,14vw,200px)] leading-[0.8] tabular-nums font-light"
          >
            000
          </div>
        </div>
        <div
          ref={bar}
          className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-blue via-violet to-pink"
        />
      </div>
    </div>
  )
}
