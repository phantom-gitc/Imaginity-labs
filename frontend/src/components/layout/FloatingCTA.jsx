'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { ScrollTrigger } from '../../lib/gsap'
import { A } from '../../data/site'
import { Button } from '../ui/Button'

/** Secondary floating bottom-pill CTA, appears after the hero, hides at the footer. */
export function FloatingCTA() {
  const pathname = usePathname()
  const [past, setPast] = useState(false)
  const [atFooter, setAtFooter] = useState(false)
  const [prevPathname, setPrevPathname] = useState(pathname)
  if (prevPathname !== pathname) {
    setPrevPathname(pathname)
    setPast(false)
    setAtFooter(false)
  }

  useEffect(() => {
    const t = setTimeout(() => {
      ScrollTrigger.create({
        id: 'fcta',
        start: () => window.innerHeight * 0.9,
        end: 'max',
        onToggle: (s) => setPast(s.isActive),
      })
      const f = document.getElementById('footer')
      if (f) ScrollTrigger.create({ id: 'fcta-f', trigger: f, start: 'top 95%', onToggle: (s) => setAtFooter(s.isActive) })
    }, 400)
    return () => {
      clearTimeout(t)
      ScrollTrigger.getById('fcta')?.kill()
      ScrollTrigger.getById('fcta-f')?.kill()
    }
  }, [pathname])

  const show = past && !atFooter && pathname !== '/contact'
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 bottom-4 z-[60] flex justify-center px-3"
        >
          <div className="nav-pill !p-1.5 !pl-2.5 shadow-[0_10px_30px_-12px_rgba(20,20,60,.25)]">
            <div className="hidden -space-x-2 sm:flex" aria-hidden="true">
              {A.portrait.slice(0, 3).map((p, i) => (
                <Image key={i} src={p.src} width={64} height={64} sizes="32px" alt="" className="size-8 rounded-full border-2 border-white object-cover" />
              ))}
            </div>
            <span className="px-3 text-sm font-medium">Have a project in mind?</span>
            <Button to="/contact" size="sm">Start now</Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
