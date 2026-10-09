import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle2, Clock, Sparkles } from 'lucide-react';

export function OurApproach() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Discover',
      phase: 'Diagnostic & Research',
      duration: 'Week 1',
      desc: 'Unpack core operational challenges, existing software architecture, user mechanics, and primary high-leverage business objectives.',
      deliverables: ['Opportunity Blueprint', 'Technical Feasibility Audit', 'User Journey Map'],
      metric: '100% Alignment',
    },
    {
      num: '02',
      title: 'Define',
      phase: 'Architecture & RFC',
      duration: 'Week 2',
      desc: 'Architect full system specifications, data models, AI model selection, latency constraints, and measurable success criteria.',
      deliverables: ['System Architecture RFC', 'Data & Vector Schema', 'Security & SLA Framework'],
      metric: 'Zero Ambiguity',
    },
    {
      num: '03',
      title: 'Design',
      phase: 'Interactive Prototypes',
      duration: 'Weeks 3–4',
      desc: 'Craft intuitive tactile user interfaces, modular design systems, and rapid verified prototypes tested with real users.',
      deliverables: ['Design System in Figma', 'Clickable High-Fi Prototype', 'Component Token Matrix'],
      metric: 'Sub-millisecond Feel',
    },
    {
      num: '04',
      title: 'Build',
      phase: 'Engineering & Modeling',
      duration: 'Weeks 5–8',
      desc: 'Engineer production-grade web applications, autonomous AI agents, resilient API bridges, and rock-solid cloud infrastructure.',
      deliverables: ['Production Next.js / Python Stack', 'Custom RAG & LLM Pipelines', 'Automated Test Suite'],
      metric: '95%+ Test Coverage',
    },
    {
      num: '05',
      title: 'Launch',
      phase: 'Deployment & Telemetry',
      duration: 'Week 9',
      desc: 'Deploy with zero downtime, comprehensive end-to-end integration tests, APM telemetry, and enterprise security reviews.',
      deliverables: ['Zero-Downtime Rollout', 'Real-Time Tracing & Metrics', 'Disaster Recovery Plan'],
      metric: '99.99% Availability',
    },
    {
      num: '06',
      title: 'Scale',
      phase: 'Continuous Acceleration',
      duration: 'Ongoing',
      desc: 'Refine inference latency, optimize token economics, expand automated workloads, and empower the client team with documentation.',
      deliverables: ['Inference Cost Optimization', 'Automated Self-Healing Loops', 'Continuous Roadmap Support'],
      metric: '10x Scale Ready',
    },
  ];

  const handlePrev = () => {
    setCurrentStep((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  return (
    <section
      id="approach"
      className="relative w-full py-28 sm:py-36 lg:py-44 bg-[#0A0A0F] text-white overflow-hidden border-b border-white/10 select-none"
    >
      {/* 1. Blue & Violet Aurora Glows */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Electric Blue Aurora Orb */}
        <div
          className="absolute -top-[15%] left-[15%] w-[680px] h-[680px] rounded-full animate-dark-aurora opacity-30"
          style={{
            background:
              'radial-gradient(circle, rgba(47,91,255,0.7) 0%, rgba(123,92,255,0.3) 50%, transparent 75%)',
            filter: 'blur(110px)',
          }}
        />

        {/* Violet Aurora Orb */}
        <div
          className="absolute -bottom-[20%] right-[10%] w-[720px] h-[720px] rounded-full animate-dark-aurora opacity-25 [animation-delay:4s]"
          style={{
            background:
              'radial-gradient(circle, rgba(123,92,255,0.6) 0%, rgba(47,91,255,0.2) 50%, transparent 75%)',
            filter: 'blur(120px)',
          }}
        />

        {/* Faint Dark Grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (Cols 1-5): Eyebrow & Headline */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#FFD43B] animate-pulse" />
                <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-[#FFD43B] uppercase">
                  OUR METHODOLOGY
                </span>
              </div>

              <h2 className="h2-fluid text-white mb-6 font-display">
                From problem <br />
                <span className="italic font-serif text-gradient-aurora">
                  to production.
                </span>
              </h2>

              <p className="text-[17px] leading-[1.65] text-[#8A90A0] max-w-[42ch] mb-8 font-sans">
                Our disciplined 6-stage lifecycle moves initiatives from early ambiguity into high-performance software and autonomous systems deployed in production.
              </p>
            </div>

            {/* Quick Step Buttons */}
            <div className="hidden sm:grid grid-cols-3 gap-2.5 pt-6 border-t border-white/10">
              {steps.map((s, idx) => (
                <button
                  key={s.num}
                  onClick={() => setCurrentStep(idx)}
                  className={`text-left p-3 rounded-xl border transition-all duration-300 cursor-pointer ${
                    currentStep === idx
                      ? 'bg-[#2F5BFF]/25 border-[#2F5BFF] text-white shadow-[0_0_15px_rgba(47,91,255,0.3)]'
                      : 'bg-white/5 border-white/10 text-white/50 hover:bg-white/10 hover:text-white/80'
                  }`}
                >
                  <span
                    className={`block font-mono text-[10px] mb-0.5 font-bold ${
                      currentStep === idx ? 'text-[#FFD43B]' : 'text-white/40'
                    }`}
                  >
                    {s.num}
                  </span>
                  <span className="block text-[13px] font-medium leading-tight">
                    {s.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column (Cols 6-12): Stepper Track & Glass Panel */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* 6-Step Stepper Track */}
            <div className="relative mb-10">
              <div className="grid grid-cols-6 gap-2 mb-4">
                {steps.map((step, idx) => {
                  const isActive = currentStep === idx;
                  const isPassed = currentStep >= idx;
                  return (
                    <button
                      key={step.num}
                      onClick={() => setCurrentStep(idx)}
                      className="text-left cursor-pointer group focus:outline-none transition-all py-1"
                    >
                      <span
                        className={`block font-mono text-[11px] mb-1 transition-colors font-bold ${
                          isActive
                            ? 'text-[#FFD43B]'
                            : isPassed
                            ? 'text-[#5B8CFF]'
                            : 'text-white/35 group-hover:text-white/60'
                        }`}
                      >
                        {step.num}
                      </span>
                      <span
                        className={`block text-[13px] sm:text-[14px] truncate transition-colors ${
                          isActive
                            ? 'text-white font-bold'
                            : isPassed
                            ? 'text-white/80'
                            : 'text-white/40 group-hover:text-white/70'
                        }`}
                      >
                        {step.title}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Progress Line Track with glowing tip */}
              <div className="relative w-full h-[3px] bg-white/15 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#2F5BFF] via-[#5B8CFF] to-[#FFD43B] rounded-full"
                  animate={{
                    width: `${((currentStep + 1) / steps.length) * 100}%`,
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              </div>
            </div>

            {/* Glass Panel for Active Step Description */}
            <div className="glass-panel-dark rounded-[24px] p-8 sm:p-10 border border-white/15 shadow-2xl relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Step Meta Badges with Yellow Highlight on Active */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[12px] font-bold text-[#0A0A0F] bg-[#FFD43B] px-3 py-1 rounded-full">
                        PHASE {steps[currentStep].num}
                      </span>
                      <span className="font-mono text-[12px] text-[#5B8CFF] tracking-wider uppercase font-semibold">
                        {steps[currentStep].phase}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 font-mono text-[11px]">
                      <Clock className="w-3.5 h-3.5 text-[#5B8CFF]" />
                      <span>{steps[currentStep].duration}</span>
                    </div>
                  </div>

                  {/* Step Title & Main Description */}
                  <h3 className="font-sans text-[26px] sm:text-[30px] font-bold text-white mb-4 tracking-tight">
                    {steps[currentStep].title}
                  </h3>
                  <p className="text-[17px] sm:text-[18px] leading-[1.65] text-white/85 mb-8 font-light">
                    {steps[currentStep].desc}
                  </p>

                  {/* Deliverables List */}
                  <div className="pt-6 border-t border-white/15">
                    <p className="font-mono text-[11px] text-[#5B8CFF] uppercase tracking-[0.16em] mb-3 font-semibold">
                      Key Deliverables & Milestones
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                      {steps[currentStep].deliverables.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/10"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#FFD43B] shrink-0" />
                          <span className="text-[12px] font-medium text-white/90 truncate">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Prev / Next Controls */}
              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <span className="font-mono text-[12px] text-white/50">
                  Step {currentStep + 1} of {steps.length}
                </span>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrev}
                    className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-[#2F5BFF] flex items-center justify-center text-white transition-all cursor-pointer shadow-md"
                    aria-label="Previous approach step"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-[#2F5BFF] flex items-center justify-center text-white transition-all cursor-pointer shadow-md"
                    aria-label="Next approach step"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
