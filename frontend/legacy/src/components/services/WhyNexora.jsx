import React from 'react';
import {
  Compass,
  Layers,
  Cpu,
  TrendingUp,
  HeartHandshake,
} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { useNavigation } from '../../context/NavigationContext';

export function WhyNexora() {
  const { openContact } = useNavigation();

  const reasons = [
    {
      num: '01',
      title: 'Business Understanding',
      desc: 'We understand the goal before deciding how to build it.',
      icon: Compass,
      span: 'lg:col-span-7',
      tint: 'bg-[#E3EBFF] text-[#2F5BFF]',
    },
    {
      num: '02',
      title: 'Engineering Depth',
      desc: 'From interfaces to distributed systems, we can work across the complete technology stack.',
      icon: Layers,
      span: 'lg:col-span-5',
      tint: 'bg-[#F2EDFF] text-[#7B5CFF]',
    },
    {
      num: '03',
      title: 'AI-Ready',
      desc: 'We can integrate AI into existing products or build AI-native systems from the ground up.',
      icon: Cpu,
      span: 'lg:col-span-4',
      tint: 'bg-[#FDF4FF] text-[#C026D3]',
    },
    {
      num: '04',
      title: 'Scalable Thinking',
      desc: 'We design with future requirements in mind without overengineering the first version.',
      icon: TrendingUp,
      span: 'lg:col-span-4',
      tint: 'bg-[#ECFDF5] text-[#059669]',
    },
    {
      num: '05',
      title: 'Long-Term Partnership',
      desc: 'We can stay involved after launch to maintain, improve and scale your technology.',
      icon: HeartHandshake,
      span: 'lg:col-span-4',
      tint: 'bg-[#FEF3C7] text-[#D97706]',
    },
  ];

  return (
    <section
      id="why-nexora"
      data-reveal="why-nexora"
      className="relative w-full py-24 sm:py-32 lg:py-36 bg-[#FFFFFF] border-b border-[#E6E8EE]"
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader
          eyebrow="WHY NEXORA"
          eyebrowDotColor="bg-[#2F5BFF]"
          headingMain="Technology expertise"
          headingItalic="without the complexity."
          description="We combine deep technical capabilities with clear communication and commercial pragmatism, acting as an extension of your leadership team."
          linkText="Read about our studio philosophy"
          onLinkClick={() => openContact('Why Nexora')}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className={`group relative rounded-[24px] bg-[#FFFFFF] border border-[#E6E8EE] p-8 sm:p-9 shadow-[0_4px_20px_-2px_rgba(10,10,15,0.03)] hover:border-[#2F5BFF]/35 hover:shadow-[0_12px_36px_-4px_rgba(47,91,255,0.08)] transition-all duration-300 flex flex-col justify-between overflow-hidden ${item.span}`}
              >
                <div className="absolute inset-0 rounded-[24px] p-[1px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full h-full rounded-[23px] bg-gradient-to-br from-[#2F5BFF]/15 via-transparent to-[#FFD43B]/15" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[12px] font-bold text-[#8A90A0] bg-[#F7F8FA] border border-[#E6E8EE] px-3 py-1 rounded-full">
                      ADVANTAGE {item.num}
                    </span>

                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center border shadow-2xs transition-transform duration-300 group-hover:scale-105 ${item.tint}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-sans text-[22px] sm:text-[24px] font-bold tracking-tight text-[#0A0A0F] mb-3 group-hover:text-[#2F5BFF] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-[15px] sm:text-[16px] leading-[1.65] text-[#4A4F5C]">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E6E8EE] flex items-center justify-between text-[11px] font-mono text-[#8A90A0]">
                  <span>PRAGMATIC DELIVERY</span>
                  <span className="text-[#0A0A0F] font-semibold group-hover:text-[#2F5BFF] transition-colors">
                    EXPERIENCE & CRAFT
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
