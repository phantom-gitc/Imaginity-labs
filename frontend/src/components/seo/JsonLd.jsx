import { SITE_URL, SITE_NAME, ALTERNATE_SITE_NAME, absoluteUrl } from '../../lib/site-url'
import { SITE } from '../../data/site'
import { SOLUTIONS } from '../../data/services'
import { CASES, ROLES, TEAM } from '../../data/work'
import { ARTICLES } from '../../data/articles'

/** Serialise safely for inline <script>: prevents "</script>" breakouts. */
const serialize = (data) => JSON.stringify(data).replace(/</g, '\\u003c')

export function JsonLd({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serialize(data) }} />
}

/** Official WebSite schema declaring primary brand name and alternate brand name. */
export function WebSiteJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SITE_NAME,
        alternateName: [ALTERNATE_SITE_NAME],
        url: SITE_URL,
        description: 'Software development, agentic AI, and workflow automation studio for teams that ship.',
        publisher: {
          '@type': 'Organization',
          name: SITE_NAME,
          url: SITE_URL,
        },
      }}
    />
  )
}

/** Organization schema matching visible studio branding, location, social presence, and founders. */
export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: SITE_NAME,
        alternateName: ALTERNATE_SITE_NAME,
        url: SITE_URL,
        logo: absoluteUrl('/img/imaginity-icon-trimmed.png'),
        email: SITE.email,
        description:
          'Imaginity Labs is a digital product and AI engineering studio. We build web applications, autonomous AI agents, and enterprise automations.',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Bhubaneswar',
          addressCountry: 'India',
        },
        sameAs: [
          'https://github.com/imaginitylabs',
          'https://linkedin.com/company/imaginitylabs',
          'https://twitter.com/imaginitylabs',
        ],
        knowsAbout: [
          'Software Engineering',
          'Agentic AI',
          'Workflow Automation',
          'Cloud Architecture',
          'Full-Stack Web Development',
          'Product Design Systems',
        ],
        founders: TEAM.map((m) => ({
          '@type': 'Person',
          name: m.name,
          jobTitle: m.role,
        })),
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          email: SITE.email,
          availableLanguage: ['English'],
        },
      }}
    />
  )
}

/** Reusable BreadcrumbList schema for hierarchical navigation. */
export function BreadcrumbJsonLd({ items = [] }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: item.name,
          item: item.url.startsWith('http') ? item.url : absoluteUrl(item.url),
        })),
      }}
    />
  )
}

/** Solutions page schema with service catalog. */
export function SolutionsJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: `Solutions Architecture | ${SITE_NAME}`,
        url: absoluteUrl('/solutions'),
        description: 'Eight interconnected software paradigms tailored for scaleups and visionary enterprises.',
        provider: {
          '@type': 'Organization',
          name: SITE_NAME,
          url: SITE_URL,
        },
        hasPart: SOLUTIONS.map((s) => ({
          '@type': 'Service',
          name: s.t,
          description: s.line,
          serviceType: s.t,
          provider: {
            '@type': 'Organization',
            name: SITE_NAME,
            url: SITE_URL,
          },
        })),
      }}
    />
  )
}

/** Services page schema. */
export function ServicesJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Digital Product Engineering & AI Services',
        serviceType: 'Software Development & AI Automation',
        provider: {
          '@type': 'Organization',
          name: SITE_NAME,
          alternateName: ALTERNATE_SITE_NAME,
          url: SITE_URL,
        },
      }}
    />
  )
}

/** Work portfolio schema with case studies itemList. */
export function WorkJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: `Selected Work & Case Studies | ${SITE_NAME}`,
        url: absoluteUrl('/work'),
        description: 'Selected case studies across fintech, health, logistics, and AI dev platforms.',
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: CASES.map((c, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            item: {
              '@type': 'CreativeWork',
              name: c.title,
              headline: c.line,
              url: absoluteUrl(`/work/${c.slug}`),
              image: absoluteUrl(c.img.src),
              description: c.solution,
            },
          })),
        },
      }}
    />
  )
}

/** Single Case Study schema for /work/[slug]. */
export function CaseStudyJsonLd({ c }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: `${c.title}: ${c.line}`,
        headline: c.line,
        description: `${c.challenge} ${c.solution}`,
        url: absoluteUrl(`/work/${c.slug}`),
        image: absoluteUrl(c.img.src),
        about: c.category,
        dateCreated: c.year,
        creator: {
          '@type': 'Organization',
          name: SITE_NAME,
          alternateName: ALTERNATE_SITE_NAME,
          url: SITE_URL,
        },
      }}
    />
  )
}

/** About page schema with company details and leadership. */
export function AboutJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: `About ${SITE_NAME}`,
        url: absoluteUrl('/about'),
        description: 'A senior studio creating software that people actually enjoy using.',
        mainEntity: {
          '@type': 'Organization',
          name: SITE_NAME,
          alternateName: ALTERNATE_SITE_NAME,
          url: SITE_URL,
          email: SITE.email,
          member: TEAM.map((m) => ({
            '@type': 'Person',
            name: m.name,
            jobTitle: m.role,
          })),
        },
      }}
    />
  )
}

/** Insights blog publication schema. */
export function BlogJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: `${SITE_NAME} Insights & Engineering Field Notes`,
        url: absoluteUrl('/insights'),
        description: 'Field notes on AI, engineering and product design from the Imaginity studio team.',
        publisher: {
          '@type': 'Organization',
          name: SITE_NAME,
          alternateName: ALTERNATE_SITE_NAME,
          url: SITE_URL,
        },
        blogPost: ARTICLES.map((a) => ({
          '@type': 'BlogPosting',
          headline: a.title,
          description: a.summary,
          url: absoluteUrl(`/insights/${a.slug}`),
          image: absoluteUrl(a.cover.src),
          author: {
            '@type': 'Person',
            name: a.author,
          },
        })),
      }}
    />
  )
}

/** Single article schema for /insights/[slug]. */
export function ArticleJsonLd({ a }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: a.title,
        description: a.summary,
        image: absoluteUrl(a.cover.src),
        datePublished: '2026-01-15T08:00:00+05:30',
        dateModified: '2026-01-15T08:00:00+05:30',
        author: {
          '@type': 'Person',
          name: a.author,
        },
        publisher: {
          '@type': 'Organization',
          name: SITE_NAME,
          alternateName: ALTERNATE_SITE_NAME,
          url: SITE_URL,
          logo: {
            '@type': 'ImageObject',
            url: absoluteUrl('/img/imaginity-icon-trimmed.png'),
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': absoluteUrl(`/insights/${a.slug}`),
        },
      }}
    />
  )
}

/** Careers page schema with JobPosting structured data for open positions. */
export function CareersJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: `Careers at ${SITE_NAME}`,
        url: absoluteUrl('/careers'),
        description: 'Join a senior team shipping AI and product work. See open roles.',
        mainEntity: ROLES.map((r) => {
          const isRemote = r.meta.toLowerCase().includes('remote')
          return {
            '@type': 'JobPosting',
            title: r.t,
            description: `${r.d} Requirements: ${r.req.join('; ')}`,
            datePosted: '2026-01-15',
            validThrough: '2026-12-31',
            employmentType: r.meta.toLowerCase().includes('contract') ? 'CONTRACTOR' : 'FULL_TIME',
            hiringOrganization: {
              '@type': 'Organization',
              name: SITE_NAME,
              alternateName: ALTERNATE_SITE_NAME,
              sameAs: SITE_URL,
              logo: absoluteUrl('/img/imaginity-icon-trimmed.png'),
            },
            ...(isRemote
              ? {
                  jobLocationType: 'TELECOMMUTE',
                  applicantLocationRequirements: {
                    '@type': 'Country',
                    name: 'Worldwide',
                  },
                }
              : {
                  jobLocation: {
                    '@type': 'Place',
                    address: {
                      '@type': 'PostalAddress',
                      addressLocality: 'Bhubaneswar',
                      addressCountry: 'India',
                    },
                  },
                }),
          }
        }),
      }}
    />
  )
}

/** Contact page schema with direct contact points. */
export function ContactJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: `Contact ${SITE_NAME}`,
        url: absoluteUrl('/contact'),
        description: `Start a software or AI project conversation with ${SITE_NAME}.`,
        mainEntity: {
          '@type': 'Organization',
          name: SITE_NAME,
          alternateName: ALTERNATE_SITE_NAME,
          url: SITE_URL,
          email: SITE.email,
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'sales',
            email: SITE.email,
            availableLanguage: ['English'],
            hoursAvailable: 'Mo-Fr 09:00-18:00',
          },
        },
      }}
    />
  )
}
