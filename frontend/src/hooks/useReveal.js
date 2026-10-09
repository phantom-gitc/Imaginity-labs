import { useLayoutEffect } from 'react'
import { gsap, SplitText, MQ, introDelay } from '../lib/gsap'

/**
 * Data-attribute reveal system. Put the hook once on a page/section root and mark elements:
 *   data-reveal="lines"   SplitText masked line reveal (italic .it words fade in last)
 *   data-reveal="up"      fade + rise
 *   data-reveal="fade"    fade
 *   data-reveal="stagger" children fade-up in sequence
 *   data-reveal="mask"    clip-path inset reveal + inner [data-inner] scale 1.15 → 1
 *   data-reveal="draw"    SVG stroke draw (hand-drawn underline)
 *   data-parallax="8"     scroll parallax (yPercent ±8, desktop only)
 *   data-count="120"      count-up once on enter (optional data-decimals)
 *   data-intro            run immediately (after preloader) instead of on scroll
 *   data-delay="0.2"      extra delay in seconds
 * Motion: full on desktop, lighter on mobile, nothing under prefers-reduced-motion.
 */
export function useReveal(scope, deps = []) {
  useLayoutEffect(() => {
    const root = scope.current
    if (!root) return undefined
    const mm = gsap.matchMedia()
    const ctx = gsap.context(() => {
      mm.add({ desk: MQ.desktop, mob: MQ.mobile, reduce: MQ.reduce }, (c) => {
        const { mob, reduce } = c.conditions
        const q = (sel) => gsap.utils.toArray(root.querySelectorAll(sel))
        const dist = mob ? 24 : 48
        const dur = mob ? 0.7 : 0.95

        if (reduce) {
          q('[data-count]').forEach((el) => (el.textContent = el.dataset.count))
          return
        }

        const trig = (el, intro, start = 'top 88%') =>
          intro ? undefined : { trigger: el, start, once: true }
        const delayOf = (el) => (el.hasAttribute('data-intro') ? introDelay() : 0) + parseFloat(el.dataset.delay || 0)

        // --- text lines
        q('[data-reveal="lines"]').forEach((el) => {
          const intro = el.hasAttribute('data-intro')
          SplitText.create(el, {
            type: 'lines',
            mask: 'lines',
            linesClass: 'ln',
            autoSplit: true,
            onSplit(self) {
              el.style.visibility = 'visible'
              const tl = gsap.timeline({ delay: delayOf(el), scrollTrigger: trig(el, intro, 'top 90%') })
              tl.from(self.lines, { yPercent: 115, duration: mob ? 0.8 : 1.15, ease: 'expo.out', stagger: mob ? 0.06 : 0.09 })
              const its = el.querySelectorAll('.it')
              if (its.length) tl.from(its, { opacity: 0, duration: 0.9, ease: 'power2.out' }, '-=0.55')
              return tl
            },
          })
        })

        // --- up / fade
        q('[data-reveal="up"]').forEach((el) => {
          gsap.fromTo(
            el,
            { y: dist, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: dur,
              delay: delayOf(el),
              ease: 'power3.out',
              scrollTrigger: trig(el, el.hasAttribute('data-intro'), 'top 90%'),
              onComplete: () => gsap.set(el, { clearProps: 'transform' }),
            },
          )
        })
        q('[data-reveal="fade"]').forEach((el) => {
          gsap.to(el, {
            opacity: 1,
            duration: 1,
            delay: delayOf(el),
            ease: 'power2.out',
            scrollTrigger: trig(el, el.hasAttribute('data-intro'), 'top 92%'),
          })
        })

        // --- stagger children
        q('[data-reveal="stagger"]').forEach((el) => {
          gsap.fromTo(
            el.children,
            { y: dist, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: dur,
              stagger: mob ? 0.06 : 0.09,
              delay: delayOf(el),
              ease: 'power3.out',
              scrollTrigger: trig(el, el.hasAttribute('data-intro'), 'top 88%'),
              onComplete: () => gsap.set(el.children, { clearProps: 'transform' }),
            },
          )
        })

        // --- image mask reveal
        q('[data-reveal="mask"]').forEach((el) => {
          const inner = el.querySelector('[data-inner]')
          const st = trig(el, el.hasAttribute('data-intro'), 'top 90%')
          const tl = gsap.timeline({ scrollTrigger: st, delay: delayOf(el) })
          tl.fromTo(
            el,
            { clipPath: 'inset(100% 0% 0% 0%)' },
            { clipPath: 'inset(0% 0% 0% 0%)', duration: mob ? 1 : 1.35, ease: 'expo.out' },
          )
          if (inner) {
            tl.fromTo(inner, { scale: 1.15 }, { scale: 1, duration: 1.6, ease: 'expo.out', onComplete: () => gsap.set(inner, { clearProps: 'transform' }) }, 0)
          }
        })

        // --- svg draw
        q('[data-reveal="draw"] path, path[data-reveal="draw"]').forEach((p) => {
          const len = p.getTotalLength()
          const host = p.closest('[data-reveal="draw"]') || p
          gsap.set(p, { strokeDasharray: len, strokeDashoffset: len })
          gsap.to(p, {
            strokeDashoffset: 0,
            duration: 1.1,
            ease: 'power2.inOut',
            delay: delayOf(host) + 0.15,
            scrollTrigger: trig(host, host.hasAttribute('data-intro'), 'top 92%'),
          })
        })

        // --- counters
        q('[data-count]').forEach((el) => {
          const end = parseFloat(el.dataset.count)
          const dec = parseInt(el.dataset.decimals || 0, 10)
          const o = { v: 0 }
          el.textContent = (0).toFixed(dec)
          gsap.to(o, {
            v: end,
            duration: 2.2,
            ease: 'power2.out',
            onUpdate: () => (el.textContent = o.v.toFixed(dec)),
            scrollTrigger: { trigger: el, start: 'top 92%', once: true },
          })
        })

        // --- parallax (desktop only)
        if (!mob) {
          q('[data-parallax]').forEach((el) => {
            const v = parseFloat(el.dataset.parallax) || 8
            gsap.fromTo(
              el,
              { yPercent: -v },
              {
                yPercent: v,
                ease: 'none',
                scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
              },
            )
          })
        }
      })
    }, root)

    return () => {
      mm.revert()
      ctx.revert()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
