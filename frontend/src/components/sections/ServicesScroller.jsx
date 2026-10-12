import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { gsap, ScrollTrigger } from '../../lib/gsap'
import { engine } from '../../hooks/useScrollSmooth'
import { SERVICES } from '../../data/services'
import { A } from '../../data/site'
import { Obj } from '../ui/Img'
import { TLink } from '../ui/TLink'
import { Eyebrow, H, It } from '../ui/Type'

const BG_CONFIG = [
  { bg: '#F2EEFF', glow: 'rgba(195, 175, 255, 0.42)', dot: '#7C5CFF' }, // 01 Product Engineering (lavender)
  { bg: '#EBF3FF', glow: 'rgba(175, 215, 255, 0.42)', dot: '#3B82F6' }, // 02 AI & Agents (sky)
  { bg: '#ECF9F1', glow: 'rgba(165, 240, 195, 0.42)', dot: '#10B981' }, // 03 Automation (mint)
  { bg: '#FFF2E8', glow: 'rgba(255, 210, 180, 0.42)', dot: '#F97316' }, // 04 Cloud & DevOps (peach)
  { bg: '#FFFCE8', glow: 'rgba(255, 235, 150, 0.42)', dot: '#EAB308' }, // 05 Data Platforms (butter)
  { bg: '#FFF0F5', glow: 'rgba(255, 195, 220, 0.42)', dot: '#EC4899' }, // 06 Design Systems (blush)
]

/** Services horizontal scroll: pins on desktop/tablet, scrubs through cards, and supports mouse drag with dynamic background transitions. */
export function ServicesScroller() {
  const pinRef = useRef(null)
  const trackRef = useRef(null)
  const [activeIdx, setActiveIdx] = useState(0)
  const isDragging = useRef(false)
  const dragStartX = useRef(0)
  const dragStartScrollY = useRef(0)
  const hasMoved = useRef(false)

  useEffect(() => {
    const pin = pinRef.current
    const track = trackRef.current
    if (!pin || !track) return

    let st = null
    let ctx = null

    const initPin = () => {
      // Pin on desktop and tablet screens (>= 768px)
      if (window.innerWidth < 768) return

      ctx = gsap.context(() => {
        const getScrollAmount = () => track.scrollWidth - window.innerWidth + 200

        st = ScrollTrigger.create({
          trigger: pin,
          start: 'top top',
          end: () => `+=${getScrollAmount() * 1.25}`,
          pin: true,
          pinSpacing: true,
          scrub: 1.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const rawIdx = self.progress * (SERVICES.length - 1)
            const idx = Math.min(SERVICES.length - 1, Math.max(0, Math.round(rawIdx)))
            setActiveIdx((prev) => (prev !== idx ? idx : prev))
          },
          animation: gsap.to(track, {
            x: () => -getScrollAmount(),
            ease: 'none',
          }),
        })
      }, pinRef)
    }

    initPin()

    const handleResize = () => {
      if (st) {
        st.kill()
        st = null
      }
      if (ctx) {
        ctx.revert()
        ctx = null
      }
      initPin()
      ScrollTrigger.refresh()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (st) st.kill()
      if (ctx) ctx.revert()
    }
  }, [])

  // Mouse click-and-drag interaction
  const handlePointerDown = (e) => {
    if (e.button !== 0) return
    isDragging.current = true
    hasMoved.current = false
    dragStartX.current = e.clientX
    dragStartScrollY.current = window.scrollY
    if (trackRef.current) {
      trackRef.current.style.cursor = 'grabbing'
      try {
        trackRef.current.setPointerCapture?.(e.pointerId)
      } catch {}
    }
  }

  const handlePointerMove = (e) => {
    if (!isDragging.current) return
    const dx = e.clientX - dragStartX.current
    if (Math.abs(dx) > 4) {
      hasMoved.current = true
    }
    const targetY = dragStartScrollY.current - dx * 1.5
    if (engine.lenis) {
      engine.lenis.scrollTo(targetY, { duration: 1.2, immediate: false })
    } else {
      window.scrollTo({ top: targetY, behavior: 'smooth' })
    }
  }

  const handlePointerUp = (e) => {
    if (!isDragging.current) return
    isDragging.current = false
    if (trackRef.current) {
      trackRef.current.style.cursor = 'grab'
      try {
        trackRef.current.releasePointerCapture?.(e.pointerId)
      } catch {}
    }
  }

  const handleLinkClick = (e) => {
    if (hasMoved.current) {
      e.preventDefault()
      e.stopPropagation()
    }
  }

  const currentTheme = BG_CONFIG[activeIdx] || BG_CONFIG[0]

  return (
    <section
      ref={pinRef}
      data-bg="light"
      className="relative overflow-hidden py-16 md:py-0 md:h-screen md:flex md:flex-col md:justify-center will-change-[background-color] transition-colors duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
      style={{
        backgroundColor: currentTheme.bg,
      }}
    >
      {/* Ambient soft glow aura that transitions with active card color */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-70 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          background: `radial-gradient(ellipse 70% 60% at 50% 50%, ${currentTheme.glow} 0%, transparent 80%)`,
        }}
        aria-hidden="true"
      />

      <div className="wrap mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <Eyebrow dot={currentTheme.dot}>Services in motion</Eyebrow>
          <H size="lg" className="mt-4">
            Built to move <It>fast.</It>
          </H>
        </div>
        <p className="lede max-w-[32ch]">
          Horizontal perspective on our six core disciplines. Scroll down to glide through.
        </p>
      </div>

      <div className="relative w-full flex items-center">
        {/* Left Rotated Label */}
        <div className="hidden lg:flex absolute left-8 z-20 items-center justify-center">
          <span className="vertical-label mono text-ink/30 text-xs tracking-[0.3em]">
            SERVICES / 2026
          </span>
        </div>

        {/* Track */}
        <div
          ref={trackRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className="flex gap-6 px-6 lg:pl-32 lg:pr-24 overflow-x-auto md:overflow-visible no-scrollbar will-change-transform select-none cursor-grab active:cursor-grabbing"
        >
          {SERVICES.map((s, idx) => {
            const isCurrent = idx === activeIdx
            return (
              <TLink
                key={s.id}
                to="/services"
                onClick={handleLinkClick}
                onMouseEnter={() => setActiveIdx(idx)}
                draggable={false}
                className={`group tinted tint-${s.tint} card flex-none w-[85vw] max-w-[380px] sm:max-w-[420px] rounded-[24px] p-7 flex flex-col justify-between shadow-sm relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
                  isCurrent
                    ? 'scale-100 shadow-[0_20px_45px_-12px_rgba(40,30,90,0.18)] ring-2 ring-white/80'
                    : 'scale-[0.97] opacity-85 hover:opacity-100 hover:scale-[0.99]'
                }`}
                style={{ minHeight: '460px' }}
              >
                <div className="flex items-start justify-between z-10">
                  <span className="tag">0{idx + 1} / DISCIPLINE</span>
                  <span className="arrow-btn">
                    <ArrowUpRight />
                  </span>
                </div>

                {/* 3D Focal Imagery */}
                <div className="my-auto py-6 flex justify-center items-center relative">
                  <div
                    className={`w-48 h-48 relative flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isCurrent ? 'scale-105' : 'group-hover:scale-105'
                    }`}
                  >
                    <Obj img={A.obj[s.obj]} className="w-full h-full object-contain" />
                  </div>
                </div>

                <div className="z-10 mt-auto">
                  <h3 className="display h-sm text-ink">{s.t}</h3>
                  <p className="mt-2 text-sm text-ink/70 line-clamp-2 leading-relaxed">{s.line}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {s.chips.slice(0, 3).map((chip) => (
                      <span key={chip} className="text-[11px] font-mono uppercase bg-white/70 px-2.5 py-1 rounded-full text-ink/80">
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </TLink>
            )
          })}
        </div>
      </div>
    </section>
  )
}
