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
  portrait: [1, 2, 3, 4].map((n) => a(`team-${n}`, 512, 640)),
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
  name: 'IMAGINITY LABS',
  email: 'hello@imaginitylabs.io',
  city: 'Bhubaneswar · Remote-first',
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
  { q: 'How do you scope and structure engagements?', a: 'Every engagement begins with an in-depth discovery sprint. We deliver a transparent roadmap, architecture blueprint, and milestone timeline before development begins.' },
  { q: 'Who owns the code and IP?', a: 'You do — from the first commit. Repos live in your accounts and we hand over full documentation.' },
  { q: 'Can you join our existing team?', a: 'Absolutely. We embed with your engineers, follow your rituals and ship inside your stack.' },
  { q: 'How do you use AI in delivery?', a: 'We pair engineers with AI tooling for speed, but humans review every line that reaches production.' },
]

export const FOOTER_COLS = [
  { title: 'Explore', links: [['Solutions', '/solutions'], ['Services', '/services'], ['Work', '/work'], ['About', '/about']] },
  { title: 'Studio', links: [['Insights', '/insights'], ['Careers', '/careers'], ['Contact', '/contact']] },
  { title: 'Services', links: [['Product Engineering', '/services'], ['AI & Agents', '/services'], ['Automation', '/services'], ['Cloud & DevOps', '/services']] },
]

export const SEO = {
  '/': ['Imaginity Labs — Software, AI & Automation Studio', 'Software, agentic AI and automation for teams that ship. Production-ready digital products with senior craft.'],
  '/solutions': ['Solutions Architecture & Engineering Paradigms | Imaginity Labs', 'Explore eight interconnected software and AI solution paradigms engineered for scaleups and category leaders.'],
  '/services': ['Studio Services & Dedicated Squads | Imaginity Labs', 'Product engineering, agentic AI, workflow automation, cloud systems, and design. Choose between focused sprints, embedded squads, or long-term partnerships.'],
  '/work': ['Case Studies & Shipped Products Portfolio | Imaginity Labs', 'Selected production case studies across fintech, health, logistics, and dev tools with measurable business impact.'],
  '/about': ['About Imaginity Labs — Senior Product & AI Studio', 'A senior technology studio creating software people actually enjoy using. Direct collaboration, no middle layers, uncompromising craft.'],
  '/insights': ['Insights, Research & Engineering Field Notes | Imaginity Labs', 'Field notes on autonomous AI agents, system architecture, RAG pipelines, and digital craft from the Imaginity team.'],
  '/careers': ['Careers at Imaginity Labs — Senior Engineering & Design Roles', 'Join a compact senior squad shipping real AI products. Autonomous pods, remote-first culture, generous equity, and quiet focus time.'],
  '/contact': ['Start a Project — Contact Our Founding Partners | Imaginity Labs', 'Tell us what you are building. Founding partners review all inquiries and respond within one working day with a clear scope roadmap.'],
}
