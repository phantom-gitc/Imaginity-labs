import React, { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isPointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isPointer || prefersReducedMotion) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const cursorTarget = target.closest('[data-cursor]');
      if (cursorTarget) {
        setCursorText(cursorTarget.getAttribute('data-cursor') || '');
      } else {
        setCursorText('');
      }

      const interactive = target.closest('button, a, input, textarea, select, [data-interactive="true"], [data-cursor]');
      setIsHovered(!!interactive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  // Smooth trailing spring follow
  useEffect(() => {
    let animId;
    const follow = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.2,
        y: prev.y + (position.y - prev.y) * 0.2,
      }));
      animId = requestAnimationFrame(follow);
    };
    animId = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(animId);
  }, [position]);

  if (!isVisible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Inner Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#2F5BFF] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${isHovered ? 0 : 1})`,
        }}
      />

      {/* Outer Ring / Label Bubble */}
      <div
        className={`fixed top-0 left-0 rounded-full border transition-all duration-300 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center font-mono text-[10px] font-bold tracking-wider uppercase ${
          cursorText
            ? 'w-16 h-16 bg-[#0A0A0F] text-white border-[#2F5BFF] shadow-[0_8px_30px_rgba(47,91,255,0.35)] scale-100'
            : isHovered
            ? 'w-12 h-12 border-[#2F5BFF] bg-[#2F5BFF]/10 scale-105 shadow-[0_0_20px_rgba(47,91,255,0.25)]'
            : 'w-7 h-7 border-[#0A0A0F]/20 bg-transparent scale-100'
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)`,
        }}
      >
        {cursorText && <span>{cursorText}</span>}
      </div>
    </div>
  );
}
