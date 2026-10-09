import Solutions from '../../views/Solutions'
import { staticRouteMetadata } from '../../lib/seo'

export const metadata = staticRouteMetadata('/solutions')

export default function Page() {
  return <Solutions />
}
