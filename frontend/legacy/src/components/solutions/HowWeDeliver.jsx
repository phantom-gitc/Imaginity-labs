import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { useNavigation } from '../../context/NavigationContext';

export function HowWeDeliver() {
  const { openContact } = useNavigation();

  const deliverySteps = [
    {
      num: '01',
      title: 'Discovery',
      desc: 'Understand your business, users, goals and technical requirements.',
    },
    {
      num: '02',
      title: 'Strategy',
      desc: 'Define the product scope, architecture and implementation roadmap.',
    },
    {
      num: '03',
      title: 'Design',
      desc: 'Create the user experience and technical system design.',
    },
    {
      num: '04',
      title: 'Development',
      desc: 'Build, integrate and test the product.',
    },
    {
      num: '05',
      title: 'Launch',
      desc: 'Deploy the system and prepare it for production.',
    },
    {
      num: '06',
      title: 'Growth',
      desc: 'Monitor, improve, maintain and scale the product.',
    },
  ];

  return (
    <section
      id="how-we-deliver"
      data-reveal="delivery-timeline"
      className="relative w-full py-24 sm:py-32 bg-[#F0F4FF] border-b border-[#E6E8EE] overflow-hidden"
    >
      {/* Soft Ambient Light Glow */}
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
        {/* Split Header Verbatim */}
        <SectionHeader
          eyebrow="DELIVERY PROCESS"
          eyebrowDotColor="bg-[#2F5BFF]"
          headingMain="From strategy to"
          headingItalic="a working system."
          description="A structured, disciplined engineering process engineered to eliminate surprises and maintain continuous delivery momentum."
          linkText="Initiate discovery with our leads"
          onLinkClick={() => openContact('Delivery Discovery')}
        />

        {/* Horizontal Timeline Container */}
        <div className="relative">
          {/* Connecting Hairline across the top on desktop */}
          <div className="hidden lg:block absolute top-[27px] left-8 right-8 h-[2px] bg-gradient-to-r from-[#2F5BFF]/30 via-[#7B5CFF]/30 to-[#FFD43B]/40 z-0 pointer-events-none" />

          {/* 6 Steps Grid (Horizontal on desktop, stacked on mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {deliverySteps.map((step) => (
              <div
                key={step.num}
                className="group relative rounded-[22px] bg-white border border-[#E6E8EE] p-6 shadow-[0_4px_18px_rgba(10,10,15,0.02)] hover:border-[#2F5BFF]/40 hover:shadow-[0_10px_30px_rgba(47,91,255,0.08)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Node Pill with Active Dot Styling in Blue */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#2F5BFF] ring-4 ring-[#E3EBFF]" />
                      <span className="font-mono text-[11px] font-bold text-[#0A0A0F]">
                        {step.num}
                      </span>
                    </div>

                    <span className="font-mono text-[10px] text-[#8A90A0] bg-[#F7F8FA] border border-[#E6E8EE] px-2 py-0.5 rounded-full font-semibold">
                      STAGE
                    </span>
                  </div>

                  {/* Title Verbatim */}
                  <h3 className="font-sans text-[17px] font-bold text-[#0A0A0F] group-hover:text-[#2F5BFF] transition-colors mb-2 leading-snug">
                    {step.title}
                  </h3>

                  {/* Description Verbatim */}
                  <p className="text-[13px] leading-[1.65] text-[#6B7280]">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Status Indicator */}
                <div className="mt-6 pt-3 border-t border-[#E6E8EE] flex items-center justify-between text-[10px] font-mono text-[#8A90A0]">
                  <span>DELIVERABLE</span>
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
