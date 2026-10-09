import Contact from '../../views/Contact'
import { staticRouteMetadata } from '../../lib/seo'

export const metadata = staticRouteMetadata('/contact')

export default function Page() {
  return <Contact />
}
