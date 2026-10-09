import React from 'react';
import { ArrowDown, ExternalLink, Code2, Server, Cpu, Database, Cloud } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Eyebrow } from '../ui/Eyebrow';

function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function AboutJourneyAndTeam() {
  const journey = [
    {
      period: 'Today',
      title: 'Strong Engineering Foundations',
      desc: 'Build useful software and establish strong engineering foundations.',
      tint: 'bg-[#E3EBFF] text-[#2F5BFF]',
    },
    {
      period: 'Next',
      title: 'Capability Expansion',
      desc: 'Expand our capabilities across AI, automation, cloud and enterprise technology.',
      tint: 'bg-[#F2EDFF] text-[#7B5CFF]',
    },
    {
      period: 'Future',
      title: 'Trusted Global Partner',
      desc: 'Become a trusted technology partner for businesses solving ambitious problems.',
      tint: 'bg-[#FFF4C2] text-[#B45309]',
    },
  ];

  const stackCategories = [
    {
      category: 'Product',
      icon: Code2,
      skills: ['React', 'Next.js', 'TypeScript', 'JavaScript'],
    },
    {
      category: 'Backend',
      icon: Server,
      skills: ['Node.js', 'Python', 'Java', 'Go'],
    },
    {
      category: 'AI',
      icon: Cpu,
      skills: ['Generative AI', 'LLMs', 'RAG', 'AI Agents', 'Machine Learning'],
    },
    {
      category: 'Data',
      icon: Database,
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Vector Databases'],
    },
    {
      category: 'Infrastructure',
      icon: Cloud,
      skills: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'],
    },
  ];

  return (
    <section
      id="journey-team"
      data-reveal="journey-team"
      className="relative w-full py-24 sm:py-32 lg:py-36 bg-[#FFFFFF] border-b border-[#E6E8EE]"
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12 space-y-24">
        
        {/* ========================================================================= */}
        {/* PART 1: THE NEXORA JOURNEY */}
        {/* ========================================================================= */}
        <div>
          <SectionHeader
            eyebrow="OUR JOURNEY"
            eyebrowDotColor="bg-[#2F5BFF]"
            headingMain="Still building."
            headingItalic="Always learning."
            description="Nexora Labs is being built with a long-term vision: create a technology company capable of solving increasingly complex problems as software, AI and businesses evolve."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {journey.map((step, idx) => (
              <div
                key={step.period}
                className="p-8 rounded-[24px] bg-white border border-[#E6E8EE] shadow-[0_4px_18px_rgba(10,10,15,0.02)] hover:border-[#2F5BFF]/35 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-[12px] font-bold text-[#0A0A0F] bg-[#F7F8FA] border border-[#E6E8EE] px-3 py-1 rounded-full uppercase">
                      {step.period}
                    </span>
                    <span className="font-mono text-[11px] text-[#8A90A0]">
                      PHASE 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-sans text-[20px] font-bold text-[#0A0A0F] mb-3">
                    {step.title}
                  </h3>

                  <p className="text-[14px] leading-[1.65] text-[#4A4F5C]">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#E6E8EE] flex items-center justify-between text-[11px] font-mono text-[#8A90A0]">
                  <span>TRAJECTORY</span>
                  <span className="text-[#2F5BFF] font-semibold">ACTIVE</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PART 2: OUR TEAM / FOUNDER-LED TRANSPARENCY */}
        {/* ========================================================================= */}
        <div id="team" className="pt-8">
          <SectionHeader
            eyebrow="THE PEOPLE"
            eyebrowDotColor="bg-[#2F5BFF]"
            headingMain="People behind"
            headingItalic="the technology."
            description="Nexora Labs is built by people who enjoy solving difficult problems, learning new technologies and turning ideas into working products."
          />

          <div className="max-w-2xl mx-auto rounded-[28px] bg-[#F7F8FA] border border-[#E6E8EE] p-8 sm:p-11 shadow-[0_4px_24px_rgba(10,10,15,0.03)]">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-[#0A0A0F] flex items-center justify-center text-white font-mono text-xl font-bold shadow-md">
                <span className="text-[#FFD43B]">NL</span>
              </div>

              <div>
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#2F5BFF] bg-[#E3EBFF] px-2.5 py-0.5 rounded-md">
                  FOUNDER & TECHNOLOGY LEAD
                </span>
                <h3 className="font-sans text-[24px] font-bold text-[#0A0A0F] mt-1">
                  Saroj Kumar
                </h3>
                <p className="text-[14px] text-[#6B7280]">
                  Architect & Systems Engineer
                </p>
              </div>
            </div>

            <blockquote className="text-[16px] leading-[1.65] text-[#4A4F5C] mb-8 italic font-serif">
              “Building Nexora Labs around the belief that great software should solve meaningful problems and remain useful long after launch.”
            </blockquote>

            <div className="pt-6 border-t border-[#E6E8EE] flex items-center justify-between">
              <span className="font-mono text-[11px] text-[#8A90A0] uppercase font-semibold">
                FOUNDER-LED CRAFT
              </span>

              <div className="flex items-center gap-4 text-[#0A0A0F]">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-[13px] font-medium hover:text-[#2F5BFF] transition-colors"
                >
                  <LinkedInIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-[13px] font-medium hover:text-[#2F5BFF] transition-colors"
                >
                  <GitHubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PART 3: TECHNOLOGY ECOSYSTEM */}
        {/* ========================================================================= */}
        <div id="stack" className="pt-8">
          <div className="mb-10">
            <Eyebrow dotColor="bg-[#2F5BFF]">OUR STACK</Eyebrow>
            <h3 className="font-display text-[32px] sm:text-[44px] leading-tight text-[#0A0A0F] mb-3">
              Modern technology.{' '}
              <span className="italic font-serif text-gradient-brand">
                Practical choices.
              </span>
            </h3>
            <p className="text-[15px] text-[#6B7280] max-w-2xl">
              Our stack evolves with the needs of the products we build. We choose tools with high performance, mature ecosystems, and long-term viability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {stackCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.category}
                  className="p-5 rounded-2xl bg-[#F7F8FA] border border-[#E6E8EE] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-3.5">
                      <Icon className="w-4 h-4 text-[#2F5BFF]" />
                      <h4 className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#0A0A0F]">
                        {cat.category}
                      </h4>
                    </div>

                    <div className="space-y-1.5">
                      {cat.skills.map((skill) => (
                        <div
                          key={skill}
                          className="px-2.5 py-1 rounded-md bg-white border border-[#E6E8EE] text-[12px] font-medium text-[#4A4F5C]"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
