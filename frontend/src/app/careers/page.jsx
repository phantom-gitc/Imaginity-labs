import Careers from '../../views/Careers'
import { staticRouteMetadata } from '../../lib/seo'

export const metadata = staticRouteMetadata('/careers')

export default function Page() {
  return <Careers />
}
