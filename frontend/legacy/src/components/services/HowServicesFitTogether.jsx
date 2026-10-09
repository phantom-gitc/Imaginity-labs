import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { useNavigation } from '../../context/NavigationContext';

export function HowServicesFitTogether() {
  const { openContact } = useNavigation();

  const journeyStages = [
    { num: '01', title: 'Discover', desc: 'Understand the business and problem.' },
    { num: '02', title: 'Strategize', desc: 'Define the product and technology roadmap.' },
    { num: '03', title: 'Design', desc: 'Create the user experience and product architecture.' },
    { num: '04', title: 'Build', desc: 'Develop the software and integrate required systems.' },
    { num: '05', title: 'Intelligence', desc: 'Add AI, automation and data capabilities where valuable.' },
    { num: '06', title: 'Launch', desc: 'Deploy and prepare the product for real users.' },
    { num: '07', title: 'Scale', desc: 'Optimize, maintain and evolve the system.' },
  ];

  return (
    <section
      id="service-journey"
      data-reveal="delivery-journey"
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

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader
          eyebrow="END-TO-END DELIVERY"
          eyebrowDotColor="bg-[#2F5BFF]"
          headingMain="One partner."
          headingItalic="Every stage of the journey."
          description="You don't need to coordinate multiple technology vendors for strategy, design, development, AI and infrastructure. We can support the complete product lifecycle."
          linkText="Start your journey with us"
          onLinkClick={() => openContact('End-to-End Delivery')}
        />

        {/* 7 Stages Horizontal Timeline on desktop, grid on mobile */}
        <div className="relative">
          <div className="hidden xl:block absolute top-[27px] left-8 right-8 h-[2px] bg-gradient-to-r from-[#2F5BFF]/30 via-[#7B5CFF]/30 to-[#FFD43B]/40 z-0 pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4 relative z-10">
            {journeyStages.map((step) => (
              <div
                key={step.num}
                className="group relative rounded-[20px] bg-white border border-[#E6E8EE] p-5 shadow-[0_4px_18px_rgba(10,10,15,0.02)] hover:border-[#2F5BFF]/40 hover:shadow-[0_10px_30px_rgba(47,91,255,0.08)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#2F5BFF] ring-4 ring-[#E3EBFF]" />
                      <span className="font-mono text-[11px] font-bold text-[#0A0A0F]">
                        {step.num}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-sans text-[16px] font-bold text-[#0A0A0F] group-hover:text-[#2F5BFF] transition-colors mb-1.5 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-[12px] leading-[1.6] text-[#6B7280]">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-2.5 border-t border-[#E6E8EE] flex items-center justify-between text-[10px] font-mono text-[#8A90A0]">
                  <span>MILESTONE</span>
                  <span className="text-[#2F5BFF] font-semibold">VERIFIED</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
