import React from 'react';
import {
  HelpCircle,
  Sparkles,
  TrendingUp,
  Cpu,
  ShieldCheck,
  BookOpen,
  CheckCircle2,
} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

export function AboutBeliefsAndMindset() {
  const beliefs = [
    {
      num: '01',
      title: 'Start With the Problem',
      summary: 'Technology is only useful when it solves something meaningful.',
      desc: 'We understand the problem before deciding on the solution.',
      icon: HelpCircle,
      tint: 'bg-[#E3EBFF] text-[#2F5BFF]',
    },
    {
      num: '02',
      title: 'Simplicity Wins',
      summary: 'Complex systems do not need complex experiences.',
      desc: 'We aim to make powerful technology feel simple to the people using it.',
      icon: Sparkles,
      tint: 'bg-[#F2EDFF] text-[#7B5CFF]',
    },
    {
      num: '03',
      title: 'Build for the Future',
      summary: 'Products should be capable of evolving.',
      desc: 'We consider maintainability, scalability and future requirements without unnecessarily overengineering the first version.',
      icon: TrendingUp,
      tint: 'bg-[#ECFDF5] text-[#059669]',
    },
    {
      num: '04',
      title: 'AI Should Create Value',
      summary: 'AI should not be added simply because it is popular.',
      desc: 'We use AI where it can improve experiences, automate work, increase intelligence or create new possibilities.',
      icon: Cpu,
      tint: 'bg-[#FDF4FF] text-[#C026D3]',
    },
    {
      num: '05',
      title: 'Engineering Matters',
      summary: "Good design without good engineering doesn't last.",
      desc: 'We care about architecture, performance, reliability, security and maintainability.',
      icon: ShieldCheck,
      tint: 'bg-[#FEF3C7] text-[#D97706]',
    },
    {
      num: '06',
      title: 'Keep Learning',
      summary: 'Technology changes constantly.',
      desc: 'We experiment, learn and adapt so our solutions remain relevant.',
      icon: BookOpen,
      tint: 'bg-[#E0F2FE] text-[#0284C7]',
    },
  ];

  const evaluationCriteria = [
    'Business requirements',
    'User needs',
    'Performance',
    'Security',
    'Scalability',
    'Maintainability',
    'Cost',
    'Long-term fit',
  ];

  return (
    <section
      id="beliefs"
      data-reveal="beliefs-mindset"
      className="relative w-full py-24 sm:py-32 lg:py-36 bg-[#FFFFFF] border-b border-[#E6E8EE]"
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12 space-y-20 sm:space-y-24">
        
        {/* ========================================================================= */}
        {/* PART 1: OUR BELIEFS (6 CORE PRINCIPLES) */}
        {/* ========================================================================= */}
        <div>
          <SectionHeader
            eyebrow="OUR BELIEFS"
            eyebrowDotColor="bg-[#2F5BFF]"
            headingMain="The principles behind"
            headingItalic="how we build."
            description="Our convictions guide every architectural discussion, prototype design, and line of production code we write."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beliefs.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.num}
                  className="group relative rounded-[24px] bg-white border border-[#E6E8EE] p-7 sm:p-8 shadow-[0_4px_18px_rgba(10,10,15,0.02)] hover:border-[#2F5BFF]/35 hover:shadow-[0_12px_36px_-4px_rgba(47,91,255,0.08)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-mono text-[11px] font-bold text-[#8A90A0] bg-[#F7F8FA] border border-[#E6E8EE] px-2.5 py-1 rounded-full">
                        PRINCIPLE {item.num}
                      </span>
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center border shadow-2xs transition-transform duration-300 group-hover:scale-105 ${item.tint}`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="font-sans text-[20px] font-bold tracking-tight text-[#0A0A0F] mb-2 group-hover:text-[#2F5BFF] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-[14px] font-medium text-[#0A0A0F] mb-3 leading-snug">
                      {item.summary}
                    </p>

                    <p className="text-[13px] leading-[1.65] text-[#6B7280]">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-[#E6E8EE] flex items-center justify-between text-[10px] font-mono text-[#8A90A0]">
                    <span>DISCIPLINE</span>
                    <span className="text-[#2F5BFF] font-semibold">VERIFIED</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PART 2: OUR TECHNOLOGY MINDSET (EDITORIAL BANNER) */}
        {/* ========================================================================= */}
        <div className="rounded-[28px] bg-[#F7F8FA] border border-[#E6E8EE] p-8 sm:p-12 shadow-[0_4px_24px_rgba(10,10,15,0.02)]">
          <div className="max-w-3xl mb-8">
            <span className="font-mono text-[11px] font-bold text-[#2F5BFF] bg-[#E3EBFF] px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
              OUR TECHNOLOGY MINDSET
            </span>

            <h3 className="font-display text-[32px] sm:text-[44px] leading-[1.05] text-[#0A0A0F] mb-4">
              We don’t chase technology.{' '}
              <span className="italic font-serif text-gradient-brand">
                We understand it.
              </span>
            </h3>

            <p className="text-[15px] sm:text-[16px] leading-[1.65] text-[#4A4F5C] mb-6">
              Modern technology gives us more possibilities than ever. But more choices don’t always create better products. We evaluate every tool based on:
            </p>

            {/* Criteria Chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {evaluationCriteria.map((crit) => (
                <span
                  key={crit}
                  className="px-3 py-1.5 rounded-xl bg-white border border-[#E6E8EE] text-[13px] font-medium text-[#0A0A0F] shadow-2xs"
                >
                  {crit}
                </span>
              ))}
            </div>

            {/* Callout Statement Verbatim */}
            <blockquote className="p-5 rounded-2xl bg-white border border-[#2F5BFF]/30 shadow-xs text-[17px] sm:text-[19px] font-medium text-[#0A0A0F] leading-snug">
              “The best technology is the technology that{' '}
              <span className="text-[#2F5BFF] font-bold">serves the product.”</span>
            </blockquote>
          </div>
        </div>

      </div>
    </section>
  );
}
