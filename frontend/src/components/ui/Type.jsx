import { forwardRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { ArrowLink } from './Button'

export const It = ({ children }) => <em className="it">{children}</em>

export function Eyebrow({ children, dot = '#3B5BFF', className = '', intro = false }) {
  const plain = dot === false
  return (
    <p
      data-reveal="up"
      {...(intro ? { 'data-intro': '' } : {})}
      className={`eyebrow ${plain ? 'eyebrow--plain' : ''} ${className}`}
      style={plain ? undefined : { '--dot': dot }}
    >
      {children}
    </p>
  )
}

const SIZES = { hero: 'h-hero', xl: 'h-xl', lg: 'h-lg', md: 'h-md', sm: 'h-sm' }
/** Display heading: plain words + ONE italic gradient phrase (<It>). Max 6 words. */
export function H({ as: Tag = 'h2', size = 'lg', className = '', intro = false, children }) {
  return (
    <Tag data-reveal="lines" {...(intro ? { 'data-intro': '' } : {})} className={`display ${SIZES[size]} ${className}`}>
      {children}
    </Tag>
  )
}

/** Section wrapper. `bg` drives the body colour transition (light | dark | warm). */
export const Section = forwardRef(function Section(
  { id, bg = 'light', className = '', tight = false, bleed = false, children, ...rest },
  ref
) {
  return (
    <section ref={ref} id={id} data-bg={bg} className={`section${tight ? '-tight' : ''} ${className}`} {...rest}>
      {bleed ? children : <div className="wrap">{children}</div>}
    </section>
  )
})

/** Eyebrow + serif heading left, one-liner and ↗ link right. */
export function SectionHeader({ eyebrow, dot, title, line, cta, className = '', size = 'lg' }) {
  return (
    <header className={`g12 items-end gap-y-6 ${className}`}>
      <div className="col-span-12 md:col-span-8 flex flex-col gap-5">
        {eyebrow && <Eyebrow dot={dot}>{eyebrow}</Eyebrow>}
        <H size={size}>{title}</H>
      </div>
      {(line || cta) && (
        <div data-reveal="up" className="col-span-12 md:col-span-4 flex flex-col items-start gap-4 md:items-end md:text-right">
          {line && <p className="lede md:ml-auto">{line}</p>}
          {cta && <ArrowLink to={cta.to}>{cta.label}</ArrowLink>}
        </div>
      )}
    </header>
  )
}

/** Hand-drawn yellow marker underline that draws itself. */
export function Underline({ className = '', intro = false }) {
  return (
    <svg
      data-reveal="draw"
      {...(intro ? { 'data-intro': '' } : {})}
      className={`pointer-events-none absolute left-0 w-full ${className}`}
      viewBox="0 0 220 18"
      preserveAspectRatio="none"
      aria-hidden="true"
      fill="none"
    >
      <path d="M3 11 C 35 4, 70 15, 108 8 S 180 5, 217 9" stroke="#FFD93D" strokeWidth="6" strokeLinecap="round" />
      <path d="M20 15 C 70 11, 130 15, 190 13" stroke="#FFD93D" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
    </svg>
  )
}

export function Tag({ children, tint, className = '' }) {
  return <span className={`tag ${tint ? `tint-${tint}` : ''} ${className}`}>{children}</span>
}

export { ArrowUpRight }
