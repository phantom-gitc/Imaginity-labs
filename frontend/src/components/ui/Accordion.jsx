'use client'

import { useId, useState, useCallback, useEffect } from 'react'
import { engine } from '../../hooks/useScrollSmooth'

/** Accessible, GPU-accelerated buttery-smooth accordion that never sticks or jumps. */
export function Accordion({ items, defaultOpen = 0, className = '', titleClass = 'display h-sm', render }) {
  const [open, setOpen] = useState(defaultOpen)
  const uid = useId()

  const handleToggle = useCallback((idx, e) => {
    e?.preventDefault?.()
    e?.stopPropagation?.()
    setOpen((prev) => (prev === idx ? -1 : idx))
  }, [])

  // Safely inform Lenis of height change once accordion transition settles,
  // without calling ScrollTrigger.refresh() which would unpin sections and jump to footer.
  useEffect(() => {
    const t = setTimeout(() => {
      if (typeof window !== 'undefined' && engine?.lenis) {
        engine.lenis.resize()
      }
    }, 380)
    return () => clearTimeout(t)
  }, [open])

  return (
    <div className={className}>
      {items.map((it, i) => {
        const isOpen = open === i
        return (
          <div key={it.id ?? i} className="acc-item">
            <h3>
              <button
                type="button"
                id={`${uid}-b${i}`}
                aria-expanded={isOpen}
                aria-controls={`${uid}-p${i}`}
                className="acc-btn cursor-pointer group"
                onClick={(e) => handleToggle(i, e)}
                suppressHydrationWarning
              >
                <span className={`${titleClass} transition-colors duration-300 group-hover:text-ink/85`}>
                  {it.q ?? it.t}
                </span>
                <span className="acc-plus" aria-hidden="true" />
              </button>
            </h3>
            <div
              id={`${uid}-p${i}`}
              role="region"
              aria-labelledby={`${uid}-b${i}`}
              className="grid transition-[grid-template-rows,opacity] duration-350 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                gridTemplateRows: isOpen ? '1fr' : '0fr',
                opacity: isOpen ? 1 : 0,
              }}
            >
              <div className="overflow-hidden">
                <div
                  className="pb-8 transition-transform duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
                  style={{
                    transform: isOpen ? 'translateY(0)' : 'translateY(-6px)',
                  }}
                >
                  {render ? render(it) : <p className="lede max-w-[52ch]">{it.a}</p>}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

/** Accessible tabs with fast, responsive crossfade navigation. */
export function Tabs({ tabs, children, className = '', listClass = '' }) {
  const [active, setActive] = useState(0)
  const uid = useId()

  const onKey = (e) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    e.preventDefault()
    const n = (active + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length
    setActive(n)
    document.getElementById(`${uid}-t${n}`)?.focus()
  }

  const handleTabChange = useCallback((idx, e) => {
    e?.preventDefault?.()
    e?.stopPropagation?.()
    setActive(idx)
  }, [])

  useEffect(() => {
    const t = setTimeout(() => {
      if (typeof window !== 'undefined' && engine?.lenis) {
        engine.lenis.resize()
      }
    }, 380)
    return () => clearTimeout(t)
  }, [active])

  return (
    <div className={className}>
      <div role="tablist" aria-label="Goals" className={`flex flex-wrap gap-2 ${listClass}`} onKeyDown={onKey}>
        {tabs.map((t, i) => (
          <button
            key={t}
            id={`${uid}-t${i}`}
            role="tab"
            type="button"
            aria-selected={active === i}
            aria-controls={`${uid}-p${i}`}
            tabIndex={active === i ? 0 : -1}
            onClick={(e) => handleTabChange(i, e)}
            className={`min-h-11 rounded-full border px-5 text-[15px] font-medium transition-all duration-300 cursor-pointer ${
              active === i ? 'border-yellow bg-yellow text-ink shadow-sm' : 'border-white/25 text-white/80 hover:border-white hover:text-white'
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <div
        key={active}
        id={`${uid}-p${active}`}
        role="tabpanel"
        aria-labelledby={`${uid}-t${active}`}
        className="transition-opacity duration-300 ease-out"
      >
        {children(active)}
      </div>
    </div>
  )
}
