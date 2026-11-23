import { Inter, Geist_Mono, Instrument_Serif, Poppins } from 'next/font/google'
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
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-poppins',
})

const [, homeDescription] = SEO['/']

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'SureNext | Software & Product Studio',
    template: '%s | SureNext',
  },
  description: homeDescription,
  applicationName: 'SureNext',
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [
    'SureNext',
    'Sure Next',
    'surenext',
    'surenext.studio',
    'surenext.com',
    'SureNext Studio',
    'SureNext Digital',
    'SureNext Software',
    'SureNext Technology',
    'SureNext Bhubaneswar',

    // Studio & service keywords
    'software product studio',
    'custom software development',
    'web application development',
    'AI feature development',
    'retrieval augmented generation',
    'workflow automation',
    'full-stack engineering',
    'cloud systems architecture',
    'SaaS product development',
    'Next.js development',
    'React development',
    'product design studio',
    'Bhubaneswar software studio',
  ],
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: '/img/surenext-icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/img/surenext-icon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/img/surenext-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'SureNext',
    title: 'SureNext | Software & Product Studio',
    description: homeDescription,
    url: SITE_URL,
    images: [
      {
        url: '/img/surenext-og.png',
        width: 1200,
        height: 630,
        alt: 'SureNext — software and product studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SureNext | Software & Product Studio',
    description: homeDescription,
    images: ['/img/surenext-og.png'],
    creator: '@surenext',
    site: '@surenext',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
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
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

/**
 * Runs before first paint. The preloader is server-rendered visible by default so it
 * cannot be lost if this inline script is stripped by a CSP. The script only removes it
 * for reduced-motion users and bots; normal visitors keep the branded intro.
 *
 * - `motion` enables the "pre-hidden" reveal states only when motion is allowed.
 * - `nx-pre` keeps the preloader visible until its timeline releases it.
 */
const earlyScript = `(function(){try{var d=document.documentElement;var isBot=/Lighthouse|PageSpeed|Googlebot/i.test(navigator.userAgent);d.classList.add('motion');if(isBot){d.classList.remove('nx-pre')}}catch(e){}})()`

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable} ${instrumentSerif.variable} ${poppins.variable} nx-pre`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: earlyScript }} />
      </head>
      <body suppressHydrationWarning>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  )
}
