import React from 'react';
import { ArrowRight, Clock, ArrowUpRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

export function LatestInsightsGrid({ articles, onSelectArticle }) {
  return (
    <section
      id="articles"
      data-reveal="latest-insights"
      className="relative w-full py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#E6E8EE]"
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader
          eyebrow="LATEST"
          eyebrowDotColor="bg-[#2F5BFF]"
          headingMain="What we're"
          headingItalic="thinking about."
          description="Ideas, lessons and practical knowledge from building software and intelligent systems."
        />

        {articles.length === 0 ? (
          <div className="py-16 text-center rounded-2xl bg-[#F7F8FA] border border-[#E6E8EE]">
            <p className="text-[15px] text-[#4A4F5C]">
              No articles found matching this category filter.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                onClick={() => onSelectArticle(article)}
                className="group relative flex flex-col rounded-[24px] bg-white border border-[#E6E8EE] overflow-hidden shadow-[0_4px_20px_rgba(10,10,15,0.03)] hover:shadow-[0_12px_36px_rgba(47,91,255,0.08)] hover:border-[#2F5BFF]/30 transition-all duration-300 cursor-pointer"
              >
                {/* 1. Article Image Thumbnail */}
                <div className="relative w-full aspect-[16/10] bg-[#0A0A12] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  {/* Top-Right Corner Arrow Badge */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <ArrowUpRight className="w-4 h-4 text-[#0A0A0F]" />
                  </div>

                  {/* Number Badge */}
                  <div className="absolute bottom-3 left-4">
                    <span className="font-mono text-[11px] font-bold text-white/90 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded">
                      ARTICLE {article.id}
                    </span>
                  </div>
                </div>

                {/* 2. Content Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category */}
                    <div className="mb-3">
                      <span className="inline-block font-mono text-[11px] font-bold uppercase tracking-wider text-[#2F5BFF] bg-[#E3EBFF] px-2.5 py-0.5 rounded-full">
                        {article.category}
                      </span>
                    </div>

                    {/* Article Title */}
                    <h3 className="font-sans text-[19px] sm:text-[20px] font-bold text-[#0A0A0F] leading-snug mb-3 group-hover:text-[#2F5BFF] transition-colors duration-200">
                      {article.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-[14px] leading-[1.6] text-[#4A4F5C] mb-6 line-clamp-3">
                      {article.summary}
                    </p>
                  </div>

                  {/* 3. Bottom Row: Reading time and Read Article CTA */}
                  <div className="pt-4 border-t border-[#E6E8EE] flex items-center justify-between">
                    <div className="flex items-center gap-1.5 font-mono text-[12px] text-[#8A90A0]">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{article.readTime}</span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 font-mono text-[12px] font-bold text-[#2F5BFF] group-hover:translate-x-0.5 transition-transform">
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
