import About from '../../views/About'
import { staticRouteMetadata } from '../../lib/seo'

export const metadata = staticRouteMetadata('/about')

export default function Page() {
  return <About />
}
