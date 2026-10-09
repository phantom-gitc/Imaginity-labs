import React from 'react';
import { Code2, Compass, Wrench, Sparkles, TrendingUp, Bell, ArrowRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { INSIGHT_TYPES } from '../../data/insightsData';

export function InsightTypes({ onSelectFilter }) {
  const iconMap = {
    'Technical Articles': Code2,
    'Product Thinking': Compass,
    'Engineering Lessons': Wrench,
    'AI Guides': Sparkles,
    'Business Technology': TrendingUp,
    'Company Updates': Bell,
  };

  return (
    <section
      id="insight-types"
      data-reveal="insight-types"
      className="relative w-full py-20 sm:py-28 bg-[#F0F4FF] border-b border-[#E6E8EE]"
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader
          eyebrow="EDITORIAL SPECTRUM"
          eyebrowDotColor="bg-[#7B5CFF]"
          headingMain="Content formats crafted for"
          headingItalic="real builders."
          description="The Insights publication spans deep technical dissections, pragmatic architectural blueprints, product methodology, and transparent field notes."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INSIGHT_TYPES.map((type, idx) => {
            const Icon = iconMap[type.title] || Sparkles;

            return (
              <div
                key={type.title}
                className="group relative rounded-[24px] bg-white border border-[#E6E8EE] p-8 shadow-[0_4px_20px_rgba(10,10,15,0.03)] hover:shadow-[0_12px_32px_rgba(47,91,255,0.06)] hover:border-[#2F5BFF]/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#F0F4FF] border border-[#E6E8EE] flex items-center justify-center text-[#2F5BFF] group-hover:scale-105 group-hover:bg-[#2F5BFF] group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="font-mono text-[11px] font-bold text-[#8A90A0]">
                      0{idx + 1}
                    </span>
                  </div>

                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#7B5CFF] mb-2 block">
                    {type.tag}
                  </span>

                  <h3 className="font-sans text-[20px] font-bold text-[#0A0A0F] mb-3">
                    {type.title}
                  </h3>

                  <p className="text-[14px] leading-[1.65] text-[#4A4F5C]">
                    {type.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E6E8EE] flex items-center justify-between text-[12px] font-mono text-[#8A90A0] group-hover:text-[#2F5BFF] transition-colors">
                  <span>EDITORIAL CATEGORY</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
