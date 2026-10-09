import React from 'react';
import {
  Compass,
  Palette,
  Code2,
  Cpu,
  Workflow,
  Cloud,
  Layers,
  ShieldCheck,
  ArrowUpRight,
} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

export function ServicesOverview() {
  const servicePillars = [
    {
      num: '01',
      title: 'Product Strategy & Consulting',
      desc: 'Discovery, technical consulting, product roadmaps, MVP planning and AI strategy.',
      icon: Compass,
      anchor: '#strategy',
      tint: 'bg-[#E3EBFF] text-[#2F5BFF] border-[#2F5BFF]/20',
      badge: 'Discovery & Plan',
    },
    {
      num: '02',
      title: 'UI/UX Design',
      desc: 'User research, wireframing, design systems, and interactive clickable prototypes.',
      icon: Palette,
      anchor: '#design',
      tint: 'bg-[#F2EDFF] text-[#7B5CFF] border-[#7B5CFF]/20',
      badge: 'Tactile UI/UX',
    },
    {
      num: '03',
      title: 'Software Development',
      desc: 'Full-stack engineering across modern React/Next.js frontend and robust backend APIs.',
      icon: Code2,
      anchor: '#development',
      tint: 'bg-[#E0F2FE] text-[#0284C7] border-[#0284C7]/20',
      badge: 'Web & Mobile',
    },
    {
      num: '04',
      title: 'AI Development',
      desc: 'Generative AI applications, autonomous agents, enterprise RAG and LLM engineering.',
      icon: Cpu,
      anchor: '#ai-dev',
      tint: 'bg-[#FDF4FF] text-[#C026D3] border-[#C026D3]/20',
      badge: 'GenAI & Agents',
    },
    {
      num: '05',
      title: 'Business Automation',
      desc: 'Identifying repetitive processes and building event-driven self-healing workflows.',
      icon: Workflow,
      anchor: '#automation',
      tint: 'bg-[#FFF4C2] text-[#B45309] border-[#FFD43B]/40',
      badge: 'Workflows',
    },
    {
      num: '06',
      title: 'Cloud & DevOps',
      desc: 'Resilient cloud architecture, containerization, CI/CD pipelines, and APM telemetry.',
      icon: Cloud,
      anchor: '#cloud-devops',
      tint: 'bg-[#ECFDF5] text-[#059669] border-[#059669]/20',
      badge: 'Infrastructure',
    },
    {
      num: '07',
      title: 'System Architecture',
      desc: 'Distributed systems, database architecture, and phased zero-downtime modernization.',
      icon: Layers,
      anchor: '#architecture',
      tint: 'bg-[#FEF3C7] text-[#D97706] border-[#D97706]/20',
      badge: 'Architecture',
    },
    {
      num: '08',
      title: 'Quality, Security & Support',
      desc: 'End-to-end automated testing, RBAC security hardening, and continuous maintenance.',
      icon: ShieldCheck,
      anchor: '#quality-support',
      tint: 'bg-[#F3E8FF] text-[#9333EA] border-[#9333EA]/20',
      badge: 'Security & QA',
    },
  ];

  const handleScrollTo = (anchor, e) => {
    e.preventDefault();
    const el = document.querySelector(anchor);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="services-overview"
      data-reveal="services-overview"
      className="relative w-full py-24 sm:py-32 bg-[#F0F4FF] border-b border-[#E6E8EE] overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] pointer-events-none z-0">
        <div
          className="w-full h-full rounded-full opacity-60"
          style={{
            background:
              'radial-gradient(circle, rgba(227,235,255,0.85) 0%, rgba(240,244,255,0.4) 50%, transparent 75%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader
          eyebrow="WHAT WE DO"
          eyebrowDotColor="bg-[#2F5BFF]"
          headingMain="A complete technology partner for your"
          headingItalic="product journey."
          description="Bring us an idea, a problem or an existing system. We'll help determine what needs to be built, how it should work and how to make it successful."
          linkText="Explore service capabilities"
          linkHref="#strategy"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {servicePillars.map((srv) => {
            const Icon = srv.icon;
            return (
              <a
                key={srv.num}
                href={srv.anchor}
                onClick={(e) => handleScrollTo(srv.anchor, e)}
                className="group relative rounded-[22px] bg-white border border-[#E6E8EE] p-6 shadow-[0_4px_18px_rgba(10,10,15,0.03)] hover:shadow-[0_12px_36px_rgba(47,91,255,0.09)] hover:border-[#2F5BFF]/40 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 rounded-[22px] p-[1px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full h-full rounded-[21px] bg-gradient-to-br from-[#2F5BFF]/20 via-transparent to-[#FFD43B]/20" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-[11px] font-bold text-[#8A90A0] bg-[#F7F8FA] border border-[#E6E8EE] px-2.5 py-0.5 rounded-full">
                      {srv.num}
                    </span>

                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center border shadow-2xs transition-transform duration-300 group-hover:scale-110 ${srv.tint}`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-sans text-[18px] font-bold tracking-tight text-[#0A0A0F] group-hover:text-[#2F5BFF] transition-colors mb-2">
                    {srv.title}
                  </h3>

                  <p className="text-[13px] leading-[1.6] text-[#6B7280] mb-5">
                    {srv.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E6E8EE] flex items-center justify-between text-[12px] font-medium text-[#0A0A0F]">
                  <span className="font-mono text-[10px] text-[#8A90A0] uppercase font-semibold">
                    {srv.badge}
                  </span>

                  <div className="flex items-center gap-1 text-[#2F5BFF] font-semibold">
                    <span>Learn More</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
