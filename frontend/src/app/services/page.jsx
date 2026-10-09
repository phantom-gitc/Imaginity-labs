import Services from '../../views/Services'
import { staticRouteMetadata } from '../../lib/seo'

export const metadata = staticRouteMetadata('/services')

export default function Page() {
  return <Services />
}
