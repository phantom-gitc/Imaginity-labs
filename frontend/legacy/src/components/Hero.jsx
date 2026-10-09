import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Sparkles, Activity, ShieldCheck, Zap } from 'lucide-react';
import { Magnetic } from './ui/Magnetic';
import { RobotScene } from './hero/RobotScene';

export function Hero({ onOpenContact }) {
  // Mouse parallax motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const rotateX = useTransform(springY, [-300, 300], [5, -5]);
  const rotateY = useTransform(springX, [-300, 300], [-5, 5]);
  const parallaxChip1 = useTransform(springX, [-300, 300], [-20, 20]);
  const parallaxChip2 = useTransform(springY, [-300, 300], [18, -18]);
  const parallaxChip3 = useTransform(springX, [-300, 300], [15, -15]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    mouseX.set(clientX - centerX);
    mouseY.set(clientY - centerY);
  };

  const lineVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.15 * i,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-[92svh] lg:min-h-[100svh] bg-white overflow-hidden flex items-center border-b border-[#E6E8EE] pt-24 pb-16 lg:py-20"
    >
      {/* 1. Light Mesh Gradient Background (Blue-100, Violet Tint, Yellow-100) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Soft blue-100 mesh orb top-right */}
        <div
          className="absolute -top-[15%] right-[5%] w-[680px] h-[680px] rounded-full animate-light-mesh-1 opacity-70"
          style={{
            background:
              'radial-gradient(circle, rgba(227,235,255,0.9) 0%, rgba(240,244,255,0.5) 45%, transparent 75%)',
            filter: 'blur(80px)',
          }}
        />

        {/* Violet tint orb center-right */}
        <div
          className="absolute top-[35%] right-[25%] w-[520px] h-[520px] rounded-full animate-light-mesh-2 opacity-40"
          style={{
            background:
              'radial-gradient(circle, rgba(123,92,255,0.18) 0%, rgba(227,235,255,0.3) 45%, transparent 70%)',
            filter: 'blur(90px)',
          }}
        />

        {/* Yellow-100 soft highlight in corner */}
        <div
          className="absolute bottom-[-10%] left-[10%] w-[480px] h-[480px] rounded-full opacity-40"
          style={{
            background:
              'radial-gradient(circle, rgba(255,244,194,0.7) 0%, rgba(255,255,255,0) 65%)',
            filter: 'blur(70px)',
          }}
        />

        {/* Fine grid pattern fading at edges */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #0A0A0F 1px, transparent 1px), linear-gradient(to bottom, #0A0A0F 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage:
              'radial-gradient(ellipse at center, black 40%, transparent 80%)',
            WebkitMaskImage:
              'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          }}
        />
      </div>

      {/* 12-Column Grid Container - Balanced 6/6 split & centered alignment */}
      <div className="relative z-10 max-w-[1280px] w-full mx-auto px-6 sm:px-8 lg:px-12 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (Cols 1-6): Balanced Headline & Content */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center z-10">
            {/* Studio Badge with Yellow Pop Accent */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2.5 mb-6 w-fit"
            >
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7F8FA] border border-[#E6E8EE] shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#2F5BFF] animate-pulse" />
                <span className="font-mono text-[11px] font-semibold tracking-[0.16em] text-[#0A0A0F] uppercase">
                  SOFTWARE / AI / AUTOMATION
                </span>
                <span className="px-1.5 py-0.5 rounded-full bg-[#FFD43B] text-[#0A0A0F] font-mono text-[9px] font-bold tracking-wider">
                  STUDIO
                </span>
              </div>
            </motion.div>

            {/* Proportionate Editorial Headline with Masked Slide-Up */}
            <h1 className="h1-hero text-[#0A0A0F] mb-6 font-display select-none">
              <span className="block overflow-hidden pb-1">
                <motion.span
                  custom={0}
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                  className="block"
                >
                  We build software
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-1">
                <motion.span
                  custom={1}
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                  className="block"
                >
                  that moves businesses
                </motion.span>
              </span>
              <span className="block overflow-hidden pt-1 pb-3">
                <motion.span
                  custom={2}
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                  className="relative inline-block"
                >
                  <span className="italic font-serif text-gradient-brand">
                    forward.
                  </span>
                  
                  {/* Hand-drawn SVG Yellow Underline */}
                  <svg
                    className="absolute -bottom-1.5 sm:-bottom-2 left-0 w-full h-3.5 overflow-visible pointer-events-none"
                    viewBox="0 0 240 16"
                    fill="none"
                  >
                    <motion.path
                      d="M4 11C60 4 140 3 236 8C190 12 110 13 40 14"
                      stroke="#FFD43B"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{
                        duration: 1.1,
                        delay: 0.85,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  </svg>
                </motion.span>
              </span>
            </h1>

            {/* Sub-headline Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="text-[17px] sm:text-[18px] leading-[1.65] text-[#4A4F5C] max-w-[42ch] mb-8 font-sans"
            >
              From digital products to intelligent systems and automation, we design and build technology around real business needs.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-4 mb-9"
            >
              <Magnetic strength={0.25}>
                <button
                  onClick={onOpenContact}
                  className="h-12 sm:h-13 px-7 sm:px-8 bg-[#0A0A0F] text-white text-[14px] sm:text-[15px] font-semibold tracking-wide flex items-center gap-2.5 sm:gap-3 rounded-full shadow-[0_6px_24px_rgba(10,10,15,0.18)] hover:shadow-[0_10px_32px_rgba(47,91,255,0.25)] transition-all duration-300 btn-primary-sheen cursor-pointer border border-[#0A0A0F]"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-4 h-4 text-[#FFD43B]" />
                </button>
              </Magnetic>

              <Magnetic strength={0.2}>
                <a
                  href="#work"
                  className="group h-12 sm:h-13 px-6 sm:px-7 bg-white hover:bg-[#F7F8FA] text-[#0A0A0F] text-[14px] sm:text-[15px] font-medium tracking-wide flex items-center gap-2.5 rounded-full border border-[#E6E8EE] hover:border-[#2F5BFF]/50 shadow-2xs transition-all duration-300 cursor-pointer"
                >
                  <span>Explore Our Work</span>
                  <ArrowUpRight className="w-4 h-4 text-[#8A90A0] group-hover:text-[#2F5BFF] transition-colors" />
                </a>
              </Magnetic>
            </motion.div>

            {/* Small Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap items-center gap-5 pt-5 border-t border-[#E6E8EE] text-[#8A90A0] font-mono text-[11px] uppercase tracking-wider"
            >
              <div className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-[#2F5BFF]" />
                <span className="text-[#4A4F5C] font-semibold">2-Week Prototype Sprint</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-[#E6E8EE]" />
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2F5BFF]" />
                <span className="text-[#4A4F5C] font-semibold">Enterprise Security</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-[#E6E8EE]" />
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#FFD43B]" />
                <span className="text-[#4A4F5C] font-semibold">Senior Leads</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column (Cols 7-12): Seamless Blended 3D Robot & Floating Chips */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center min-h-[480px] sm:min-h-[580px] lg:min-h-[660px]">
            {/* Parallax Container */}
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              className="relative w-full flex items-center justify-center select-none"
            >
              {/* Interactive 3D Spline Robot - Seamlessly Blended Without Box */}
              <RobotScene />

              {/* Floating Glass Chip 1: 50+ Products Shipped (Top-Left) */}
              <motion.div
                style={{ x: parallaxChip1 }}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute top-2 left-2 sm:-left-2 z-20 pointer-events-none"
              >
                <div className="glass-pill px-4 py-2.5 rounded-2xl flex items-center gap-3 shadow-[0_10px_25px_rgba(10,10,15,0.06)] pointer-events-none">
                  <div className="w-7 h-7 rounded-full bg-[#E3EBFF] flex items-center justify-center text-[#2F5BFF]">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="font-sans font-bold text-[13px] text-[#0A0A0F] leading-none mb-0.5">
                      50+ Products
                    </p>
                    <p className="font-mono text-[10px] text-[#2F5BFF] uppercase tracking-wider leading-none font-semibold">
                      Shipped & Scaled
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Glass Chip 2: 99.9% Uptime (Bottom-Left) */}
              <motion.div
                style={{ y: parallaxChip2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.85 }}
                className="absolute bottom-6 left-0 sm:-left-4 z-20 pointer-events-none"
              >
                <div className="glass-pill px-4 py-2.5 rounded-2xl flex items-center gap-3 shadow-[0_10px_25px_rgba(10,10,15,0.06)] pointer-events-none">
                  <div className="relative w-7 h-7 rounded-full bg-[#E3EBFF] flex items-center justify-center text-[#2F5BFF]">
                    <Activity className="w-3.5 h-3.5" />
                    <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#2F5BFF] animate-ping" />
                  </div>
                  <div>
                    <p className="font-sans font-bold text-[13px] text-[#0A0A0F] leading-none mb-0.5">
                      99.9% Uptime
                    </p>
                    <p className="font-mono text-[10px] text-[#8A90A0] uppercase tracking-wider leading-none">
                      Enterprise SLA
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Glass Chip 3: Turning Ideas Into Impact (Bottom-Right) */}
              <motion.div
                style={{ x: parallaxChip3 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute bottom-10 right-2 sm:right-0 z-20 pointer-events-none"
              >
                <div className="glass-pill px-4 py-2.5 rounded-2xl flex items-center gap-3 shadow-[0_12px_30px_rgba(10,10,15,0.08)] border-l-4 border-l-[#FFD43B] pointer-events-none">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2F5BFF] animate-pulse" />
                  <div className="font-sans text-[13px] font-semibold text-[#0A0A0F] leading-snug">
                    <p>Turning Ideas</p>
                    <p className="text-[#2F5BFF]">Into Impact</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
