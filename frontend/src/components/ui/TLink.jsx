'use client'

import { forwardRef } from 'react'
import Link from 'next/link'
import { useTransitionNav } from '../../lib/transition'

/** Internal link that routes through the page-transition wipe. Renders a real, crawlable, prefetched <a href>. */
export const TLink = forwardRef(function TLink({ to, children, className = '', onClick, ...rest }, ref) {
  const { go } = useTransitionNav()
  const isExternal = !to || to.startsWith('http') || to.startsWith('mailto:') || to.startsWith('tel:') || to === '#' || to.startsWith('#')

  if (isExternal) {
    return (
      <a ref={ref} href={to || '#'} onClick={onClick} className={className} {...rest}>
        {children}
      </a>
    )
  }

  const handle = (e) => {
    onClick?.(e)
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
    e.preventDefault()
    go(to)
  }
  return (
    <Link ref={ref} href={to} onClick={handle} className={className} {...rest}>
      {children}
    </Link>
  )
})
