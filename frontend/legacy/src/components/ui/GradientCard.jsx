import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export function GradientCard({
  children,
  className = '',
  onClick,
  spotlight = true,
  spotlightColor = 'rgba(47, 91, 255, 0.08)',
  cursorLabel = null,
}) {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current || !spotlight) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      data-cursor={cursorLabel}
      className={`group relative rounded-[24px] bg-white border border-[#E6E8EE] hover:border-[#2F5BFF]/40 shadow-[0_4px_20px_-2px_rgba(10,10,15,0.03),0_12px_36px_-8px_rgba(47,91,255,0.04)] hover:shadow-[0_12px_36px_-4px_rgba(47,91,255,0.09),0_24px_60px_-12px_rgba(123,92,255,0.12)] transition-all duration-300 overflow-hidden ${className}`}
    >
      {/* 1px Gradient Border Sheen on Top/Left */}
      <div className="absolute inset-0 rounded-[24px] pointer-events-none p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div
          className="w-full h-full rounded-[23px]"
          style={{
            background:
              'linear-gradient(135deg, rgba(47,91,255,0.3) 0%, rgba(255,255,255,0) 50%, rgba(255,212,59,0.3) 100%)',
          }}
        />
      </div>

      {/* Dynamic Cursor Spotlight Radial Glow */}
      {spotlight && (
        <div
          className="pointer-events-none absolute -inset-px rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          style={{
            background: `radial-gradient(420px circle at ${mousePosition.x}px ${mousePosition.y}px, ${spotlightColor}, transparent 70%)`,
          }}
        />
      )}

      {/* Card Content */}
      <div className="relative z-20 h-full">{children}</div>
    </motion.div>
  );
}
