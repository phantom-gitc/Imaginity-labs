import { Suspense, lazy, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ScrollProvider } from './hooks/useScrollSmooth'
import { PageTransition } from './components/layout/PageTransition'
import { Layout } from './components/layout/Layout'
import Home from './pages/Home'

const loaders = {
  Solutions: () => import('./pages/Solutions'),
  Services: () => import('./pages/Services'),
  Work: () => import('./pages/Work'),
  CaseDetail: () => import('./pages/CaseDetail'),
  About: () => import('./pages/About'),
  Insights: () => import('./pages/Insights'),
  Article: () => import('./pages/Article'),
  Careers: () => import('./pages/Careers'),
  Contact: () => import('./pages/Contact'),
  NotFound: () => import('./pages/NotFound'),
}
const { Solutions, Services, Work, CaseDetail, About, Insights, Article, Careers, Contact, NotFound } = Object.fromEntries(
  Object.entries(loaders).map(([k, f]) => [k, lazy(f)]),
)

export default function App() {
  useEffect(() => {
    const t = setTimeout(() => Object.values(loaders).forEach((f) => f()), 1200)
    return () => clearTimeout(t)
  }, [])
  return (
    <ScrollProvider>
      <PageTransition>
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="solutions" element={<Solutions />} />
              <Route path="services" element={<Services />} />
              <Route path="work" element={<Work />} />
              <Route path="work/:slug" element={<CaseDetail />} />
              <Route path="about" element={<About />} />
              <Route path="insights" element={<Insights />} />
              <Route path="insights/:slug" element={<Article />} />
              <Route path="careers" element={<Careers />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </PageTransition>
    </ScrollProvider>
  )
}
