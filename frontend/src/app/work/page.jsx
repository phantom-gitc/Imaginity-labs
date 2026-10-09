import Work from '../../views/Work'
import { staticRouteMetadata } from '../../lib/seo'

export const metadata = staticRouteMetadata('/work')

export default function Page() {
  return <Work />
}
