import Home from '../views/Home'
import { staticRouteMetadata } from '../lib/seo'
import { OrganizationJsonLd } from '../components/seo/JsonLd'

export const metadata = staticRouteMetadata('/')

export default function Page() {
  return (
    <>
      <OrganizationJsonLd />
      <Home />
    </>
  )
}