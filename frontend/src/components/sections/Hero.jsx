import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Rocket, Star, TrendingUp, Move3d } from 'lucide-react'
import { gsap, MQ } from '../../lib/gsap'
import { A } from '../../data/site'
import { Button } from '../ui/Button'
import { Eyebrow, It, Underline } from '../ui/Type'
import { GradientBackdrop } from '../ui/GradientBackdrop'

const CHIPS = [
  { a: '-20deg', icon: Rocket, big: '120+', small: 'products shipped', rot: 'rot-a' },
  { a: '110deg', icon: TrendingUp, big: '98%', small: 'client retention', rot: 'rot-b' },
  { a: '225deg', icon: Star, big: '4.9', small: 'average rating', rot: 'rot-a' },
]

export function Hero() {
  const root = useRef(null)
  const blob = useRef(null)
  const stageRef = useRef(null)
  const orb3dRef = useRef(null)
  const glareRef = useRef(null)
  const shadowRef = useRef(null)
  
  const [isDragging, setIsDragging] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const dragStart = useRef({ x: 0, y: 0, rotX: 0, rotY: 0 })
  const currentRot = useRef({ x: 0, y: 0, z: 0, tx: 0, ty: 0 })

  useEffect(() => {
    const stage = stageRef.current
    const orb = orb3dRef.current
    const glare = glareRef.current
    const shadow = shadowRef.current
    if (!stage || !orb) return

    const mm = gsap.matchMedia()
    mm.add({ ok: `${MQ.fine} and ${MQ.motion}` }, () => {
      const bx = gsap.quickTo(blob.current, 'x', { duration: 1.4, ease: 'power3.out' })
      const by = gsap.quickTo(blob.current, 'y', { duration: 1.4, ease: 'power3.out' })

      const setOrbRotX = gsap.quickTo(orb, 'rotationX', { duration: 0.9, ease: 'power2.out' })
      const setOrbRotY = gsap.quickTo(orb, 'rotationY', { duration: 0.9, ease: 'power2.out' })
      const setOrbRotZ = gsap.quickTo(orb, 'rotation', { duration: 1.1, ease: 'power2.out' })
      const setOrbX = gsap.quickTo(orb, 'x', { duration: 1, ease: 'power2.out' })
      const setOrbY = gsap.quickTo(orb, 'y', { duration: 1, ease: 'power2.out' })
      
      const setShadowX = shadow ? gsap.quickTo(shadow, 'x', { duration: 1, ease: 'power2.out' }) : null
      const setShadowScaleX = shadow ? gsap.quickTo(shadow, 'scaleX', { duration: 1, ease: 'power2.out' }) : null
      const setShadowScaleY = shadow ? gsap.quickTo(shadow, 'scaleY', { duration: 1, ease: 'power2.out' }) : null

      const handleMouseMove = (e) => {
        if (dragStart.current.active) return

        const rect = stage.getBoundingClientRect()
        const stageCenterX = rect.left + rect.width / 2
        const stageCenterY = rect.top + rect.height / 2

        // Normalized relative to stage center with falloff
        const dx = (e.clientX - stageCenterX) / (window.innerWidth * 0.45)
        const dy = (e.clientY - stageCenterY) / (window.innerHeight * 0.45)
        const clampDx = Math.max(-1.2, Math.min(1.2, dx))
        const clampDy = Math.max(-1.2, Math.min(1.2, dy))

        // Background ambient blob
        const nxWin = e.clientX / window.innerWidth - 0.5
        const nyWin = e.clientY / window.innerHeight - 0.5
        bx(nxWin * 90)
        by(nyWin * 70)

        // 3D Tilt calculation
        const rotX = -clampDy * 26
        const rotY = clampDx * 32
        const rotZ = clampDx * 8
        const transX = clampDx * 22
        const transY = clampDy * 18

        currentRot.current = { x: rotX, y: rotY, z: rotZ, tx: transX, ty: transY }

        setOrbRotX(rotX)
        setOrbRotY(rotY)
        setOrbRotZ(rotZ)
        setOrbX(transX)
        setOrbY(transY)

        if (shadow && setShadowX && setShadowScaleX && setShadowScaleY) {
          const s = 1 - clampDy * 0.12
          setShadowX(-transX * 0.8)
          setShadowScaleX(s)
          setShadowScaleY(s)
        }

        // Move dynamic light glare
        if (glare) {
          const lightPercentX = Math.round(50 + clampDx * 35)
          const lightPercentY = Math.round(50 + clampDy * 35)
          glare.style.background = `radial-gradient(circle at ${lightPercentX}% ${lightPercentY}%, rgba(255, 255, 255, 0.42) 0%, rgba(200, 180, 255, 0.16) 35%, transparent 70%)`
        }
      }

      window.addEventListener('mousemove', handleMouseMove, { passive: true })
      return () => window.removeEventListener('mousemove', handleMouseMove)
    })

    return () => mm.revert()
  }, [])

  // Interactive mouse drag to rotate in 3D
  const handlePointerDown = (e) => {
    setIsDragging(true)
    setHasInteracted(true)
    dragStart.current = {
      active: true,
      startX: e.clientX,
      startY: e.clientY,
      baseRotX: currentRot.current.x,
      baseRotY: currentRot.current.y,
    }
    e.currentTarget.setPointerCapture?.(e.pointerId)
  }

  const handlePointerMove = (e) => {
    if (!dragStart.current.active || !orb3dRef.current) return
    const deltaX = e.clientX - dragStart.current.startX
    const deltaY = e.clientY - dragStart.current.startY

    const newRotY = dragStart.current.baseRotY + deltaX * 0.35
    const newRotX = Math.max(-45, Math.min(45, dragStart.current.baseRotX - deltaY * 0.35))
    const newRotZ = (deltaX * 0.08)

    currentRot.current.x = newRotX
    currentRot.current.y = newRotY
    currentRot.current.z = newRotZ

    gsap.to(orb3dRef.current, {
      rotationX: newRotX,
      rotationY: newRotY,
      rotation: newRotZ,
      duration: 0.15,
      ease: 'power1.out',
    })

    if (glareRef.current) {
      const lightPercentX = Math.round(50 + (newRotY / 45) * 35)
      const lightPercentY = Math.round(50 - (newRotX / 45) * 35)
      glareRef.current.style.background = `radial-gradient(circle at ${lightPercentX}% ${lightPercentY}%, rgba(255, 255, 255, 0.45) 0%, rgba(200, 180, 255, 0.2) 35%, transparent 70%)`
    }
  }

  const handlePointerUp = (e) => {
    setIsDragging(false)
    dragStart.current.active = false
    try {
      e.currentTarget.releasePointerCapture?.(e.pointerId)
    } catch {}

    // Smoothly spring back to rest position
    if (orb3dRef.current) {
      gsap.to(orb3dRef.current, {
        rotationX: 0,
        rotationY: 0,
        rotation: 0,
        x: 0,
        y: 0,
        duration: 1.2,
        ease: 'elastic.out(1, 0.5)',
      })
    }
  }

  return (
    <section ref={root} data-bg="light" data-hero className="relative isolate overflow-hidden pb-16 pt-32 md:min-h-[100svh] md:pb-24 md:pt-40">
      <GradientBackdrop variant="home" />
      <div className="dot-grid" aria-hidden="true" />

      <div className="wrap relative">
        <div className="g12 items-center gap-y-14">
          <div className="col-span-12 flex flex-col items-start gap-7 lg:col-span-7">
            <Eyebrow intro dot="#FFD93D">Imaginity Labs · Software &amp; AI Studio</Eyebrow>
            <div className="relative">
              <h1 data-reveal="lines" data-intro className="display h-hero">
                Software that <span className="relative inline-block"><It>moves</It><Underline intro className="-bottom-[0.08em] h-[0.2em]" /></span> business
              </h1>
            </div>
            <p data-reveal="up" data-intro data-delay="0.35" className="lede max-w-[34ch] !text-[17px]">
              Imaginity Labs engineers web applications, autonomous AI agents, and resilient automations for teams that ship.
            </p>
            <div data-reveal="up" data-intro data-delay="0.45" className="flex flex-wrap items-center gap-3">
              <Button to="/contact">Start a project</Button>
              <Button to="/work" variant="outline">See our work</Button>
            </div>
            <div data-reveal="up" data-intro data-delay="0.55" className="mt-2 flex items-center gap-4">
              <div className="flex -space-x-3">
                {A.portrait.map((p, i) => (
                  <Image key={i} src={p.src} width={88} height={88} unoptimized alt="" className="size-11 rounded-full border-2 border-bg object-cover" style={{ background: ['#E9E4FF', '#FFE1EA', '#DCEBFF', '#DDF5E6'][i] }} />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5 text-yellow" aria-label="Rated 4.9 out of 5">
                  {[0, 1, 2, 3, 4].map((i) => <Star key={i} size={15} fill="currentColor" strokeWidth={0} />)}
                  <span className="ml-2 text-sm font-medium text-ink">4.9</span>
                </div>
                <p className="muted text-[13px]">from 60+ founders and teams</p>
              </div>
            </div>
          </div>

          <div className="relative col-span-12 mx-auto w-full max-w-[440px] lg:col-span-5 lg:max-w-none" data-reveal="fade" data-intro data-delay="0.2">
            <div data-parallax="6" className="relative">
              {/* 3D Interactive Stage */}
              <div
                ref={stageRef}
                className="relative mx-auto aspect-square w-full max-w-[560px] select-none [perspective:1200px]"
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
              >
                {/* Floor dynamic contact shadow */}
                <div
                  ref={shadowRef}
                  className="pointer-events-none absolute bottom-[6%] left-1/2 -z-10 h-12 w-[68%] -translate-x-1/2 rounded-[100%] blur-xl"
                  style={{
                    background: 'radial-gradient(ellipse, rgba(76, 50, 140, 0.35) 0%, rgba(90, 60, 180, 0.15) 45%, transparent 75%)',
                  }}
                  aria-hidden="true"
                />

                {/* 3D Rotatable Parent Container */}
                <div
                  ref={orb3dRef}
                  className="relative size-full [transform-style:preserve-3d] will-change-transform"
                >
                  {/* Subtle ambient iridescent glow aura */}
                  <div
                    className="pointer-events-none absolute inset-[12%] -z-10 rounded-full opacity-60 blur-2xl"
                    style={{
                      background: 'radial-gradient(circle, rgba(147, 112, 219, 0.4) 0%, rgba(65, 105, 225, 0.25) 45%, transparent 70%)',
                      transform: 'translateZ(-40px)',
                    }}
                    aria-hidden="true"
                  />

                  {/* 3D Object with floating motion */}
                  <div
                    className="float relative size-full [transform-style:preserve-3d]"
                    style={{ transform: 'translateZ(40px)' }}
                  >
                    {/* Transparent 3D Hero Orb */}
                    <Image
                      src={A.hero.src}
                      width={A.hero.w}
                      height={A.hero.h}
                      alt="Glossy 3D iridescent orb and planetary ring"
                      priority
                      unoptimized
                      draggable="false"
                      className="pointer-events-none size-full select-none object-contain drop-shadow-[0_20px_35px_rgba(50,30,120,0.22)]"
                    />

                    {/* Dynamic reactive specular glass light sheen */}
                    <div
                      ref={glareRef}
                      className="pointer-events-none absolute inset-[18%] rounded-full opacity-70 mix-blend-overlay transition-opacity duration-300"
                      style={{
                        transform: 'translateZ(65px)',
                        background: 'radial-gradient(circle at 45% 45%, rgba(255, 255, 255, 0.45) 0%, rgba(200, 180, 255, 0.18) 35%, transparent 70%)',
                      }}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Orbiting Statistics Badges positioned in 3D space */}
                  <div
                    className="orbit pointer-events-none [--r:130px] sm:[--r:175px] lg:[--r:215px] [transform-style:preserve-3d]"
                    style={{ transform: 'translateZ(85px)' }}
                    aria-hidden="false"
                  >
                    {CHIPS.map((c) => (
                      <div key={c.big} className="orbit-item" style={{ '--a': c.a }}>
                        <div className="orbit-chip">
                          <div className={`glass ${c.rot} flex items-center gap-2.5 px-3 py-2 shadow-[0_12px_28px_-10px_rgba(40,40,120,.35)] transition-transform hover:scale-105`}>
                            <span className="ico-sq !size-8 !rounded-[10px]"><c.icon size={15} /></span>
                            <span className="leading-none">
                              <b className="display block text-[22px]">{c.big}</b>
                              <span className="mono !text-[9px] text-ink/55">{c.small}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Booking Q4 Badge floating in 3D */}
                  <div
                    className="pointer-events-auto absolute right-0 top-[2%] [transform-style:preserve-3d]"
                    style={{ transform: 'translateZ(95px)' }}
                  >
                    <span className="sticker rot-b inline-block shadow-md transition-transform hover:scale-105">
                      Booking Q4
                    </span>
                  </div>
                </div>

                {/* Interactive hint badge */}
                <div
                  className={`pointer-events-none absolute bottom-[-4px] left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-black/5 bg-white/70 px-3 py-1 text-[11px] font-medium tracking-wide text-ink/60 shadow-sm backdrop-blur-md transition-all duration-500 ${
                    hasInteracted ? 'opacity-0 translate-y-2' : 'opacity-80'
                  }`}
                >
                  <Move3d size={13} className="text-accent" />
                  <span>Interactive 3D · Drag or move mouse</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
