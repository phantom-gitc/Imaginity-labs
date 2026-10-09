import Insights from '../../views/Insights'
import { staticRouteMetadata } from '../../lib/seo'

export const metadata = staticRouteMetadata('/insights')

export default function Page() {
  return <Insights />
}
