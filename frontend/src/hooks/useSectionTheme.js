import { useEffect } from 'react'
import { gsap, ScrollTrigger, prefersReducedMotion } from '../lib/gsap'

const THEMES = {
  light: {
    bg: '#FAFAFB',
    fg: '#0A0A0A',
    muted: 'rgba(10, 10, 10, 0.58)',
    line: '#E8EAF2',
  },
  dark: {
    bg: '#0A0A12',
    fg: '#F4F4FA',
    muted: 'rgba(244, 244, 250, 0.6)',
    line: 'rgba(255, 255, 255, 0.12)',
  },
  warm: {
    bg: '#F4EFE6',
    fg: '#0A0A0A',
    muted: 'rgba(10, 10, 10, 0.6)',
    line: 'rgba(10, 10, 10, 0.12)',
  },
}

let activeThemeName = 'light'
export const getActiveTheme = () => activeThemeName

export function applyTheme(name, immediate = false) {
  const theme = THEMES[name] || THEMES.light
  activeThemeName = name

  const body = document.body
  if (!body) return

  if (immediate || prefersReducedMotion()) {
    gsap.killTweensOf(body)
    body.style.backgroundColor = theme.bg
    body.style.color = theme.fg
    body.style.setProperty('--page-bg', theme.bg)
    body.style.setProperty('--page-fg', theme.fg)
    body.style.setProperty('--page-muted', theme.muted)
    body.style.setProperty('--page-line', theme.line)
    return
  }

  gsap.to(body, {
    backgroundColor: theme.bg,
    color: theme.fg,
    duration: 0.6,
    ease: 'power2.out',
    overwrite: 'auto',
    onUpdate: () => {
      const curBg = gsap.getProperty(body, 'backgroundColor')
      const curFg = gsap.getProperty(body, 'color')
      if (curBg) body.style.setProperty('--page-bg', curBg)
      if (curFg) body.style.setProperty('--page-fg', curFg)
    },
    onComplete: () => {
      body.style.setProperty('--page-bg', theme.bg)
      body.style.setProperty('--page-fg', theme.fg)
      body.style.setProperty('--page-muted', theme.muted)
      body.style.setProperty('--page-line', theme.line)
    },
  })
}

/**
 * Universal Scroll-Linked Section Background Controller
 * Seamlessly blends page background color WITH SCROLLING via GSAP ScrollTrigger scrub.
 * As user scrolls across sections, colors interpolate in real-time with buttery-smooth physics.
 */
export function useSectionTheme(deps = []) {
  useEffect(() => {
    let triggers = []
    let rafId = null

    const setup = () => {
      triggers.forEach((t) => t.kill())
      triggers = []

      const elements = gsap.utils.toArray('[data-bg]').filter(
        (el) => el.offsetParent !== null || el.getBoundingClientRect().height > 0
      )
      if (!elements.length) return

      // Build transition sequence between sections whose data-bg changes
      let currentTheme = elements[0].dataset.bg || 'light'
      const transitionList = []

      for (let i = 1; i < elements.length; i++) {
        const nextEl = elements[i]
        const nextTheme = nextEl.dataset.bg
        if (nextTheme && nextTheme !== currentTheme) {
          const fromTheme = THEMES[currentTheme] || THEMES.light
          const toTheme = THEMES[nextTheme] || THEMES.light

          transitionList.push({
            trigger: nextEl,
            prevName: currentTheme,
            nextName: nextTheme,
            interpBg: gsap.utils.interpolate(fromTheme.bg, toTheme.bg),
            interpFg: gsap.utils.interpolate(fromTheme.fg, toTheme.fg),
            interpMuted: gsap.utils.interpolate(fromTheme.muted, toTheme.muted),
            interpLine: gsap.utils.interpolate(fromTheme.line, toTheme.line),
            fromTheme,
            toTheme,
          })

          currentTheme = nextTheme
        }
      }

      // Create scroll-linked scrubbed triggers for each transition with sine easing and 1.2s damping
      const smoothEase = gsap.parseEase('power1.inOut')

      transitionList.forEach((tr) => {
        const setColors = (progress) => {
          const eased = smoothEase(Math.max(0, Math.min(1, progress)))
          const bg = tr.interpBg(eased)
          const fg = tr.interpFg(eased)
          const muted = tr.interpMuted(eased)
          const line = tr.interpLine(eased)

          document.body.style.backgroundColor = bg
          document.body.style.color = fg
          document.body.style.setProperty('--page-bg', bg)
          document.body.style.setProperty('--page-fg', fg)
          document.body.style.setProperty('--page-muted', muted)
          document.body.style.setProperty('--page-line', line)
        }

        const st = ScrollTrigger.create({
          trigger: tr.trigger,
          start: 'top 92%',
          end: 'top 25%',
          scrub: prefersReducedMotion() ? false : 1.4,
          onUpdate: (self) => {
            setColors(self.progress)
          },
          onLeave: () => {
            setColors(1)
            activeThemeName = tr.nextName
          },
          onLeaveBack: () => {
            setColors(0)
            activeThemeName = tr.prevName
          },
        })

        triggers.push(st)
      })

      // Determine initial state based on current scroll position
      const determineInitial = () => {
        if (window.scrollY < 80) {
          applyTheme(elements[0].dataset.bg || 'light', true)
          return
        }

        let resolvedTheme = elements[0].dataset.bg || 'light'
        const triggerStartThreshold = window.innerHeight * 0.92
        const triggerEndThreshold = window.innerHeight * 0.25

        for (const tr of transitionList) {
          const rect = tr.trigger.getBoundingClientRect()
          if (rect.top <= triggerEndThreshold) {
            resolvedTheme = tr.nextName
          } else if (rect.top < triggerStartThreshold) {
            // In the middle of this transition
            const progress = (triggerStartThreshold - rect.top) / (triggerStartThreshold - triggerEndThreshold)
            const eased = smoothEase(Math.max(0, Math.min(1, progress)))
            const bg = tr.interpBg(eased)
            const fg = tr.interpFg(eased)
            document.body.style.backgroundColor = bg
            document.body.style.color = fg
            document.body.style.setProperty('--page-bg', bg)
            document.body.style.setProperty('--page-fg', fg)
            document.body.style.setProperty('--page-muted', tr.interpMuted(eased))
            document.body.style.setProperty('--page-line', tr.interpLine(eased))
            activeThemeName = tr.nextName
            return
          }
        }

        applyTheme(resolvedTheme, true)
      }

      ScrollTrigger.refresh()
      determineInitial()
    }

    const scheduleSetup = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        setTimeout(setup, 60)
      })
    }

    scheduleSetup()

    return () => {
      cancelAnimationFrame(rafId)
      triggers.forEach((t) => t.kill())
      triggers = []
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
