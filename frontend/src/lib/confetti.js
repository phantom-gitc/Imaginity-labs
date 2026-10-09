/**
 * Lightweight Canvas Confetti burst using Imaginity brand colors.
 */
export function fireConfetti() {
  if (typeof window === 'undefined') return

  const canvas = document.createElement('canvas')
  canvas.style.position = 'fixed'
  canvas.style.inset = '0'
  canvas.style.width = '100vw'
  canvas.style.height = '100vh'
  canvas.style.pointerEvents = 'none'
  canvas.style.zIndex = '9999'
  document.body.appendChild(canvas)

  const ctx = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const colors = ['#3B5BFF', '#7B61FF', '#C45CB0', '#FFD93D', '#DDF5E6', '#FFE1EA']
  const count = 75
  const particles = []

  const cx = canvas.width / 2
  const cy = canvas.height * 0.45

  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2
    const speed = 6 + Math.random() * 12
    particles.push({
      x: cx,
      y: cy,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 4,
      size: 5 + Math.random() * 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 1,
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 12,
      decay: 0.012 + Math.random() * 0.015,
      gravity: 0.28,
    })
  }

  let rafId
  const update = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    let alive = false

    particles.forEach((p) => {
      p.x += p.vx
      p.y += p.vy
      p.vy += p.gravity
      p.vx *= 0.98
      p.rotation += p.vRot
      p.alpha -= p.decay

      if (p.alpha > 0) {
        alive = true
        ctx.save()
        ctx.globalAlpha = Math.max(0, p.alpha)
        ctx.translate(p.x, p.y)
        ctx.rotate((p.rotation * Math.PI) / 180)
        ctx.fillStyle = p.color
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7)
        ctx.restore()
      }
    })

    if (alive) {
      rafId = requestAnimationFrame(update)
    } else {
      cancelAnimationFrame(rafId)
      canvas.remove()
    }
  }

  rafId = requestAnimationFrame(update)
}
