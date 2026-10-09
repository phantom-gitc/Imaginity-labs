import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, ArrowRight, CheckCircle2, User, Sparkles, Share2 } from 'lucide-react';
import { ARTICLES } from '../../data/insightsData';
import { useNavigation } from '../../context/NavigationContext';

export function ArticleModal({ article, onClose, onSelectRelated }) {
  const { openContact } = useNavigation();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!article) return null;

  // Get related articles
  const relatedArticles = article.relatedSlugs
    ? ARTICLES.filter((a) => article.relatedSlugs.includes(a.id))
    : ARTICLES.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0A0A0F]/70 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-4xl h-full sm:h-[90vh] bg-white rounded-none sm:rounded-[28px] shadow-[0_25px_60px_rgba(10,10,15,0.3)] border border-[#E6E8EE] flex flex-col overflow-hidden z-10"
        >
          {/* Top Bar Header */}
          <div className="h-16 px-6 sm:px-8 border-b border-[#E6E8EE] flex items-center justify-between shrink-0 bg-white/90 backdrop-blur-md sticky top-0 z-20">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#E3EBFF] text-[#2F5BFF]">
                {article.category}
              </span>
              <span className="hidden sm:inline-flex font-mono text-[12px] text-[#8A90A0]">
                • {article.readTime}
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close article"
              className="w-9 h-9 rounded-full bg-[#F7F8FA] hover:bg-[#E6E8EE] flex items-center justify-center text-[#4A4F5C] hover:text-[#0A0A0F] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Reader Body */}
          <div className="flex-1 overflow-y-auto px-6 sm:px-10 lg:px-14 py-8 sm:py-12 space-y-12">
            
            {/* 1. Article Hero Title & Metadata */}
            <div>
              <h1 className="font-display text-[32px] sm:text-[44px] lg:text-[48px] leading-[1.08] text-[#0A0A0F] mb-4">
                {article.title}
              </h1>

              {article.subtitle && (
                <p className="text-[17px] sm:text-[19px] leading-[1.6] text-[#4A4F5C] mb-6">
                  {article.subtitle}
                </p>
              )}

              {/* Author Strip */}
              <div className="pt-6 border-t border-[#E6E8EE] flex flex-wrap items-center justify-between gap-4 text-[13px]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0A0A0F] text-[#FFD43B] font-mono font-bold flex items-center justify-center text-xs">
                    NL
                  </div>
                  <div>
                    <p className="font-bold text-[#0A0A0F]">{article.author}</p>
                    <p className="text-[#8A90A0] text-xs font-mono">{article.authorRole}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-[#8A90A0] font-mono text-xs">
                  <span>{article.publishedDate}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>

            {/* 2. Hero Image / Architectural Artwork */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-[#0A0A12] border border-[#E6E8EE]">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* 3. Introduction Quote (Section 20) */}
            {article.introQuote && (
              <blockquote className="rounded-2xl bg-[#F0F4FF] border-l-4 border-[#2F5BFF] p-6 sm:p-8 text-[17px] leading-[1.7] text-[#0A0A0F] italic font-serif">
                {article.introQuote}
              </blockquote>
            )}

            {/* 4. Structured Main Content Sections (Section 21) */}
            {article.sections && article.sections.length > 0 && (
              <div className="space-y-10">
                {article.sections.map((sec) => (
                  <div key={sec.num} className="space-y-3">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-[14px] font-bold text-[#2F5BFF]">
                        {sec.num} —
                      </span>
                      <h2 className="font-sans text-[22px] sm:text-[24px] font-bold text-[#0A0A0F]">
                        {sec.title}
                      </h2>
                    </div>

                    <p className="text-[16px] leading-[1.75] text-[#4A4F5C] pl-0 sm:pl-9">
                      {sec.content}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* 5. Key Takeaways (Section 22) */}
            {article.takeaways && article.takeaways.length > 0 && (
              <div className="rounded-[24px] bg-[#F7F8FA] border border-[#E6E8EE] p-8 sm:p-10">
                <h3 className="font-mono text-[12px] font-bold uppercase tracking-wider text-[#0A0A0F] mb-6 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#FFD43B]" />
                  <span>KEY TAKEAWAYS</span>
                </h3>

                <ul className="space-y-3.5">
                  {article.takeaways.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px] leading-relaxed text-[#0A0A0F]">
                      <CheckCircle2 className="w-5 h-5 text-[#2F5BFF] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 6. Author Section (Section 23) */}
            <div className="rounded-[24px] bg-white border border-[#E6E8EE] p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#0A0A0F] flex items-center justify-center text-[#FFD43B] font-mono text-lg font-bold shrink-0">
                  NL
                </div>
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#8A90A0]">
                    WRITTEN BY
                  </span>
                  <h4 className="font-sans text-[18px] font-bold text-[#0A0A0F]">
                    {article.author}
                  </h4>
                  <p className="text-[13px] font-mono text-[#2F5BFF] mb-1">
                    {article.authorRole}
                  </p>
                  <p className="text-[13px] text-[#4A4F5C] max-w-md">
                    {article.authorBio}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  openContact();
                }}
                className="btn-primary shrink-0 cursor-pointer"
              >
                <span>Work With Us</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>

            {/* 7. Related Articles (Section 24) */}
            {relatedArticles.length > 0 && (
              <div className="pt-8 border-t border-[#E6E8EE]">
                <div className="mb-6">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#8A90A0]">
                    KEEP READING
                  </span>
                  <h3 className="font-display text-[26px] text-[#0A0A0F] mt-1">
                    More from Nexora Labs
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {relatedArticles.map((rel) => (
                    <div
                      key={rel.id}
                      onClick={() => onSelectRelated(rel)}
                      className="group p-5 rounded-2xl bg-[#F7F8FA] border border-[#E6E8EE] hover:border-[#2F5BFF]/30 transition-all cursor-pointer flex flex-col justify-between"
                    >
                      <div>
                        <span className="font-mono text-[10px] font-bold text-[#2F5BFF] uppercase tracking-wider block mb-2">
                          {rel.category}
                        </span>
                        <h4 className="font-sans text-[15px] font-bold text-[#0A0A0F] group-hover:text-[#2F5BFF] transition-colors line-clamp-2 mb-2">
                          {rel.title}
                        </h4>
                      </div>

                      <div className="pt-3 border-t border-[#E6E8EE] flex items-center justify-between font-mono text-[11px] text-[#8A90A0]">
                        <span>{rel.readTime}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
