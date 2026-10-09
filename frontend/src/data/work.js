import { Heart, Coffee, Laptop, Plane, BookOpen, Wallet, Sparkles, Users, Telescope, Handshake } from 'lucide-react'
import { A } from './site'

export const CASES = [
  {
    slug: 'avenya', title: 'Avenya', client: 'Avenya Labs', category: 'AI', year: '2026', tint: 'butter', img: A.case[3],
    line: 'An agentic dev platform that ships pull requests on its own.',
    role: ['Product strategy', 'AI engineering', 'Design system'], stack: ['Next.js', 'Python', 'LangGraph', 'Postgres'],
    results: [{ n: 62, s: '%', l: 'Faster triage' }, { n: 4, s: 'x', l: 'More PRs shipped' }, { n: 9, s: 'wk', l: 'Idea to launch' }],
    challenge: 'Engineers drowned in repetitive tickets and slow reviews.',
    solution: 'A multi-agent system with human checkpoints and full audit trails.',
    gallery: [A.case[3], A.ai, A.obj[3]],
  },
  {
    slug: 'imaginity', title: 'Imaginity', client: 'Imaginity Studio', category: 'Product', year: '2025', tint: 'sky', img: A.imaginity,
    line: 'A creative workspace that turns briefs into campaigns.',
    role: ['Web platform', 'UX research', 'Brand-ready UI'], stack: ['React', 'Node', 'WebGL', 'AWS'],
    results: [{ n: 3, s: 'x', l: 'Faster briefs' }, { n: 48, s: 'k', l: 'Active creators' }, { n: 4.8, s: '★', l: 'Avg. rating' }],
    challenge: 'Creative teams juggled six tools to ship a single campaign.',
    solution: 'One calm workspace with shared assets, approvals and AI assist.',
    gallery: [A.imaginity, A.lake, A.obj[1]],
  },
  {
    slug: 'ledgerly', title: 'Ledgerly', client: 'Ledgerly Finance', category: 'Platform', year: '2026', tint: 'lavender', img: A.case[0],
    line: 'Real-time analytics for a payments platform.',
    role: ['Data platform', 'Dashboards', 'Cloud'], stack: ['TypeScript', 'ClickHouse', 'Kafka', 'GCP'],
    results: [{ n: 12, s: 'ms', l: 'Query latency' }, { n: 30, s: '%', l: 'Lower infra cost' }, { n: 99.99, s: '%', l: 'Uptime' }],
    challenge: 'Reports took minutes and finance did not trust the numbers.',
    solution: 'A streaming warehouse with governed metrics and live dashboards.',
    gallery: [A.case[0], A.arch, A.obj[2]],
  },
  {
    slug: 'pulse', title: 'Pulse Health', client: 'Pulse Care', category: 'Mobile', year: '2025', tint: 'blush', img: A.case[1],
    line: 'A patient app people actually open every day.',
    role: ['Mobile apps', 'UX', 'Compliance'], stack: ['React Native', 'Node', 'FHIR', 'AWS'],
    results: [{ n: 4.8, s: '★', l: 'Store rating' }, { n: 71, s: '%', l: 'Weekly retention' }, { n: 5, s: 'wk', l: 'To first release' }],
    challenge: 'Patients dropped off after the first appointment.',
    solution: 'A friendly, privacy-first app with nudges that respect attention.',
    gallery: [A.case[1], A.team, A.obj[0]],
  },
  {
    slug: 'routewise', title: 'Routewise', client: 'Routewise Freight', category: 'Platform', year: '2026', tint: 'sky', img: A.case[2],
    line: 'Live fleet tracking and route optimisation.',
    role: ['Platform engineering', 'Maps & routing', 'Integrations'], stack: ['Go', 'React', 'PostGIS', 'Kubernetes'],
    results: [{ n: 18, s: '%', l: 'Fuel saved' }, { n: 2, s: 'M', l: 'Daily pings' }, { n: 7, s: 'wk', l: 'Pilot to rollout' }],
    challenge: 'Dispatchers planned routes in spreadsheets and phone calls.',
    solution: 'A live map with optimisation and one-tap driver updates.',
    gallery: [A.case[2], A.cloud, A.obj[4]],
  },
  {
    slug: 'atlas', title: 'Atlas Enterprise', client: 'Atlas Group', category: 'AI', year: '2025', tint: 'mint', img: A.enterprise,
    line: 'Distributed operations for a global enterprise.',
    role: ['Enterprise platform', 'Automation', 'Migration'], stack: ['Java', 'React', 'Azure', 'Event bus'],
    results: [{ n: 5, s: '→1', l: 'Tools unified' }, { n: 40, s: '%', l: 'Less manual work' }, { n: 0, s: '', l: 'Downtime moves' }],
    challenge: 'Five legacy systems, none of them talking to each other.',
    solution: 'A single operations layer with phased, zero-downtime migration.',
    gallery: [A.enterprise, A.svcHero, A.obj[5]],
  },
]
export const CASE_FILTERS = ['All', 'AI', 'Product', 'Platform', 'Mobile']

export const TESTIMONIALS = [
  { name: 'Maya Chen', role: 'CPO, Avenya', quote: 'They shipped in nine weeks what we budgeted a year for. The craft is obvious.', p: 0, tint: 'lavender' },
  { name: 'Rohan Mehta', role: 'CTO, Ledgerly', quote: 'Senior, calm and fast. Our dashboards went from minutes to milliseconds.', p: 2, tint: 'sky' },
  { name: 'Elena Park', role: 'Founder, Pulse', quote: 'They treated our app like their own. Retention doubled in a quarter.', p: 1, tint: 'blush' },
  { name: 'Tomás Rivera', role: 'COO, Routewise', quote: 'The agents quietly took over our busywork. Dispatch has never run smoother.', p: 3, tint: 'mint' },
]

export const TEAM = [
  { name: 'Amara Osei', role: 'Founder & CEO', p: 0, tint: 'lavender' },
  { name: 'Priya Raman', role: 'Head of Design', p: 1, tint: 'blush' },
  { name: 'Daniel Hart', role: 'Engineering Lead', p: 2, tint: 'sky' },
  { name: 'Kenji Mori', role: 'AI Lead', p: 3, tint: 'mint' },
]

export const VALUES = [
  { t: 'Craft first', d: 'Details are the product.', tint: 'lavender', icon: Sparkles },
  { t: 'Radical honesty', d: 'Clear scope, clear trade-offs.', tint: 'butter', icon: Handshake },
  { t: 'Curious by default', d: 'We learn your domain deeply.', tint: 'sky', icon: Telescope },
  { t: 'People over process', d: 'Small teams, big trust.', tint: 'blush', icon: Users },
]

export const AWARDS = ['Clutch · Top Studio', 'Google Cloud Partner', 'AWS Select Tier', 'Product Hunt · Maker', 'Design Week · Honoree']

export const PERKS = [
  { t: 'Remote-first', d: 'Work from where you do your best.', tint: 'sky', icon: Laptop },
  { t: 'Learning budget', d: '$2,000 a year for growth.', tint: 'butter', icon: BookOpen },
  { t: 'Real health cover', d: 'For you and your family.', tint: 'blush', icon: Heart },
  { t: 'Offsites twice a year', d: 'Meet the team in person.', tint: 'peach', icon: Plane },
  { t: 'Equity pool', d: 'Share in what we build.', tint: 'lavender', icon: Wallet },
  { t: 'Quiet focus time', d: 'No-meeting afternoons.', tint: 'mint', icon: Coffee },
]

export const ROLES = [
  { id: 'fs', t: 'Senior Full-stack Engineer', meta: 'Remote · Full-time', d: 'Own features end to end across React, Node and cloud. You enjoy shipping, reviewing and mentoring.', req: ['5+ years shipping production apps', 'Strong TypeScript and system design', 'Comfortable talking to clients'] },
  { id: 'ai', t: 'AI Engineer', meta: 'Remote · Full-time', d: 'Design agents, retrieval and evals that stand up in production, not just in demos.', req: ['Hands-on LLM application experience', 'Python and evaluation mindset', 'Taste for pragmatic solutions'] },
  { id: 'pd', t: 'Product Designer', meta: 'Hybrid · Bhubaneswar', d: 'Shape product experiences from research to polished UI, and grow our design system.', req: ['Portfolio with shipped work', 'Fluent in Figma and prototyping', 'Motion sensibility is a plus'] },
  { id: 'dl', t: 'Delivery Lead', meta: 'Remote · Full-time', d: 'Keep squads calm, clients informed and releases boringly smooth.', req: ['3+ years leading software delivery', 'Excellent written communication', 'Calm in a crunch'] },
  { id: 'cr', t: 'Creative Technologist', meta: 'Remote · Contract', d: 'Prototype interactive experiences in WebGL, GSAP and AI-assisted tooling.', req: ['Motion and WebGL portfolio', 'Strong front-end fundamentals', 'Eye for detail'] },
]
