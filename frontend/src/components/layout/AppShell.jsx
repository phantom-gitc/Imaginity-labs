'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { Cursor } from './Cursor'
import { Preloader } from './Preloader'
import { ScrollProgress } from './ScrollProgress'
import { PageTransition } from './PageTransition'
import { ScrollProvider, syncScrollEngine } from '../../hooks/useScrollSmooth'
import { useSectionTheme } from '../../hooks/useSectionTheme'

/**
 * Client boundary for the shared shell: scroll engine, page transition, theme and chrome.
 * Page content is passed in as `children` and stays server-rendered where possible.
 */
export function AppShell({ children }) {
  const pathname = usePathname()
  useSectionTheme([pathname])

  useEffect(() => {
    const t = setTimeout(() => {
      syncScrollEngine()
    }, 120)
    return () => clearTimeout(t)
  }, [pathname])

  // Content protection against copying and dragging
  useEffect(() => {
    const handleCopy = (e) => {
      const target = e.target
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
        return
      }
      e.preventDefault()
      if (e.clipboardData) {
        e.clipboardData.setData('text/plain', '© SureNext. Content is protected.')
      }
    }

    const handleDragStart = (e) => {
      const target = e.target
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
        return
      }
      e.preventDefault()
    }

    document.addEventListener('copy', handleCopy)
    document.addEventListener('dragstart', handleDragStart)

    return () => {
      document.removeEventListener('copy', handleCopy)
      document.removeEventListener('dragstart', handleDragStart)
    }
  }, [])

  return (
    <ScrollProvider>
      <PageTransition>
        <a href="#main" className="skip-link">Skip to content</a>
        <div className="grain" aria-hidden="true" />
        <ScrollProgress />
        <Preloader />
        <Cursor />
        <Navbar />
        <main id="main" key={pathname}>
          {children}
        </main>
        <Footer />
      </PageTransition>
    </ScrollProvider>
  )
}
