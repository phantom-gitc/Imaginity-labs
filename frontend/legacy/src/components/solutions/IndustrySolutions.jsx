import React from 'react';
import {
  HeartPulse,
  GraduationCap,
  Landmark,
  ShoppingBag,
  Cpu,
  Factory,
  Briefcase,
  Rocket,
  ArrowUpRight,
} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { useNavigation } from '../../context/NavigationContext';

export function IndustrySolutions() {
  const { openContact } = useNavigation();

  const industries = [
    {
      title: 'Healthcare',
      desc: 'Digital healthcare platforms, patient systems, AI assistants and workflow automation.',
      icon: HeartPulse,
      tint: 'bg-[#EFF6FF] text-[#3B82F6] border-[#3B82F6]/20',
      badge: 'Healthcare',
    },
    {
      title: 'Education',
      desc: 'Learning platforms, academic management systems, student portals and intelligent education tools.',
      icon: GraduationCap,
      tint: 'bg-[#F5F3FF] text-[#8B5CF6] border-[#8B5CF6]/20',
      badge: 'Education',
    },
    {
      title: 'Finance',
      desc: 'Financial platforms, dashboards, automation and secure digital workflows.',
      icon: Landmark,
      tint: 'bg-[#ECFDF5] text-[#10B981] border-[#10B981]/20',
      badge: 'Finance',
    },
    {
      title: 'Retail & E-commerce',
      desc: 'Customer experiences, commerce platforms, inventory systems and automation.',
      icon: ShoppingBag,
      tint: 'bg-[#FFF7ED] text-[#F97316] border-[#F97316]/20',
      badge: 'E-commerce',
    },
    {
      title: 'Technology',
      desc: 'SaaS platforms, developer tools, APIs, AI products and scalable infrastructure.',
      icon: Cpu,
      tint: 'bg-[#EEF2FF] text-[#4F46E5] border-[#4F46E5]/20',
      badge: 'Technology',
    },
    {
      title: 'Manufacturing',
      desc: 'Operations software, monitoring, analytics and workflow systems.',
      icon: Factory,
      tint: 'bg-[#FEFCE8] text-[#CA8A04] border-[#CA8A04]/20',
      badge: 'Manufacturing',
    },
    {
      title: 'Professional Services',
      desc: 'CRM, workflow automation, internal tools and customer platforms.',
      icon: Briefcase,
      tint: 'bg-[#FDF4FF] text-[#C026D3] border-[#C026D3]/20',
      badge: 'Services',
    },
    {
      title: 'Startups',
      desc: 'MVP development, SaaS products, product validation and scalable technology foundations.',
      icon: Rocket,
      tint: 'bg-[#FEF2F2] text-[#EF4444] border-[#EF4444]/20',
      badge: 'Startups',
    },
  ];

  return (
    <section
      id="industries"
      data-reveal="industry-solutions"
      className="relative w-full py-24 sm:py-32 bg-[#F0F4FF] border-b border-[#E6E8EE] overflow-hidden"
    >
      {/* Soft Ambient Light Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] pointer-events-none z-0">
        <div
          className="w-full h-full rounded-full opacity-60"
          style={{
            background:
              'radial-gradient(circle, rgba(227,235,255,0.8) 0%, rgba(240,244,255,0.3) 50%, transparent 75%)',
            filter: 'blur(90px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Split Header Verbatim */}
        <SectionHeader
          eyebrow="BUILT FOR DIFFERENT INDUSTRIES"
          eyebrowDotColor="bg-[#2F5BFF]"
          headingMain="Technology that adapts to"
          headingItalic="the way you work."
          description="We don't force businesses into predefined software. We adapt our solutions around the workflows, users and requirements of each organization."
          linkText="Schedule an industry consultation"
          onLinkClick={() => openContact('Industry Solutions')}
        />

        {/* 4x2 Grid of 8 Industry Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.title}
                onClick={() => openContact(`${ind.title} Industry Solution`)}
                className="group relative rounded-[22px] bg-white border border-[#E6E8EE] p-6 sm:p-7 shadow-[0_4px_18px_rgba(10,10,15,0.02)] hover:border-[#2F5BFF]/45 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Top Bar: Icon Square + Category Pill */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center border shadow-2xs transition-transform duration-300 group-hover:scale-105 ${ind.tint}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="font-mono text-[10px] font-semibold text-[#8A90A0] bg-[#F7F8FA] border border-[#E6E8EE] px-2.5 py-1 rounded-full uppercase">
                      {ind.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-sans text-[18px] font-bold text-[#0A0A0F] group-hover:text-[#2F5BFF] transition-colors mb-2.5 tracking-tight">
                    {ind.title}
                  </h3>

                  {/* Description Verbatim */}
                  <p className="text-[13px] leading-[1.65] text-[#4A4F5C] mb-6">
                    {ind.desc}
                  </p>
                </div>

                {/* Bottom CTA row */}
                <div className="pt-4 border-t border-[#E6E8EE] flex items-center justify-between text-[12px] font-medium text-[#0A0A0F]">
                  <span className="text-[#8A90A0] text-[11px] font-mono">Industry Solution</span>
                  <div className="flex items-center gap-1 text-[#2F5BFF] font-semibold group-hover:underline">
                    <span>Discuss</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
