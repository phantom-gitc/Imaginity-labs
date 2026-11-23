import React from 'react';
import { motion } from 'framer-motion';

// Card 1: Avenya - Electric Blue gradient with animated voice-waveform
export function AvenyaArtwork({ className = 'w-full h-full' }) {
  const bars = [18, 36, 68, 42, 85, 98, 70, 52, 90, 110, 65, 40, 80, 55, 30, 20];

  return (
    <div
      className={`relative w-full aspect-[4/3] bg-gradient-to-br from-[#1E3A8A] via-[#2F5BFF] to-[#5B8CFF] overflow-hidden select-none flex items-center justify-center ${className}`}
    >
      {/* Background Soft Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 30%, rgba(255,255,255,0.3) 0%, transparent 65%)',
        }}
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            'linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Voice Waveform Visual */}
      <div className="relative z-10 flex items-center gap-1.5 sm:gap-2 px-8 py-6">
        {bars.map((height, i) => (
          <motion.div
            key={i}
            className="w-1.5 sm:w-2 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.7)]"
            animate={{
              height: [height * 0.4, height * 1.1, height * 0.5],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 1.2 + (i % 5) * 0.2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
            style={{ minHeight: '12px' }}
          />
        ))}
      </div>

      {/* Subtle Floating Sound Wave Pill */}
      <div className="absolute bottom-4 left-4 z-20 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-mono text-[10px] tracking-wider uppercase font-semibold">
        AUDIO INFERENCE • 48KHZ STEREO
      </div>
    </div>
  );
}

// Card 2: SureNext - Yellow/coral generative canvas with floating UI blocks
export function SureNextArtwork({ className = 'w-full h-full' }) {
  return (
    <div
      className={`relative w-full aspect-[4/3] bg-gradient-to-br from-[#FFD43B] via-[#FFA94D] to-[#FF7A59] overflow-hidden select-none p-6 flex flex-col justify-center items-center ${className}`}
    >
      {/* Background Soft Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 40% 40%, rgba(255,255,255,0.4) 0%, transparent 65%)',
        }}
      />

      {/* Dot Matrix */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(#0A0A0F 1.5px, transparent 1.5px)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* Floating UI Blocks / Architecture Nodes */}
      <div className="relative z-10 w-full max-w-[280px] space-y-3">
        {/* Floating Card 1: Agentic routine */}
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="p-3.5 rounded-xl bg-white/90 backdrop-blur-md shadow-[0_10px_25px_rgba(255,122,89,0.25)] border border-white flex items-center justify-between"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF7A59]" />
            <span className="font-mono text-[11px] font-bold text-[#0A0A0F]">
              AgentWorkflow.prompt()
            </span>
          </div>
          <span className="font-mono text-[9px] text-[#2F5BFF] bg-[#E3EBFF] px-2 py-0.5 rounded font-bold">
            ACTIVE
          </span>
        </motion.div>

        {/* Floating Card 2: Visual canvas block */}
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="p-3.5 rounded-xl bg-[#0A0A0F] text-white shadow-[0_12px_30px_rgba(10,10,15,0.2)] flex items-center justify-between ml-4"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FFD43B]" />
            <span className="font-sans text-[12px] font-semibold">
              Canvas Node: Logic Router
            </span>
          </div>
          <span className="font-mono text-[9px] text-[#FFD43B]">v2.4</span>
        </motion.div>
      </div>

      <div className="absolute bottom-4 right-4 z-20 px-3 py-1 rounded-full bg-black/20 backdrop-blur-md border border-white/40 text-white font-mono text-[10px] tracking-wider uppercase font-semibold">
        GENERATIVE CANVAS
      </div>
    </div>
  );
}

// Card 3: Enterprise Platform - Violet/blue node-graph or data-flow illustration
export function EnterpriseArtwork({ className = 'w-full h-full' }) {
  return (
    <div
      className={`relative w-full aspect-[4/3] bg-gradient-to-br from-[#4C1D95] via-[#7B5CFF] to-[#2F5BFF] overflow-hidden select-none flex items-center justify-center p-6 ${className}`}
    >
      {/* Background Soft Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 60% 40%, rgba(255,255,255,0.3) 0%, transparent 65%)',
        }}
      />

      {/* Node Graph SVG with Animated Pulses */}
      <svg
        className="relative z-10 w-full h-full max-w-[320px] max-h-[220px]"
        viewBox="0 0 320 220"
        fill="none"
      >
        {/* Connection Lines */}
        <path
          d="M50 110 L130 60 L210 140 L280 80"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
        <path
          d="M130 60 L210 60 L280 160"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1.5"
        />
        <path
          d="M50 110 L130 160 L210 140"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2"
        />

        {/* Nodes */}
        <circle cx="50" cy="110" r="14" fill="#FFFFFF" fillOpacity="0.2" />
        <circle cx="50" cy="110" r="7" fill="#FFD43B" />

        <circle cx="130" cy="60" r="16" fill="#FFFFFF" fillOpacity="0.25" />
        <circle cx="130" cy="60" r="8" fill="#FFFFFF" />

        <circle cx="130" cy="160" r="12" fill="#FFFFFF" fillOpacity="0.2" />
        <circle cx="130" cy="160" r="6" fill="#5B8CFF" />

        <circle cx="210" cy="140" r="18" fill="#FFFFFF" fillOpacity="0.3" />
        <circle cx="210" cy="140" r="9" fill="#FFD43B" />

        <circle cx="280" cy="80" r="16" fill="#FFFFFF" fillOpacity="0.2" />
        <circle cx="280" cy="80" r="8" fill="#FFFFFF" />

        <circle cx="280" cy="160" r="12" fill="#FFFFFF" fillOpacity="0.2" />
        <circle cx="280" cy="160" r="6" fill="#2F5BFF" />
      </svg>

      <div className="absolute bottom-4 left-4 z-20 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-mono text-[10px] tracking-wider uppercase font-semibold">
        DISTRIBUTED DATA MESH • 99.99% SLA
      </div>
    </div>
  );
}
