import React from 'react';
import {
  Compass,
  Layers,
  Cpu,
  Clock,
  HeartHandshake,
  Sparkles,
  Flame,
  CheckCircle2,
} from 'lucide-react';
import { Eyebrow } from '../ui/Eyebrow';

export function AboutDifferenceAndCulture() {
  const differentiators = [
    {
      title: 'Product Thinking',
      desc: 'We think about the complete product, not just individual features.',
      icon: Compass,
    },
    {
      title: 'Engineering Depth',
      desc: 'We can work across interfaces, backend systems, AI, data and infrastructure.',
      icon: Layers,
    },
    {
      title: 'AI-Native Thinking',
      desc: 'We understand where AI can become part of the product rather than simply adding an AI feature.',
      icon: Cpu,
    },
    {
      title: 'Long-Term Perspective',
      desc: 'We think beyond launch and consider how the product will evolve.',
      icon: Clock,
    },
    {
      title: 'Flexible Partnership',
      desc: 'We can work with startups, growing businesses and established organizations depending on their needs.',
      icon: HeartHandshake,
    },
  ];

  const culturePrinciples = [
    {
      title: 'Curiosity',
      desc: 'We keep asking how things work and how they can be better.',
    },
    {
      title: 'Ownership',
      desc: 'We take responsibility for the outcome, not just the task.',
    },
    {
      title: 'Craft',
      desc: 'We care about the quality of what we build.',
    },
    {
      title: 'Collaboration',
      desc: 'Great products come from different perspectives working together.',
    },
    {
      title: 'Continuous Improvement',
      desc: 'Every project is an opportunity to become better.',
    },
  ];

  return (
    <section
      id="difference-culture"
      data-reveal="difference-culture"
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

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12 space-y-24">
        
        {/* ========================================================================= */}
        {/* PART 1: WHAT MAKES US DIFFERENT */}
        {/* ========================================================================= */}
        <div>
          <div className="mb-14 sm:mb-18">
            <Eyebrow dotColor="bg-[#FFD43B]" variant="dark">
              WHY NEXORA
            </Eyebrow>

            <h2 className="font-display text-[40px] sm:text-[54px] lg:text-[68px] leading-[1.02] text-white">
              More than a{' '}
              <span className="italic font-serif text-gradient-aurora">
                development team.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((diff, idx) => {
              const Icon = diff.icon;
              return (
                <div
                  key={diff.title}
                  className={`glass-panel-dark rounded-[24px] p-7 sm:p-8 border border-white/12 flex flex-col justify-between hover:border-white/25 transition-all ${
                    idx === 0 ? 'lg:col-span-2' : ''
                  }`}
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white mb-6">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="font-sans text-[20px] sm:text-[22px] font-bold text-white mb-3">
                      {diff.title}
                    </h3>

                    <p className="text-[14px] sm:text-[15px] leading-[1.65] text-white/80 font-light">
                      {diff.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/40">
                    <span>DIFFERENTIATOR</span>
                    <span className="text-[#FFD43B]">0{idx + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PART 2: OUR CULTURE */}
        {/* ========================================================================= */}
        <div className="pt-16 border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-12">
            <div className="lg:col-span-5">
              <Eyebrow dotColor="bg-[#2F5BFF]" variant="dark">
                CULTURE
              </Eyebrow>

              <h3 className="font-display text-[36px] sm:text-[46px] leading-[1.05] text-white mb-4">
                Curious people{' '}
                <span className="italic font-serif text-gradient-aurora">
                  building useful things.
                </span>
              </h3>

              <p className="text-[15px] sm:text-[16px] leading-[1.65] text-[#8A8FA3] font-light">
                We want to create an environment where people can experiment, ask questions, challenge assumptions and build things they're proud of.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {culturePrinciples.map((item) => (
                <div
                  key={item.title}
                  className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#FFD43B] font-bold block mb-1">
                      CULTURE PRINCIPLE
                    </span>
                    <h4 className="font-sans text-[17px] font-bold text-white mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-[13px] leading-relaxed text-white/75 font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
