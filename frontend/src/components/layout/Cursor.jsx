import { useRef } from 'react'
import { useCursor } from '../../hooks/useCursor'

/** Dot + ring cursor. Ring grows on links and shows labels ("View", "Drag"…). Disabled on touch. */
export function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  const label = useRef(null)
  useCursor(dot, ring, label)
  return (
    <div aria-hidden="true">
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className="cursor-ring">
        <span ref={label} />
      </div>
    </div>
  )
}
