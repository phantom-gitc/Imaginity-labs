/** Image registry – every asset with intrinsic size so we never cause layout shift. */
const a = (name, w, h, ext = 'jpg') => ({ src: `/img/${name}.${ext}`, w, h })
export const A = {
  hero: a('hero', 1024, 1024, 'webp'),
  team: a('team', 1920, 1080, 'jpg'),
  about: a('about-hero', 1920, 1080, 'jpg'),
  svcHero: a('services-hero', 1920, 1080, 'jpg'),
  cloud: a('services-cloud', 1920, 1080, 'jpg'),
  ai: a('ai-intelligence', 1920, 1080, 'jpg'),
  enterprise: a('enterprise-platform', 1920, 1080, 'jpg'),
  arch: a('system-architecture', 1920, 1080, 'jpg'),
  insights: a('insights-featured', 1920, 1080, 'jpg'),
  avenya: a('work-avenya', 1600, 1200, 'jpg'),
  imaginity: a('work-imaginity', 1600, 1200, 'jpg'),
  lake: a('work-imaginity', 1600, 1200, 'jpg'),
  obj: [1, 2, 3, 4, 5, 6].map((n) => a(`obj-${n}`, 413, 416, 'webp')),
  portrait: [
    ...[1, 2, 3, 4].map((n) => a(`team-${n}`, 512, 640, 'webp')),
    a('team-5', 512, 640, 'png'),
  ],
  case: [1, 2, 3, 4].map((n) => a(`case-${n}`, 1920, 1080, 'jpg')),
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
  email: 'hello.imaginitylabs@gmail.com',
  city: 'Bhubaneswar · Remote-first',
  tz: 'Asia/Kolkata',
  socials: [
    { label: 'LinkedIn', href: '#' },
    { label: 'X (Twitter)', href: '#' },
    { label: 'GitHub', href: '#' },
    { label: 'Instagram', href: '#' },
  ],
}

export const TICKER = ['Software', 'AI Agents', 'Automation', 'Cloud', 'Product Design', 'Data Platforms']

export const STATS = [
  { n: 45, suffix: '+', label: 'Products shipped', tint: 'lavender' },
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
  { q: 'Who owns the code and IP?', a: 'You do, from the first commit. Repositories live in your accounts and we hand over full documentation.' },
  { q: 'Can you join our existing team?', a: 'Absolutely. We embed with your engineers, follow your rituals and ship inside your stack.' },
  { q: 'How do you use AI in delivery?', a: 'We pair engineers with AI tooling for speed, but humans review every line that reaches production.' },
]

export const FOOTER_COLS = [
  { title: 'Explore', links: [['Solutions', '/solutions'], ['Services', '/services'], ['Work', '/work'], ['About', '/about']] },
  { title: 'Services', links: [['Product Engineering', '/services'], ['AI & Agents', '/services'], ['Automation', '/services'], ['Cloud & DevOps', '/services']] },
  { title: 'Studio', links: [['Insights', '/insights'], ['Careers', '/careers'], ['Contact', '/contact']] },
  { title: 'Connect', links: [['LinkedIn', '#'], ['X (Twitter)', '#'], ['GitHub', '#'], ['Instagram', '#']] },
]

export const SEO = {
  '/': ['Imaginity Labs (iLabs) | Software Development, Agentic AI & Automation Studio', 'Imaginity Labs (iLabs) is a senior product engineering and AI studio based in Bhubaneswar. We build custom full-stack software, autonomous AI agents, and enterprise cloud solutions for growing companies worldwide.'],
  '/solutions': ['Enterprise Solutions Architecture & Software Paradigms | Imaginity Labs (iLabs)', 'Scalable software solutions, agentic AI systems, enterprise workflow automation, and cloud platforms engineered for scaleups and category leaders by Imaginity Labs.'],
  '/services': ['Custom Software Engineering & Dedicated Studio Squads | Imaginity Labs (iLabs)', 'Full-stack web engineering, autonomous AI agents, workflow automation, cloud systems, and UX design. Partner with senior engineers who ship production software weekly.'],
  '/work': ['Portfolio & Production Case Studies | Imaginity Labs (iLabs)', 'Proven production case studies across fintech, healthtech, logistics, and AI developer platforms engineered by Imaginity Labs with measurable business impact.'],
  '/about': ['About Imaginity Labs (iLabs) | Senior Software Engineering & AI Studio', 'Imaginity Labs is a senior technology studio founded in 2024 in Bhubaneswar. Direct collaboration with experienced engineers, zero agency overhead, and uncompromising craft.'],
  '/insights': ['Engineering Insights, AI Research & Field Notes | Imaginity Labs (iLabs)', 'Technical articles and field notes on autonomous LLM agents, RAG architectures, scalable systems design, and full-stack software craft from the Imaginity Labs team.'],
  '/careers': ['Careers at Imaginity Labs (iLabs) | Senior Engineering & AI Roles', 'Join Imaginity Labs in building next-generation software and AI systems. Autonomous pods, remote-first flexibility, equity opportunities, and high-impact projects.'],
  '/contact': ['Start a Project | Contact Imaginity Labs (iLabs) Founding Partners', 'Discuss your software, AI agent, or automation project directly with our founding engineering partners. We review inquiries within 24 hours with a scoped roadmap.'],
}
