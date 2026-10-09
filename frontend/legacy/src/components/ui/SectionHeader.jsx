import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Eyebrow } from './Eyebrow';

export function SectionHeader({
  eyebrow,
  eyebrowDotColor = 'bg-[#2F5BFF]',
  eyebrowVariant = 'light',
  headingMain,
  headingItalic,
  headingYellowWord = null,
  description,
  linkText = null,
  linkHref = null,
  onLinkClick = null,
  isDark = false,
  className = '',
}) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14 sm:mb-18 lg:mb-20 ${className}`}
    >
      {/* Left Column: Eyebrow + Big Serif Headline */}
      <div className="lg:col-span-7">
        {eyebrow && (
          <Eyebrow dotColor={eyebrowDotColor} variant={isDark ? 'dark' : eyebrowVariant}>
            {eyebrow}
          </Eyebrow>
        )}

        <h2
          className={`font-display text-[38px] sm:text-[52px] lg:text-[64px] leading-[1.02] tracking-[-0.025em] ${
            isDark ? 'text-white' : 'text-[#0A0A0F]'
          }`}
        >
          {headingMain}{' '}
          {headingItalic && (
            <span
              className={`italic font-serif ${
                isDark ? 'text-gradient-aurora' : 'text-gradient-brand'
              }`}
            >
              {headingItalic}
            </span>
          )}
        </h2>
      </div>

      {/* Right Column: Short paragraph + "↗" text link, bottom-aligned */}
      {(description || linkText) && (
        <div className="lg:col-span-5 flex flex-col justify-end items-start lg:items-end">
          {description && (
            <p
              className={`text-[15px] sm:text-[17px] leading-[1.65] max-w-[44ch] mb-4 lg:text-left ${
                isDark ? 'text-[#8A8FA3]' : 'text-[#4A4F5C]'
              }`}
            >
              {description}
            </p>
          )}

          {linkText && (
            <div className="pt-1">
              {linkHref ? (
                <a
                  href={linkHref}
                  className="group inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#0A0A0F] hover:text-[#2F5BFF] transition-colors"
                >
                  <span className="underline underline-offset-4 decoration-[#E6E8EE] group-hover:decoration-[#2F5BFF]">
                    {linkText}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#2F5BFF] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ) : (
                <button
                  onClick={onLinkClick}
                  className="group inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#0A0A0F] hover:text-[#2F5BFF] transition-colors cursor-pointer"
                >
                  <span className="underline underline-offset-4 decoration-[#E6E8EE] group-hover:decoration-[#2F5BFF]">
                    {linkText}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#2F5BFF] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
