import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Shield, Users, Layers, Sparkles } from 'lucide-react';
import { Eyebrow } from '../ui/Eyebrow';
import { useNavigation } from '../../context/NavigationContext';

export function ServiceModels() {
  const { openContact } = useNavigation();
  const [activeModel, setActiveModel] = useState(0);

  const models = [
    {
      id: 'fixed',
      title: 'Fixed Project',
      subtitle: 'DEFINED SCOPE & TIMELINE',
      desc: 'Best for clearly defined projects with a specific scope and timeline.',
      cta: 'Discuss a Project →',
      icon: Layers,
      suitableFor: [
        'Websites & Customer Portals',
        'MVPs & Prototype Validation',
        'Business Applications',
        'Specific Software Deliverables',
      ],
      deliverable: 'Guaranteed scope delivered within agreed milestones & fixed budget.',
    },
    {
      id: 'dedicated',
      title: 'Dedicated Team',
      subtitle: 'CONTINUOUS SPRINT CAPACITY',
      desc: 'A dedicated team works with you over an extended period to build and evolve your product.',
      cta: 'Build a Team →',
      icon: Users,
      suitableFor: [
        'Growing Software Products',
        'SaaS Companies & Scale-ups',
        'Long-term Feature Development',
        'Complex Distributed Platforms',
      ],
      deliverable: 'Embedded senior engineers, product designers, and weekly demos.',
    },
    {
      id: 'partnership',
      title: 'Technical Partnership',
      subtitle: 'FRACTIONAL CTO & TECH ARM',
      desc: 'Ongoing technology support across product strategy, engineering, AI, infrastructure and optimization.',
      cta: 'Talk to an Expert →',
      icon: Shield,
      suitableFor: [
        'High-Growth Startups',
        'Growing Businesses',
        'Companies Without an Internal Engineering Team',
        'Continuous Technology Advisory',
      ],
      deliverable: 'End-to-end stewardship from senior technology leadership.',
    },
  ];

  return (
    <section
      id="service-models"
      data-reveal="service-models"
      className="relative w-full py-28 sm:py-36 bg-[#0A0A12] text-white overflow-hidden border-b border-white/10 select-none"
    >
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
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-14 sm:mb-20">
          <Eyebrow dotColor="bg-[#FFD43B]" variant="dark">
            HOW WE CAN WORK WITH YOU
          </Eyebrow>

          <h2 className="font-display text-[40px] sm:text-[54px] lg:text-[68px] leading-[1.02] text-white">
            Flexible engagement for{' '}
            <span className="italic font-serif text-gradient-aurora">
              different needs.
            </span>
          </h2>
        </div>

        {/* 3 Model Cards in a Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {models.map((item, idx) => {
            const Icon = item.icon;
            const isFeatured = idx === 1; // Dedicated Team in center
            return (
              <div
                key={item.id}
                className={`glass-panel-dark rounded-[26px] p-8 sm:p-9 border flex flex-col justify-between transition-all duration-300 relative ${
                  isFeatured
                    ? 'border-[#2F5BFF]/60 shadow-[0_20px_50px_rgba(47,91,255,0.25)]'
                    : 'border-white/15'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[11px] font-bold text-[#FFD43B] bg-white/10 px-3 py-1 rounded-full uppercase">
                      {item.subtitle}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-sans text-[24px] sm:text-[28px] font-bold text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-[15px] leading-[1.65] text-white/80 mb-7 font-light">
                    {item.desc}
                  </p>

                  <div className="pt-6 border-t border-white/15 mb-8">
                    <p className="font-mono text-[10px] text-[#5B8CFF] uppercase tracking-wider mb-3.5 font-semibold">
                      SUITABLE FOR
                    </p>
                    <div className="space-y-2">
                      {item.suitableFor.map((point) => (
                        <div key={point} className="flex items-center gap-2.5 text-[13px] text-white/90">
                          <CheckCircle2 className="w-4 h-4 text-[#FFD43B] shrink-0" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/15">
                  <button
                    onClick={() => openContact(`Service Model: ${item.title}`)}
                    className="w-full h-12 rounded-full bg-[#FFD43B] hover:bg-white text-[#0A0A0F] text-[14px] font-bold tracking-wide flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer shadow-md"
                  >
                    <span>{item.cta}</span>
                    <ArrowRight className="w-4 h-4 text-[#0A0A0F]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
