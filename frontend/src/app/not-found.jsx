import NotFoundView from '../views/NotFound'

export const metadata = {
  title: 'Page not found | SureNext',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return <NotFoundView />
}
