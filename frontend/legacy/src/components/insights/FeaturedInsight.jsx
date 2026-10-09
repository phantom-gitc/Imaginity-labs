import React from 'react';
import { ArrowRight, Clock, Sparkles, Terminal, ArrowUpRight } from 'lucide-react';
import { Eyebrow } from '../ui/Eyebrow';

export function FeaturedInsight({ article, onSelectArticle }) {
  if (!article) return null;

  return (
    <section
      id="featured-insight"
      data-reveal="featured-insight"
      className="relative w-full py-16 sm:py-24 bg-[#F7F8FA] border-b border-[#E6E8EE]"
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-6 flex items-center justify-between">
          <Eyebrow dotColor="bg-[#2F5BFF]">FEATURED INSIGHT</Eyebrow>
          <span className="hidden sm:inline-flex font-mono text-[11px] text-[#8A90A0] uppercase tracking-wider">
            Issue #01 • Flagship Architecture Analysis
          </span>
        </div>

        {/* Bento Hero Card */}
        <div
          onClick={() => onSelectArticle(article)}
          className="group relative rounded-[28px] sm:rounded-[32px] bg-white border border-[#E6E8EE] overflow-hidden shadow-[0_8px_32px_rgba(10,10,15,0.04)] hover:shadow-[0_16px_48px_rgba(47,91,255,0.08)] transition-all duration-400 cursor-pointer"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between">
              <div>
                {/* Meta Header */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#E3EBFF] text-[#2F5BFF]">
                    {article.category}
                  </span>

                  <span className="flex items-center gap-1.5 font-mono text-[12px] text-[#6B7280]">
                    <Clock className="w-3.5 h-3.5 text-[#8A90A0]" />
                    {article.readTime}
                  </span>

                  <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-[#D1D5DB]" />

                  <span className="hidden sm:inline-block font-mono text-[12px] text-[#6B7280]">
                    {article.publishedDate}
                  </span>
                </div>

                {/* Main Heading */}
                <h2 className="font-display text-[32px] sm:text-[44px] lg:text-[48px] leading-[1.08] text-[#0A0A0F] mb-5 group-hover:text-[#2F5BFF] transition-colors duration-200">
                  {article.title}
                </h2>

                {/* Subtitle / Description */}
                <p className="text-[16px] sm:text-[17px] leading-[1.65] text-[#4A4F5C] mb-8 max-w-xl">
                  {article.summary}
                </p>

                {/* Key Points Preview */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 pt-6 border-t border-[#E6E8EE]">
                  <div className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2F5BFF] mt-2 shrink-0" />
                    <span className="text-[13px] text-[#4A4F5C]">
                      State graph architecture vs single prompts
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7B5CFF] mt-2 shrink-0" />
                    <span className="text-[13px] text-[#4A4F5C]">
                      Deterministic guardrails and validation
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] mt-2 shrink-0" />
                    <span className="text-[13px] text-[#4A4F5C]">
                      Short & long-term episodic memory
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-2 shrink-0" />
                    <span className="text-[13px] text-[#4A4F5C]">
                      When NOT to use agents in enterprise
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom CTA & Author */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#E6E8EE]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#0A0A0F] text-white flex items-center justify-center font-mono text-[11px] font-bold">
                    NL
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-[#0A0A0F]">
                      {article.author}
                    </p>
                    <p className="text-[11px] font-mono text-[#8A90A0]">
                      {article.authorRole}
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 font-mono text-[13px] font-bold text-[#2F5BFF] group-hover:translate-x-1 transition-transform duration-200">
                  <span>Read the Article</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Right Artwork Column (5 cols) */}
            <div className="lg:col-span-5 relative bg-[#0A0A12] overflow-hidden min-h-[340px] lg:min-h-[auto] flex items-center justify-center p-6 sm:p-8">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover object-center rounded-2xl transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none rounded-2xl m-6 sm:m-8" />
              
              <div className="absolute bottom-10 left-10 right-10 flex items-center justify-between text-white pointer-events-none">
                <span className="font-mono text-[11px] uppercase tracking-widest px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10">
                  Interactive Diagram Inside
                </span>
                <span className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
