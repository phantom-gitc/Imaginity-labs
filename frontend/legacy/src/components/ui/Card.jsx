import React from 'react';

export function Card({
  children,
  variant = 'white', // 'white' | 'tint' | 'darkGlass'
  hoverLift = true,
  className = '',
  onClick = null,
  dataReveal = 'card',
  ...props
}) {
  const variantStyles = {
    white:
      'bg-white border-[#E6E8EE] shadow-[0_4px_20px_-2px_rgba(10,10,15,0.03),0_12px_36px_-8px_rgba(47,91,255,0.04)] text-[#0A0A0F]',
    tint:
      'bg-[#F0F4FF] border-[#E6E8EE] shadow-[0_4px_20px_-2px_rgba(10,10,15,0.03)] text-[#0A0A0F]',
    darkGlass:
      'bg-white/[0.06] backdrop-blur-xl border-white/12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-white',
  }[variant];

  const hoverStyles = hoverLift
    ? variant === 'darkGlass'
      ? 'hover:border-white/25 hover:bg-white/[0.09] transition-all duration-300'
      : 'hover:border-[#2F5BFF]/35 hover:shadow-[0_8px_30px_-4px_rgba(47,91,255,0.08),0_20px_50px_-10px_rgba(123,92,255,0.1)] transition-all duration-300 hover:-translate-y-1'
    : 'transition-all duration-300';

  const clickableStyles = onClick ? 'cursor-pointer' : '';

  return (
    <div
      onClick={onClick}
      data-reveal={dataReveal}
      className={`relative rounded-[24px] border p-6 sm:p-8 ${variantStyles} ${hoverStyles} ${clickableStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
