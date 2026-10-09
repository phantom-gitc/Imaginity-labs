import React from 'react';

export function Section({
  id,
  className = '',
  containerClassName = '',
  children,
  noPadding = false,
  bordered = true,
  variant = 'white', // 'white' | 'soft' | 'tint' | 'dark'
}) {
  const bgClasses = {
    white: 'bg-white text-[#0A0A0F]',
    soft: 'bg-[#F7F8FA] text-[#0A0A0F]',
    tint: 'bg-[#F0F4FF] text-[#0A0A0F]',
    dark: 'bg-[#0A0A0F] text-white',
  }[variant];

  const borderClass = bordered
    ? variant === 'dark'
      ? 'border-b border-white/10'
      : 'border-b border-[#E6E8EE]'
    : '';

  return (
    <section
      id={id}
      className={`relative w-full overflow-hidden ${
        noPadding ? '' : 'py-24 sm:py-32 lg:py-36'
      } ${bgClasses} ${borderClass} ${className}`}
    >
      <div
        className={`max-w-[1280px] w-full mx-auto px-6 sm:px-8 lg:px-12 relative z-10 ${containerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
