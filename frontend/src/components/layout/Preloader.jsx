import { useEffect, useRef, useState } from 'react'
import { gsap, prefersReducedMotion } from '../../lib/gsap'
import { Logo } from './Logo'

/** 1.5s logo reveal with counter, then hero intro. Plays once per session. */
export function Preloader() {
  const [show, setShow] = useState(() => typeof window !== 'undefined' && !sessionStorage.getItem('nx_pre') && !prefersReducedMotion())
  const root = useRef(null)
  const num = useRef(null)
  const bar = useRef(null)
  const logo = useRef(null)

  useEffect(() => {
    if (!show) {
      sessionStorage.setItem('nx_pre', '1')
      return undefined
    }
    document.documentElement.style.overflow = 'hidden'
    const o = { v: 0 }
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          sessionStorage.setItem('nx_pre', '1')
          document.documentElement.style.overflow = ''
          setShow(false)
        },
      })
      tl.fromTo(logo.current, { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 1, ease: 'power3.inOut' }, 0)
        .to(o, { v: 100, duration: 1.5, ease: 'power2.inOut', onUpdate: () => (num.current.textContent = String(Math.round(o.v)).padStart(3, '0')) }, 0)
        .to(bar.current, { scaleX: 1, duration: 1.5, ease: 'power2.inOut' }, 0)
        .to(root.current, { yPercent: -100, duration: 0.8, ease: 'expo.inOut' }, 1.6)
    }, root)
    return () => {
      ctx.revert()
      document.documentElement.style.overflow = ''
    }
  }, [show])

  if (!show) return null
  return (
    <div ref={root} className="dark-ui fixed inset-0 z-[400] flex flex-col justify-between bg-dark p-6 text-white md:p-10" role="status" aria-label="Loading">
      <div className="mono text-white/50">Nexora Labs · Studio</div>
      <div className="flex items-end justify-between gap-6">
        <div ref={logo} className="scale-[1.6] origin-bottom-left md:scale-[2.4]">
          <Logo dark />
        </div>
        <div ref={num} className="display text-[clamp(64px,14vw,200px)] leading-[0.8] tabular-nums">000</div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-blue via-violet to-pink" ref={bar} />
    </div>
  )
}
