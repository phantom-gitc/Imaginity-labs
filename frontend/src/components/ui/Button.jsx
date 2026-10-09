import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { TLink } from './TLink'
import { useMagnetic } from '../../hooks/useMagnetic'

/** Primary / outline / yellow / ghost-light button. Magnetic (max 12px); arrow slides out and in on hover. */
export function Button({ to, href, onClick, variant = 'primary', size, children, icon: Icon = ArrowUpRight, type = 'button', className = '', magnetic = true, ...rest }) {
  const ref = useRef(null)
  useMagnetic(ref, magnetic ? 12 : 0)
  const cls = `btn btn-${variant} ${size === 'sm' ? 'btn-sm' : ''} ${className}`
  const inner = (
    <>
      <span>{children}</span>
      <span className="btn-ico" aria-hidden="true">
        <Icon />
        <Icon />
      </span>
    </>
  )
  if (to) return <TLink ref={ref} to={to} className={cls} {...rest}>{inner}</TLink>
  if (href) return <a ref={ref} href={href} className={cls} {...rest}>{inner}</a>
  return <button ref={ref} type={type} onClick={onClick} className={cls} {...rest}>{inner}</button>
}

export function ArrowLink({ to, href, children, className = '' }) {
  const inner = (
    <>
      {children}
      <ArrowUpRight aria-hidden="true" />
    </>
  )
  return to ? (
    <TLink to={to} className={`link-arrow ${className}`}>{inner}</TLink>
  ) : (
    <a href={href} className={`link-arrow ${className}`}>{inner}</a>
  )
}

export function ArrowCircle({ className = '' }) {
  return (
    <span className={`arrow-btn ${className}`} aria-hidden="true">
      <ArrowUpRight />
    </span>
  )
}
