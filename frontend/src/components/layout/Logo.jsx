export function Logo({ className = '', dark = false }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
        <defs>
          <linearGradient id={dark ? 'lgd' : 'lg'} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#2F5BFF" />
            <stop offset="1" stopColor="#7B61FF" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="24" height="24" rx="8" fill={`url(#${dark ? 'lgd' : 'lg'})`} />
        <path d="M9 19V9l10 10V9" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="21.5" cy="6.5" r="2.6" fill="#FFD93D" />
      </svg>
      <span className="font-sans text-[15px] font-semibold tracking-[-0.02em]">
        NEXORA <span className="font-normal opacity-60">LABS</span>
      </span>
    </span>
  )
}
