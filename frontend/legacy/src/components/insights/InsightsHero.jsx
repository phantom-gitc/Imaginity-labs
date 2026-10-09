import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, MessageSquare, BookOpen, Sparkles, Terminal } from 'lucide-react';
import { Eyebrow } from '../ui/Eyebrow';
import { Magnetic } from '../ui/Magnetic';
import { useNavigation } from '../../context/NavigationContext';

export function InsightsHero() {
  const { openContact } = useNavigation();

  const handleScrollToArticles = (e) => {
    e.preventDefault();
    const el = document.getElementById('articles');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      data-reveal="insights-hero"
      className="relative w-full pt-32 sm:pt-40 lg:pt-48 pb-20 sm:pb-28 bg-[#FFFFFF] overflow-hidden border-b border-[#E6E8EE]"
    >
      {/* Background Architectural Grid & Subtle Radial Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #0A0A0F 1px, transparent 1px), linear-gradient(to bottom, #0A0A0F 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div
          className="absolute top-12 left-1/3 w-[720px] h-[720px] rounded-full opacity-60 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(227,235,255,0.7) 0%, rgba(240,244,255,0.4) 45%, transparent 75%)',
            filter: 'blur(90px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <Eyebrow dotColor="bg-[#2F5BFF]">NEXORA INSIGHTS</Eyebrow>

          {/* Main Heading (H1) */}
          <h1 className="h1-hero text-[#0A0A0F] mb-6">
            Ideas shaping software, AI and the{' '}
            <span className="italic font-serif text-gradient-brand">
              future of technology.
            </span>
          </h1>

          {/* Description */}
          <p className="p-subhead text-[#4A4F5C] mb-10 max-w-2xl">
            Practical perspectives on software engineering, artificial intelligence, product development, automation, architecture and the technologies shaping modern businesses.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-14">
            <Magnetic strength={0.2}>
              <a
                href="#articles"
                onClick={handleScrollToArticles}
                className="btn-primary"
              >
                <span>Explore Articles</span>
                <ArrowDown className="w-4 h-4 ml-1 transition-transform group-hover:translate-y-0.5" />
              </a>
            </Magnetic>

            <Magnetic strength={0.15}>
              <button
                type="button"
                onClick={() => openContact()}
                className="btn-secondary"
              >
                <span>Talk to Our Team</span>
                <MessageSquare className="w-4 h-4 text-[#8A90A0]" />
              </button>
            </Magnetic>
          </div>

          {/* Editorial Meta Strip */}
          <div className="pt-8 border-t border-[#E6E8EE] flex flex-wrap items-center gap-6 sm:gap-10 text-[13px] text-[#4A4F5C]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="font-mono text-[12px] font-semibold text-[#0A0A0F]">
                ENGINEERING EDITORIAL
              </span>
            </div>

            <div className="flex items-center gap-2 font-mono text-[12px] text-[#6B7280]">
              <Terminal className="w-3.5 h-3.5 text-[#2F5BFF]" />
              <span>Written by active builders</span>
            </div>

            <div className="flex items-center gap-2 font-mono text-[12px] text-[#6B7280]">
              <Sparkles className="w-3.5 h-3.5 text-[#7B5CFF]" />
              <span>Zero generic filler • Real architecture</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
