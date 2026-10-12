import Home from '../views/Home'
import { staticRouteMetadata } from '../lib/seo'
import { WebSiteJsonLd, OrganizationJsonLd, SiteNavigationJsonLd, FAQPageJsonLd } from '../components/seo/JsonLd'

export const metadata = staticRouteMetadata('/')

export default function Page() {
  return (
    <>
      <WebSiteJsonLd />
      <OrganizationJsonLd />
      <SiteNavigationJsonLd />
      <FAQPageJsonLd />
      <Home />
    </>
  )
}