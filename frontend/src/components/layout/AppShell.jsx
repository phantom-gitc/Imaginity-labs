'use client'

import { usePathname } from 'next/navigation'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { Cursor } from './Cursor'
import { Preloader } from './Preloader'
import { FloatingCTA } from './FloatingCTA'
import { ScrollProgress } from './ScrollProgress'
import { PageTransition } from './PageTransition'
import { ScrollProvider } from '../../hooks/useScrollSmooth'
import { useSectionTheme } from '../../hooks/useSectionTheme'

/**
 * Client boundary for the shared shell: scroll engine, page transition, theme and chrome.
 * Page content is passed in as `children` and stays server-rendered where possible.
 */
export function AppShell({ children }) {
  const pathname = usePathname()
  useSectionTheme([pathname])

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
        <FloatingCTA />
      </PageTransition>
    </ScrollProvider>
  )
}
