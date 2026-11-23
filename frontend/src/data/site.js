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
  halcyon: a('work-halcyon', 1600, 1200, 'jpg'),
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
  name: 'SURENEXT',
  email: 'hello.surenext@gmail.com',
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
  '/': ['SureNext | Software & Product Studio', 'SureNext is a small, senior software studio in Bhubaneswar. We design and build web products, AI features, and automation for teams that need to ship.'],
  '/solutions': ['Solutions — Software Architecture, Automation & AI | SureNext', 'How we approach software at SureNext: product engineering, workflow automation, retrieval systems, and cloud architecture built to hold up in production.'],
  '/services': ['Software Engineering, AI & Product Design Services | SureNext', 'Product engineering, AI features, automation, cloud systems, and interface design. Work directly with the senior people doing the work, with progress you can see every week.'],
  '/work': ['Work & Case Studies | SureNext', 'Selected projects from SureNext across fintech, healthcare, logistics, and developer tools — with the constraints, decisions, and results behind each one.'],
  '/about': ['About SureNext — A Senior Software & Product Studio', 'SureNext is an independent software studio founded in 2026 in Bhubaneswar. Small teams, direct access to the people building your product, and no agency overhead.'],
  '/insights': ['Insights & Field Notes | SureNext', 'Practical notes on software engineering, AI systems, product design, and the trade-offs we run into while building software for real teams.'],
  '/careers': ['Careers at SureNext — Engineering & Design Roles', 'Join SureNext to work on real products with a small senior team. Remote-first, honest scope, and space to do careful work.'],
  '/contact': ['Start a Project — Contact SureNext', 'Tell us what you are building and what is getting in the way. Your note goes straight to our founding partners, and we reply within one business day.'],
}
