import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Layers,
  RefreshCw,
  Workflow,
  Cpu,
  Building2,
  Cloud,
} from 'lucide-react';
import { Eyebrow } from '../ui/Eyebrow';
import { useNavigation } from '../../context/NavigationContext';

export function SolutionsByBusinessNeed() {
  const { openContact } = useNavigation();
  const [activeTab, setActiveTab] = useState(0);

  const needs = [
    {
      id: 'idea',
      statement: 'I have a new idea.',
      icon: Layers,
      text: 'We can help turn your idea into a validated, designed and production-ready digital product.',
      cta: 'Build My Idea →',
      badge: '0-TO-1 PRODUCT LAUNCH',
      highlights: [
        'Interactive UI/UX Prototypes',
        'System Architecture RFC',
        'Production Stack & Cloud Deployment',
      ],
    },
    {
      id: 'manual',
      statement: 'My business has too much manual work.',
      icon: Workflow,
      text: 'We can identify repetitive processes and automate them using software, APIs and AI.',
      cta: 'Automate My Business →',
      badge: 'PROCESS AUTOMATION',
      highlights: [
        'Automated Workflow Pipelines',
        'Cross-Tool Synchronization',
        'AI Data Processing & Alerts',
      ],
    },
    {
      id: 'ai',
      statement: 'I want to add AI to my product.',
      icon: Cpu,
      text: 'We can design and integrate AI capabilities that provide genuine value to your users or team.',
      cta: 'Add AI to My Product →',
      badge: 'APPLIED AI INTEGRATION',
      highlights: [
        'Enterprise RAG & Knowledge Retrieval',
        'Autonomous Agent Workflows',
        'Model Fine-Tuning & Memory Systems',
      ],
    },
    {
      id: 'outdated',
      statement: 'Our existing software is outdated.',
      icon: RefreshCw,
      text: 'We can modernize your architecture, improve performance and gradually migrate your system.',
      cta: 'Modernize My Software →',
      badge: 'LEGACY MODERNIZATION',
      highlights: [
        'Architecture Audit & Risk Analysis',
        'Monolith to Microservices Transition',
        'Zero-Downtime Phased Cutover',
      ],
    },
    {
      id: 'enterprise',
      statement: 'We need custom enterprise software.',
      icon: Building2,
      text: 'We can design a centralized system around your organization’s processes and requirements.',
      cta: 'Build Our Platform →',
      badge: 'ENTERPRISE ARCHITECTURE',
      highlights: [
        'Custom ERP & Centralized Operations',
        'Role-Based Access & Audit Logging',
        'Compliance & SLA Guarantees',
      ],
    },
    {
      id: 'scale',
      statement: 'Our product needs to scale.',
      icon: Cloud,
      text: 'We can review your architecture and improve performance, reliability, infrastructure and scalability.',
      cta: 'Scale Our Product →',
      badge: 'INFRASTRUCTURE SCALING',
      highlights: [
        'Distributed Cloud Auto-Scaling',
        'Database Sharding & Caching Tiers',
        'Real-Time APM Tracing & 99.99% SLA',
      ],
    },
  ];

  const currentNeed = needs[activeTab];

  return (
    <section
      id="business-needs"
      data-reveal="business-needs"
      className="relative w-full py-28 sm:py-36 bg-[#0A0A12] text-white overflow-hidden border-b border-white/10 select-none"
    >
      {/* 1. Blue & Violet Aurora Glows & Subtle Grid */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute -top-[15%] left-[20%] w-[680px] h-[680px] rounded-full opacity-25 animate-dark-aurora"
          style={{
            background:
              'radial-gradient(circle, rgba(47,91,255,0.7) 0%, rgba(123,92,255,0.3) 50%, transparent 75%)',
            filter: 'blur(120px)',
          }}
        />
        <div
          className="absolute -bottom-[20%] right-[15%] w-[650px] h-[650px] rounded-full opacity-20 animate-dark-aurora [animation-delay:5s]"
          style={{
            background:
              'radial-gradient(circle, rgba(123,92,255,0.6) 0%, rgba(47,91,255,0.2) 50%, transparent 75%)',
            filter: 'blur(120px)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Block Verbatim */}
        <div className="mb-14 sm:mb-20">
          <Eyebrow dotColor="bg-[#FFD43B]" variant="dark">
            WHAT ARE YOU TRYING TO ACHIEVE?
          </Eyebrow>

          <h2 className="font-display text-[40px] sm:text-[54px] lg:text-[68px] leading-[1.02] text-white">
            Start with the problem.{' '}
            <span className="italic font-serif text-gradient-aurora">
              We’ll figure out the technology.
            </span>
          </h2>
        </div>

        {/* Two-Column Layout: Left = 6 Selectable Tabs, Right = Glass Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column (Cols 1-5): 6 Selectable Tabs Verbatim */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            {needs.map((item, index) => {
              const isActive = activeTab === index;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(index)}
                  role="tab"
                  aria-selected={isActive}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between group ${
                    isActive
                      ? 'bg-[#2F5BFF]/20 border-[#2F5BFF] text-white shadow-[0_0_20px_rgba(47,91,255,0.35)]'
                      : 'bg-white/[0.04] border-white/10 text-white/70 hover:bg-white/[0.08] hover:text-white hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                        isActive
                          ? 'bg-[#2F5BFF] text-white'
                          : 'bg-white/10 text-white/50 group-hover:text-white'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    <span
                      className={`font-sans text-[15px] sm:text-[16px] font-semibold transition-colors ${
                        isActive ? 'text-white' : 'text-white/80 group-hover:text-white'
                      }`}
                    >
                      “{item.statement}”
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {isActive ? (
                      <span className="w-2 h-2 rounded-full bg-[#FFD43B] animate-pulse" />
                    ) : (
                      <span className="font-mono text-[11px] text-white/40">0{index + 1}</span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column (Cols 6-12): Glass Card with Answer & CTA Verbatim */}
          <div className="lg:col-span-7">
            <div className="glass-panel-dark rounded-[28px] p-8 sm:p-11 border border-white/15 relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentNeed.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Top Meta Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <span className="font-mono text-[11px] font-bold text-[#0A0A0F] bg-[#FFD43B] px-3 py-1 rounded-full uppercase">
                      {currentNeed.badge}
                    </span>
                    <span className="font-mono text-[11px] text-white/60">
                      STEP 0{activeTab + 1} / 06
                    </span>
                  </div>

                  {/* Statement Title */}
                  <h3 className="font-sans text-[24px] sm:text-[28px] font-bold text-white mb-4 tracking-tight leading-snug">
                    “{currentNeed.statement}”
                  </h3>

                  {/* Answer Text Verbatim */}
                  <p className="text-[17px] sm:text-[19px] leading-[1.65] text-white/90 mb-8 font-light">
                    {currentNeed.text}
                  </p>

                  {/* Key Highlights */}
                  <div className="pt-6 border-t border-white/15 mb-8">
                    <p className="font-mono text-[11px] text-[#5B8CFF] uppercase tracking-[0.16em] mb-4 font-semibold">
                      WHAT WE DELIVER IN THIS TRACK
                    </p>
                    <div className="space-y-2.5">
                      {currentNeed.highlights.map((item) => (
                        <div
                          key={item}
                          className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 text-[13px] text-white/90"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FFD43B]" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button Verbatim */}
                  <div className="pt-6 border-t border-white/15 flex items-center justify-between">
                    <span className="font-mono text-[11px] text-white/50">
                      PROMPT CONSULTATION
                    </span>

                    <button
                      onClick={() => openContact(`Business Need: ${currentNeed.statement}`)}
                      className="h-12 px-7 rounded-full bg-[#FFD43B] hover:bg-white text-[#0A0A0F] text-[14px] font-bold tracking-wide flex items-center justify-center gap-2.5 transition-all duration-300 shadow-[0_4px_20px_rgba(255,212,59,0.3)] cursor-pointer"
                    >
                      <span>{currentNeed.cta}</span>
                      <ArrowRight className="w-4 h-4 text-[#0A0A0F]" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
