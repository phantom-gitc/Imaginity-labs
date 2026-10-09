import { Inter, Geist_Mono, Instrument_Serif } from 'next/font/google'
import './globals.css'
import { AppShell } from '../components/layout/AppShell'
import { SITE_URL, SITE_NAME } from '../lib/site-url'
import { SEO } from '../data/site'

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'], display: 'swap', variable: '--font-inter' })
const geistMono = Geist_Mono({ subsets: ['latin'], weight: ['400', '500'], display: 'swap', variable: '--font-geist-mono' })
const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-instrument-serif',
})

const [homeTitle, homeDescription] = SEO['/']

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: homeTitle,
  description: homeDescription,
  applicationName: SITE_NAME,
  icons: { icon: '/img/imaginity-icon-trimmed.png' },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: homeTitle,
    description: 'Software, agentic AI and automation for teams that ship.',
    images: [{ url: '/img/hero.webp' }],
  },
  twitter: { card: 'summary_large_image' },
}

export const viewport = {
  themeColor: '#FAFAFB',
}

/**
 * Runs before first paint. Mirrors the previous index.html script:
 * - `motion` enables the "pre-hidden" reveal states only when motion is allowed.
 * - `nx-pre` marks that the once-per-session preloader should cover the page.
 */
const earlyScript = `(function(){try{var d=document.documentElement;var r=window.matchMedia('(prefers-reduced-motion: reduce)').matches;if(!r){d.classList.add('motion');if(!sessionStorage.getItem('nx_pre'))d.classList.add('nx-pre')}}catch(e){}})()`

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable} ${instrumentSerif.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: earlyScript }} />
      </head>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  )
}
