import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, ShieldCheck, Cpu, Activity, Zap, CheckCircle2 } from 'lucide-react';
import { Eyebrow } from '../ui/Eyebrow';
import { Magnetic } from '../ui/Magnetic';
import { useNavigation } from '../../context/NavigationContext';

export function SolutionsHero() {
  const { openContact, navigateTo } = useNavigation();

  return (
    <section
      data-reveal="hero"
      className="relative w-full pt-32 sm:pt-40 lg:pt-48 pb-20 sm:pb-28 bg-[#FFFFFF] overflow-hidden border-b border-[#E6E8EE]"
    >
      {/* 1. Subtle Background Grid & Soft Radial Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #0A0A0F 1px, transparent 1px), linear-gradient(to bottom, #0A0A0F 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        {/* Soft Ambient Aurora Glow Fading to White */}
        <div
          className="absolute top-10 right-1/4 w-[700px] h-[700px] rounded-full opacity-60 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(227,235,255,0.7) 0%, rgba(240,244,255,0.4) 45%, transparent 75%)',
            filter: 'blur(90px)',
          }}
        />
        <div
          className="absolute -top-20 left-10 w-[500px] h-[500px] rounded-full opacity-40 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(255,248,225,0.8) 0%, rgba(255,244,194,0.3) 50%, transparent 75%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Two-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column (Cols 1-7): Eyebrow, H1, Description, Action Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <Eyebrow dotColor="bg-[#2F5BFF]">OUR SOLUTIONS</Eyebrow>

            {/* H1 Headline */}
            <h1 className="h1-hero text-[#0A0A0F] mb-6">
              Technology{' '}
              <span className="relative inline-block">
                solutions
                <svg
                  className="absolute -bottom-1 left-0 w-full h-[7px] text-[#FFD43B] overflow-visible pointer-events-none"
                  viewBox="0 0 100 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9.5C32 3 70 3 98 8.5"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              <br />
              <span className="italic font-serif text-gradient-brand">
                built around your business.
              </span>
            </h1>

            {/* Description Verbatim */}
            <p className="text-[17px] sm:text-[19px] leading-[1.65] text-[#4A4F5C] max-w-[48ch] mb-9 font-normal">
              From digital products and intelligent AI systems to automation, enterprise platforms and scalable infrastructure, we build technology that solves real problems and creates measurable value.
            </p>

            {/* CTA Buttons Verbatim */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Magnetic strength={0.3}>
                <button
                  onClick={() => openContact()}
                  className="h-13 sm:h-14 px-7 sm:px-8 bg-[#0A0A0F] hover:bg-[#2F5BFF] text-white text-[14px] sm:text-[15px] font-medium tracking-wide flex items-center gap-2.5 rounded-full shadow-[0_4px_20px_rgba(10,10,15,0.18)] transition-all duration-300 btn-primary-sheen cursor-pointer border border-[#0A0A0F]"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4 text-[#FFD43B]" />
                </button>
              </Magnetic>

              <Magnetic strength={0.25}>
                <button
                  onClick={() => navigateTo('/', '#work')}
                  className="h-13 sm:h-14 px-6 sm:px-7 bg-white hover:bg-[#F7F8FA] text-[#0A0A0F] text-[14px] sm:text-[15px] font-medium tracking-wide flex items-center gap-2 rounded-full border border-[#E6E8EE] hover:border-[#2F5BFF]/40 shadow-2xs transition-all duration-300 cursor-pointer"
                >
                  <span>Explore Our Work</span>
                  <ArrowUpRight className="w-4 h-4 text-[#4A4F5C]" />
                </button>
              </Magnetic>
            </div>

            {/* Trust Micro-Strip Under the Hero */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-[#E6E8EE] text-[11px] sm:text-[12px] font-mono text-[#8A90A0]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#2F5BFF]" />
                <span className="text-[#4A4F5C] font-semibold">STAGE-AGNOSTIC ENGINEERING</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#2F5BFF]" />
                <span className="text-[#4A4F5C] font-medium">SOC2 & HIPAA COMPLIANT</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span className="text-[#4A4F5C] font-medium">99.99% PRODUCTION SLA</span>
              </div>
            </div>
          </div>

          {/* Right Column (Cols 8-12): Composed Visual with 3-4 Floating Glass Stat Chips */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-lg">
              
              {/* Main Abstract Layered Diagram Card */}
              <div className="relative rounded-[28px] overflow-hidden bg-white border border-[#E6E8EE] shadow-[0_20px_50px_-15px_rgba(10,10,15,0.08),0_10px_30px_-10px_rgba(47,91,255,0.06)] p-3 sm:p-4">
                
                {/* Image Container with Soft Glass Framing */}
                <div className="relative rounded-[22px] overflow-hidden bg-[#F7F8FA] border border-[#E6E8EE] aspect-[4/3]">
                  <img
                    src="/images/system_architecture.jpg"
                    alt="Nexora Labs Abstract Multi-Tier System Architecture"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="eager"
                  />
                  
                  {/* Glass Header Tag on Image */}
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/85 backdrop-blur-md border border-white/60 shadow-xs flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#2F5BFF] animate-pulse" />
                    <span className="font-mono text-[10px] font-bold text-[#0A0A0F] tracking-wider uppercase">
                      SYSTEM ARCHITECTURE v4.2
                    </span>
                  </div>

                  {/* Latency Indicator Tag */}
                  <div className="absolute bottom-3.5 right-3.5 px-3 py-1 rounded-full bg-[#0A0A0F]/85 backdrop-blur-md border border-white/20 text-white font-mono text-[10px] flex items-center gap-1.5 shadow-md">
                    <Activity className="w-3 h-3 text-[#FFD43B]" />
                    <span>&lt;42ms EDGE INFERENCE</span>
                  </div>
                </div>

                {/* Sub-Card Architecture Telemetry Bar */}
                <div className="mt-3 px-3 py-2.5 rounded-xl bg-[#F7F8FA] border border-[#E6E8EE] flex items-center justify-between text-[11px] font-mono text-[#6B7280]">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5 text-[#2F5BFF]" />
                    <span>DISTRIBUTED VECTOR MESH</span>
                  </div>
                  <span className="text-[#2F5BFF] font-semibold">100% OPERATIONAL</span>
                </div>
              </div>

              {/* Floating Glass Stat Chip 1: Top-Right */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="absolute -top-4 -right-4 sm:-right-6 px-4 py-2.5 rounded-2xl bg-white/90 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgba(47,91,255,0.12)] flex items-center gap-3 z-20 pointer-events-none"
              >
                <div className="w-8 h-8 rounded-xl bg-[#E3EBFF] flex items-center justify-center text-[#2F5BFF]">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[#8A90A0]">
                    DEPLOYMENT READY
                  </p>
                  <p className="font-sans text-[13px] font-bold text-[#0A0A0F]">
                    50+ Systems Shipped
                  </p>
                </div>
              </motion.div>

              {/* Floating Glass Stat Chip 2: Bottom-Left */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="absolute -bottom-5 -left-4 sm:-left-6 px-4 py-2.5 rounded-2xl bg-white/90 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgba(10,10,15,0.1)] flex items-center gap-3 z-20 pointer-events-none"
              >
                <div className="w-8 h-8 rounded-xl bg-[#FFF4C2] flex items-center justify-center text-[#B45309]">
                  <Zap className="w-4 h-4 text-[#FFD43B]" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[#8A90A0]">
                    SPEED-TO-IMPACT
                  </p>
                  <p className="font-sans text-[13px] font-bold text-[#0A0A0F]">
                    10x Operational Lift
                  </p>
                </div>
              </motion.div>

              {/* Floating Glass Stat Chip 3: Middle-Right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.45, duration: 0.5 }}
                className="hidden sm:flex absolute top-1/2 -right-8 -translate-y-1/2 px-3.5 py-2 rounded-xl bg-white/85 backdrop-blur-lg border border-[#E6E8EE] shadow-lg items-center gap-2.5 z-20 pointer-events-none"
              >
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                <span className="font-mono text-[11px] font-semibold text-[#0A0A0F]">
                  Multi-Agent Active
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
