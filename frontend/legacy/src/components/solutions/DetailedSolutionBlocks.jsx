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
  CheckCircle2,
  XCircle,
  ArrowDown,
  Sparkles,
  Shield,
  Zap,
} from 'lucide-react';
import { Chip } from '../ui/Chip';
import { useNavigation } from '../../context/NavigationContext';

export function DetailedSolutionBlocks() {
  const { openContact } = useNavigation();

  // Modernization Stepper process verbatim
  const modernizationSteps = [
    { num: '01', title: 'Assess', desc: 'Audit architecture, technical debt & risk surface' },
    { num: '02', title: 'Plan', desc: 'Define target architecture & phased transition roadmap' },
    { num: '03', title: 'Modernize', desc: 'Refactor monolith into modern modular services' },
    { num: '04', title: 'Migrate', desc: 'Zero-downtime cutover with automated safeguards' },
    { num: '05', title: 'Optimize', desc: 'Tune performance, latency, security & maintainability' },
  ];

  return (
    <section
      id="detailed-solutions"
      data-reveal="detailed-blocks"
      className="relative w-full py-24 sm:py-32 lg:py-36 bg-[#FFFFFF] border-b border-[#E6E8EE]"
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12 space-y-24 sm:space-y-32">
        
        {/* ========================================================================= */}
        {/* BLOCK 01: DIGITAL PRODUCTS */}
        {/* ========================================================================= */}
        <div id="digital-products" className="scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Sticky Title Column */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-[12px] font-bold text-[#8A90A0] bg-[#F7F8FA] border border-[#E6E8EE] px-3 py-1 rounded-full">
                  01
                </span>
                <div className="w-10 h-10 rounded-xl bg-[#E3EBFF] text-[#2F5BFF] border border-[#2F5BFF]/20 flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
              </div>

              <h3 className="font-display text-[34px] sm:text-[44px] leading-[1.05] text-[#0A0A0F] mb-4">
                Digital Products <br />
                <span className="italic font-serif text-gradient-brand">
                  & Experiences.
                </span>
              </h3>

              <p className="text-[15px] leading-[1.65] text-[#4A4F5C] mb-6">
                We design and build modern digital products that help businesses engage customers, streamline operations and create new digital experiences.
              </p>

              <button
                onClick={() => openContact('Digital Products')}
                className="group inline-flex items-center gap-2 h-11 px-5 rounded-full bg-[#0A0A0F] hover:bg-[#2F5BFF] text-white text-[13px] font-medium transition-all duration-300 shadow-sm cursor-pointer"
              >
                <span>Build a Digital Product →</span>
                <ArrowUpRight className="w-4 h-4 text-[#FFD43B] transition-transform duration-300 group-hover:rotate-45" />
              </button>
            </div>

            {/* Content Card (Cols 5-12) */}
            <div className="lg:col-span-8">
              <div className="rounded-[24px] bg-[#FFFFFF] border border-[#E6E8EE] p-8 sm:p-10 shadow-[0_4px_24px_rgba(10,10,15,0.03)] hover:border-[#2F5BFF]/30 transition-all duration-300">
                
                {/* What We Build Verbatim */}
                <div className="mb-8">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#8A90A0] mb-3">
                    WHAT WE BUILD
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Business Websites',
                      'Web Applications',
                      'SaaS Platforms',
                      'Mobile Applications',
                      'Customer Portals',
                      'E-commerce Platforms',
                      'Dashboards',
                      'Internal Tools',
                      'Marketplace Platforms',
                      'Subscription Platforms',
                    ].map((chip) => (
                      <Chip key={chip} variant="blue">
                        {chip}
                      </Chip>
                    ))}
                  </div>
                </div>

                {/* Ideal For Verbatim */}
                <div className="mb-8 p-4 rounded-xl bg-[#F7F8FA] border border-[#E6E8EE]">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#0A0A0F] mb-2">
                    IDEAL FOR
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[13px] text-[#4A4F5C]">
                    {[
                      'Startups',
                      'Growing businesses',
                      'Digital-first companies',
                      'Businesses launching a new product',
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2F5BFF]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Outcome & CTA Verbatim */}
                <div className="pt-6 border-t border-[#E6E8EE] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#2F5BFF] bg-[#E3EBFF] px-2.5 py-1 rounded-md">
                      OUTCOME
                    </span>
                    <p className="font-sans text-[14px] font-semibold text-[#0A0A0F] mt-2">
                      Build a reliable digital product that is easy to use, maintain and scale.
                    </p>
                  </div>

                  <button
                    onClick={() => openContact('Digital Products')}
                    className="h-10 px-5 rounded-full bg-[#F7F8FA] border border-[#E6E8EE] hover:bg-[#2F5BFF] hover:text-white text-[#0A0A0F] text-[13px] font-medium flex items-center gap-2 transition-all duration-300 shrink-0 cursor-pointer"
                  >
                    <span>Build a Digital Product →</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BLOCK 02: AI & INTELLIGENT SYSTEMS (FEATURE ROW WITH BESPOKE IMAGE) */}
        {/* ========================================================================= */}
        <div id="ai-systems" className="scroll-mt-28">
          <div className="rounded-[28px] bg-[#FFFFFF] border border-[#E6E8EE] p-8 sm:p-12 shadow-[0_6px_30px_rgba(10,10,15,0.04)] hover:border-[#7B5CFF]/40 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Specs & Copy Verbatim */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-[12px] font-bold text-[#7B5CFF] bg-[#F2EDFF] border border-[#7B5CFF]/20 px-3 py-1 rounded-full">
                    02 • FEATURED SOLUTION
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#F2EDFF] text-[#7B5CFF] border border-[#7B5CFF]/20 flex items-center justify-center">
                    <Cpu className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-display text-[36px] sm:text-[46px] leading-[1.02] text-[#0A0A0F] mb-4">
                  AI & Intelligent Systems <br />
                  <span className="italic font-serif text-gradient-brand">
                    in workflows & products.
                  </span>
                </h3>

                <p className="text-[16px] leading-[1.65] text-[#4A4F5C] mb-7 max-w-[50ch]">
                  We integrate artificial intelligence into products and business workflows to create smarter, faster and more personalized experiences.
                </p>

                {/* What We Build Verbatim */}
                <div className="mb-6">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#8A90A0] mb-3">
                    WHAT WE BUILD
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'AI Assistants',
                      'AI Agents',
                      'Generative AI Applications',
                      'RAG Systems',
                      'AI Search',
                      'Knowledge Assistants',
                      'Voice AI',
                      'AI-powered Customer Support',
                      'Recommendation Systems',
                      'Document Intelligence',
                      'Computer Vision Solutions',
                      'AI-powered Decision Systems',
                    ].map((chip) => (
                      <Chip key={chip} variant="violet">
                        {chip}
                      </Chip>
                    ))}
                  </div>
                </div>

                {/* AI Capabilities Verbatim */}
                <div className="mb-6">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#8A90A0] mb-3">
                    AI CAPABILITIES
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[12px] text-[#4A4F5C]">
                    {[
                      'Large Language Models',
                      'Prompt Engineering',
                      'Retrieval-Augmented Generation',
                      'Vector Search',
                      'AI Agent Workflows',
                      'Multi-Agent Systems',
                      'Model Integration',
                      'AI Evaluation',
                      'Context & Memory Systems',
                    ].map((cap) => (
                      <div key={cap} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#7B5CFF] shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ideal For Verbatim */}
                <div className="mb-7 p-4 rounded-xl bg-[#F7F8FA] border border-[#E6E8EE]">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#0A0A0F] mb-1.5">
                    IDEAL FOR
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-[13px] text-[#4A4F5C]">
                    {[
                      'Businesses looking to introduce AI',
                      'Companies with large knowledge bases',
                      'Customer support teams',
                      'Operations teams',
                      'SaaS companies',
                      'Enterprises',
                    ].map((item) => (
                      <span key={item} className="inline-flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7B5CFF]" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Outcome & CTA Verbatim */}
                <div className="pt-6 border-t border-[#E6E8EE] flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#7B5CFF] bg-[#F2EDFF] px-2.5 py-1 rounded-md">
                      OUTCOME
                    </span>
                    <p className="font-sans text-[15px] font-semibold text-[#0A0A0F] mt-1.5">
                      Turn AI from an experiment into a useful product capability or business system.
                    </p>
                  </div>

                  <button
                    onClick={() => openContact('AI & Intelligent Systems')}
                    className="h-11 px-6 rounded-full bg-[#0A0A0F] hover:bg-[#7B5CFF] text-white text-[13px] font-medium flex items-center gap-2 transition-all duration-300 shadow-sm cursor-pointer"
                  >
                    <span>Explore AI Solutions →</span>
                    <ArrowUpRight className="w-4 h-4 text-[#FFD43B]" />
                  </button>
                </div>
              </div>

              {/* Right Column: Visual Artwork */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full rounded-2xl overflow-hidden border border-[#E6E8EE] shadow-lg group">
                  <img
                    src="/images/ai_intelligence.jpg"
                    alt="Nexora Labs Multi-Agent Neural Intelligence Visualization"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-5">
                    <div className="text-white">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#FFD43B] font-bold block mb-1">
                        DETERMINISTIC PRECISION
                      </span>
                      <p className="text-[13px] font-medium text-white/95">
                        RAG architectures & multi-agent production pipelines
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BLOCK 03: BUSINESS AUTOMATION (WITH SIDE-BY-SIDE FLOW DIAGRAM) */}
        {/* ========================================================================= */}
        <div id="automation" className="scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Sticky Title Column */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-[12px] font-bold text-[#B45309] bg-[#FFF4C2] border border-[#FFD43B]/40 px-3 py-1 rounded-full">
                  03
                </span>
                <div className="w-10 h-10 rounded-xl bg-[#FFF4C2] text-[#B45309] border border-[#FFD43B]/40 flex items-center justify-center">
                  <Workflow className="w-5 h-5" />
                </div>
              </div>

              <h3 className="font-display text-[34px] sm:text-[44px] leading-[1.05] text-[#0A0A0F] mb-4">
                Automation & <br />
                <span className="italic font-serif text-gradient-brand">
                  Intelligent Workflows.
                </span>
              </h3>

              <p className="text-[15px] leading-[1.65] text-[#4A4F5C] mb-6">
                We automate repetitive processes and connect the systems your business relies on, reducing manual work and improving operational efficiency.
              </p>

              <button
                onClick={() => openContact('Business Automation')}
                className="group inline-flex items-center gap-2 h-11 px-5 rounded-full bg-[#0A0A0F] hover:bg-[#2F5BFF] text-white text-[13px] font-medium transition-all duration-300 shadow-sm cursor-pointer"
              >
                <span>Automate Your Business →</span>
                <ArrowUpRight className="w-4 h-4 text-[#FFD43B] transition-transform duration-300 group-hover:rotate-45" />
              </button>
            </div>

            {/* Content & Flow Diagrams (Cols 5-12) */}
            <div className="lg:col-span-8">
              <div className="rounded-[24px] bg-[#FFFFFF] border border-[#E6E8EE] p-8 sm:p-10 shadow-[0_4px_24px_rgba(10,10,15,0.03)] hover:border-[#2F5BFF]/30 transition-all duration-300">
                
                {/* WHAT WE AUTOMATE VERBATIM */}
                <div className="mb-8">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#8A90A0] mb-3">
                    WHAT WE AUTOMATE
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Business Workflows',
                      'Data Entry',
                      'Document Processing',
                      'Customer Communication',
                      'Lead Management',
                      'Reporting',
                      'Notifications',
                      'Approval Processes',
                      'Internal Operations',
                      'CRM Workflows',
                      'AI-powered Workflows',
                    ].map((chip) => (
                      <Chip key={chip} variant="yellow">
                        {chip}
                      </Chip>
                    ))}
                  </div>
                </div>

                {/* THE "INSTEAD OF / WE CAN CREATE" FLOW DIAGRAM VERBATIM */}
                <div className="mb-8">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#0A0A0F] mb-4">
                    WORKFLOW COMPARISON
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-2xl bg-[#F7F8FA] border border-[#E6E8EE]">
                    
                    {/* LEFT: Instead of (Gray, Muted, Manual) */}
                    <div className="p-4 rounded-xl bg-white border border-[#E6E8EE] flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-[#E6E8EE]">
                          <XCircle className="w-4 h-4 text-[#6B7280]" />
                          <span className="font-mono text-[11px] font-bold uppercase text-[#6B7280]">
                            INSTEAD OF:
                          </span>
                        </div>

                        <div className="space-y-2 text-center">
                          {[
                            'Customer Request',
                            'Employee Reviews',
                            'Manual Data Entry',
                            'Email',
                            'Database Update',
                            'Report',
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

                    {/* RIGHT: We can create (Electric Blue, Checked) */}
                    <div className="p-4 rounded-xl bg-gradient-to-b from-[#E3EBFF]/70 to-white border border-[#2F5BFF]/30 shadow-xs flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-[#2F5BFF]/20">
                          <CheckCircle2 className="w-4 h-4 text-[#2F5BFF]" />
                          <span className="font-mono text-[11px] font-bold uppercase text-[#2F5BFF]">
                            WE CAN CREATE:
                          </span>
                        </div>

                        <div className="space-y-2 text-center">
                          {[
                            'Customer Request',
                            'Automated Workflow',
                            'AI Processing',
                            'System Updates',
                            'Notification',
                            'Analytics',
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

                {/* Ideal For Verbatim */}
                <div className="mb-8 p-4 rounded-xl bg-[#F7F8FA] border border-[#E6E8EE]">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#0A0A0F] mb-1">
                    IDEAL FOR
                  </p>
                  <p className="text-[14px] text-[#4A4F5C]">
                    Businesses where teams spend significant time performing repetitive digital tasks.
                  </p>
                </div>

                {/* Outcome & CTA Verbatim */}
                <div className="pt-6 border-t border-[#E6E8EE] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#B45309] bg-[#FFF4C2] px-2.5 py-1 rounded-md">
                      OUTCOME
                    </span>
                    <p className="font-sans text-[14px] font-semibold text-[#0A0A0F] mt-2">
                      Less manual work, faster processes and more consistent operations.
                    </p>
                  </div>

                  <button
                    onClick={() => openContact('Business Automation')}
                    className="h-10 px-5 rounded-full bg-[#F7F8FA] border border-[#E6E8EE] hover:bg-[#2F5BFF] hover:text-white text-[#0A0A0F] text-[13px] font-medium flex items-center gap-2 transition-all duration-300 shrink-0 cursor-pointer"
                  >
                    <span>Automate Your Business →</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BLOCK 04: ENTERPRISE SOFTWARE (FEATURE ROW WITH BESPOKE IMAGE) */}
        {/* ========================================================================= */}
        <div id="enterprise-software" className="scroll-mt-28">
          <div className="rounded-[28px] bg-[#FFFFFF] border border-[#E6E8EE] p-8 sm:p-12 shadow-[0_6px_30px_rgba(10,10,15,0.04)] hover:border-[#0284C7]/40 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-[12px] font-bold text-[#0284C7] bg-[#E0F2FE] border border-[#0284C7]/20 px-3 py-1 rounded-full">
                04 • ENTERPRISE HARDENED
              </span>
              <div className="w-10 h-10 rounded-xl bg-[#E0F2FE] text-[#0284C7] border border-[#0284C7]/20 flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-8">
              <div className="lg:col-span-7">
                <h3 className="font-display text-[34px] sm:text-[46px] leading-[1.02] text-[#0A0A0F] mb-4">
                  Enterprise Platforms & <br />
                  <span className="italic font-serif text-gradient-brand">
                    Custom Software.
                  </span>
                </h3>

                <p className="text-[16px] leading-[1.65] text-[#4A4F5C] mb-6">
                  We build custom software systems designed around complex business processes, teams and organizational requirements.
                </p>

                {/* What We Build Verbatim */}
                <div className="mb-6">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#8A90A0] mb-3">
                    WHAT WE BUILD
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'ERP Systems',
                      'CRM Systems',
                      'HR Platforms',
                      'Management Systems',
                      'Operations Platforms',
                      'Admin Portals',
                      'Employee Portals',
                      'Financial Management Systems',
                      'Education Management Systems',
                      'Healthcare Platforms',
                      'Custom Enterprise Applications',
                    ].map((chip) => (
                      <Chip key={chip} variant="blue">
                        {chip}
                      </Chip>
                    ))}
                  </div>
                </div>

                {/* Enterprise Capabilities Verbatim */}
                <div className="mb-6">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#8A90A0] mb-3">
                    ENTERPRISE CAPABILITIES
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[12px] text-[#4A4F5C]">
                    {[
                      'Role-Based Access',
                      'Workflow Management',
                      'Authentication',
                      'Authorization',
                      'Audit Logs',
                      'Reporting',
                      'Analytics',
                      'Integrations',
                      'Notifications',
                      'Real-Time Updates',
                    ].map((cap) => (
                      <div key={cap} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ideal For Verbatim */}
                <div className="p-4 rounded-xl bg-[#F7F8FA] border border-[#E6E8EE]">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#0A0A0F] mb-1">
                    IDEAL FOR
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-[13px] text-[#4A4F5C]">
                    {[
                      'Medium-sized businesses',
                      'Enterprises',
                      'Institutions',
                      'Organizations with complex workflows',
                    ].map((item) => (
                      <span key={item} className="inline-flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Visual of Enterprise Architecture */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full rounded-2xl overflow-hidden border border-[#E6E8EE] shadow-lg group">
                  <img
                    src="/images/enterprise_platform.jpg"
                    alt="Nexora Labs Enterprise Platform Architecture"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-5">
                    <div className="text-white">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#FFD43B] font-bold block mb-1">
                        CENTRALIZED GOVERNANCE
                      </span>
                      <p className="text-[13px] font-medium text-white/95">
                        Role-based access, audit logging & custom ERP architecture
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Outcome & CTA Verbatim */}
            <div className="pt-6 border-t border-[#E6E8EE] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#0284C7] bg-[#E0F2FE] px-2.5 py-1 rounded-md">
                  OUTCOME
                </span>
                <p className="font-sans text-[15px] font-semibold text-[#0A0A0F] mt-2">
                  Replace disconnected tools and manual processes with a centralized digital system.
                </p>
              </div>

              <button
                onClick={() => openContact('Enterprise Software')}
                className="h-11 px-6 rounded-full bg-[#0A0A0F] hover:bg-[#0284C7] text-white text-[13px] font-medium flex items-center gap-2 transition-all duration-300 shadow-sm shrink-0 cursor-pointer"
              >
                <span>Build Enterprise Software →</span>
                <ArrowUpRight className="w-4 h-4 text-[#FFD43B]" />
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BLOCKS 05 & 06: 2-COLUMN GRID (CLOUD & BACKEND + DATA & MACHINE LEARNING) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* BLOCK 05: CLOUD & BACKEND SYSTEMS */}
          <div
            id="cloud-backend"
            className="rounded-[24px] bg-[#FFFFFF] border border-[#E6E8EE] p-8 shadow-[0_4px_24px_rgba(10,10,15,0.03)] hover:border-[#059669]/30 transition-all duration-300 flex flex-col justify-between scroll-mt-28"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-[11px] font-bold text-[#059669] bg-[#ECFDF5] border border-[#059669]/20 px-3 py-1 rounded-full">
                  05
                </span>
                <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] border border-[#059669]/20 flex items-center justify-center">
                  <Cloud className="w-5 h-5" />
                </div>
              </div>

              <h3 className="font-display text-[28px] sm:text-[34px] leading-tight text-[#0A0A0F] mb-3">
                Scalable Backend & <br />
                <span className="italic font-serif text-gradient-brand">
                  Cloud Infrastructure.
                </span>
              </h3>

              <p className="text-[14px] leading-[1.65] text-[#4A4F5C] mb-6">
                We engineer the systems behind reliable digital products, from APIs and databases to distributed services and cloud infrastructure.
              </p>

              {/* What We Build Verbatim */}
              <div className="mb-6">
                <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#8A90A0] mb-2.5">
                  WHAT WE BUILD
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'REST APIs',
                    'GraphQL APIs',
                    'Backend Platforms',
                    'Microservices',
                    'Real-Time Systems',
                    'Event-Driven Systems',
                    'Authentication Systems',
                    'Payment Infrastructure',
                    'File Processing Systems',
                    'Notification Systems',
                    'Cloud Infrastructure',
                  ].map((chip) => (
                    <Chip key={chip}>{chip}</Chip>
                  ))}
                </div>
              </div>

              {/* Engineering Capabilities Verbatim */}
              <div className="mb-6">
                <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#8A90A0] mb-2.5">
                  ENGINEERING CAPABILITIES
                </p>
                <div className="grid grid-cols-2 gap-1.5 text-[12px] text-[#4A4F5C]">
                  {[
                    'API Design',
                    'Database Architecture',
                    'Caching',
                    'Message Queues',
                    'Real-Time Communication',
                    'Distributed Systems',
                    'Containerization',
                    'CI/CD',
                    'Monitoring',
                    'Security',
                  ].map((cap) => (
                    <div key={cap} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#059669]" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal For Verbatim */}
              <div className="p-3.5 rounded-xl bg-[#F7F8FA] border border-[#E6E8EE] mb-6">
                <p className="font-mono text-[10px] font-bold uppercase text-[#0A0A0F] mb-1">
                  IDEAL FOR
                </p>
                <p className="text-[13px] text-[#4A4F5C]">
                  Products that require reliability, performance and the ability to scale.
                </p>
              </div>
            </div>

            {/* Outcome & CTA Verbatim */}
            <div className="pt-5 border-t border-[#E6E8EE] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#059669]">
                  OUTCOME
                </span>
                <p className="font-sans text-[13px] font-semibold text-[#0A0A0F] mt-1">
                  A strong technical foundation capable of supporting growing users, data and business requirements.
                </p>
              </div>

              <button
                onClick={() => openContact('Cloud & Backend')}
                className="h-9 px-4 rounded-full bg-[#F7F8FA] border border-[#E6E8EE] hover:bg-[#059669] hover:text-white text-[#0A0A0F] text-[12px] font-medium flex items-center gap-1.5 transition-all cursor-pointer shrink-0"
              >
                <span>Build Infrastructure →</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* BLOCK 06: DATA & MACHINE LEARNING */}
          <div
            id="data-ml"
            className="rounded-[24px] bg-[#FFFFFF] border border-[#E6E8EE] p-8 shadow-[0_4px_24px_rgba(10,10,15,0.03)] hover:border-[#DB2777]/30 transition-all duration-300 flex flex-col justify-between scroll-mt-28"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-[11px] font-bold text-[#DB2777] bg-[#FDF2F8] border border-[#DB2777]/20 px-3 py-1 rounded-full">
                  06
                </span>
                <div className="w-10 h-10 rounded-xl bg-[#FDF2F8] text-[#DB2777] border border-[#DB2777]/20 flex items-center justify-center">
                  <Database className="w-5 h-5" />
                </div>
              </div>

              <h3 className="font-display text-[28px] sm:text-[34px] leading-tight text-[#0A0A0F] mb-3">
                Data, Analytics & <br />
                <span className="italic font-serif text-gradient-brand">
                  Machine Learning.
                </span>
              </h3>

              <p className="text-[14px] leading-[1.65] text-[#4A4F5C] mb-6">
                We turn business data into useful insights, predictions and intelligent product capabilities.
              </p>

              {/* What We Build Verbatim */}
              <div className="mb-6">
                <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#8A90A0] mb-2.5">
                  WHAT WE BUILD
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Analytics Platforms',
                    'Business Intelligence Dashboards',
                    'Data Pipelines',
                    'Recommendation Systems',
                    'Predictive Models',
                    'Classification Systems',
                    'Forecasting Systems',
                    'Data Processing Platforms',
                    'Machine Learning Applications',
                  ].map((chip) => (
                    <Chip key={chip}>{chip}</Chip>
                  ))}
                </div>
              </div>

              {/* Capabilities Verbatim */}
              <div className="mb-6">
                <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#8A90A0] mb-2.5">
                  CAPABILITIES
                </p>
                <div className="grid grid-cols-2 gap-1.5 text-[12px] text-[#4A4F5C]">
                  {[
                    'Data Engineering',
                    'Data Processing',
                    'Machine Learning',
                    'Predictive Analytics',
                    'Model Integration',
                    'Data Visualization',
                    'Reporting',
                    'AI/ML Pipelines',
                  ].map((cap) => (
                    <div key={cap} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#DB2777]" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal For Verbatim */}
              <div className="p-3.5 rounded-xl bg-[#F7F8FA] border border-[#E6E8EE] mb-6">
                <p className="font-mono text-[10px] font-bold uppercase text-[#0A0A0F] mb-1">
                  IDEAL FOR
                </p>
                <p className="text-[13px] text-[#4A4F5C]">
                  Businesses that already have valuable data and want to use it more effectively.
                </p>
              </div>
            </div>

            {/* Outcome & CTA Verbatim */}
            <div className="pt-5 border-t border-[#E6E8EE] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#DB2777]">
                  OUTCOME
                </span>
                <p className="font-sans text-[13px] font-semibold text-[#0A0A0F] mt-1">
                  Turn raw data into insights that support better decisions and smarter products.
                </p>
              </div>

              <button
                onClick={() => openContact('Data & Machine Learning')}
                className="h-9 px-4 rounded-full bg-[#F7F8FA] border border-[#E6E8EE] hover:bg-[#DB2777] hover:text-white text-[#0A0A0F] text-[12px] font-medium flex items-center gap-1.5 transition-all cursor-pointer shrink-0"
              >
                <span>Build With Data →</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* BLOCK 07: LEGACY MODERNIZATION (WITH HORIZONTAL 5-STEP PROCESS) */}
        {/* ========================================================================= */}
        <div id="legacy-modernization" className="scroll-mt-28">
          <div className="rounded-[28px] bg-[#FFFFFF] border border-[#E6E8EE] p-8 sm:p-12 shadow-[0_6px_30px_rgba(10,10,15,0.04)] hover:border-[#D97706]/40 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-[12px] font-bold text-[#D97706] bg-[#FEF3C7] border border-[#D97706]/20 px-3 py-1 rounded-full">
                07 • MODERNIZATION
              </span>
              <div className="w-10 h-10 rounded-xl bg-[#FEF3C7] text-[#D97706] border border-[#D97706]/20 flex items-center justify-center">
                <RefreshCw className="w-5 h-5" />
              </div>
            </div>

            <div className="max-w-3xl mb-8">
              <h3 className="font-display text-[34px] sm:text-[46px] leading-[1.02] text-[#0A0A0F] mb-4">
                Modernize Existing <br />
                <span className="italic font-serif text-gradient-brand">
                  Software Systems.
                </span>
              </h3>

              <p className="text-[16px] leading-[1.65] text-[#4A4F5C]">
                Technology should evolve with your business. We help organizations improve outdated software, replace legacy systems and move toward modern architectures.
              </p>
            </div>

            {/* HORIZONTAL PROCESS STEPPER: ASSESS -> PLAN -> MODERNIZE -> MIGRATE -> OPTIMIZE VERBATIM */}
            <div className="mb-10">
              <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#0A0A0F] mb-5">
                MODERNIZATION PROCESS
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 relative">
                {modernizationSteps.map((step, idx) => (
                  <div
                    key={step.num}
                    className="p-4 rounded-2xl bg-[#F7F8FA] border border-[#E6E8EE] hover:border-[#D97706]/40 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-[10px] font-bold text-[#D97706] bg-[#FEF3C7] px-2 py-0.5 rounded-md">
                          0{idx + 1}
                        </span>
                        {idx < modernizationSteps.length - 1 && (
                          <span className="hidden lg:block text-[#8A90A0] text-[12px] font-mono">→</span>
                        )}
                      </div>
                      <h4 className="font-sans text-[16px] font-bold text-[#0A0A0F] mb-1">
                        {step.title}
                      </h4>
                      <p className="text-[12px] leading-relaxed text-[#6B7280]">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What We Help With Verbatim */}
            <div className="mb-8">
              <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#8A90A0] mb-2.5">
                WHAT WE HELP WITH
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Legacy Application Modernization',
                  'Database Migration',
                  'API Modernization',
                  'Monolith to Modular Architecture',
                  'Monolith to Microservices',
                  'Cloud Migration',
                  'UI Modernization',
                  'Performance Optimization',
                  'Security Improvements',
                  'System Integrations',
                ].map((chip) => (
                  <Chip key={chip} variant="yellow">
                    {chip}
                  </Chip>
                ))}
              </div>
            </div>

            {/* Outcome & CTA Verbatim */}
            <div className="pt-6 border-t border-[#E6E8EE] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#D97706] bg-[#FEF3C7] px-2.5 py-1 rounded-md">
                  OUTCOME
                </span>
                <p className="font-sans text-[15px] font-semibold text-[#0A0A0F] mt-2">
                  Modern, maintainable software without unnecessarily disrupting existing operations.
                </p>
              </div>

              <button
                onClick={() => openContact('Legacy Modernization')}
                className="h-11 px-6 rounded-full bg-[#0A0A0F] hover:bg-[#D97706] text-white text-[13px] font-medium flex items-center gap-2 transition-all duration-300 shadow-sm cursor-pointer"
              >
                <span>Modernize Your System →</span>
                <ArrowUpRight className="w-4 h-4 text-[#FFD43B]" />
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BLOCK 08: INTEGRATIONS */}
        {/* ========================================================================= */}
        <div id="integrations" className="scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Sticky Title Column */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-[12px] font-bold text-[#9333EA] bg-[#F3E8FF] border border-[#9333EA]/20 px-3 py-1 rounded-full">
                  08
                </span>
                <div className="w-10 h-10 rounded-xl bg-[#F3E8FF] text-[#9333EA] border border-[#9333EA]/20 flex items-center justify-center">
                  <Network className="w-5 h-5" />
                </div>
              </div>

              <h3 className="font-display text-[34px] sm:text-[44px] leading-[1.05] text-[#0A0A0F] mb-4">
                Connect the Systems <br />
                <span className="italic font-serif text-gradient-brand">
                  You Already Use.
                </span>
              </h3>

              <p className="text-[15px] leading-[1.65] text-[#4A4F5C] mb-6">
                Your business already depends on multiple tools. We connect them into a system that works together.
              </p>

              <button
                onClick={() => openContact('Integrations')}
                className="group inline-flex items-center gap-2 h-11 px-5 rounded-full bg-[#0A0A0F] hover:bg-[#9333EA] text-white text-[13px] font-medium transition-all duration-300 shadow-sm cursor-pointer"
              >
                <span>Connect Your Systems →</span>
                <ArrowUpRight className="w-4 h-4 text-[#FFD43B] transition-transform duration-300 group-hover:rotate-45" />
              </button>
            </div>

            {/* Content Card (Cols 5-12) */}
            <div className="lg:col-span-8">
              <div className="rounded-[24px] bg-[#FFFFFF] border border-[#E6E8EE] p-8 sm:p-10 shadow-[0_4px_24px_rgba(10,10,15,0.03)] hover:border-[#9333EA]/30 transition-all duration-300">
                
                {/* Integrations Verbatim */}
                <div className="mb-8">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#8A90A0] mb-3">
                    SYSTEM INTEGRATIONS
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Payment Platforms',
                      'CRM Systems',
                      'Communication Platforms',
                      'Cloud Services',
                      'AI Platforms',
                      'Analytics Tools',
                      'Business Applications',
                      'Third-Party APIs',
                      'Internal Systems',
                    ].map((chip) => (
                      <Chip key={chip} variant="violet">
                        {chip}
                      </Chip>
                    ))}
                  </div>
                </div>

                {/* Outcome & CTA Verbatim */}
                <div className="pt-6 border-t border-[#E6E8EE] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#9333EA] bg-[#F3E8FF] px-2.5 py-1 rounded-md">
                      OUTCOME
                    </span>
                    <p className="font-sans text-[14px] font-semibold text-[#0A0A0F] mt-2">
                      Connected systems, synchronized data and smoother workflows.
                    </p>
                  </div>

                  <button
                    onClick={() => openContact('Integrations')}
                    className="h-10 px-5 rounded-full bg-[#F7F8FA] border border-[#E6E8EE] hover:bg-[#9333EA] hover:text-white text-[#0A0A0F] text-[13px] font-medium flex items-center gap-2 transition-all duration-300 shrink-0 cursor-pointer"
                  >
                    <span>Connect Your Systems →</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
