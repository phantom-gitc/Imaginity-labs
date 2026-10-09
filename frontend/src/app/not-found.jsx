import NotFoundView from '../views/NotFound'

export const metadata = {
  title: 'Page not found | Imaginity Labs',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return <NotFoundView />
}
