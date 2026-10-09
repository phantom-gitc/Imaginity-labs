import React from 'react';

export function Marquee({
  children,
  speed = 30, // seconds per loop
  pauseOnHover = true,
  className = '',
  reverse = false,
}) {
  return (
    <div
      className={`relative w-full overflow-hidden flex items-center ${className}`}
      style={{
        maskImage:
          'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
      }}
    >
      <div
        className={`flex min-w-full shrink-0 items-center justify-around gap-12 sm:gap-16 ${
          pauseOnHover ? 'hover:[animation-play-state:paused]' : ''
        }`}
        style={{
          animation: `marqueeRoll ${speed}s linear infinite ${reverse ? 'reverse' : 'normal'}`,
        }}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={`flex min-w-full shrink-0 items-center justify-around gap-12 sm:gap-16 ${
          pauseOnHover ? 'hover:[animation-play-state:paused]' : ''
        }`}
        style={{
          animation: `marqueeRoll ${speed}s linear infinite ${reverse ? 'reverse' : 'normal'}`,
        }}
      >
        {children}
      </div>

      <style>{`
        @keyframes marqueeRoll {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}
