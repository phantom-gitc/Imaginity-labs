import React from 'react';
import {
  ArrowDown,
  ArrowRight,
  Ear,
  HelpCircle,
  Palette,
  Hammer,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

export function AboutHowWeThinkAndWork() {
  const thinkingFlow = [
    'Problem',
    'Users',
    'Business Goal',
    'Product',
    'Architecture',
    'Technology',
    'Implementation',
    'Outcome',
  ];

  const workingStages = [
    {
      title: 'Listen',
      desc: 'Understand the business, users and goals.',
      icon: Ear,
      num: '01',
    },
    {
      title: 'Challenge',
      desc: 'Question assumptions when a better approach exists.',
      icon: HelpCircle,
      num: '02',
    },
    {
      title: 'Design',
      desc: 'Create a clear product and technical direction.',
      icon: Palette,
      num: '03',
    },
    {
      title: 'Build',
      desc: 'Develop the solution with transparency and iteration.',
      icon: Hammer,
      num: '04',
    },
    {
      title: 'Communicate',
      desc: 'Keep decisions, progress and priorities clear.',
      icon: MessageSquare,
      num: '05',
    },
    {
      title: 'Improve',
      desc: 'Learn from real usage and continuously evolve the product.',
      icon: Sparkles,
      num: '06',
    },
  ];

  return (
    <section
      id="how-we-think"
      data-reveal="how-we-think-work"
      className="relative w-full py-24 sm:py-32 bg-[#F0F4FF] border-b border-[#E6E8EE] overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] pointer-events-none z-0">
        <div
          className="w-full h-full rounded-full opacity-60"
          style={{
            background:
              'radial-gradient(circle, rgba(227,235,255,0.85) 0%, rgba(240,244,255,0.4) 50%, transparent 75%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12 space-y-20 sm:space-y-24">
        
        {/* ========================================================================= */}
        {/* PART 1: HOW WE THINK (BUSINESS FIRST, TECHNOLOGY SECOND) */}
        {/* ========================================================================= */}
        <div>
          <SectionHeader
            eyebrow="OUR APPROACH"
            eyebrowDotColor="bg-[#2F5BFF]"
            headingMain="Business first."
            headingItalic="Technology second."
            description="We don't begin a project by asking: “Which framework should we use?” We begin by asking: “What are we trying to solve?”"
          />

          {/* Visual Step-by-Step Flow Architecture */}
          <div className="rounded-[28px] bg-white border border-[#E6E8EE] p-8 sm:p-12 shadow-[0_4px_24px_rgba(10,10,15,0.03)]">
            <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#0A0A0F] mb-6">
              OUR SEQUENTIAL REASONING PIPELINE
            </p>

            {/* Desktop Horizontal Conduit Flow */}
            <div className="hidden lg:grid grid-cols-8 gap-2 items-center relative">
              <div className="absolute top-1/2 left-4 right-4 h-[2px] bg-gradient-to-r from-[#2F5BFF]/30 via-[#7B5CFF]/30 to-[#FFD43B]/40 -translate-y-1/2 z-0 pointer-events-none" />

              {thinkingFlow.map((step, idx) => (
                <div key={step} className="relative z-10 flex flex-col items-center">
                  <div
                    className={`w-full p-3 rounded-xl border text-center transition-all ${
                      idx === 0
                        ? 'bg-[#E3EBFF] border-[#2F5BFF] text-[#2F5BFF] font-bold shadow-xs'
                        : idx === thinkingFlow.length - 1
                        ? 'bg-[#FFF4C2] border-[#FFD43B] text-[#B45309] font-bold shadow-xs'
                        : 'bg-white border-[#E6E8EE] text-[#0A0A0F] font-semibold'
                    }`}
                  >
                    <span className="block font-mono text-[9px] text-[#8A90A0] mb-0.5">
                      0{idx + 1}
                    </span>
                    <span className="text-[13px]">{step}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile / Tablet Vertical Conduit Flow */}
            <div className="lg:hidden space-y-2">
              {thinkingFlow.map((step, idx) => (
                <div key={step} className="flex flex-col items-center">
                  <div
                    className={`w-full p-3 rounded-xl border text-center ${
                      idx === 0
                        ? 'bg-[#E3EBFF] border-[#2F5BFF] text-[#2F5BFF] font-bold'
                        : idx === thinkingFlow.length - 1
                        ? 'bg-[#FFF4C2] border-[#FFD43B] text-[#B45309] font-bold'
                        : 'bg-white border-[#E6E8EE] text-[#0A0A0F] font-semibold'
                    }`}
                  >
                    <span className="font-mono text-[10px] text-[#8A90A0] mr-2">0{idx + 1}</span>
                    <span className="text-[14px]">{step}</span>
                  </div>
                  {idx < thinkingFlow.length - 1 && (
                    <ArrowDown className="w-4 h-4 text-[#8A90A0] my-1" />
                  )}
                </div>
              ))}
            </div>

            <p className="mt-8 pt-5 border-t border-[#E6E8EE] text-[14px] text-[#6B7280]">
              This approach helps us avoid unnecessary complexity and build technology with a clear purpose.
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PART 2: HOW WE WORK WITH CLIENTS (6 STAGES) */}
        {/* ========================================================================= */}
        <div>
          <SectionHeader
            eyebrow="OUR WORKING STYLE"
            eyebrowDotColor="bg-[#2F5BFF]"
            headingMain="Built around"
            headingItalic="collaboration."
            description="The best software is built when product, business and engineering teams understand each other. Our collaboration model is based on 6 core habits:"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workingStages.map((stage) => {
              const Icon = stage.icon;
              return (
                <div
                  key={stage.num}
                  className="p-7 rounded-[22px] bg-white border border-[#E6E8EE] shadow-[0_4px_18px_rgba(10,10,15,0.02)] hover:border-[#2F5BFF]/35 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[11px] font-bold text-[#2F5BFF] bg-[#E3EBFF] px-2.5 py-1 rounded-full">
                        STAGE {stage.num}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-[#F7F8FA] border border-[#E6E8EE] flex items-center justify-center text-[#0A0A0F]">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="font-sans text-[20px] font-bold text-[#0A0A0F] mb-2">
                      {stage.title}
                    </h3>

                    <p className="text-[14px] leading-[1.6] text-[#4A4F5C]">
                      {stage.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#E6E8EE] flex items-center justify-between text-[10px] font-mono text-[#8A90A0]">
                    <span>COLLABORATION</span>
                    <span className="text-[#0A0A0F] font-semibold">ESSENTIAL</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
