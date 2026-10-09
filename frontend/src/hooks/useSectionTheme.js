import { useLayoutEffect } from 'react'
import { gsap, ScrollTrigger, MQ } from '../lib/gsap'

const THEMES = {
  light: { '--page-bg': '#FAFAFB', '--page-fg': '#0A0A0A', '--page-muted': 'rgba(10,10,10,0.58)', '--page-line': '#E8EAF2' },
  dark: { '--page-bg': '#0A0A12', '--page-fg': '#F4F4FA', '--page-muted': 'rgba(244,244,250,0.6)', '--page-line': 'rgba(255,255,255,0.12)' },
  warm: { '--page-bg': '#F4EFE6', '--page-fg': '#0A0A0A', '--page-muted': 'rgba(10,10,10,0.6)', '--page-line': 'rgba(10,10,10,0.12)' },
}

/**
 * Section background transitions: any element with data-bg="light|dark|warm" tweens the body
 * colour variables as it crosses the middle of the viewport (light → dark → warm).
 */
export function useSectionTheme(deps = []) {
  useLayoutEffect(() => {
    const mm = gsap.matchMedia()
    const ctx = gsap.context(() => {
      mm.add({ motion: MQ.motion, reduce: MQ.reduce }, (c) => {
        const instant = c.conditions.reduce
        const set = (name) =>
          gsap.to(document.body, { ...THEMES[name], duration: instant ? 0 : 0.7, ease: 'power2.inOut', overwrite: 'auto' })
        gsap.set(document.body, THEMES.light)
        gsap.utils.toArray('[data-bg]').forEach((el) => {
          ScrollTrigger.create({
            trigger: el,
            start: 'top 55%',
            end: 'bottom 55%',
            onToggle: (self) => self.isActive && set(el.dataset.bg),
          })
        })
      })
    })
    return () => {
      mm.revert()
      ctx.revert()
      gsap.set(document.body, THEMES.light)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
