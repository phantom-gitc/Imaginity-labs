import Solutions from '../../views/Solutions'
import { staticRouteMetadata } from '../../lib/seo'
import { BreadcrumbJsonLd, SolutionsJsonLd } from '../../components/seo/JsonLd'

export const metadata = staticRouteMetadata('/solutions')

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Solutions', url: '/solutions' },
        ]}
      />
      <SolutionsJsonLd />
      <Solutions />
    </>
  )
}
