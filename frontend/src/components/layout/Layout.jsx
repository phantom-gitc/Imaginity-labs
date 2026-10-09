import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { Cursor } from './Cursor'
import { Preloader } from './Preloader'
import { FloatingCTA } from './FloatingCTA'
import { ScrollProgress } from './ScrollProgress'
import { useSectionTheme } from '../../hooks/useSectionTheme'
import { useSeo } from '../../hooks/useSeo'
import { SEO } from '../../data/site'

/** Shared shell: identical Navbar + Footer on every page. */
export function Layout() {
  const { pathname } = useLocation()
  useSectionTheme([pathname])
  const base = '/' + pathname.split('/')[1]
  const [t, d] = SEO[base] || SEO['/']
  useSeo(t, d)

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <div className="grain" aria-hidden="true" />
      <ScrollProgress />
      <Preloader />
      <Cursor />
      <Navbar />
      <main id="main" key={pathname}>
        <Outlet />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
