export function Logo({ className = '', dark = false }) {
  return (
    <span className={`inline-flex items-center gap-2 select-none ${className}`}>
      {/* Mobile view: Standalone ribbon icon + LABS */}
      <span className="flex items-center gap-2 md:hidden">
        <img
          src="/img/imaginity-icon-trimmed.png"
          alt="Imaginity Labs"
          className="h-7 w-auto object-contain"
        />
        <span className={`font-sans text-[13px] font-semibold tracking-[0.08em] uppercase ${dark ? 'text-white/80' : 'text-ink/80'}`}>
          LABS
        </span>
      </span>

      {/* Desktop & Laptop view: Full typography wordmark + LABS */}
      <span className="hidden md:inline-flex items-center gap-2.5">
        <img
          src={dark ? '/img/imaginity-logo-trimmed.png' : '/img/imaginity-logo-dark.png'}
          alt="Imaginity"
          className="h-[21px] w-auto object-contain"
        />
        <span className={`font-sans text-[12px] font-semibold tracking-[0.14em] uppercase ${dark ? 'text-white/60' : 'text-ink/60'}`}>
          LABS
        </span>
      </span>
    </span>
  )
}
