import Careers from '../../views/Careers'
import { staticRouteMetadata } from '../../lib/seo'
import { BreadcrumbJsonLd, CareersJsonLd } from '../../components/seo/JsonLd'

export const metadata = staticRouteMetadata('/careers')

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Careers', url: '/careers' },
        ]}
      />
      <CareersJsonLd />
      <Careers />
    </>
  )
}
