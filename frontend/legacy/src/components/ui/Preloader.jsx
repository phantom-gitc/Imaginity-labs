import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Preloader({ onComplete }) {
  const [count, setCount] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Check if preloader was already shown in session
    if (sessionStorage.getItem('nexora_preloaded')) {
      setIsDone(true);
      if (onComplete) onComplete();
      return;
    }

    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            sessionStorage.setItem('nexora_preloaded', 'true');
            if (onComplete) onComplete();
          }, 300);
          return 100;
        }
        // Accelerating curve
        const step = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + step, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (isDone) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-[99999] bg-white flex flex-col items-center justify-center p-6 select-none"
      >
        {/* Animated Brand Logo Mark */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3.5 mb-8"
        >
          <div className="w-10 h-10 rounded-full bg-[#0A0A0F] flex items-center justify-center text-white shadow-md">
            <span className="w-3 h-3 rounded-full bg-[#2F5BFF] animate-ping" />
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-sans font-bold text-[20px] tracking-[0.24em] text-[#0A0A0F]">
              NEXORA
            </span>
            <span className="font-mono text-[12px] tracking-widest text-[#2F5BFF] font-bold">
              LABS
            </span>
          </div>
        </motion.div>

        {/* Counter & Progress bar */}
        <div className="w-56 flex flex-col items-center">
          <div className="w-full flex items-center justify-between font-mono text-[12px] text-[#8A90A0] mb-2 font-semibold">
            <span>INITIALIZING</span>
            <span className="text-[#0A0A0F]">{count}%</span>
          </div>

          <div className="w-full h-1 bg-[#E6E8EE] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#2F5BFF] via-[#7B5CFF] to-[#FFD43B] rounded-full"
              style={{ width: `${count}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
