import Services from '../../views/Services'
import { staticRouteMetadata } from '../../lib/seo'
import { BreadcrumbJsonLd, ServicesJsonLd } from '../../components/seo/JsonLd'

export const metadata = staticRouteMetadata('/services')

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
        ]}
      />
      <ServicesJsonLd />
      <Services />
    </>
  )
}
