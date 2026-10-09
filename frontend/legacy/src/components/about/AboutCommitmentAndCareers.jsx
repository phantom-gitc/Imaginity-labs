import React from 'react';
import { ShieldCheck, HeartHandshake, ArrowRight, Sparkles } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Eyebrow } from '../ui/Eyebrow';
import { useNavigation } from '../../context/NavigationContext';

export function AboutCommitmentAndCareers() {
  const { openContact } = useNavigation();

  const commitments = [
    'Product quality',
    'Security',
    'Performance',
    'Maintainability',
    'User experience',
    'Long-term reliability',
    'Continuous improvement',
  ];

  return (
    <section
      id="commitment-careers"
      data-reveal="commitment-careers"
      className="relative w-full py-24 sm:py-32 bg-[#F0F4FF] border-b border-[#E6E8EE] overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] pointer-events-none z-0">
        <div
          className="w-full h-full rounded-full opacity-60"
          style={{
            background:
              'radial-gradient(circle, rgba(227,235,255,0.8) 0%, rgba(240,244,255,0.4) 50%, transparent 75%)',
            filter: 'blur(95px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12 space-y-20">
        
        {/* ========================================================================= */}
        {/* PART 1: OUR COMMITMENT */}
        {/* ========================================================================= */}
        <div className="rounded-[28px] bg-white border border-[#E6E8EE] p-8 sm:p-12 shadow-[0_4px_24px_rgba(10,10,15,0.03)]">
          <div className="max-w-3xl mb-8">
            <Eyebrow dotColor="bg-[#2F5BFF]">OUR COMMITMENT</Eyebrow>

            <h3 className="font-display text-[34px] sm:text-[46px] leading-[1.05] text-[#0A0A0F] mb-4">
              Build it right.{' '}
              <span className="italic font-serif text-gradient-brand">
                Keep improving it.
              </span>
            </h3>

            <p className="text-[16px] leading-[1.65] text-[#4A4F5C] mb-6">
              We believe our responsibility doesn’t end when software is deployed. We care about the ongoing reality of how software performs in the wild:
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {commitments.map((item) => (
                <span
                  key={item}
                  className="px-3.5 py-1.5 rounded-xl bg-[#F7F8FA] border border-[#E6E8EE] text-[13px] font-semibold text-[#0A0A0F]"
                >
                  {item}
                </span>
              ))}
            </div>

            <blockquote className="p-5 rounded-2xl bg-[#F0F4FF] border border-[#2F5BFF]/30 text-[18px] sm:text-[20px] font-medium text-[#0A0A0F] leading-snug">
              “Because software isn’t finished when it launches.{' '}
              <span className="text-[#2F5BFF] font-bold">It’s finished when it delivers value.”</span>
            </blockquote>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PART 2: CAREERS CTA */}
        {/* ========================================================================= */}
        <div id="careers" className="rounded-[28px] bg-[#0A0A0F] text-white p-8 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 mb-6 text-white font-mono text-[11px] uppercase tracking-wider font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#FFD43B]" />
              <span>WANT TO BUILD WITH US?</span>
            </div>

            <h3 className="font-display text-[34px] sm:text-[46px] leading-[1.05] text-white mb-4">
              We're building the team behind{' '}
              <span className="relative inline-block text-[#0A0A0F] px-2.5 py-0.5 rounded-xl bg-[#FFD43B] font-sans font-bold text-[0.88em]">
                the technology.
              </span>
            </h3>

            <p className="text-[16px] leading-[1.65] text-white/80 mb-8 font-light">
              If you’re curious about software, AI, design, engineering or solving difficult problems, we’d love to hear from you.
            </p>

            <button
              onClick={() => openContact('Career Inquiry')}
              className="h-12 px-7 rounded-full bg-[#FFD43B] hover:bg-white text-[#0A0A0F] text-[14px] font-bold tracking-wide flex items-center gap-2.5 transition-all duration-300 shadow-lg cursor-pointer"
            >
              <span>Explore Careers</span>
              <ArrowRight className="w-4 h-4 text-[#0A0A0F]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
