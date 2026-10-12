import {
  Bot, Building2, Layers, Workflow, Cloud, BarChart3, Smartphone, Plug, Cpu, Code2, Database, Palette,
  Landmark, HeartPulse, Truck, ShoppingBag, GraduationCap, Zap, Clapperboard, Building, Rocket, ShieldCheck,
  Gauge, PiggyBank, Compass, Award, TrendingUp,
} from 'lucide-react'
import { A } from './site'

/** Home "capabilities" tiles – two words each, details on hover. */
export const CAPABILITIES = [
  { t: 'AI Systems', d: 'Agents and copilots wired into real workflows.', icon: Bot, tint: 'lavender', obj: 3 },
  { t: 'Web Platforms', d: 'Fast, accessible products that scale cleanly.', icon: Code2, tint: 'sky', obj: 5 },
  { t: 'Mobile Apps', d: 'Native-feeling iOS and Android experiences.', icon: Smartphone, tint: 'blush', obj: 0 },
  { t: 'Smart Automation', d: 'Pipelines that replace repetitive work.', icon: Workflow, tint: 'mint', obj: 1 },
  { t: 'Cloud Native', d: 'Secure, observable, cost-aware infrastructure.', icon: Cloud, tint: 'peach', obj: 2 },
  { t: 'Product Design', d: 'Interfaces that feel obvious and look sharp.', icon: Palette, tint: 'butter', obj: 4 },
]

/** Services – Maxflow scroller on Home, Drop.Studio rows on /services. */
export const SERVICES = [
  { id: 'product', t: 'Product Engineering', line: 'Web and mobile products, built to last.', desc: 'From first prototype to production scale. Senior engineers, weekly demos, zero hand-waving.', chips: ['React', 'Next.js', 'Node', 'React Native', 'TypeScript'], tint: 'lavender', obj: 5, preview: A.case[0] },
  { id: 'ai', t: 'AI & Agents', line: 'Agents that work inside real workflows.', desc: 'LLM apps, retrieval and agentic systems with evals, guardrails and human checkpoints built in.', chips: ['LLM apps', 'RAG', 'Agents', 'Evals', 'Fine-tuning'], tint: 'sky', obj: 3, preview: A.case[3] },
  { id: 'automation', t: 'Automation', line: 'Replace repetitive work with reliable pipelines.', desc: 'Workflow engines, integrations and event-driven systems that quietly save your team hours.', chips: ['Workflows', 'Integrations', 'RPA', 'Event-driven'], tint: 'mint', obj: 4, preview: A.svcHero },
  { id: 'cloud', t: 'Cloud & DevOps', line: 'Secure, observable and cost-aware.', desc: 'Infrastructure as code, CI/CD and monitoring that lets you ship daily without drama.', chips: ['AWS', 'GCP', 'Kubernetes', 'Terraform', 'FinOps'], tint: 'peach', obj: 0, preview: A.cloud },
  { id: 'data', t: 'Data Platforms', line: 'Pipelines, warehouses and dashboards.', desc: 'Clean, trustworthy data your teams and models can lean on, from ingestion to insight.', chips: ['Warehousing', 'ETL', 'BI', 'Streaming'], tint: 'butter', obj: 2, preview: A.arch },
  { id: 'design', t: 'Design Systems', line: 'Interfaces that feel obvious.', desc: 'Research-led UX, brand-ready UI and component systems that keep teams consistent as they grow.', chips: ['UX research', 'UI', 'Design tokens', 'Prototyping'], tint: 'blush', obj: 1, preview: A.enterprise },
]

/** Solutions – 8 categories. */
export const SOLUTIONS = [
  { id: 'ai-agents', t: 'AI & Agents', line: 'Intelligence that does real work.', icon: Bot, tint: 'lavender', obj: 3, img: A.case[3], chips: ['Copilots', 'RAG search', 'Multi-agent flows', 'Evals'], outcomes: ['60% faster support triage', 'Human-in-the-loop by default', 'Measured, not hand-waved'] },
  { id: 'enterprise', t: 'Enterprise Platforms', line: 'Core systems that carry the business.', icon: Building2, tint: 'sky', obj: 4, img: A.enterprise, chips: ['Workflow engines', 'Admin suites', 'SSO & RBAC', 'Audit trails'], outcomes: ['Replace 5 legacy tools with 1', 'SOC 2-ready architecture', 'Zero-downtime migrations'] },
  { id: 'saas', t: 'SaaS Products', line: 'From idea to paying customers.', icon: Layers, tint: 'blush', obj: 1, img: A.case[0], chips: ['Multi-tenant', 'Billing', 'Onboarding', 'Analytics'], outcomes: ['MVP in 6 weeks', 'Stripe-native billing', 'Built to iterate weekly'] },
  { id: 'automation', t: 'Automation', line: 'Fewer clicks, more output.', icon: Workflow, tint: 'mint', obj: 4, img: A.svcHero, chips: ['Back-office', 'Document AI', 'Integrations', 'Alerts'], outcomes: ['Hours saved per person weekly', 'Auditable every step', 'Plugs into your stack'] },
  { id: 'cloud', t: 'Cloud Infrastructure', line: 'Fast to ship, safe to scale.', icon: Cloud, tint: 'peach', obj: 0, img: A.cloud, chips: ['IaC', 'CI/CD', 'Observability', 'Security'], outcomes: ['Deploy many times a day', '30% lower cloud spend', 'Clear on-call runbooks'] },
  { id: 'data', t: 'Data & Analytics', line: 'Decisions on trusted numbers.', icon: BarChart3, tint: 'butter', obj: 2, img: A.arch, chips: ['Warehouse', 'Pipelines', 'Dashboards', 'ML features'], outcomes: ['One source of truth', 'Self-serve dashboards', 'Model-ready datasets'] },
  { id: 'mobile', t: 'Mobile Apps', line: 'Native feel, shared codebase.', icon: Smartphone, tint: 'lavender', obj: 5, img: A.case[1], chips: ['iOS', 'Android', 'Offline-first', 'Push'], outcomes: ['4.8/5 app store rating', 'Shared logic, native polish', 'Release every sprint'] },
  { id: 'integrations', t: 'APIs & Integrations', line: 'Make your systems talk.', icon: Plug, tint: 'sky', obj: 2, img: A.case[2], chips: ['REST & GraphQL', 'Webhooks', 'ERP / CRM', 'Event buses'], outcomes: ['Single clean API layer', 'Versioned & documented', 'Monitored end to end'] },
]

export const INDUSTRIES = [
  { t: 'Fintech', d: 'Payments, risk and reporting.', icon: Landmark, tint: 'lavender' },
  { t: 'Healthcare', d: 'Compliant patient experiences.', icon: HeartPulse, tint: 'blush' },
  { t: 'Logistics', d: 'Routing, tracking, fleet ops.', icon: Truck, tint: 'sky' },
  { t: 'Retail', d: 'Commerce and loyalty at scale.', icon: ShoppingBag, tint: 'peach' },
  { t: 'Education', d: 'Learning that adapts to people.', icon: GraduationCap, tint: 'mint' },
  { t: 'Energy', d: 'Grid data and field tools.', icon: Zap, tint: 'butter' },
  { t: 'Media', d: 'Creator tools and streaming.', icon: Clapperboard, tint: 'blush' },
  { t: 'Public sector', d: 'Secure, accessible services.', icon: Building, tint: 'sky' },
]

export const GOALS = [
  { id: 'launch', tab: 'Launch faster', t: 'Get to market in weeks, not quarters.', points: ['Scoped MVP in 3 to 6 weeks', 'Weekly shippable demos', 'Launch with analytics on'], img: A.case[0], icon: Rocket },
  { id: 'cost', tab: 'Cut cost', t: 'Trim cloud and process waste.', points: ['FinOps audit in week one', 'Automate the manual 20%', 'Retire redundant tools'], img: A.cloud, icon: PiggyBank },
  { id: 'automate', tab: 'Automate work', t: 'Give your team their hours back.', points: ['Map the highest-effort flows', 'Agent + rules hybrid', 'Audit logs on every step'], img: A.case[3], icon: Workflow },
  { id: 'scale', tab: 'Scale safely', t: 'Grow without the 3 a.m. pages.', points: ['Load-tested architecture', 'Observability & SLOs', 'Security by default'], img: A.arch, icon: ShieldCheck },
]

export const PRINCIPLES = [
  { t: 'Senior only', d: 'Experienced people do the work.', tint: 'lavender', icon: Award, span: 'md:col-span-2' },
  { t: 'Ship weekly', d: 'Real demos, every week.', tint: 'butter', icon: Gauge, span: '' },
  { t: 'Own your code', d: 'Your repos, your IP.', tint: 'mint', icon: ShieldCheck, span: '' },
  { t: 'Measured outcomes', d: 'Metrics before opinions.', tint: 'sky', icon: TrendingUp, span: '' },
  { t: 'Honest scoping', d: 'We say no to keep quality high.', tint: 'blush', icon: Compass, span: 'md:col-span-2' },
]

export const MARQUEE_ICONS = { Cpu, Database }
