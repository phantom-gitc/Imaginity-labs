import Work from '../../views/Work'
import { staticRouteMetadata } from '../../lib/seo'
import { BreadcrumbJsonLd, WorkJsonLd } from '../../components/seo/JsonLd'

export const metadata = staticRouteMetadata('/work')

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Work', url: '/work' },
        ]}
      />
      <WorkJsonLd />
      <Work />
    </>
  )
}
