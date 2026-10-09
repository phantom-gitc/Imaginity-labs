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
  CheckCircle2,
  XCircle,
  ArrowDown,
  HelpCircle,
  Sparkles,
} from 'lucide-react';
import { Chip } from '../ui/Chip';
import { useNavigation } from '../../context/NavigationContext';

export function DetailedServiceBlocks() {
  const { openContact } = useNavigation();

  return (
    <section
      id="detailed-services"
      data-reveal="detailed-services"
      className="relative w-full py-24 sm:py-32 lg:py-36 bg-[#FFFFFF] border-b border-[#E6E8EE]"
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12 space-y-24 sm:space-y-32">
        
        {/* ========================================================================= */}
        {/* BLOCK 01: PRODUCT STRATEGY & CONSULTING */}
        {/* ========================================================================= */}
        <div id="strategy" className="scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Sticky Title Column */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-[12px] font-bold text-[#2F5BFF] bg-[#E3EBFF] border border-[#2F5BFF]/20 px-3 py-1 rounded-full">
                  01
                </span>
                <div className="w-10 h-10 rounded-xl bg-[#E3EBFF] text-[#2F5BFF] border border-[#2F5BFF]/20 flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
              </div>

              <h3 className="font-display text-[34px] sm:text-[44px] leading-[1.05] text-[#0A0A0F] mb-4">
                Product Strategy & <br />
                <span className="italic font-serif text-gradient-brand">
                  Technology Consulting.
                </span>
              </h3>

              <p className="text-[15px] leading-[1.65] text-[#4A4F5C] mb-6">
                Before writing code, we help turn your business idea into a clear product and technology direction.
              </p>

              <button
                onClick={() => openContact('Product Strategy & Consulting')}
                className="group inline-flex items-center gap-2 h-11 px-5 rounded-full bg-[#0A0A0F] hover:bg-[#2F5BFF] text-white text-[13px] font-medium transition-all duration-300 shadow-sm cursor-pointer"
              >
                <span>Plan Your Product →</span>
                <ArrowUpRight className="w-4 h-4 text-[#FFD43B] transition-transform duration-300 group-hover:rotate-45" />
              </button>
            </div>

            {/* Content Card (Cols 5-12) */}
            <div className="lg:col-span-8">
              <div className="rounded-[24px] bg-[#FFFFFF] border border-[#E6E8EE] p-8 sm:p-10 shadow-[0_4px_24px_rgba(10,10,15,0.03)] hover:border-[#2F5BFF]/30 transition-all duration-300">
                
                {/* Services Include */}
                <div className="mb-8">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#8A90A0] mb-3">
                    SERVICES INCLUDE
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Product Discovery',
                      'Requirements Analysis',
                      'Technical Consulting',
                      'Product Roadmapping',
                      'MVP Planning',
                      'Technology Selection',
                      'System Architecture Planning',
                      'Technical Feasibility Analysis',
                      'Digital Transformation Strategy',
                      'AI Strategy',
                    ].map((chip) => (
                      <Chip key={chip} variant="blue">
                        {chip}
                      </Chip>
                    ))}
                  </div>
                </div>

                {/* We Help Answer */}
                <div className="mb-8 p-5 rounded-2xl bg-[#F7F8FA] border border-[#E6E8EE]">
                  <div className="flex items-center gap-2 mb-3">
                    <HelpCircle className="w-4 h-4 text-[#2F5BFF]" />
                    <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#0A0A0F]">
                      WE HELP ANSWER
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[13px] text-[#4A4F5C]">
                    {[
                      'What should we build?',
                      'Who is it for?',
                      'What should the MVP include?',
                      'Which technology should we use?',
                      'How should the system be architected?',
                      'Where can AI or automation create value?',
                    ].map((q) => (
                      <div key={q} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2F5BFF]" />
                        <span>{q}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Outcome & CTA */}
                <div className="pt-6 border-t border-[#E6E8EE] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#2F5BFF] bg-[#E3EBFF] px-2.5 py-1 rounded-md">
                      OUTCOME
                    </span>
                    <p className="font-sans text-[14px] font-semibold text-[#0A0A0F] mt-2">
                      A clear roadmap, scope and technical direction before development begins.
                    </p>
                  </div>

                  <button
                    onClick={() => openContact('Product Strategy & Consulting')}
                    className="h-10 px-5 rounded-full bg-[#F7F8FA] border border-[#E6E8EE] hover:bg-[#2F5BFF] hover:text-white text-[#0A0A0F] text-[13px] font-medium flex items-center gap-2 transition-all duration-300 shrink-0 cursor-pointer"
                  >
                    <span>Plan Your Product →</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BLOCK 02: UI/UX DESIGN */}
        {/* ========================================================================= */}
        <div id="design" className="scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-[12px] font-bold text-[#7B5CFF] bg-[#F2EDFF] border border-[#7B5CFF]/20 px-3 py-1 rounded-full">
                  02
                </span>
                <div className="w-10 h-10 rounded-xl bg-[#F2EDFF] text-[#7B5CFF] border border-[#7B5CFF]/20 flex items-center justify-center">
                  <Palette className="w-5 h-5" />
                </div>
              </div>

              <h3 className="font-display text-[34px] sm:text-[44px] leading-[1.05] text-[#0A0A0F] mb-4">
                Product Design & <br />
                <span className="italic font-serif text-gradient-brand">
                  User Experience.
                </span>
              </h3>

              <p className="text-[15px] leading-[1.65] text-[#4A4F5C] mb-6">
                We design digital experiences that are intuitive, purposeful and aligned with the people using them.
              </p>

              <button
                onClick={() => openContact('UI/UX Design')}
                className="group inline-flex items-center gap-2 h-11 px-5 rounded-full bg-[#0A0A0F] hover:bg-[#7B5CFF] text-white text-[13px] font-medium transition-all duration-300 shadow-sm cursor-pointer"
              >
                <span>Design My Product →</span>
                <ArrowUpRight className="w-4 h-4 text-[#FFD43B] transition-transform duration-300 group-hover:rotate-45" />
              </button>
            </div>

            <div className="lg:col-span-8">
              <div className="rounded-[24px] bg-[#FFFFFF] border border-[#E6E8EE] p-8 sm:p-10 shadow-[0_4px_24px_rgba(10,10,15,0.03)] hover:border-[#7B5CFF]/30 transition-all duration-300">
                
                <div className="mb-8">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#8A90A0] mb-3">
                    SERVICES INCLUDE
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'UX Research',
                      'User Flows',
                      'Information Architecture',
                      'Wireframes',
                      'UI Design',
                      'Design Systems',
                      'Interactive Prototypes',
                      'Responsive Design',
                      'Dashboard Design',
                      'SaaS Product Design',
                      'Mobile App Design',
                      'Website Design',
                    ].map((chip) => (
                      <Chip key={chip} variant="violet">
                        {chip}
                      </Chip>
                    ))}
                  </div>
                </div>

                {/* Design Principles */}
                <div className="mb-8 p-5 rounded-2xl bg-[#F7F8FA] border border-[#E6E8EE]">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#0A0A0F] mb-3">
                    CORE DESIGN PRINCIPLES
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                    {['Simple', 'Clear', 'Accessible', 'Consistent', 'Scalable'].map((p) => (
                      <div
                        key={p}
                        className="p-2.5 rounded-xl bg-white border border-[#E6E8EE] text-center font-semibold text-[13px] text-[#0A0A0F]"
                      >
                        {p}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#E6E8EE] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#7B5CFF] bg-[#F2EDFF] px-2.5 py-1 rounded-md">
                      OUTCOME
                    </span>
                    <p className="font-sans text-[14px] font-semibold text-[#0A0A0F] mt-2">
                      A clear product experience that users can understand and enjoy using.
                    </p>
                  </div>

                  <button
                    onClick={() => openContact('UI/UX Design')}
                    className="h-10 px-5 rounded-full bg-[#F7F8FA] border border-[#E6E8EE] hover:bg-[#7B5CFF] hover:text-white text-[#0A0A0F] text-[13px] font-medium flex items-center gap-2 transition-all duration-300 shrink-0 cursor-pointer"
                  >
                    <span>Design My Product →</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* BLOCK 03: SOFTWARE DEVELOPMENT */}
        {/* ========================================================================= */}
        <div id="development" className="scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-[12px] font-bold text-[#0284C7] bg-[#E0F2FE] border border-[#0284C7]/20 px-3 py-1 rounded-full">
                  03
                </span>
                <div className="w-10 h-10 rounded-xl bg-[#E0F2FE] text-[#0284C7] border border-[#0284C7]/20 flex items-center justify-center">
                  <Code2 className="w-5 h-5" />
                </div>
              </div>

              <h3 className="font-display text-[34px] sm:text-[44px] leading-[1.05] text-[#0A0A0F] mb-4">
                Full-Stack Software <br />
                <span className="italic font-serif text-gradient-brand">
                  Development.
                </span>
              </h3>

              <p className="text-[15px] leading-[1.65] text-[#4A4F5C] mb-6">
                We design and build production-ready software across web, mobile and backend systems.
              </p>

              <button
                onClick={() => openContact('Software Development')}
                className="group inline-flex items-center gap-2 h-11 px-5 rounded-full bg-[#0A0A0F] hover:bg-[#0284C7] text-white text-[13px] font-medium transition-all duration-300 shadow-sm cursor-pointer"
              >
                <span>Build My Software →</span>
                <ArrowUpRight className="w-4 h-4 text-[#FFD43B] transition-transform duration-300 group-hover:rotate-45" />
              </button>
            </div>

            <div className="lg:col-span-8">
              <div className="rounded-[24px] bg-[#FFFFFF] border border-[#E6E8EE] p-8 sm:p-10 shadow-[0_4px_24px_rgba(10,10,15,0.03)] hover:border-[#0284C7]/30 transition-all duration-300">
                
                {/* 3 Categories: Frontend, Backend, Application */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="p-4 rounded-xl bg-[#F7F8FA] border border-[#E6E8EE]">
                    <p className="font-mono text-[11px] font-bold uppercase text-[#0284C7] mb-3">
                      FRONTEND
                    </p>
                    <ul className="space-y-1.5 text-[13px] text-[#4A4F5C]">
                      {['React & Next.js', 'TypeScript & JavaScript', 'Modern UI Systems', 'Responsive Apps'].map((item) => (
                        <li key={item} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F7F8FA] border border-[#E6E8EE]">
                    <p className="font-mono text-[11px] font-bold uppercase text-[#0284C7] mb-3">
                      BACKEND
                    </p>
                    <ul className="space-y-1.5 text-[13px] text-[#4A4F5C]">
                      {['Node.js & Python', 'Go & Java', 'REST & GraphQL APIs', 'Real-Time WebSockets'].map((item) => (
                        <li key={item} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F7F8FA] border border-[#E6E8EE]">
                    <p className="font-mono text-[11px] font-bold uppercase text-[#0284C7] mb-3">
                      APPLICATIONS
                    </p>
                    <ul className="space-y-1.5 text-[13px] text-[#4A4F5C]">
                      {['SaaS Platforms', 'Customer Portals', 'Mobile Applications', 'Internal Ops Tools'].map((item) => (
                        <li key={item} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#E6E8EE] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#0284C7] bg-[#E0F2FE] px-2.5 py-1 rounded-md">
                      OUTCOME
                    </span>
                    <p className="font-sans text-[14px] font-semibold text-[#0A0A0F] mt-2">
                      Reliable, maintainable software built around your business requirements.
                    </p>
                  </div>

                  <button
                    onClick={() => openContact('Software Development')}
                    className="h-10 px-5 rounded-full bg-[#F7F8FA] border border-[#E6E8EE] hover:bg-[#0284C7] hover:text-white text-[#0A0A0F] text-[13px] font-medium flex items-center gap-2 transition-all duration-300 shrink-0 cursor-pointer"
                  >
                    <span>Build My Software →</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* BLOCK 04: AI DEVELOPMENT */}
        {/* ========================================================================= */}
        <div id="ai-dev" className="scroll-mt-28">
          <div className="rounded-[28px] bg-[#FFFFFF] border border-[#E6E8EE] p-8 sm:p-12 shadow-[0_6px_30px_rgba(10,10,15,0.04)] hover:border-[#C026D3]/40 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-[12px] font-bold text-[#C026D3] bg-[#FDF4FF] border border-[#C026D3]/20 px-3 py-1 rounded-full">
                04 • INTELLIGENT CAPABILITY
              </span>
              <div className="w-10 h-10 rounded-xl bg-[#FDF4FF] text-[#C026D3] border border-[#C026D3]/20 flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-8">
              <div className="lg:col-span-6">
                <h3 className="font-display text-[34px] sm:text-[46px] leading-[1.02] text-[#0A0A0F] mb-4">
                  AI & Generative AI <br />
                  <span className="italic font-serif text-gradient-brand">
                    Development.
                  </span>
                </h3>

                <p className="text-[16px] leading-[1.65] text-[#4A4F5C] mb-6">
                  We integrate modern AI capabilities into products and business systems to create smarter experiences and more efficient workflows.
                </p>

                <div className="mb-6">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#8A90A0] mb-3">
                    SERVICES INCLUDE
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Generative AI Applications',
                      'AI Assistants',
                      'AI Agents',
                      'RAG Systems',
                      'AI Search',
                      'Knowledge Assistants',
                      'Voice AI',
                      'Document Intelligence',
                      'AI-powered Customer Support',
                      'Recommendation Systems',
                      'AI Automation',
                    ].map((chip) => (
                      <Chip key={chip} variant="violet">
                        {chip}
                      </Chip>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="p-6 rounded-2xl bg-[#F7F8FA] border border-[#E6E8EE]">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#0A0A0F] mb-4">
                    AI ENGINEERING DISCIPLINE
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px] text-[#4A4F5C]">
                    {[
                      'LLM Integration',
                      'Prompt Engineering',
                      'Retrieval Pipelines',
                      'Vector Search',
                      'Agent Workflows',
                      'Multi-Agent Systems',
                      'Context Management',
                      'Memory Systems',
                      'AI Evaluation',
                      'Model Integration',
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C026D3] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#E6E8EE] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#C026D3] bg-[#FDF4FF] px-2.5 py-1 rounded-md">
                  OUTCOME
                </span>
                <p className="font-sans text-[15px] font-semibold text-[#0A0A0F] mt-2">
                  AI capabilities that are integrated into real products and business workflows.
                </p>
              </div>

              <button
                onClick={() => openContact('AI Development')}
                className="h-11 px-6 rounded-full bg-[#0A0A0F] hover:bg-[#C026D3] text-white text-[13px] font-medium flex items-center gap-2 transition-all duration-300 shadow-sm cursor-pointer"
              >
                <span>Build With AI →</span>
                <ArrowUpRight className="w-4 h-4 text-[#FFD43B]" />
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BLOCK 05: BUSINESS AUTOMATION (WITH SIDE-BY-SIDE FLOW DIAGRAM) */}
        {/* ========================================================================= */}
        <div id="automation" className="scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-[12px] font-bold text-[#B45309] bg-[#FFF4C2] border border-[#FFD43B]/40 px-3 py-1 rounded-full">
                  05
                </span>
                <div className="w-10 h-10 rounded-xl bg-[#FFF4C2] text-[#B45309] border border-[#FFD43B]/40 flex items-center justify-center">
                  <Workflow className="w-5 h-5" />
                </div>
              </div>

              <h3 className="font-display text-[34px] sm:text-[44px] leading-[1.05] text-[#0A0A0F] mb-4">
                Workflow & Business <br />
                <span className="italic font-serif text-gradient-brand">
                  Automation.
                </span>
              </h3>

              <p className="text-[15px] leading-[1.65] text-[#4A4F5C] mb-6">
                We identify repetitive processes and turn them into automated digital workflows.
              </p>

              <button
                onClick={() => openContact('Business Automation')}
                className="group inline-flex items-center gap-2 h-11 px-5 rounded-full bg-[#0A0A0F] hover:bg-[#2F5BFF] text-white text-[13px] font-medium transition-all duration-300 shadow-sm cursor-pointer"
              >
                <span>Automate My Workflow →</span>
                <ArrowUpRight className="w-4 h-4 text-[#FFD43B] transition-transform duration-300 group-hover:rotate-45" />
              </button>
            </div>

            <div className="lg:col-span-8">
              <div className="rounded-[24px] bg-[#FFFFFF] border border-[#E6E8EE] p-8 sm:p-10 shadow-[0_4px_24px_rgba(10,10,15,0.03)] hover:border-[#2F5BFF]/30 transition-all duration-300">
                
                <div className="mb-8">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#8A90A0] mb-3">
                    SERVICES INCLUDE
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Workflow Automation',
                      'Process Automation',
                      'AI Automation',
                      'CRM Automation',
                      'Document Automation',
                      'Email Automation',
                      'Notification Workflows',
                      'Data Synchronization',
                      'Approval Workflows',
                      'Reporting Automation',
                      'Internal Operations Automation',
                    ].map((chip) => (
                      <Chip key={chip} variant="yellow">
                        {chip}
                      </Chip>
                    ))}
                  </div>
                </div>

                {/* Side-by-Side Flow Diagram Verbatim */}
                <div className="mb-8">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#0A0A0F] mb-4">
                    PROCESS TRANSFORMATION
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-2xl bg-[#F7F8FA] border border-[#E6E8EE]">
                    
                    {/* Manual Process */}
                    <div className="p-4 rounded-xl bg-white border border-[#E6E8EE] flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-[#E6E8EE]">
                          <XCircle className="w-4 h-4 text-[#6B7280]" />
                          <span className="font-mono text-[11px] font-bold uppercase text-[#6B7280]">
                            MANUAL PROCESS:
                          </span>
                        </div>

                        <div className="space-y-2 text-center">
                          {[
                            'Customer Request',
                            'Employee Review',
                            'Data Entry',
                            'Email',
                            'Database Update',
                          ].map((step, idx, arr) => (
                            <React.Fragment key={step}>
                              <div className="p-2 rounded-lg bg-[#F7F8FA] border border-[#E6E8EE] text-[12px] text-[#6B7280]">
                                {step}
                              </div>
                              {idx < arr.length - 1 && (
                                <div className="flex justify-center py-0.5">
                                  <ArrowDown className="w-3.5 h-3.5 text-[#8A90A0]" />
                                </div>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Automated Process */}
                    <div className="p-4 rounded-xl bg-gradient-to-b from-[#E3EBFF]/70 to-white border border-[#2F5BFF]/30 shadow-xs flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-[#2F5BFF]/20">
                          <CheckCircle2 className="w-4 h-4 text-[#2F5BFF]" />
                          <span className="font-mono text-[11px] font-bold uppercase text-[#2F5BFF]">
                            AUTOMATED PROCESS:
                          </span>
                        </div>

                        <div className="space-y-2 text-center">
                          {[
                            'Customer Request',
                            'Automated Workflow',
                            'AI Processing',
                            'Database Update',
                            'Notification',
                          ].map((step, idx, arr) => (
                            <React.Fragment key={step}>
                              <div className="p-2 rounded-lg bg-white border border-[#2F5BFF]/30 text-[12px] font-medium text-[#0A0A0F] shadow-2xs">
                                {step}
                              </div>
                              {idx < arr.length - 1 && (
                                <div className="flex justify-center py-0.5">
                                  <ArrowDown className="w-3.5 h-3.5 text-[#2F5BFF]" />
                                </div>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="pt-6 border-t border-[#E6E8EE] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#B45309] bg-[#FFF4C2] px-2.5 py-1 rounded-md">
                      OUTCOME
                    </span>
                    <p className="font-sans text-[14px] font-semibold text-[#0A0A0F] mt-2">
                      Less manual work, fewer repetitive tasks and faster operations.
                    </p>
                  </div>

                  <button
                    onClick={() => openContact('Business Automation')}
                    className="h-10 px-5 rounded-full bg-[#F7F8FA] border border-[#E6E8EE] hover:bg-[#2F5BFF] hover:text-white text-[#0A0A0F] text-[13px] font-medium flex items-center gap-2 transition-all duration-300 shrink-0 cursor-pointer"
                  >
                    <span>Automate My Workflow →</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* BLOCK 06: CLOUD, INFRASTRUCTURE & DEVOPS */}
        {/* ========================================================================= */}
        <div id="cloud-devops" className="scroll-mt-28">
          <div className="rounded-[28px] bg-[#FFFFFF] border border-[#E6E8EE] p-8 sm:p-12 shadow-[0_6px_30px_rgba(10,10,15,0.04)] hover:border-[#059669]/40 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-[12px] font-bold text-[#059669] bg-[#ECFDF5] border border-[#059669]/20 px-3 py-1 rounded-full">
                06 • INFRASTRUCTURE EXCELLENCE
              </span>
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] border border-[#059669]/20 flex items-center justify-center">
                <Cloud className="w-5 h-5" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-8">
              <div className="lg:col-span-7">
                <h3 className="font-display text-[34px] sm:text-[46px] leading-[1.02] text-[#0A0A0F] mb-4">
                  Cloud, Infrastructure & <br />
                  <span className="italic font-serif text-gradient-brand">
                    DevOps Pipelines.
                  </span>
                </h3>

                <p className="text-[16px] leading-[1.65] text-[#4A4F5C] mb-6">
                  We build and manage the infrastructure required to run reliable and scalable software.
                </p>

                <div className="mb-6">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#8A90A0] mb-3">
                    SERVICES INCLUDE
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Cloud Architecture',
                      'Cloud Deployment',
                      'CI/CD Pipelines',
                      'Dockerization',
                      'Container Infrastructure',
                      'Server Configuration',
                      'Database Infrastructure',
                      'Monitoring & Logging',
                      'Performance Optimization',
                      'Infrastructure Automation',
                    ].map((chip) => (
                      <Chip key={chip}>{chip}</Chip>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#F7F8FA] border border-[#E6E8EE]">
                  <p className="font-mono text-[11px] font-bold uppercase text-[#0A0A0F] mb-2">
                    CLOUD TECHNOLOGIES
                  </p>
                  <div className="flex flex-wrap gap-2 text-[12px] font-medium text-[#4A4F5C]">
                    {[
                      'AWS',
                      'Azure',
                      'Google Cloud',
                      'Docker',
                      'Kubernetes',
                      'CI/CD Platforms',
                      'Cloud Databases',
                      'Redis',
                      'Message Queues',
                    ].map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-md bg-white border border-[#E6E8EE]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Artwork */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full rounded-2xl overflow-hidden border border-[#E6E8EE] shadow-lg group">
                  <img
                    src="/images/services_cloud.jpg"
                    alt="Nexora Labs Cloud Infrastructure & DevOps Visualization"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-5">
                    <div className="text-white">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#FFD43B] font-bold block mb-1">
                        99.99% PRODUCTION SLA
                      </span>
                      <p className="text-[13px] font-medium text-white/95">
                        High-availability clusters & automated failover
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#E6E8EE] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#059669] bg-[#ECFDF5] px-2.5 py-1 rounded-md">
                  OUTCOME
                </span>
                <p className="font-sans text-[15px] font-semibold text-[#0A0A0F] mt-2">
                  Reliable infrastructure that supports development, deployment and growth.
                </p>
              </div>

              <button
                onClick={() => openContact('Cloud & DevOps')}
                className="h-11 px-6 rounded-full bg-[#0A0A0F] hover:bg-[#059669] text-white text-[13px] font-medium flex items-center gap-2 transition-all duration-300 shadow-sm cursor-pointer"
              >
                <span>Build My Infrastructure →</span>
                <ArrowUpRight className="w-4 h-4 text-[#FFD43B]" />
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BLOCKS 07 & 08: 2-COLUMN GRID (ARCHITECTURE & MODERNIZATION + INTEGRATIONS & SECURITY) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* BLOCK 07: SYSTEM ARCHITECTURE & MODERNIZATION */}
          <div
            id="architecture"
            className="rounded-[24px] bg-[#FFFFFF] border border-[#E6E8EE] p-8 shadow-[0_4px_24px_rgba(10,10,15,0.03)] hover:border-[#D97706]/30 transition-all duration-300 flex flex-col justify-between scroll-mt-28"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-[11px] font-bold text-[#D97706] bg-[#FEF3C7] border border-[#D97706]/20 px-3 py-1 rounded-full">
                  07
                </span>
                <div className="w-10 h-10 rounded-xl bg-[#FEF3C7] text-[#D97706] border border-[#D97706]/20 flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
              </div>

              <h3 className="font-display text-[28px] sm:text-[34px] leading-tight text-[#0A0A0F] mb-3">
                System Architecture & <br />
                <span className="italic font-serif text-gradient-brand">
                  Legacy Modernization.
                </span>
              </h3>

              <p className="text-[14px] leading-[1.65] text-[#4A4F5C] mb-6">
                For complex products, architecture is just as important as interface. We help design resilient systems and modernize outdated software without disrupting operations.
              </p>

              {/* Stepper Process */}
              <div className="p-3.5 rounded-xl bg-[#F7F8FA] border border-[#E6E8EE] mb-6">
                <p className="font-mono text-[10px] font-bold uppercase text-[#0A0A0F] mb-2.5">
                  5-STAGE MODERNIZATION PROCESS
                </p>
                <div className="flex items-center justify-between text-[11px] font-mono text-[#0A0A0F]">
                  {['Assess', 'Plan', 'Modernize', 'Migrate', 'Optimize'].map((s, idx, arr) => (
                    <React.Fragment key={s}>
                      <span className="font-bold">{s}</span>
                      {idx < arr.length - 1 && <span className="text-[#8A90A0]">→</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#8A90A0] mb-2.5">
                  SERVICES INCLUDE
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'System Architecture',
                    'Database Migration',
                    'Monolith to Microservices',
                    'Cloud Migration',
                    'Security Improvements',
                  ].map((chip) => (
                    <Chip key={chip} variant="yellow">
                      {chip}
                    </Chip>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-[#E6E8EE] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#D97706]">
                  OUTCOME
                </span>
                <p className="font-sans text-[13px] font-semibold text-[#0A0A0F] mt-1">
                  Modern, maintainable software designed for current and future growth.
                </p>
              </div>

              <button
                onClick={() => openContact('Architecture & Modernization')}
                className="h-9 px-4 rounded-full bg-[#F7F8FA] border border-[#E6E8EE] hover:bg-[#D97706] hover:text-white text-[#0A0A0F] text-[12px] font-medium flex items-center gap-1.5 transition-all cursor-pointer shrink-0"
              >
                <span>Design Architecture →</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* BLOCK 08: INTEGRATIONS, SECURITY & QUALITY */}
          <div
            id="quality-support"
            className="rounded-[24px] bg-[#FFFFFF] border border-[#E6E8EE] p-8 shadow-[0_4px_24px_rgba(10,10,15,0.03)] hover:border-[#9333EA]/30 transition-all duration-300 flex flex-col justify-between scroll-mt-28"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-[11px] font-bold text-[#9333EA] bg-[#F3E8FF] border border-[#9333EA]/20 px-3 py-1 rounded-full">
                  08
                </span>
                <div className="w-10 h-10 rounded-xl bg-[#F3E8FF] text-[#9333EA] border border-[#9333EA]/20 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>

              <h3 className="font-display text-[28px] sm:text-[34px] leading-tight text-[#0A0A0F] mb-3">
                Integrations, Security & <br />
                <span className="italic font-serif text-gradient-brand">
                  Quality Engineering.
                </span>
              </h3>

              <p className="text-[14px] leading-[1.65] text-[#4A4F5C] mb-6">
                Connect the tools you already rely on, harden systems with role-based security, automated testing, and ongoing maintenance to keep your product evolving.
              </p>

              <div className="mb-6">
                <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#8A90A0] mb-2.5">
                  CORE HIGHLIGHTS
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'REST & GraphQL APIs',
                    'Payment & CRM Integrations',
                    'Role-Based Access Control',
                    'Automated Regression Testing',
                    'Continuous Improvement & Support',
                  ].map((chip) => (
                    <Chip key={chip} variant="violet">
                      {chip}
                    </Chip>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F7F8FA] border border-[#E6E8EE] mb-6">
                <p className="font-mono text-[10px] font-bold uppercase text-[#0A0A0F] mb-1">
                  SECURITY & TESTING
                </p>
                <p className="text-[13px] text-[#4A4F5C]">
                  Automated end-to-end tests, rate limiting, and data encryption baked in from day one.
                </p>
              </div>
            </div>

            <div className="pt-5 border-t border-[#E6E8EE] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#9333EA]">
                  OUTCOME
                </span>
                <p className="font-sans text-[13px] font-semibold text-[#0A0A0F] mt-1">
                  Connected systems, synchronized data and software that stays secure over time.
                </p>
              </div>

              <button
                onClick={() => openContact('Integrations & Quality')}
                className="h-9 px-4 rounded-full bg-[#F7F8FA] border border-[#E6E8EE] hover:bg-[#9333EA] hover:text-white text-[#0A0A0F] text-[12px] font-medium flex items-center gap-1.5 transition-all cursor-pointer shrink-0"
              >
                <span>Connect Systems →</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
