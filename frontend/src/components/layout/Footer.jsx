import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ArrowUp, Check } from 'lucide-react'
import { gsap, MQ } from '../../lib/gsap'
import { FOOTER_COLS, SITE } from '../../data/site'
import { TLink } from '../ui/TLink'
import { Logo } from './Logo'
import { scrollToTop } from '../../hooks/useScrollSmooth'

const WORD = 'NEXORA LABS'

/** Giant wordmark scaled to full width. Letters rise in, then fill with colour as you scroll. */
function Wordmark() {
  const box = useRef(null)
  const probe = useRef(null)
  const [fs, setFs] = useState(160)

  useLayoutEffect(() => {
    const fit = () => {
      if (!box.current || !probe.current) return
      const w100 = probe.current.getBoundingClientRect().width
      if (w100) setFs((box.current.clientWidth / w100) * 100)
    }
    fit()
    document.fonts?.ready.then(fit)
    const ro = new ResizeObserver(fit)
    ro.observe(box.current)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    const mm = gsap.matchMedia()
    const ctx = gsap.context(() => {
      mm.add({ ok: MQ.motion, reduce: MQ.reduce }, (c) => {
        const fills = box.current.querySelectorAll('.ch-f')
        const outs = box.current.querySelectorAll('.ch-o')
        if (c.conditions.reduce) {
          gsap.set(fills, { clipPath: 'inset(0 0% 0 0)' })
          return
        }
        gsap.set(fills, { clipPath: 'inset(0 100% 0 0)' })
        gsap.from([...outs, ...fills], {
          yPercent: 105,
          duration: 1.3,
          ease: 'expo.out',
          stagger: 0.045,
          scrollTrigger: { trigger: box.current, start: 'top 98%', once: true },
        })
        gsap.to(fills, {
          clipPath: 'inset(0 0% 0 0)',
          ease: 'none',
          stagger: 0.12,
          scrollTrigger: { trigger: box.current, start: 'top 92%', end: 'bottom 55%', scrub: 0.6 },
        })
      })
    }, box)
    return () => {
      mm.revert()
      ctx.revert()
    }
  }, [])

  const chars = WORD.split('')
  const color = (i) => gsap.utils.interpolate(['#3B5BFF', '#7B61FF', '#C45CB0', '#FFD93D'], i / (chars.length - 1))
  const row = (kind) =>
    chars.map((ch, i) => (
      <span key={i} className="mask">
        <span className={kind === 'f' ? 'ch-f inline-block' : 'ch-o outline'} style={kind === 'f' ? { color: color(i) } : undefined}>
          {ch === ' ' ? '\u00A0' : ch}
        </span>
      </span>
    ))

  return (
    <div ref={box} className="relative w-full select-none overflow-hidden" aria-hidden="true">
      <span ref={probe} className="wordmark pointer-events-none invisible absolute left-0 top-0" style={{ fontSize: 100 }}>
        {WORD.replace(' ', '\u00A0')}
      </span>
      <div className="wordmark-stack" style={{ height: `${fs * 0.86}px` }}>
        <div className="wordmark absolute inset-0" style={{ fontSize: fs }}>
          {row('o')}
        </div>
        <div className="wordmark fill" style={{ fontSize: fs }}>
          {row('f')}
        </div>
      </div>
    </div>
  )
}

export function Footer() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const submit = (e) => {
    e.preventDefault()
    if (!email) return
    setDone(true)
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
            <form onSubmit={submit} className="mt-8 flex max-w-md items-center gap-2 rounded-full border border-white/20 p-1.5 pl-5 focus-within:border-yellow">
              <label htmlFor="ft-email" className="sr-only">Email address</label>
              <input
                id="ft-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email for field notes"
                className="min-w-0 flex-1 bg-transparent text-[15px] text-white outline-none placeholder:text-white/40"
              />
              <button type="submit" className="btn btn-yellow btn-sm !px-5" aria-live="polite">
                {done ? (<><Check size={16} /> Subscribed</>) : 'Subscribe'}
              </button>
            </form>
            <p className="mt-6 flex items-center gap-3 text-sm text-white/70">
              <span className="live-dot" aria-hidden="true" /> Taking on projects for Q4 — 2 slots left
            </p>
          </div>

          <nav aria-label="Footer" className="col-span-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7 lg:pl-16">
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
          <span>© 2026 Nexora Labs · {SITE.city}</span>
          <a href={`mailto:${SITE.email}`} className="min-h-6 hover:text-white">{SITE.email}</a>
          <button type="button" onClick={() => scrollToTop(false)} className="inline-flex min-h-11 items-center gap-2 hover:text-white">
            Back to top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}
