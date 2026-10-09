import React from 'react';
import {
  Compass,
  Layers,
  ShieldCheck,
  RefreshCw,
  Gauge,
} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { useNavigation } from '../../context/NavigationContext';

export function TechnologyApproach() {
  const { openContact } = useNavigation();

  const principles = [
    {
      num: '01',
      title: 'Right Architecture',
      desc: "Choose an architecture that matches the product's current needs and future growth.",
      icon: Compass,
      span: 'lg:col-span-7',
      tint: 'bg-[#E3EBFF] text-[#2F5BFF]',
    },
    {
      num: '02',
      title: 'Right Technology',
      desc: 'Use technologies that solve the problem effectively rather than following trends.',
      icon: Layers,
      span: 'lg:col-span-5',
      tint: 'bg-[#F2EDFF] text-[#7B5CFF]',
    },
    {
      num: '03',
      title: 'Security by Design',
      desc: 'Consider security, privacy and access control from the beginning.',
      icon: ShieldCheck,
      span: 'lg:col-span-4',
      tint: 'bg-[#ECFDF5] text-[#059669]',
    },
    {
      num: '04',
      title: 'Built for Change',
      desc: 'Create systems that can evolve as requirements change.',
      icon: RefreshCw,
      span: 'lg:col-span-4',
      tint: 'bg-[#FEF3C7] text-[#D97706]',
    },
    {
      num: '05',
      title: 'Performance Matters',
      desc: 'Design for real users, real traffic and real-world conditions.',
      icon: Gauge,
      span: 'lg:col-span-4',
      tint: 'bg-[#FDF2F8] text-[#DB2777]',
    },
  ];

  return (
    <section
      id="philosophy"
      data-reveal="technology-approach"
      className="relative w-full py-24 sm:py-32 lg:py-36 bg-[#FFFFFF] border-b border-[#E6E8EE]"
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Split Header Verbatim */}
        <SectionHeader
          eyebrow="ENGINEERING PHILOSOPHY"
          eyebrowDotColor="bg-[#2F5BFF]"
          headingMain="We don’t sell technologies."
          headingItalic="We solve problems."
          description="There is no single technology that is right for every business. We choose languages, frameworks, databases, AI models and infrastructure based on the requirements of the product."
          linkText="Read our engineering principles"
          onLinkClick={() => openContact('Engineering Philosophy')}
        />

        {/* Bento Grid: 5 Principles Verbatim */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {principles.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className={`group relative rounded-[24px] bg-[#FFFFFF] border border-[#E6E8EE] p-8 sm:p-9 shadow-[0_4px_20px_-2px_rgba(10,10,15,0.03)] hover:border-[#2F5BFF]/35 hover:shadow-[0_12px_36px_-4px_rgba(47,91,255,0.08)] transition-all duration-300 flex flex-col justify-between overflow-hidden ${item.span}`}
              >
                {/* 1px gradient sheen on hover */}
                <div className="absolute inset-0 rounded-[24px] p-[1px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full h-full rounded-[23px] bg-gradient-to-br from-[#2F5BFF]/15 via-transparent to-[#FFD43B]/15" />
                </div>

                <div>
                  {/* Top Bar: Mono Index + Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[12px] font-bold text-[#8A90A0] bg-[#F7F8FA] border border-[#E6E8EE] px-3 py-1 rounded-full">
                      {item.num}
                    </span>

                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center border shadow-2xs transition-transform duration-300 group-hover:scale-105 ${item.tint}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Principle Title */}
                  <h3 className="font-sans text-[22px] sm:text-[24px] font-bold tracking-tight text-[#0A0A0F] mb-3 group-hover:text-[#2F5BFF] transition-colors">
                    {item.title}
                  </h3>

                  {/* Principle Description Verbatim */}
                  <p className="text-[15px] sm:text-[16px] leading-[1.65] text-[#4A4F5C]">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom line */}
                <div className="mt-8 pt-4 border-t border-[#E6E8EE] flex items-center justify-between text-[11px] font-mono text-[#8A90A0]">
                  <span>ENGINEERING DISCIPLINE</span>
                  <span className="text-[#0A0A0F] font-semibold group-hover:text-[#2F5BFF] transition-colors">
                    NEXORA STANDARD
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
