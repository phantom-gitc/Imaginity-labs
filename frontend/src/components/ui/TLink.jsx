import { useTransitionNav } from '../../lib/transition'

/** Internal link that routes through the page-transition wipe. */
export function TLink({ to, children, className = '', onClick, ...rest }) {
  const { go } = useTransitionNav()
  const handle = (e) => {
    onClick?.(e)
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
    e.preventDefault()
    go(to)
  }
  return (
    <a href={to} onClick={handle} className={className} {...rest}>
      {children}
    </a>
  )
}
