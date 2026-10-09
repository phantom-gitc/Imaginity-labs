import { SITE_URL, SITE_NAME } from '../../lib/site-url'
import { SITE } from '../../data/site'

/** Serialise safely for inline <script>: prevents "</script>" breakouts. */
const serialize = (data) => JSON.stringify(data).replace(/</g, '\\u003c')

export function JsonLd({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serialize(data) }} />
}

/** Organization data mirrors visible site content (name, email, location are shown in the footer/contact page). */
export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/img/imaginity-logo.png`,
        email: SITE.email,
      }}
    />
  )
}
