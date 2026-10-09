import { useId, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

/** Accessible accordion (Motion for UI state). */
export function Accordion({ items, defaultOpen = 0, className = '', titleClass = 'display h-sm', render }) {
  const [open, setOpen] = useState(defaultOpen)
  const uid = useId()
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
                className="acc-btn"
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span className={titleClass}>{it.q ?? it.t}</span>
                <span className="acc-plus" aria-hidden="true" />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`${uid}-p${i}`}
                  role="region"
                  aria-labelledby={`${uid}-b${i}`}
                  key="p"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-8">{render ? render(it) : <p className="lede max-w-[52ch]">{it.a}</p>}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

/** Accessible tabs with arrow-key navigation. */
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
            onClick={() => setActive(i)}
            className={`min-h-11 rounded-full border px-5 text-[15px] font-medium transition-colors ${
              active === i ? 'border-yellow bg-yellow text-ink' : 'border-white/25 text-white/80 hover:border-white'
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          id={`${uid}-p${active}`}
          role="tabpanel"
          aria-labelledby={`${uid}-t${active}`}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          {children(active)}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
