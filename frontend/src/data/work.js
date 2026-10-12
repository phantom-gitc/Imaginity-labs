import { Heart, Coffee, Laptop, Plane, BookOpen, Wallet, Gem, Users, Telescope, Handshake } from 'lucide-react'
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
    results: [{ n: 3, s: 'x', l: 'Faster briefs' }, { n: 48, s: 'k', l: 'Active creators' }, { n: 4.8, s: '/5', l: 'Client rating' }],
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
    results: [{ n: 4.8, s: '/5', l: 'Store rating' }, { n: 71, s: '%', l: 'Weekly retention' }, { n: 5, s: 'wk', l: 'To first release' }],
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
  { name: 'Saroj Kumar Padhi', role: 'Founder & Creative Director', p: 0, tint: 'lavender' },
  { name: 'Debasish Rout', role: 'Co-Founder | CFO & Sales Lead', p: 1, tint: 'blush' },
  { name: 'Lucky Roshan', role: 'Co-Founder | Head of Technology', p: 2, tint: 'sky' },
  { name: 'Manisha Sahu', role: 'Senior Software Engineer', p: 4, tint: 'peach' },
  { name: 'Sairam Panda', role: 'Senior Full-Stack Developer', p: 3, tint: 'mint' },
]

export const VALUES = [
  { t: 'Craft first', d: 'Details are the product.', tint: 'lavender', icon: Gem },
  { t: 'Radical honesty', d: 'Clear scope, clear trade-offs.', tint: 'butter', icon: Handshake },
  { t: 'Curious by default', d: 'We learn your domain deeply.', tint: 'sky', icon: Telescope },
  { t: 'People over process', d: 'Small teams, big trust.', tint: 'blush', icon: Users },
]

export const AWARDS = ['Clutch · Top Studio', 'Google Cloud Partner', 'AWS Select Tier', 'Product Hunt · Maker', 'Design Week · Honoree']

export const PERKS = [
  { t: 'Remote-first', d: 'Work from where you do your best.', tint: 'sky', icon: Laptop },
  { t: 'Learning stipend', d: 'Annual fund for courses, books, and growth.', tint: 'butter', icon: BookOpen },
  { t: 'Real health cover', d: 'For you and your family.', tint: 'blush', icon: Heart },
  { t: 'Offsites twice a year', d: 'Meet the team in person.', tint: 'peach', icon: Plane },
  { t: 'Equity pool', d: 'Share in what we build.', tint: 'lavender', icon: Wallet },
  { t: 'Quiet focus time', d: 'No-meeting afternoons.', tint: 'mint', icon: Coffee },
]

export const ROLES = [
  {
    id: 'fs',
    t: 'Senior Full-stack Engineer',
    meta: 'Remote · Full-time · 5+ Yrs Exp',
    exp: '5+ Years',
    stack: ['TypeScript', 'React', 'Next.js (App Router)', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    d: 'Own high-impact digital flagships and scalable SaaS platforms end-to-end. You will architect frontend client systems, build resilient Node/TypeScript microservices, design database schemas, and lead code reviews across client squads.',
    responsibilities: [
      'Architect and deploy full-stack features from Figma design tokens to scalable AWS/Vercel production infrastructure',
      'Maintain high engineering standards through strict TypeScript typing, automated CI/CD pipelines, and robust testing',
      'Directly interface with client founders and engineering leads during weekly sprint demos and technical discovery sessions',
      'Mentor intermediate and junior engineers, conducting thorough, constructive pull request reviews',
    ],
    req: [
      '5+ years professional experience shipping and scaling web applications in production',
      'Deep proficiency in TypeScript, React, Next.js (App Router), and modern Node.js runtimes',
      'Strong SQL fundamentals with PostgreSQL/MySQL, Prisma/Drizzle ORM, and database indexing strategies',
      'Proven track record designing REST and GraphQL APIs with security best practices, caching, and rate limiting',
    ],
  },
  {
    id: 'ai',
    t: 'AI Engineer',
    meta: 'Remote · Full-time · 3+ Yrs Exp',
    exp: '3+ Years',
    stack: ['Python', 'FastAPI', 'LangChain', 'LlamaIndex', 'Pinecone / Qdrant', 'OpenAI & Claude APIs', 'Evals'],
    d: 'Design, evaluate, and deploy production-grade autonomous agent systems, hybrid RAG pipelines, and LLM-powered background workers. You will focus on determinism, quantitative evals, hallucination reduction, and cost-efficient model inference.',
    responsibilities: [
      'Develop and benchmark hybrid RAG retrieval pipelines combining dense vector embeddings and BM25 sparse search',
      'Build multi-step autonomous agent workflows with deterministic fallback guards and human-in-the-loop escalation',
      'Establish quantitative evaluation benchmarks measuring latency (p95), cost-per-workflow, and groundedness metrics',
      'Deploy and monitor LLM services with distributed tracing tools like Langfuse and Arize Phoenix',
    ],
    req: [
      '3+ years software engineering experience with at least 1.5+ years building and shipping LLM applications',
      'Expertise in Python, asynchronous concurrency, FastAPI, and vector databases (Pinecone, Qdrant, or pgvector)',
      'Hands-on experience fine-tuning open-source models (Llama, Mistral) and prompt engineering with structured JSON schema outputs',
      'Relentless focus on production telemetry, observability, and reproducible automated evals',
    ],
  },
  {
    id: 'mern',
    t: 'MERN Stack Developer',
    meta: 'Remote · Fresher · 0 to 1 Yr Exp',
    exp: 'Fresher (0 to 1 Year)',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript (ES6+)', 'Tailwind CSS', 'Git & GitHub'],
    d: 'Kickstart your engineering career by building responsive web applications, interactive client portals, and RESTful APIs alongside senior mentors. You will write clean, component-driven code, participate in sprint demos, and contribute directly to live client products.',
    responsibilities: [
      'Build responsive, accessible frontend UI components in React using modern state management and Tailwind CSS',
      'Develop and test server-side REST API endpoints in Express.js with JWT authentication and input validation',
      'Design MongoDB collections, schemas with Mongoose, and write optimized aggregation queries',
      'Participate in daily standups, peer code reviews, and Git pull request workflows',
    ],
    req: [
      'Bachelor’s degree in Computer Science, IT, or equivalent practical project experience / bootcamp certification',
      'Strong fundamental knowledge of modern JavaScript (ES6+), async/await, DOM manipulation, and React hooks',
      'Hands-on project portfolio demonstrating at least 2 full-stack MERN applications deployed on live hosting (Vercel/Render)',
      'Familiarity with Git version control, GitHub workflows, and RESTful API design principles',
    ],
  },
  {
    id: 'java',
    t: 'Java Developer',
    meta: 'Remote · Full-time · 2+ Yrs Exp',
    exp: '2+ Years',
    stack: ['Java 17/21', 'Spring Boot', 'PostgreSQL', 'Apache Kafka', 'Docker', 'Hibernate / JPA', 'Microservices'],
    d: 'Design, scale, and optimize enterprise backend services, transactional databases, and event-driven data streaming pipelines. You will be responsible for low-latency API design, data integrity, and containerized microservice deployments.',
    responsibilities: [
      'Build and maintain distributed microservices with Spring Boot, Spring Security, and Spring Cloud',
      'Implement event-driven asynchronous messaging patterns using Apache Kafka or RabbitMQ',
      'Optimize complex SQL queries, database indexing, and Hibernate caching strategies for high concurrency workloads',
      'Containerize backend applications using Docker and collaborate with DevOps on Kubernetes cluster deployments',
    ],
    req: [
      '2+ years professional experience developing enterprise backend systems using Core Java (17+) and Spring Boot',
      'Solid grasp of Object-Oriented Design (OOP), SOLID principles, Design Patterns, and Clean Architecture',
      'Hands-on experience with relational databases (PostgreSQL/MySQL), JPA/Hibernate, and database transactions (ACID)',
      'Experience writing comprehensive unit and integration tests using JUnit 5, Mockito, and Testcontainers',
    ],
  },
  {
    id: 'python',
    t: 'Python Developer',
    meta: 'Remote · Fresher · 0 to 1 Yr Exp',
    exp: 'Fresher (0 to 1 Year)',
    stack: ['Python 3.11+', 'FastAPI', 'PostgreSQL', 'Pandas', 'Playwright / BeautifulSoup', 'Docker', 'Git'],
    d: 'Work alongside our AI and automation engineers to build robust data scraping pipelines, background job queues, and FastAPI microservices. You will learn production software engineering standards, async Python concurrency, and modern AI integration patterns.',
    responsibilities: [
      'Write clean, type-hinted Python backend services using FastAPI, Pydantic, and SQLAlchemy',
      'Build data ingestion scripts, automated web extractors, and scheduled background task workers',
      'Integrate external third-party APIs (Stripe, Slack, OpenAI, HubSpot) with reliable error handling and retries',
      'Collaborate with senior team members on code reviews, automated unit testing, and Dockerization',
    ],
    req: [
      'Bachelor’s degree in Computer Science, Data Science, or strong self-taught project portfolio in Python',
      'Deep understanding of Python core concepts: OOP, list comprehensions, decorators, generators, and data structures',
      'Basic knowledge of web frameworks (FastAPI, Flask, or Django) and relational databases (PostgreSQL/SQLite)',
      'Public GitHub repository showing clean, well-documented Python projects with README instructions',
    ],
  },
  {
    id: 'pd',
    t: 'Product Designer',
    meta: 'Remote · Full-time · 3+ Yrs Exp',
    exp: '3+ Years',
    stack: ['Figma', 'Design Systems', 'Interactive Prototyping', 'User Research', 'Motion & Micro-interactions'],
    d: 'Lead user experience and high-craft visual interfaces for category-defining web and mobile products. You will turn ambiguous problem spaces into elegant user flows, design scalable component libraries, and collaborate directly with engineers.',
    responsibilities: [
      'Lead end-to-end design from user journey mapping and low-fi wireframes to pixel-perfect production Figma components',
      'Maintain and evolve modular design systems with strict variable tokens, accessibility contrast, and responsive grids',
      'Prototype interactive micro-animations and motion transitions that engineers can translate 1:1 into code',
      'Conduct qualitative user testing and usability feedback sessions with clients and end users',
    ],
    req: [
      '3+ years experience as a UI/UX or Product Designer shipping live digital platforms (SaaS, consumer apps, or fintech)',
      'Outstanding portfolio demonstrating craftsmanship, strong typography hierarchy, layout discipline, and design thinking',
      'Mastery of Figma (auto-layout, components, variables, tokens) and modern prototyping tools',
      'Strong technical empathy and understanding of frontend capabilities (CSS Flexbox/Grid, HTML semantics, animations)',
    ],
  },
  {
    id: 'dl',
    t: 'Delivery Lead',
    meta: 'Remote · Full-time · 4+ Yrs Exp',
    exp: '4+ Years',
    stack: ['Agile / Scrum', 'Linear / Jira', 'Notion', 'Risk Management', 'Stakeholder Communications'],
    d: 'Ensure client squads ship on time, with clarity, and without corporate drama. You will manage sprint velocity, facilitate rituals, remove technical blockers, and maintain crystal-clear alignment between founding partners and client teams.',
    responsibilities: [
      'Run weekly sprint planning, daily asynchronous standups, backlog grooming, and milestone delivery reviews',
      'Translate high-level client business objectives into detailed, actionable engineering tickets in Linear',
      'Anticipate technical and timeline bottlenecks early, communicating tradeoffs transparently with stakeholders',
      'Maintain comprehensive project documentation, release changelogs, and client handover briefings',
    ],
    req: [
      '4+ years leading agile software delivery or technical project management in high-velocity agency or startup settings',
      'Exceptional written and verbal communication skills with the ability to summarize complex technical concepts simply',
      'Deep familiarity with modern engineering workflows (CI/CD, code reviews, PR staging, feature branching)',
      'Calm, empathetic leadership style under pressure with a relentless commitment to unblocking engineers',
    ],
  },
  {
    id: 'cr',
    t: 'Creative Technologist',
    meta: 'Remote · Contract · 3+ Yrs Exp',
    exp: '3+ Years',
    stack: ['Three.js / WebGL', 'GSAP', 'React / Next.js', 'Shader programming (GLSL)', 'Tailwind CSS'],
    d: 'Craft award-worthy interactive 3D web experiences, fluid physics-based interactions, and WebGL experiments for flagship marketing sites and product launches. You will bridge the divide between high art and performant front-end code.',
    responsibilities: [
      'Build custom 3D web scenes, interactive canvas shaders, and scroll-driven GSAP animations',
      'Profile and optimize WebGL/Three.js render loops to maintain steady 60fps performance on mobile devices',
      'Collaborate with visual designers to translate brand motion languages into interactive web prototypes',
      'Ensure accessibility, keyboard navigation, and reduced-motion fallbacks for all experimental interactions',
    ],
    req: [
      '3+ years experience engineering creative interactive websites with a standout portfolio of live work (Awwwards/FWA level)',
      'Mastery of GSAP (ScrollTrigger, Flip, Observer), Three.js, Canvas API, and WebGL basics',
      'Strong modern frontend fundamentals in React/Next.js, TypeScript, and responsive CSS architectures',
      'Passionate obsession with micro-interactions, spring physics, frame rates, and visual polish',
    ],
  },
]
