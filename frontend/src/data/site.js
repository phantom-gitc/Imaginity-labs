import { ArrowUpRight } from 'lucide-react'

/** Image registry – every asset with intrinsic size so we never cause layout shift. */
const a = (name, w, h) => ({ src: `/img/${name}.webp`, w, h })
export const A = {
  hero: a('hero', 1024, 1024),
  team: a('team', 1376, 768),
  about: a('about-hero', 1376, 768),
  svcHero: a('services-hero', 1376, 768),
  cloud: a('services-cloud', 1376, 768),
  ai: a('ai-intelligence', 1376, 768),
  enterprise: a('enterprise-platform', 1376, 768),
  arch: a('system-architecture', 1376, 768),
  insights: a('insights-featured', 1376, 768),
  avenya: a('work-avenya', 1200, 896),
  imaginity: a('work-imaginity', 1200, 896),
  lake: a('work-enterprise', 1200, 896),
  obj: [1, 2, 3, 4, 5, 6].map((n) => a(`obj-${n}`, 413, 416)),
  portrait: [1, 2, 3, 4].map((n) => a(`portrait-${n}`, 512, 512)),
  case: [1, 2, 3, 4].map((n) => a(`case-${n}`, 688, 384)),
}

export const NAV = [
  { label: 'Solutions', to: '/solutions' },
  { label: 'Services', to: '/services' },
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Insights', to: '/insights' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
]

export const SITE = {
  name: 'NEXORA LABS',
  email: 'hello@nexoralabs.io',
  city: 'Hyderabad · Remote-first',
  tz: 'Asia/Kolkata',
}

export const TICKER = ['Software', 'AI Agents', 'Automation', 'Cloud', 'Product Design', 'Data Platforms']

export const STATS = [
  { n: 120, suffix: '+', label: 'Products shipped', tint: 'lavender' },
  { n: 18, suffix: '+', label: 'Teams we backed', tint: 'sky' },
  { n: 98, suffix: '%', label: 'Client retention', tint: 'blush' },
  { n: 6, suffix: 'wk', label: 'Avg. time to launch', tint: 'butter' },
]

export const PROCESS = [
  { t: 'Discover', d: 'Goals, users and a sharp scope.', detail: ['Stakeholder workshops', 'Opportunity map', 'Risk & scope brief'] },
  { t: 'Design', d: 'Flows and visuals you can click.', detail: ['UX flows', 'Visual direction', 'Interactive prototype'] },
  { t: 'Build', d: 'Weekly demos on real code.', detail: ['Weekly shippable builds', 'Code review & CI', 'Observability from day one'] },
  { t: 'Launch', d: 'Zero-drama release and handover.', detail: ['Staged rollout', 'Performance budget', 'Docs & training'] },
  { t: 'Evolve', d: 'Measure, learn, keep shipping.', detail: ['Analytics loops', 'Roadmap sprints', 'SLA support'] },
]

export const FAQ = [
  { q: 'How fast can we start?', a: 'Most projects kick off within two weeks of a signed scope. Urgent builds can start in five days.' },
  { q: 'Do you work with early-stage teams?', a: 'Yes. About half our work is zero-to-one products with founders and small in-house teams.' },
  { q: 'What does a project cost?', a: 'Sprints start around $12k, squads from $28k a month. You get a fixed quote after discovery.' },
  { q: 'Who owns the code and IP?', a: 'You do — from the first commit. Repos live in your accounts and we hand over full documentation.' },
  { q: 'Can you join our existing team?', a: 'Absolutely. We embed with your engineers, follow your rituals and ship inside your stack.' },
  { q: 'How do you use AI in delivery?', a: 'We pair engineers with AI tooling for speed, but humans review every line that reaches production.' },
]

export const PRICING = [
  { id: 'sprint', name: 'Sprint', price: 'from $12k', line: 'A focused 3–4 week build.', tint: 'butter', includes: ['Scoped MVP or prototype', 'Design + engineering pod', 'Weekly demos', 'Launch-ready handover'], icon: ArrowUpRight },
  { id: 'squad', name: 'Squad', price: 'from $28k / mo', line: 'A dedicated cross-functional team.', tint: 'lavender', includes: ['Product, design, 2–4 engineers', 'Roadmap ownership', 'Fortnightly planning', 'Scale up or down monthly'], icon: ArrowUpRight, featured: true },
  { id: 'partner', name: 'Partner', price: "let's talk", line: 'Long-term product and AI partnership.', tint: 'sky', includes: ['Embedded leadership', 'AI strategy & delivery', 'SLA support & on-call', 'Quarterly business reviews'], icon: ArrowUpRight },
]

export const FOOTER_COLS = [
  { title: 'Explore', links: [['Solutions', '/solutions'], ['Services', '/services'], ['Work', '/work'], ['About', '/about']] },
  { title: 'Studio', links: [['Insights', '/insights'], ['Careers', '/careers'], ['Contact', '/contact']] },
  { title: 'Services', links: [['Product Engineering', '/services'], ['AI & Agents', '/services'], ['Automation', '/services'], ['Cloud & DevOps', '/services']] },
]

export const SEO = {
  '/': ['Nexora Labs — Software, AI & Automation Studio', 'Software, agentic AI and automation for teams that ship. Image-led product studio.'],
  '/solutions': ['Solutions — Nexora Labs', 'Eight solution areas, from AI agents to enterprise platforms. Built to launch fast and scale safely.'],
  '/services': ['Services — Nexora Labs', 'Product engineering, AI, automation, cloud and design. Pick a sprint, a squad or a partnership.'],
  '/work': ['Work — Nexora Labs', 'Selected case studies across fintech, health, logistics and AI.'],
  '/about': ['About — Nexora Labs', 'A small senior studio building software people actually enjoy using.'],
  '/insights': ['Insights — Nexora Labs', 'Field notes on AI, engineering and product from the Nexora team.'],
  '/careers': ['Careers — Nexora Labs', 'Join a senior team shipping AI and product work. See open roles.'],
  '/contact': ['Contact — Nexora Labs', 'Tell us what you are building. We reply within one working day.'],
}
