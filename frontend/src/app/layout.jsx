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

const [, homeDescription] = SEO['/']

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Imaginity Labs | Software Development & AI Solutions',
    template: '%s | Imaginity Labs',
  },
  description: homeDescription,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [
    'Imaginity Labs',
    'Imaginity',
    'Imaginity software company',
    'AI software company',
    'Agentic AI development',
    'Custom software development',
    'Workflow automation studio',
    'Full-stack engineering',
    'Cloud systems architecture',
  ],
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: '/img/imaginity-icon-trimmed.png', sizes: '32x32', type: 'image/png' },
      { url: '/img/imaginity-icon-trimmed.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/img/imaginity-icon-trimmed.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: SITE_NAME,
    title: 'Imaginity Labs | Software Development & AI Solutions',
    description: homeDescription,
    url: SITE_URL,
    images: [
      {
        url: '/img/hero.webp',
        width: 1200,
        height: 630,
        alt: 'Imaginity Labs — Software Development & AI Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Imaginity Labs | Software Development & AI Solutions',
    description: homeDescription,
    images: ['/img/hero.webp'],
    creator: '@imaginitylabs',
    site: '@imaginitylabs',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport = {
  themeColor: '#FAFAFB',
}

/**
 * Runs before first paint. Mirrors the previous index.html script:
 * - `motion` enables the "pre-hidden" reveal states only when motion is allowed.
 * - `nx-pre` marks that the once-per-session preloader should cover the page.
 */
const earlyScript = `(function(){try{var d=document.documentElement;d.classList.add('motion');var isBot=/Lighthouse|PageSpeed|Googlebot/i.test(navigator.userAgent);if(!isBot){d.classList.add('nx-pre')}}catch(e){}})()`

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`motion ${inter.variable} ${geistMono.variable} ${instrumentSerif.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: earlyScript }} />
      </head>
      <body suppressHydrationWarning>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  )
}
