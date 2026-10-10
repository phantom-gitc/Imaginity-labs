import About from '../../views/About'
import { staticRouteMetadata } from '../../lib/seo'
import { BreadcrumbJsonLd, AboutJsonLd } from '../../components/seo/JsonLd'

export const metadata = staticRouteMetadata('/about')

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'About', url: '/about' },
        ]}
      />
      <AboutJsonLd />
      <About />
    </>
  )
}
