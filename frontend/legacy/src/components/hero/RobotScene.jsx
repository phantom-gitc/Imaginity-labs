import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Easily swap your Spline URL here:
export const SPLINE_URL = "https://my.spline.design/nexbotbyaximoriscopycopy-qpZ1TDuwUWhUbXjaNFA4tn0c/";
export const SPLINE_SCENE = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

// Lazy-load React Spline component for .splinecode scenes
const Spline = lazy(() => import('@splinetool/react-spline'));

export function RobotScene({ className = "" }) {
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [useIframe, setUseIframe] = useState(true);

  useEffect(() => {
    if (SPLINE_URL && SPLINE_URL.includes('my.spline.design')) {
      setUseIframe(true);
    } else {
      setUseIframe(false);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label="Interactive 3D robot"
      className={`relative w-full h-[480px] sm:h-[580px] lg:h-[650px] xl:h-[700px] flex items-center justify-center select-none overflow-visible ${className}`}
    >
      {/* 1. Soft Ambient Radial Glow Behind Robot */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none opacity-85"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(227,235,255,0.95) 0%, rgba(240,244,255,0.45) 45%, transparent 75%)',
          filter: 'blur(70px)',
        }}
      />

      {/* 2. Faint Ground Shadow Ellipse for Realistic Grounding */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 w-56 sm:w-72 lg:w-96 h-8 rounded-[100%] bg-[#0A0A0F]/[0.06] blur-md pointer-events-none" />

      {/* 3. Skeleton Loading State (Soft blue-100 gradient blob with pulsing dot) */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10"
          >
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-gradient-to-tr from-[#E3EBFF] via-[#F0F4FF] to-white/60 blur-xl animate-pulse" />
            
            <div className="absolute flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#E6E8EE] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#2F5BFF] animate-ping" />
              <span className="font-mono text-[11px] text-[#4A4F5C] font-semibold tracking-wider uppercase">
                Loading Nexbot...
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. Interactive 3D Nexbot Container - NO BOX, Blends Seamlessly into Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full h-full flex items-center justify-center pointer-events-auto overflow-visible"
      >
        {useIframe ? (
          /* Official Spline Web Viewer with multiply blend mode & contrast filter to eliminate grey box completely */
          <div className="w-full h-full flex items-center justify-center overflow-visible">
            <iframe
              src={SPLINE_URL}
              frameBorder="0"
              width="100%"
              height="100%"
              title="Nexbot Interactive 3D Robot"
              onLoad={() => setIsLoaded(true)}
              allow="autoplay; fullscreen; xr-spatial-tracking"
              className="w-full h-full border-0 pointer-events-auto [touch-action:pan-y] spline-robot-blend transform scale-110 sm:scale-120 origin-center"
              style={{
                width: '100%',
                height: '100%',
                background: 'transparent',
              }}
            />
          </div>
        ) : (
          /* Native @splinetool/react-spline for .splinecode scenes */
          <Suspense fallback={null}>
            <Spline
              scene={SPLINE_SCENE}
              onLoad={() => setIsLoaded(true)}
              className="w-full h-full spline-robot-blend transform scale-115 origin-center"
            />
          </Suspense>
        )}
      </motion.div>
    </div>
  );
}

export default RobotScene;
