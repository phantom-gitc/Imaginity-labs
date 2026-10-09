import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, CheckCircle2, Shield, Calendar, Zap } from 'lucide-react';
import { Magnetic } from './ui/Magnetic';

export function CTASection({ onOpenContact }) {
  const [activePipeline, setActivePipeline] = useState(2); // default Intelligence

  const pipelineRows = [
    { name: 'Ideas', step: '01', desc: 'Concept & Technical Roadmap' },
    { name: 'Products', step: '02', desc: 'System Architecture & UX Prototypes' },
    { name: 'Intelligence', step: '03', desc: 'Agentic Workflows & Model Fine-Tuning' },
    { name: 'Impact', step: '04', desc: 'Autonomous Scaling & Real ROI' },
  ];

  // Auto-advance pipeline cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePipeline((prev) => (prev + 1) % pipelineRows.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [pipelineRows.length]);

  return (
    <section
      id="cta"
      className="relative w-full py-20 sm:py-28 lg:py-36 bg-white overflow-hidden border-b border-[#E6E8EE]"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Large Rounded-3xl Panel with Blue-600 -> Violet-500 Gradient Mesh */}
        <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-[#2F5BFF] via-[#5B8CFF] to-[#7B5CFF] text-white p-8 sm:p-14 lg:p-20 shadow-[0_30px_70px_-20px_rgba(47,91,255,0.45)] border border-white/20">
          
          {/* Layered Mesh Radial Glows */}
          <div className="absolute inset-0 pointer-events-none z-0">
            {/* Top-right vivid glow */}
            <div
              className="absolute -top-[20%] -right-[10%] w-[650px] h-[650px] rounded-full opacity-60"
              style={{
                background:
                  'radial-gradient(circle, rgba(255,212,59,0.35) 0%, rgba(123,92,255,0.4) 45%, transparent 75%)',
                filter: 'blur(90px)',
              }}
            />
            {/* Bottom-left deep mesh orb */}
            <div
              className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] rounded-full opacity-50"
              style={{
                background:
                  'radial-gradient(circle, rgba(47,91,255,0.6) 0%, rgba(123,92,255,0.4) 50%, transparent 75%)',
                filter: 'blur(100px)',
              }}
            />
            {/* Grid overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  'linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column (Cols 1-7): Big Serif Headline, Narrative, and Buttons */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 mb-6 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#FFD43B]" />
                <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-white uppercase">
                  INITIATE COLLABORATION
                </span>
              </div>

              {/* Giant White Serif Headline with Yellow Highlight on "next" */}
              <h2 className="font-display text-[44px] sm:text-[62px] lg:text-[76px] leading-[0.96] tracking-[-0.03em] text-white mb-6">
                Let's build <br />
                <span className="italic font-serif">
                  what's{' '}
                  <span className="relative inline-block text-[#0A0A0F] px-3 py-0.5 rounded-xl bg-[#FFD43B] not-italic font-sans font-bold text-[0.88em]">
                    next.
                  </span>
                </span>
              </h2>

              <p className="text-[17px] sm:text-[19px] leading-[1.65] text-white/90 max-w-[44ch] mb-10 font-sans font-light">
                Whether you are launching a flagship digital product, integrating custom AI pipelines, or scaling high-volume automation, we bring clarity, velocity and world-class craft.
              </p>

              {/* Action Buttons: Yellow Primary + White Ghost Secondary */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <Magnetic strength={0.3}>
                  <button
                    onClick={onOpenContact}
                    className="h-14 px-8 bg-[#FFD43B] hover:bg-white text-[#0A0A0F] text-[15px] font-bold tracking-wide flex items-center gap-3 rounded-full shadow-[0_8px_24px_rgba(255,212,59,0.35)] transition-all duration-300 cursor-pointer"
                  >
                    <span>Start a Conversation</span>
                    <ArrowUpRight className="w-4 h-4 text-[#0A0A0F]" />
                  </button>
                </Magnetic>

                <Magnetic strength={0.25}>
                  <button
                    onClick={onOpenContact}
                    className="h-14 px-7 bg-white/15 hover:bg-white/25 text-white text-[15px] font-medium tracking-wide flex items-center gap-2.5 rounded-full backdrop-blur-md border border-white/30 transition-all duration-300 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-[#FFD43B]" />
                    <span>Schedule 20-min Intro</span>
                  </button>
                </Magnetic>
              </div>

              {/* Three Small Trust Points */}
              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/20 text-white text-[13px] font-medium">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#FFD43B]" />
                  <span>2-Week Prototype Sprint</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#FFD43B]" />
                  <span>Full IP & Codebase Ownership</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FFD43B]" />
                  <span>Direct Senior Leads Only</span>
                </div>
              </div>
            </div>

            {/* Right Column (Cols 8-12): Glass "Delivery Pipeline" Widget */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-md bg-white/15 backdrop-blur-2xl border border-white/30 rounded-[28px] p-6 sm:p-7 shadow-2xl relative overflow-hidden">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-5 mb-5 border-b border-white/20">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#FFD43B] animate-ping" />
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white font-bold">
                      DELIVERY PIPELINE
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-white/80 px-2.5 py-0.5 rounded-full bg-white/20 font-semibold">
                    PHASE 0{activePipeline + 1}/04
                  </span>
                </div>

                {/* Pipeline Rows */}
                <div className="space-y-3">
                  {pipelineRows.map((row, idx) => {
                    const isActive = activePipeline === idx;
                    return (
                      <div
                        key={row.name}
                        onClick={() => setActivePipeline(idx)}
                        className={`p-3.5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between ${
                          isActive
                            ? 'bg-white text-[#0A0A0F] border-white shadow-[0_0_25px_rgba(255,255,255,0.4)]'
                            : 'bg-white/10 border-white/15 hover:bg-white/15 text-white/85'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-[11px] font-bold transition-colors ${
                              isActive
                                ? 'bg-[#2F5BFF] text-white'
                                : 'bg-white/20 text-white'
                            }`}
                          >
                            {row.step}
                          </div>
                          <div>
                            <p
                              className={`text-[14px] font-bold leading-tight ${
                                isActive ? 'text-[#0A0A0F]' : 'text-white'
                              }`}
                            >
                              {row.name}
                            </p>
                            <p
                              className={`text-[11px] leading-tight mt-0.5 truncate max-w-[200px] ${
                                isActive ? 'text-[#4A4F5C]' : 'text-white/70'
                              }`}
                            >
                              {row.desc}
                            </p>
                          </div>
                        </div>

                        {isActive ? (
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-[#2F5BFF] animate-pulse" />
                            <span className="font-mono text-[10px] text-[#2F5BFF] font-bold uppercase tracking-wider">
                              ACTIVE
                            </span>
                          </div>
                        ) : (
                          <span className="font-mono text-[10px] text-white/50 uppercase font-semibold">
                            QUEUE
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Status ticker */}
                <div className="mt-5 pt-4 border-t border-white/20 flex items-center justify-between text-[11px] font-mono text-white/80">
                  <span>AVERAGE DEPLOYMENT</span>
                  <span className="text-[#FFD43B] font-bold">2–6 WEEKS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
