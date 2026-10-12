import { Cpu, Layers, ShieldCheck, Zap, Database, GitBranch, ArrowRight } from 'lucide-react'
import { Eyebrow, H, It, Section, SectionHeader } from '../ui/Type'
import { TLink } from '../ui/TLink'

const PILLARS = [
  {
    num: '01',
    category: 'Enterprise Automation',
    title: 'From Manual Bottlenecks to Autonomous Workflows',
    problem: 'Growing companies lose thousands of billable hours each quarter to disconnected tools, manual copy-pasting across software, and fragile spreadsheets that break under volume.',
    solution: 'We engineer event-driven automation pipelines and intelligent background integrations that quietly run your back-office operations, sync customer records in real time, and eliminate human data entry.',
    keywords: ['Workflow Automation', 'Document AI', 'API Integrations', 'Event-Driven Systems'],
    tint: 'mint',
    icon: Zap,
  },
  {
    num: '02',
    category: 'Applied Artificial Intelligence',
    title: 'Production-Grade Agentic AI and Retrieval Systems',
    problem: 'Standard chat interfaces and unguided language models frequently hallucinate, lack business context, and cannot safely interact with sensitive company databases.',
    solution: 'We build scoped, multi-agent AI architectures and retrieval-augmented generation (RAG) pipelines backed by deterministic evaluation suites, strict schema validation, and human checkpoints.',
    keywords: ['Agentic AI', 'Enterprise RAG', 'Multi-Agent Workflows', 'Guardrails & Evals'],
    tint: 'lavender',
    icon: Cpu,
  },
  {
    num: '03',
    category: 'Product Engineering',
    title: 'Full-Stack Web Applications Built to Scale Cleanly',
    problem: 'Rushed prototypes often suffer from poor database design, slow page loads, difficult maintenance, and high rework costs when traffic spikes.',
    solution: 'Our senior squads engineer high-performance web and mobile platforms using Next.js, React, Node.js, and TypeScript. Every release is built with accessibility, clean modular architecture, and comprehensive test coverage.',
    keywords: ['Next.js & React', 'High-Concurrency Backends', 'TypeScript', 'Clean Architecture'],
    tint: 'sky',
    icon: Layers,
  },
  {
    num: '04',
    category: 'Cloud Infrastructure',
    title: 'Resilient Cloud Architecture and DevOps Pipelines',
    problem: 'Unoptimized infrastructure leads to unexpected cloud bills, painful deployment outages, and zero observability when production services degrade.',
    solution: 'We configure reproducible infrastructure as code, automated continuous deployment (CI/CD), proactive monitoring, and FinOps cloud spend optimizations across AWS and Google Cloud.',
    keywords: ['AWS & GCP', 'Kubernetes & Docker', 'Terraform IaC', 'FinOps Auditing'],
    tint: 'butter',
    icon: ShieldCheck,
  },
]

const STACK_CATEGORIES = [
  {
    group: 'Frontend & Mobile',
    items: ['Next.js 15', 'React 19', 'TypeScript', 'React Native', 'Tailwind CSS', 'WebGL'],
  },
  {
    group: 'Backend & Distributed Systems',
    items: ['Node.js', 'Python FastAPI', 'Go', 'PostgreSQL', 'ClickHouse', 'Redis'],
  },
  {
    group: 'AI, Agents & Data',
    items: ['LangGraph', 'Enterprise RAG', 'Vector Embeddings', 'LlamaIndex', 'Model Evals', 'Kafka'],
  },
  {
    group: 'Cloud & Infrastructure',
    items: ['Amazon Web Services', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD Pipelines'],
  },
]

export function WhatWeSolve() {
  return (
    <Section bg="light" className="py-20 md:py-28 border-t border-line/60">
      <SectionHeader
        eyebrow="What We Solve"
        dot="#3B5BFF"
        title={<>Engineering solutions for <It>high-stakes challenges.</It></>}
        line="We replace fragmented tools, fragile AI experiments, and technical debt with clean, dependable software systems."
      />

      {/* 4 Core Problem-Solution Pillars */}
      <div data-reveal="stagger" className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
        {PILLARS.map((p) => {
          const Icon = p.icon
          return (
            <div
              key={p.num}
              className="p-8 sm:p-10 rounded-[28px] bg-white border border-line shadow-xs flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-black/20"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="mono text-xs font-semibold text-ink/40 tracking-wider">
                      {p.num}
                    </span>
                    <span className="tag text-[11px]">
                      {p.category}
                    </span>
                  </div>
                  <div className={`size-10 rounded-xl tinted tint-${p.tint} flex items-center justify-center`}>
                    <Icon size={18} style={{ color: 'var(--tint-ink)' }} />
                  </div>
                </div>

                <h3 className="display text-2xl text-ink font-semibold leading-snug mb-4">
                  {p.title}
                </h3>

                <div className="space-y-3 text-sm text-ink/75 leading-relaxed">
                  <p>
                    <strong className="text-ink font-semibold">The Challenge: </strong>
                    {p.problem}
                  </p>
                  <p>
                    <strong className="text-ink font-semibold">Our Approach: </strong>
                    {p.solution}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-line flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {p.keywords.map((kw) => (
                    <span key={kw} className="mono text-[11px] text-ink/60 bg-black/[0.04] px-2.5 py-1 rounded-md">
                      {kw}
                    </span>
                  ))}
                </div>
                <TLink
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3B5BFF] hover:underline"
                >
                  Explore Service <ArrowRight size={14} />
                </TLink>
              </div>
            </div>
          )
        })}
      </div>

      {/* Core Technology Stack Ecosystem Grid */}
      <div className="mt-16 p-8 sm:p-12 rounded-[32px] bg-warm border border-line/80">
        <div className="max-w-2xl">
          <span className="mono text-xs font-semibold text-ink/50 uppercase tracking-wider block mb-2">
            Production Technology Stack
          </span>
          <h3 className="display text-2xl sm:text-3xl text-ink font-semibold">
            Built on modern, proven foundations.
          </h3>
          <p className="text-sm text-ink/70 mt-2 leading-relaxed">
            We avoid fragile dependencies and transient hype. Every framework, database, and cloud tool we choose is selected for long-term maintainability, developer ergonomics, and verifiable stability.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STACK_CATEGORIES.map((cat) => (
            <div key={cat.group} className="p-6 rounded-2xl bg-white border border-line shadow-2xs">
              <h4 className="mono text-xs font-bold text-ink uppercase tracking-wider mb-4 pb-2 border-b border-line">
                {cat.group}
              </h4>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-ink/80">
                    <span className="size-1.5 rounded-full bg-[#3B5BFF]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
