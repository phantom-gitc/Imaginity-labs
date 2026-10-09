import { useLayoutEffect } from 'react'
import { gsap, SplitText, MQ, introDelay } from '../lib/gsap'
import { DURATIONS, EASES, DISTANCES, STAGGERS } from './tokens'

/**
 * Universal Data-Attribute Reveal System
 * Supported attributes:
 *   data-reveal="up"       smooth rise & fade
 *   data-reveal="fade"     soft pure fade
 *   data-reveal="mask"     cinematic clip-path inset reveal + inner scale 1.15 -> 1
 *   data-reveal="scale"    scale up from 0.94 + fade
 *   data-reveal="stagger"  staggered children fade-up
 *   data-reveal="lines"    SplitText lines mask reveal (waits for document.fonts.ready)
 *   data-reveal="chars"    SplitText characters reveal (waits for document.fonts.ready)
 *   data-reveal="draw"     SVG path stroke-dashoffset draw
 *   data-parallax="8"      scroll-driven parallax
 *   data-count="120"       number count-up
 *   data-intro             run immediately after preloader
 *   data-delay="0.2"       extra delay
 */
export function useReveal(scope, deps = []) {
  useLayoutEffect(() => {
    const root = scope?.current || (typeof document !== 'undefined' ? document : null)
    if (!root) return undefined

    let isMounted = true
    const mm = gsap.matchMedia()
    const ctx = gsap.context(() => {
      mm.add(
        {
          desk: MQ.desktop,
          mob: MQ.mobile,
          reduce: MQ.reduce,
        },
        (c) => {
          const { mob, reduce } = c.conditions
          const q = (sel) => gsap.utils.toArray(root.querySelectorAll(sel))
          const dist = mob ? DISTANCES.sm : DISTANCES.lg
          const dur = mob ? DURATIONS.base : DURATIONS.base * 1.2

          // If reduced motion: instant fade in, no motion
          if (reduce) {
            q('[data-reveal]').forEach((el) => {
              el.style.opacity = '1'
              el.style.transform = 'none'
            })
            q('[data-count]').forEach((el) => {
              el.textContent = el.dataset.count
            })
            return
          }

          const trig = (el, intro, start = 'top 90%') =>
            intro ? undefined : { trigger: el, start, once: true }

          const delayOf = (el) =>
            (el.hasAttribute('data-intro') ? introDelay() : 0) +
            parseFloat(el.dataset.delay || 0)

          // 1. Text Lines Reveal (Wait for document.fonts.ready)
          const lineEls = q('[data-reveal="lines"]')
          if (lineEls.length > 0 && typeof document !== 'undefined') {
            document.fonts.ready.then(() => {
              if (!isMounted) return
              lineEls.forEach((el) => {
                const intro = el.hasAttribute('data-intro')
                SplitText.create(el, {
                  type: 'lines',
                  mask: 'lines',
                  linesClass: 'ln',
                  autoSplit: true,
                  onSplit(self) {
                    el.style.visibility = 'visible'
                    const tl = gsap.timeline({
                      delay: delayOf(el),
                      scrollTrigger: trig(el, intro, 'top 92%'),
                    })
                    tl.from(self.lines, {
                      yPercent: 115,
                      duration: mob ? DURATIONS.base : DURATIONS.slow,
                      ease: EASES.expo,
                      stagger: mob ? STAGGERS.quick : STAGGERS.base,
                    })
                    const its = el.querySelectorAll('.it')
                    if (its.length) {
                      tl.from(
                        its,
                        {
                          opacity: 0,
                          duration: DURATIONS.base,
                          ease: EASES.power2,
                        },
                        '-=0.55'
                      )
                    }
                    return tl
                  },
                })
              })
            })
          }

          // 2. Text Chars Reveal
          const charEls = q('[data-reveal="chars"]')
          if (charEls.length > 0 && typeof document !== 'undefined') {
            document.fonts.ready.then(() => {
              if (!isMounted) return
              charEls.forEach((el) => {
                const intro = el.hasAttribute('data-intro')
                SplitText.create(el, {
                  type: 'chars',
                  charsClass: 'ch',
                  onSplit(self) {
                    el.style.visibility = 'visible'
                    gsap.from(self.chars, {
                      opacity: 0,
                      y: 20,
                      duration: 0.6,
                      ease: EASES.power3,
                      stagger: 0.02,
                      delay: delayOf(el),
                      scrollTrigger: trig(el, intro, 'top 92%'),
                    })
                  },
                })
              })
            })
          }

          // 3. Up Reveal
          q('[data-reveal="up"]').forEach((el) => {
            gsap.fromTo(
              el,
              { y: dist, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: dur,
                delay: delayOf(el),
                ease: EASES.power3,
                scrollTrigger: trig(el, el.hasAttribute('data-intro'), 'top 90%'),
                onComplete: () => gsap.set(el, { clearProps: 'transform' }),
              }
            )
          })

          // 4. Fade Reveal
          q('[data-reveal="fade"]').forEach((el) => {
            gsap.fromTo(
              el,
              { opacity: 0 },
              {
                opacity: 1,
                duration: DURATIONS.slow,
                delay: delayOf(el),
                ease: EASES.power2,
                scrollTrigger: trig(el, el.hasAttribute('data-intro'), 'top 92%'),
              }
            )
          })

          // 5. Scale Reveal
          q('[data-reveal="scale"]').forEach((el) => {
            gsap.fromTo(
              el,
              { scale: 0.94, opacity: 0 },
              {
                scale: 1,
                opacity: 1,
                duration: dur,
                delay: delayOf(el),
                ease: EASES.power3,
                scrollTrigger: trig(el, el.hasAttribute('data-intro'), 'top 90%'),
                onComplete: () => gsap.set(el, { clearProps: 'transform' }),
              }
            )
          })

          // 6. Stagger Children Reveal
          q('[data-reveal="stagger"]').forEach((el) => {
            gsap.fromTo(
              el.children,
              { y: dist, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: dur,
                stagger: mob ? STAGGERS.quick : STAGGERS.base,
                delay: delayOf(el),
                ease: EASES.power3,
                scrollTrigger: trig(el, el.hasAttribute('data-intro'), 'top 88%'),
                onComplete: () => gsap.set(el.children, { clearProps: 'transform' }),
              }
            )
          })

          // 7. Cinematic Image Mask Inset Reveal
          q('[data-reveal="mask"]').forEach((el) => {
            const inner = el.querySelector('[data-inner]') || el.querySelector('img')
            const st = trig(el, el.hasAttribute('data-intro'), 'top 90%')
            const tl = gsap.timeline({ scrollTrigger: st, delay: delayOf(el) })
            tl.fromTo(
              el,
              { clipPath: 'inset(100% 0% 0% 0%)' },
              { clipPath: 'inset(0% 0% 0% 0%)', duration: mob ? 1 : 1.35, ease: EASES.expo }
            )
            if (inner) {
              tl.fromTo(
                inner,
                { scale: 1.15 },
                {
                  scale: 1,
                  duration: 1.5,
                  ease: EASES.expo,
                  onComplete: () => gsap.set(inner, { clearProps: 'transform' }),
                },
                0
              )
            }
          })

          // 8. SVG Path Draw
          q('[data-reveal="draw"] path, path[data-reveal="draw"]').forEach((p) => {
            const len = p.getTotalLength?.() || 200
            const host = p.closest('[data-reveal="draw"]') || p
            gsap.set(p, { strokeDasharray: len, strokeDashoffset: len })
            gsap.to(p, {
              strokeDashoffset: 0,
              duration: 1.2,
              ease: EASES.power2InOut,
              delay: delayOf(host) + 0.1,
              scrollTrigger: trig(host, host.hasAttribute('data-intro'), 'top 92%'),
            })
          })

          // 9. Parallax (Desktop only)
          if (!mob) {
            q('[data-parallax]').forEach((el) => {
              const v = parseFloat(el.dataset.parallax) || 8
              gsap.fromTo(
                el,
                { yPercent: -v },
                {
                  yPercent: v,
                  ease: 'none',
                  scrollTrigger: {
                    trigger: el.parentElement || el,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                  },
                }
              )
            })
          }
        }
      )
    }, root)

    return () => {
      isMounted = false
      mm.revert()
      ctx.revert()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

/** Component Wrapper for declarative reveal markup */
export function Reveal({
  children,
  type = 'up',
  delay = 0,
  intro = false,
  className = '',
  as: Component = 'div',
  ...rest
}) {
  return (
    <Component
      data-reveal={type}
      data-delay={delay > 0 ? delay : undefined}
      data-intro={intro ? '' : undefined}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  )
}
