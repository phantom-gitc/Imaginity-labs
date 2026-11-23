import { Cpu, Layers, ShieldCheck, Zap, ArrowRight } from 'lucide-react'
import { It, Section, SectionHeader } from '../ui/Type'
import { TLink } from '../ui/TLink'

const PILLARS = [
  {
    num: '01',
    category: 'Enterprise Automation',
    title: 'Manual work, quietly automated',
    problem: 'Teams lose hours every week moving data between tools that do not talk to each other. The spreadsheet that saved time last year is now the bottleneck.',
    solution: 'We map the most expensive flows first, then replace the copy-paste with event-driven pipelines and integrations that keep systems in sync.',
    keywords: ['Workflow Automation', 'Document AI', 'API Integrations', 'Event-Driven Systems'],
    tint: 'mint',
    icon: Zap,
  },
  {
    num: '02',
    category: 'Applied Artificial Intelligence',
    title: 'AI that answers from your own data',
    problem: 'Generic chat tools sound confident and get things wrong. They do not know your customers, your documents, or your rules.',
    solution: 'We scope the problem, ground answers in your data, and add evals, schema checks and human review so the system fails safely.',
    keywords: ['Grounded AI', 'RAG search', 'Multi-step workflows', 'Guardrails & evals'],
    tint: 'lavender',
    icon: Cpu,
  },
  {
    num: '03',
    category: 'Product Engineering',
    title: 'Web products built to last',
    problem: 'Fast prototypes often hide slow queries, brittle data models and accessibility debt that surface the moment traffic arrives.',
    solution: 'Senior engineers build with Next.js, React and TypeScript: accessible interfaces, clean modules, and tests around the parts that matter.',
    keywords: ['Next.js & React', 'High-Concurrency Backends', 'TypeScript', 'Clean Architecture'],
    tint: 'sky',
    icon: Layers,
  },
  {
    num: '04',
    category: 'Cloud Infrastructure',
    title: 'Infrastructure you can reason about',
    problem: 'Cloud bills creep, deploys get scary, and nobody can tell why production slowed down last Tuesday.',
    solution: 'We set up reproducible infrastructure, CI/CD, monitoring and cost controls on AWS and Google Cloud — then document how it fits together.',
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
        title={<>The problems we are usually <It>hired to fix.</It></>}
        line="The same four issues come up again and again. Here is how we handle them."
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
            We choose proven tools and explain the trade-offs. That keeps the stack maintainable long after we hand it over.
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
