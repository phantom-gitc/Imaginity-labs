'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ArrowUp, Check } from 'lucide-react'
import { gsap } from '../../lib/gsap'
import { FOOTER_COLS, SITE } from '../../data/site'
import { TLink } from '../ui/TLink'
import { Logo } from './Logo'
import { scrollToTop } from '../../hooks/useScrollSmooth'

const WORD = 'SURENEXT'

/** Giant wordmark scaled to full width. Transparent outline by default; circular glowing spotlight illuminates vibrant colors on hover. */
function Wordmark() {
  const box = useRef(null)
  const probe = useRef(null)
  const glowRef = useRef(null)
  const fillRef = useRef(null)
  const [fs, setFs] = useState(160)
  const [isHovered, setIsHovered] = useState(false)

  // Smooth lerp tracking for 120fps buttery performance
  const targetX = useRef(0)
  const targetY = useRef(0)
  const currentX = useRef(0)
  const currentY = useRef(0)
  const rafId = useRef(null)

  useLayoutEffect(() => {
    const fit = () => {
      if (!box.current || !probe.current) return
      const w100 = probe.current.getBoundingClientRect().width
      // Leave a small right-side gutter so the final T's serif is never clipped,
      // even with negative tracking and the masked-letter reveal.
      if (w100) setFs(((box.current.clientWidth - 12) / w100) * 97)
    }
    fit()
    document.fonts?.ready.then(fit)
    const ro = new ResizeObserver(fit)
    ro.observe(box.current)
    return () => ro.disconnect()
  }, [])

  // Spotlight lerp runs only while hovered, so no rAF work when the footer is idle.
  useEffect(() => {
    if (!isHovered) return undefined
    const loop = () => {
      currentX.current += (targetX.current - currentX.current) * 0.16
      currentY.current += (targetY.current - currentY.current) * 0.16

      const x = Math.round(currentX.current)
      const y = Math.round(currentY.current)

      if (fillRef.current) {
        const mask = `radial-gradient(circle 280px at ${x}px ${y}px, black 30%, rgba(0,0,0,0.4) 65%, transparent 100%)`
        fillRef.current.style.maskImage = mask
        fillRef.current.style.webkitMaskImage = mask
      }

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
      }

      rafId.current = requestAnimationFrame(loop)
    }

    rafId.current = requestAnimationFrame(loop)
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [isHovered])

  // Entrance animation: Ensure letters are always visible by default (never trapped at yPercent 105)
  useEffect(() => {
    if (!box.current) return
    const letters = box.current.querySelectorAll('.mask > span')
    gsap.set(letters, { yPercent: 0, opacity: 1 })

    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const obs = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            gsap.fromTo(
              letters,
              { yPercent: 40, opacity: 0 },
              { yPercent: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.02, overwrite: 'auto' }
            )
            obs.disconnect()
          }
        },
        { threshold: 0.05 }
      )
      obs.observe(box.current)
      return () => obs.disconnect()
    }
  }, [])

  const handleMouseEnter = (e) => {
    if (!box.current) return
    const rect = box.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    targetX.current = x
    targetY.current = y
    currentX.current = x
    currentY.current = y
    setIsHovered(true)
  }

  const handleMouseMove = (e) => {
    if (!box.current) return
    const rect = box.current.getBoundingClientRect()
    targetX.current = e.clientX - rect.left
    targetY.current = e.clientY - rect.top
    if (!isHovered) setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const handleTouchMove = (e) => {
    if (!box.current || !e.touches[0]) return
    const rect = box.current.getBoundingClientRect()
    targetX.current = e.touches[0].clientX - rect.left
    targetY.current = e.touches[0].clientY - rect.top
    setIsHovered(true)
  }

  const handleTouchEnd = () => {
    setIsHovered(false)
  }

  const chars = WORD.split('')
  const color = (i) => gsap.utils.interpolate(['#3B5BFF', '#7B61FF', '#C45CB0', '#FFD93D'], i / (chars.length - 1))
  const row = (kind) =>
    chars.map((ch, i) => (
      <span key={i} className="mask">
        <span
          className={
            kind === 'f'
              ? 'ch-f inline-block transition-transform duration-300 hover:scale-105'
              : 'ch-o outline inline-block transition-opacity duration-300'
          }
          style={
            kind === 'f'
              ? {
                  color: color(i),
                  textShadow: `0 0 24px ${color(i)}80, 0 0 48px ${color(i)}40`,
                }
              : undefined
          }
        >
          {ch === ' ' ? '\u00A0' : ch}
        </span>
      </span>
    ))

  return (
    <div
      ref={box}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative w-full select-none overflow-hidden cursor-default group py-2"
      aria-hidden="true"
    >
      {/* 1. Interactive Circular Glowing Spotlight (Background Light) */}
      <div
        ref={glowRef}
        className={`pointer-events-none absolute size-[420px] rounded-full blur-[80px] transition-opacity duration-500 will-change-transform z-0 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background:
            'radial-gradient(circle, rgba(123, 97, 255, 0.75) 0%, rgba(59, 91, 255, 0.5) 35%, rgba(255, 101, 132, 0.35) 65%, rgba(255, 217, 61, 0.25) 85%, transparent 95%)',
        }}
      />

      <span ref={probe} className="wordmark pointer-events-none invisible absolute left-0 top-0" style={{ fontSize: 100 }}>
        {WORD.replace(' ', '\u00A0')}
      </span>

      <div className="wordmark-stack relative z-10" style={{ height: `${fs * 0.86}px` }}>
        {/* 2. Base Outline Layer: Crisp white architectural stroke across ALL letters */}
        <div className="wordmark absolute inset-0 select-none pointer-events-none" style={{ fontSize: fs }}>
          {row('o')}
        </div>

        {/* 3. Base Color Layer: Elegant subtle gradient fill so SURENEXT is always 100% visible */}
        <div className="wordmark absolute inset-0 select-none opacity-45 pointer-events-none" style={{ fontSize: fs }}>
          {row('f')}
        </div>

        {/* 4. Illuminated Spotlight Layer: 100% Intense Neon Radiance inside the cursor light beam */}
        <div
          ref={fillRef}
          className={`wordmark fill absolute inset-0 select-none pointer-events-none transition-opacity duration-300 ease-out ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ fontSize: fs }}
        >
          {row('f')}
        </div>
      </div>
    </div>
  )
}

export function Footer() {
  const [email, setEmail] = useState('')
  const [hp, setHp] = useState('')
  const [done, setDone] = useState(false)
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    if (!email || loading) return
    setErr('')
    setLoading(true)

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, hp }),
      })
      const data = await res.json()
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Subscription failed. Please try again.')
      }
      setDone(true)
    } catch (error) {
      setErr(error.message)
    } finally {
      setLoading(false)
    }
  }
  return (
    <footer id="footer" data-bg="light" className="px-3 pb-3 pt-10 md:px-5 md:pb-5">
      <div className="dark-ui relative overflow-hidden rounded-[32px] bg-dark px-6 pb-6 pt-14 text-white md:px-12 md:pt-20">
        <div className="blob -right-32 -top-40 h-[480px] w-[480px] opacity-30" aria-hidden="true" />
        <div className="line-grid" aria-hidden="true" />
        <div className="relative grid grid-cols-12 gap-x-6 gap-y-12">
          <div className="col-span-12 lg:col-span-5">
            <Logo dark />
            <p className="mt-6 max-w-[28ch] font-serif text-[clamp(28px,3vw,40px)] leading-[1.02]">
              Software, AI and automation for teams that <em className="it">ship.</em>
            </p>
            <p className="mt-2 text-xs text-white/50 font-mono tracking-wide">
              SureNext &middot; Software &amp; Product Studio
            </p>
            <form suppressHydrationWarning onSubmit={submit} className="mt-8 flex max-w-md items-center gap-2 rounded-full border border-white/20 p-1.5 pl-5 focus-within:border-yellow">
              {/* Honeypot field */}
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={hp}
                onChange={(e) => setHp(e.target.value)}
                style={{ display: 'none' }}
              />
              <label htmlFor="ft-email" className="sr-only">Email address</label>
              <input
                suppressHydrationWarning
                id="ft-email"
                type="email"
                required
                disabled={loading || done}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email for field notes"
                className="min-w-0 flex-1 bg-transparent text-[15px] text-white border-0 border-none outline-none ring-0 shadow-none focus:border-0 focus:border-none focus:outline-none focus:ring-0 focus-visible:outline-none placeholder:text-white/40"
              />
              <button suppressHydrationWarning type="submit" disabled={loading || done} className="btn btn-yellow btn-sm !px-5" aria-live="polite">
                {done ? (<><Check size={16} /> Subscribed</>) : loading ? 'Joining...' : 'Subscribe'}
              </button>
            </form>
            {err && <p className="mt-2 text-xs text-red-400">{err}</p>}
          </div>

          <nav aria-label="Footer" className="col-span-12 grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-7 lg:pl-10">
            {FOOTER_COLS.map((col) => (
              <div key={col.title}>
                <h2 className="mono text-white/45">{col.title}</h2>
                <ul className="mt-5 flex flex-col">
                  {col.links.map(([l, to]) => (
                    <li key={l}>
                      <TLink to={to} className="inline-flex min-h-11 items-center text-[17px] text-white/85 transition-colors hover:text-yellow">{l}</TLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="relative mt-16 md:mt-24">
          <Wordmark />
        </div>

        <div className="relative mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/55">
          <span>© 2026 SureNext · {SITE.city}</span>
          <a href={`mailto:${SITE.email}`} className="min-h-6 hover:text-white">{SITE.email}</a>
          <button suppressHydrationWarning type="button" onClick={() => scrollToTop(false)} className="inline-flex min-h-11 items-center gap-2 hover:text-white">
            Back to top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}
