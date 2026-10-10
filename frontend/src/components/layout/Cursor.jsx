'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Curated vivid & happy color palette for following stars and sparkles
 */
const VIBRANT_COLORS = [
  '#FFD93D', // Sunshine gold
  '#7B61FF', // Electric violet
  '#3B5BFF', // Sapphire blue
  '#FF6584', // Coral pink
  '#00F2FE', // Cyan aqua
  '#34D399', // Mint emerald
  '#F472B6', // Rose blush
  '#A855F7', // Neon purple
  '#FB923C', // Peach flame
]

const PARTICLE_TYPES = ['star4', 'star5', 'heart', 'dot', 'cross']

/**
 * High-performance canvas particle renderer
 * Renders cute stars, mini hearts, sparkles, and glowing bubble dots
 */
function renderParticle(ctx, p) {
  const { x, y, size, color, rotation, opacity, type } = p
  if (opacity <= 0.01) return

  ctx.save()
  ctx.translate(x, y)
  ctx.globalAlpha = Math.max(0, Math.min(1, opacity))
  ctx.fillStyle = color
  ctx.shadowColor = color
  ctx.shadowBlur = size * 1.5

  if (type === 'star4') {
    // ✦ Cute 4-point Diamond Sparkle Star
    ctx.rotate(rotation)
    ctx.beginPath()
    ctx.moveTo(0, -size)
    ctx.quadraticCurveTo(0, 0, size, 0)
    ctx.quadraticCurveTo(0, 0, 0, size)
    ctx.quadraticCurveTo(0, 0, -size, 0)
    ctx.quadraticCurveTo(0, 0, 0, -size)
    ctx.closePath()
    ctx.fill()
  } else if (type === 'star5') {
    // ★ Cute 5-point Twinkle Star
    ctx.rotate(rotation)
    ctx.beginPath()
    const spikes = 5
    const outer = size
    const inner = size * 0.44
    let rot = (Math.PI / 2) * 3
    const step = Math.PI / spikes
    ctx.moveTo(0, -outer)
    for (let i = 0; i < spikes; i++) {
      ctx.lineTo(Math.cos(rot) * outer, Math.sin(rot) * outer)
      rot += step
      ctx.lineTo(Math.cos(rot) * inner, Math.sin(rot) * inner)
      rot += step
    }
    ctx.closePath()
    ctx.fill()
  } else if (type === 'heart') {
    // ♥ Adorable Mini Heart
    ctx.rotate(rotation)
    const s = size * 0.8
    ctx.beginPath()
    ctx.moveTo(0, s * 0.3)
    ctx.bezierCurveTo(-s * 0.55, -s * 0.5, -s * 1.05, s * 0.3, 0, s)
    ctx.bezierCurveTo(s * 1.05, s * 0.3, s * 0.55, -s * 0.5, 0, s * 0.3)
    ctx.closePath()
    ctx.fill()
  } else if (type === 'cross') {
    // ✤ Cute 4-way Glint Cross
    ctx.rotate(rotation)
    const s = size
    const w = s * 0.28
    ctx.beginPath()
    ctx.rect(-s, -w, s * 2, w * 2)
    ctx.rect(-w, -s, w * 2, s * 2)
    ctx.fill()
  } else {
    // ● Cute Glowing Bubble Dot with pearlescent highlight
    const s = Math.max(1.5, size * 0.55)
    ctx.beginPath()
    ctx.arc(0, 0, s, 0, Math.PI * 2)
    ctx.fill()
    // Specular shine
    ctx.fillStyle = '#FFFFFF'
    ctx.beginPath()
    ctx.arc(-s * 0.3, -s * 0.3, s * 0.35, 0, Math.PI * 2)
    ctx.fill()
  }

  ctx.restore()
}

/**
 * Creative Custom Cursor System
 * 1. Precision designer arrow pointer (default)
 * 2. Cute friendly pointing hand with colorful cuff (on hover)
 * 3. Smooth following trail of cute colorful stars, hearts, and sparkles
 * 4. Starburst explosion on click
 * 5. Buttery smooth 120 FPS performance with zero layout thrashing
 */
export function Cursor() {
  const canvasRef = useRef(null)
  const pointerRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    // Enable on any device that isn't a small touch-only screen
    if (typeof window === 'undefined') return
    const isTouchMobile = 'ontouchstart' in window && window.innerWidth < 768 && !window.matchMedia('(any-pointer: fine)').matches
    if (isTouchMobile) return

    document.documentElement.classList.add('has-cursor')

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let dpr = window.devicePixelRatio || 1
    const resizeCanvas = () => {
      dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas, { passive: true })

    const particles = []
    let lastX = -100
    let lastY = -100
    let animId = null
    let colorIdx = 0

    const spawnParticle = (x, y, burst = false, angle = 0, speed = 1) => {
      const type = burst
        ? PARTICLE_TYPES[Math.floor(Math.random() * (PARTICLE_TYPES.length - 1))] // stars & hearts on burst
        : PARTICLE_TYPES[colorIdx % PARTICLE_TYPES.length]

      const color = VIBRANT_COLORS[colorIdx % VIBRANT_COLORS.length]
      colorIdx++

      const size = burst ? Math.random() * 4.5 + 4.5 : Math.random() * 3.5 + 3
      const maxLife = burst ? Math.floor(Math.random() * 24 + 28) : Math.floor(Math.random() * 20 + 22)

      let vx = (Math.random() - 0.5) * 0.9
      let vy = (Math.random() - 0.5) * 0.9 - 0.25

      if (burst) {
        vx = Math.cos(angle) * speed
        vy = Math.sin(angle) * speed
      }

      particles.push({
        x,
        y,
        vx,
        vy,
        size,
        color,
        type,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.16,
        life: maxLife,
        maxLife,
      })
    }

    // 120 FPS buttery smooth animation render loop
    const render = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.life--

        if (p.life <= 0) {
          particles.splice(i, 1)
          continue
        }

        p.x += p.vx
        p.y += p.vy
        p.vx *= 0.96
        p.vy *= 0.96
        p.vy -= 0.035 // gentle floating upward lift like fairy dust
        p.rotation += p.rotSpeed

        const progress = p.life / p.maxLife
        const opacity = progress > 0.8 ? (1 - progress) * 5 : progress * 1.15
        const scale = progress < 0.2 ? progress / 0.2 : 1

        renderParticle(ctx, {
          x: p.x,
          y: p.y,
          size: p.size * scale,
          color: p.color,
          rotation: p.rotation,
          opacity,
          type: p.type,
        })
      }

      animId = requestAnimationFrame(render)
    }

    animId = requestAnimationFrame(render)

    // Direct mouse tracking for zero-latency 1:1 crisp pointer response
    const handleMouseMove = (e) => {
      const mouseX = e.clientX
      const mouseY = e.clientY

      if (pointerRef.current) {
        pointerRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
        pointerRef.current.style.opacity = '1'
      }

      // First move initialization
      if (lastX < 0) {
        lastX = mouseX
        lastY = mouseY
        return
      }

      const dx = mouseX - lastX
      const dy = mouseY - lastY
      const dist = Math.hypot(dx, dy)

      // Interpolate along path so trail is unbroken even during rapid mouse movements
      if (dist > 7) {
        const steps = Math.min(5, Math.max(1, Math.floor(dist / 12)))
        for (let s = 1; s <= steps; s++) {
          const interpX = lastX + (dx * s) / steps + (Math.random() - 0.5) * 4
          const interpY = lastY + (dy * s) / steps + (Math.random() - 0.5) * 4
          spawnParticle(interpX, interpY)
        }
        lastX = mouseX
        lastY = mouseY
      }
    }

    // Starburst explosion on click!
    const handleMouseDown = (e) => {
      setIsClicking(true)
      const count = 14
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.35
        const speed = Math.random() * 2.8 + 1.2
        spawnParticle(e.clientX, e.clientY, true, angle, speed)
      }
    }

    const handleMouseUp = () => {
      setIsClicking(false)
    }

    // Detect clickable interactive targets
    const handleMouseOver = (e) => {
      const target = e.target
      if (!(target instanceof Element)) return
      const isClickable = target.closest(
        'a, button, [role="button"], [role="tab"], input, select, textarea, [data-cursor], .cursor-pointer'
      )
      setIsHovering(Boolean(isClickable))
    }

    const handleMouseLeaveWindow = (e) => {
      if (!e.relatedTarget && pointerRef.current) {
        pointerRef.current.style.opacity = '0'
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseover', handleMouseOver, { passive: true })
    document.addEventListener('mouseout', handleMouseLeaveWindow)

    return () => {
      document.documentElement.classList.remove('has-cursor')
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseLeaveWindow)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-[400] overflow-hidden" aria-hidden="true">
      {/* 1. Canvas Trail of Colorful Stars, Sparkles & Cute Shapes */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-0 will-change-transform"
      />

      {/* 2. Custom Interactive Pointer with Zero Lag */}
      <div
        ref={pointerRef}
        className="pointer-events-none absolute left-0 top-0 z-10 will-change-transform opacity-0 transition-opacity duration-150"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      >
        <div
          className={`relative transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isClicking ? 'scale-[0.84]' : isHovering ? 'scale-[1.12]' : 'scale-100'
          }`}
        >
          {isHovering ? (
            /* Cute interactive pointer hand with glowing cuff & star */
            <div className="-translate-x-2 -translate-y-2 drop-shadow-[0_4px_16px_rgba(123,97,255,0.45)]">
              <svg width="30" height="30" viewBox="0 0 28 28" fill="none" style={{ overflow: 'visible' }}>
                <defs>
                  <linearGradient id="handCuffGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#7B61FF" />
                    <stop offset="100%" stopColor="#3B5BFF" />
                  </linearGradient>
                </defs>
                {/* Hand silhouette */}
                <path
                  d="M7 2.5C5.8 2.5 5 3.4 5 4.6V15.2L4 14C3.2 13 1.7 12.8 1.1 13.8C0.5 14.7 0.8 15.9 1.6 16.8L6 21.8C7.2 23.1 8.9 23.8 10.7 23.8H16.8C20.1 23.8 22.8 21.1 22.8 17.8V11.5C22.8 10.4 21.9 9.5 20.8 9.5C20.5 9.5 20.2 9.6 19.9 9.7C19.6 9 18.8 8.5 17.9 8.5C17.6 8.5 17.3 8.6 17 8.7C16.6 8 15.9 7.5 15 7.5C14.8 7.5 14.5 7.5 14.3 7.6V4.6C14.3 3.4 13.4 2.5 12.3 2.5C11.2 2.5 10.3 3.4 10.3 4.6V11.5H8.8V4.6C8.8 3.4 7.9 2.5 7 2.5Z"
                  fill="#FFFFFF"
                  stroke="#0A0A12"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Cute gradient wrist cuff */}
                <rect x="7" y="23" width="12" height="4" rx="2" fill="url(#handCuffGrad)" stroke="#0A0A12" strokeWidth="1.5" />
                {/* Cute sparkling star on palm */}
                <circle cx="13" cy="15.5" r="2.2" fill="#FFD93D" />
                <path
                  d="M13 12.8V18.2M10.3 15.5H15.7"
                  stroke="#7B61FF"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          ) : (
            /* Sleek modern designer precision arrow pointer */
            <div className="-translate-x-0.5 -translate-y-0.5 drop-shadow-[0_3px_12px_rgba(59,91,255,0.45)]">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" style={{ overflow: 'visible' }}>
                <defs>
                  <linearGradient id="arrowCoreGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#FFD93D" />
                    <stop offset="45%" stopColor="#FF6584" />
                    <stop offset="100%" stopColor="#7B61FF" />
                  </linearGradient>
                </defs>
                {/* Outer crisp arrow frame */}
                <path
                  d="M1 1L8.5 20.5L12 12.5L20 9L1 1Z"
                  fill="#0A0A14"
                  stroke="#FFFFFF"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                {/* Glowing colorful interior jewel accent */}
                <path
                  d="M5.5 6.5L9.5 15L11.5 11L15 9.5L5.5 6.5Z"
                  fill="url(#arrowCoreGrad)"
                />
                {/* Golden sparkle glint at tip */}
                <circle cx="2" cy="2" r="1.3" fill="#FFD93D" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
