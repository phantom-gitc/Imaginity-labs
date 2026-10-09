import React from 'react';
import {
  Layers,
  Cpu,
  Workflow,
  Building2,
  Cloud,
  Database,
  RefreshCw,
  Network,
  ArrowUpRight,
} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

export function SolutionsCategoriesOverview() {
  const categories = [
    {
      num: '01',
      title: 'Digital Products',
      desc: 'Modern web platforms, customer portals, mobile apps and flagship SaaS experiences.',
      icon: Layers,
      anchor: '#digital-products',
      tint: 'bg-[#E3EBFF] text-[#2F5BFF] border-[#2F5BFF]/20',
      badge: 'Products & Apps',
    },
    {
      num: '02',
      title: 'AI & Intelligent Systems',
      desc: 'Custom AI assistants, multi-agent workflows, enterprise RAG and computer vision.',
      icon: Cpu,
      anchor: '#ai-systems',
      tint: 'bg-[#F2EDFF] text-[#7B5CFF] border-[#7B5CFF]/20',
      badge: 'AI & Agents',
    },
    {
      num: '03',
      title: 'Automation',
      desc: 'Automating repetitive processes, connecting systems, and intelligent workflows.',
      icon: Workflow,
      anchor: '#automation',
      tint: 'bg-[#FFF4C2] text-[#B45309] border-[#FFD43B]/40',
      badge: 'Workflows',
    },
    {
      num: '04',
      title: 'Enterprise Software',
      desc: 'Custom ERPs, CRMs, management systems, and centralized organization platforms.',
      icon: Building2,
      anchor: '#enterprise-software',
      tint: 'bg-[#E0F2FE] text-[#0284C7] border-[#0284C7]/20',
      badge: 'Enterprise',
    },
    {
      num: '05',
      title: 'Cloud & Backend',
      desc: 'High-throughput APIs, microservices, databases, real-time distributed infrastructure.',
      icon: Cloud,
      anchor: '#cloud-backend',
      tint: 'bg-[#ECFDF5] text-[#059669] border-[#059669]/20',
      badge: 'Cloud & APIs',
    },
    {
      num: '06',
      title: 'Data & Machine Learning',
      desc: 'Business intelligence dashboards, analytics platforms, data pipelines and ML models.',
      icon: Database,
      anchor: '#data-ml',
      tint: 'bg-[#FDF2F8] text-[#DB2777] border-[#DB2777]/20',
      badge: 'Data & Analytics',
    },
    {
      num: '07',
      title: 'Legacy Modernization',
      desc: 'Modernizing outdated software, database migration, and microservice decoupling.',
      icon: RefreshCw,
      anchor: '#legacy-modernization',
      tint: 'bg-[#FEF3C7] text-[#D97706] border-[#D97706]/20',
      badge: 'Modernization',
    },
    {
      num: '08',
      title: 'Integrations',
      desc: 'Connecting payment gateways, CRMs, communication tools, and third-party APIs.',
      icon: Network,
      anchor: '#integrations',
      tint: 'bg-[#F3E8FF] text-[#9333EA] border-[#9333EA]/20',
      badge: 'API Connectors',
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
      id="categories-overview"
      data-reveal="categories-overview"
      className="relative w-full py-24 sm:py-32 bg-[#F0F4FF] border-b border-[#E6E8EE] overflow-hidden"
    >
      {/* Soft Ambient Radial Blur */}
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
        {/* Split Header with verbatim description */}
        <SectionHeader
          eyebrow="WHAT WE BUILD"
          eyebrowDotColor="bg-[#2F5BFF]"
          headingMain="Solutions for every stage of your"
          headingItalic="digital journey."
          description="Whether you're launching something new, improving an existing product or transforming the way your business operates, we can design and build the technology you need."
          linkText="Jump to technical specifications"
          linkHref="#digital-products"
        />

        {/* 4x2 Grid of 8 Compact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <a
                key={cat.num}
                href={cat.anchor}
                onClick={(e) => handleScrollTo(cat.anchor, e)}
                className="group relative rounded-[22px] bg-white border border-[#E6E8EE] p-6 shadow-[0_4px_18px_rgba(10,10,15,0.03)] hover:shadow-[0_12px_36px_rgba(47,91,255,0.09)] hover:border-[#2F5BFF]/40 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 overflow-hidden"
              >
                {/* 1px gradient border sheen on hover */}
                <div className="absolute inset-0 rounded-[22px] p-[1px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full h-full rounded-[21px] bg-gradient-to-br from-[#2F5BFF]/20 via-transparent to-[#FFD43B]/20" />
                </div>

                <div>
                  {/* Top Bar: Mono Index + Tinted Icon Square */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-[11px] font-bold text-[#8A90A0] bg-[#F7F8FA] border border-[#E6E8EE] px-2.5 py-0.5 rounded-full">
                      {cat.num}
                    </span>

                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center border shadow-2xs transition-transform duration-300 group-hover:scale-110 ${cat.tint}`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Badge */}
                  <h3 className="font-sans text-[18px] font-bold tracking-tight text-[#0A0A0F] group-hover:text-[#2F5BFF] transition-colors mb-2">
                    {cat.title}
                  </h3>

                  <p className="text-[13px] leading-[1.6] text-[#6B7280] mb-5">
                    {cat.desc}
                  </p>
                </div>

                {/* Bottom Anchor Link Row */}
                <div className="pt-4 border-t border-[#E6E8EE] flex items-center justify-between text-[12px] font-medium text-[#0A0A0F]">
                  <span className="font-mono text-[10px] text-[#8A90A0] uppercase font-semibold">
                    {cat.badge}
                  </span>

                  <div className="flex items-center gap-1 text-[#2F5BFF] font-semibold">
                    <span>Explore</span>
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
