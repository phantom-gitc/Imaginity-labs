import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Button({
  children,
  onClick,
  href,
  variant = 'primary', // 'primary' | 'secondary' | 'darkGlass' | 'ghost'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon = true,
  className = '',
  type = 'button',
  disabled = false,
}) {
  const sizeClasses = {
    sm: 'h-10 px-5 text-[13px] gap-2',
    md: 'h-12 px-6 text-[14px] gap-2.5',
    lg: 'h-14 px-8 text-[15px] gap-3',
  }[size];

  const variantClasses = {
    primary:
      'bg-[#0A2418] text-white rounded-full font-medium tracking-wide shadow-[0_4px_16px_rgba(10,36,24,0.18)] hover:bg-[#14573A] hover:shadow-[0_8px_24px_rgba(31,138,91,0.28)] btn-sheen border border-[#14573A]/40',
    secondary:
      'bg-white/70 hover:bg-white text-[#0B1511] hover:text-[#04110C] rounded-full font-medium tracking-wide backdrop-blur-md border border-[#0B1511]/15 hover:border-[#1F8A5B]/50 shadow-[0_2px_10px_rgba(11,21,17,0.04)]',
    darkGlass:
      'bg-white/10 hover:bg-white/20 text-white rounded-full font-medium tracking-wide backdrop-blur-md border border-white/20 hover:border-[#8FD9B6]/60 shadow-[0_4px_20px_rgba(0,0,0,0.2)]',
    ghost:
      'bg-transparent text-[#0B1511] hover:text-[#1F8A5B] font-medium tracking-wide p-0 h-auto',
  }[variant];

  const content = (
    <motion.span
      className="inline-flex items-center w-full justify-center"
      whileHover="hover"
      initial="initial"
    >
      <span className="relative z-10">{children}</span>
      {icon && (
        <motion.span
          className="relative z-10 ml-2 inline-flex items-center justify-center"
          variants={{
            initial: { x: 0 },
            hover: { x: 4 },
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
          <ArrowRight className="w-4 h-4" />
        </motion.span>
      )}
    </motion.span>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`inline-flex items-center justify-center select-none transition-all duration-300 cursor-pointer ${sizeClasses} ${variantClasses} ${className}`}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center select-none transition-all duration-300 cursor-pointer ${sizeClasses} ${variantClasses} ${className}`}
    >
      {content}
    </motion.button>
  );
}
