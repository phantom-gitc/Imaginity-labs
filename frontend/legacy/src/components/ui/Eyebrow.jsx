import React from 'react';

export function Eyebrow({
  children,
  dotColor = 'bg-[#2F5BFF]',
  variant = 'light', // 'light' | 'dark' | 'glass'
  className = '',
}) {
  const variantStyles = {
    light: 'bg-white border border-[#E6E8EE] text-[#0A0A0F] shadow-2xs',
    dark: 'bg-white/10 border border-white/15 text-white backdrop-blur-md',
    glass: 'bg-[#E3EBFF]/70 border border-[#2F5BFF]/20 text-[#2F5BFF] backdrop-blur-sm',
    yellow: 'bg-[#FFF8E1] border border-[#FFD43B]/40 text-[#B45309]',
  }[variant];

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full mb-5 select-none ${variantStyles} ${className}`}
    >
      <span className={`w-2 h-2 rounded-full shrink-0 ${dotColor}`} />
      <span className="font-mono text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase">
        {children}
      </span>
    </div>
  );
}
