import Insights from '../../views/Insights'
import { staticRouteMetadata } from '../../lib/seo'
import { BreadcrumbJsonLd, BlogJsonLd } from '../../components/seo/JsonLd'

export const metadata = staticRouteMetadata('/insights')

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Insights', url: '/insights' },
        ]}
      />
      <BlogJsonLd />
      <Insights />
    </>
  )
}
