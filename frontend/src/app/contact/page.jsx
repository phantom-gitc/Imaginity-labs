import Contact from '../../views/Contact'
import { staticRouteMetadata } from '../../lib/seo'
import { BreadcrumbJsonLd, ContactJsonLd } from '../../components/seo/JsonLd'

export const metadata = staticRouteMetadata('/contact')

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Contact', url: '/contact' },
        ]}
      />
      <ContactJsonLd />
      <Contact />
    </>
  )
}
