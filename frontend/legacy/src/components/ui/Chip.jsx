import React from 'react';

export function Chip({
  children,
  variant = 'default', // 'default' | 'blue' | 'violet' | 'dark' | 'yellow'
  className = '',
}) {
  const variantStyles = {
    default: 'bg-[#F7F8FA] border-[#E6E8EE] text-[#4A4F5C] hover:border-[#2F5BFF]/30 hover:text-[#0A0A0F]',
    blue: 'bg-[#E3EBFF] border-[#2F5BFF]/25 text-[#2F5BFF]',
    violet: 'bg-[#F2EDFF] border-[#7B5CFF]/25 text-[#7B5CFF]',
    yellow: 'bg-[#FFF8E1] border-[#FFD43B]/40 text-[#B45309]',
    dark: 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:text-white',
  }[variant];

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-[8px] border text-[12px] font-medium transition-all duration-200 select-none ${variantStyles} ${className}`}
    >
      {children}
    </span>
  );
}
