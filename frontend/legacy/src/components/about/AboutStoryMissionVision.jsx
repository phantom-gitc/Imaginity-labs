import React from 'react';
import { Target, Eye, Sparkles, ArrowRight } from 'lucide-react';
import { Eyebrow } from '../ui/Eyebrow';

export function AboutStoryMissionVision() {
  return (
    <section
      id="our-story"
      data-reveal="story-mission-vision"
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
        {/* PART 1: OUR STORY */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5">
            <Eyebrow dotColor="bg-[#2F5BFF]">OUR STORY</Eyebrow>

            <h2 className="font-display text-[38px] sm:text-[50px] leading-[1.02] text-[#0A0A0F] mb-6">
              Built around a <br />
              <span className="italic font-serif text-gradient-brand">
                simple idea.
              </span>
            </h2>

            <p className="text-[16px] leading-[1.65] text-[#4A4F5C] mb-6">
              Technology is changing how businesses operate, communicate and grow. But building good software is still difficult.
            </p>

            <div className="p-5 rounded-2xl bg-white border border-[#E6E8EE] shadow-2xs">
              <p className="font-sans text-[15px] font-bold text-[#0A0A0F] mb-1">
                We don't want to simply build software.
              </p>
              <p className="font-serif italic text-[18px] text-[#2F5BFF] font-semibold">
                We want to build software that matters.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-[26px] bg-white border border-[#E6E8EE] p-8 sm:p-10 shadow-[0_4px_24px_rgba(10,10,15,0.03)] space-y-6">
              <p className="text-[16px] sm:text-[17px] leading-[1.7] text-[#4A4F5C]">
                Ideas need to become products. Manual processes need to become systems. Data needs to become intelligence. Software needs to evolve as businesses grow.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  { from: 'Ideas', to: 'Products' },
                  { from: 'Manual processes', to: 'Automated systems' },
                  { from: 'Raw data', to: 'Predictive intelligence' },
                  { from: 'Software', to: 'Continuous evolution' },
                ].map((item) => (
                  <div
                    key={item.from}
                    className="p-3.5 rounded-xl bg-[#F7F8FA] border border-[#E6E8EE] flex items-center justify-between text-[13px]"
                  >
                    <span className="text-[#6B7280]">{item.from}</span>
                    <span className="text-[#8A90A0]">→</span>
                    <span className="font-semibold text-[#0A0A0F]">{item.to}</span>
                  </div>
                ))}
              </div>

              <p className="text-[15px] leading-[1.65] text-[#4A4F5C] pt-4 border-t border-[#E6E8EE]">
                Nexora Labs exists to help businesses navigate that journey. We bring together product thinking, software engineering, artificial intelligence and modern infrastructure to create technology that solves meaningful problems.
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PART 2: OUR MISSION & VISION (PAIRED BENTO CARDS) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div className="rounded-[26px] bg-white border border-[#E6E8EE] p-8 sm:p-10 shadow-[0_4px_20px_rgba(10,10,15,0.03)] hover:border-[#2F5BFF]/35 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[11px] font-bold text-[#2F5BFF] bg-[#E3EBFF] border border-[#2F5BFF]/20 px-3 py-1 rounded-full uppercase">
                  OUR MISSION
                </span>
                <div className="w-10 h-10 rounded-xl bg-[#E3EBFF] text-[#2F5BFF] border border-[#2F5BFF]/20 flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
              </div>

              <h3 className="font-display text-[28px] sm:text-[34px] leading-tight text-[#0A0A0F] mb-4">
                Make ambitious ideas possible{' '}
                <span className="italic font-serif text-gradient-brand">
                  through technology.
                </span>
              </h3>

              <p className="text-[15px] leading-[1.65] text-[#4A4F5C] mb-6">
                Our mission is to help businesses and entrepreneurs transform ideas and complex problems into practical, scalable technology. We aim to make high-quality software engineering accessible to organizations at different stages of their digital journey.
              </p>
            </div>

            <div className="pt-4 border-t border-[#E6E8EE] flex items-center justify-between text-[11px] font-mono text-[#8A90A0]">
              <span>PURPOSE & REACH</span>
              <span className="text-[#2F5BFF] font-semibold">HIGH-ACCESSIBILITY CRAFT</span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="rounded-[26px] bg-white border border-[#E6E8EE] p-8 sm:p-10 shadow-[0_4px_20px_rgba(10,10,15,0.03)] hover:border-[#7B5CFF]/35 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[11px] font-bold text-[#7B5CFF] bg-[#F2EDFF] border border-[#7B5CFF]/20 px-3 py-1 rounded-full uppercase">
                  OUR VISION
                </span>
                <div className="w-10 h-10 rounded-xl bg-[#F2EDFF] text-[#7B5CFF] border border-[#7B5CFF]/20 flex items-center justify-center">
                  <Eye className="w-5 h-5" />
                </div>
              </div>

              <h3 className="font-display text-[28px] sm:text-[34px] leading-tight text-[#0A0A0F] mb-4">
                Build the technology company businesses trust{' '}
                <span className="italic font-serif text-gradient-brand">
                  to solve what's next.
                </span>
              </h3>

              <p className="text-[15px] leading-[1.65] text-[#4A4F5C] mb-6">
                We want Nexora Labs to become a long-term technology partner for businesses building the next generation of digital products, intelligent systems and automated operations.
              </p>
            </div>

            <div className="pt-4 border-t border-[#E6E8EE] flex items-center justify-between text-[11px] font-mono text-[#8A90A0]">
              <span>LONG-TERM VISION</span>
              <span className="text-[#7B5CFF] font-semibold">SUSTAINABLE PARTNERSHIP</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
