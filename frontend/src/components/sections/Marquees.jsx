import { useRef } from 'react'
import { Marquee } from '../ui/Marquee'
import { useMagnetic } from '../../hooks/useMagnetic'
import { TICKER } from '../../data/site'
import {
  GoogleCloudLogo, VercelLogo, AWSLogo, NvidiaLogo, OpenAILogo, MongoDBLogo, SupabaseLogo, StripeLogo,
} from '../ui/Logos'
import { Eyebrow } from '../ui/Type'

const LOGOS = [
  { n: 'Google Cloud', C: GoogleCloudLogo, c: '#4285F4' },
  { n: 'Vercel', C: VercelLogo, c: '#0A0A0A' },
  { n: 'AWS', C: AWSLogo, c: '#FF9900' },
  { n: 'NVIDIA', C: NvidiaLogo, c: '#76B900' },
  { n: 'OpenAI', C: OpenAILogo, c: '#10A37F' },
  { n: 'MongoDB', C: MongoDBLogo, c: '#13AA52' },
  { n: 'Supabase', C: SupabaseLogo, c: '#3ECF8E' },
  { n: 'Stripe', C: StripeLogo, c: '#635BFF' },
]

function MagneticLogo({ n, C, c }) {
  const ref = useRef(null)
  useMagnetic(ref, 12)
  return (
    <span ref={ref} className="logo-item min-h-11 items-center px-2" style={{ '--hc': c }} title={n}>
      <C className="h-6 w-auto" />
    </span>
  )
}

/** Grayscale logo marquee — colour on hover. */
export function LogoMarquee() {
  return (
    <section data-bg="light" aria-label="Technology partners" className="relative border-y border-line py-10 md:py-14">
      <div className="wrap mb-8 flex flex-wrap items-center justify-between gap-3">
        <Eyebrow dot="#3B5BFF">Trusted by 40+ teams &amp; platforms</Eyebrow>
      </div>
      <Marquee speed={2.6} className="[mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        {LOGOS.map((l) => (
          <MagneticLogo key={l.n} {...l} />
        ))}
      </Marquee>
    </section>
  )
}

/** Mid-page word ticker band (Maxflow). */
export function TickerBand({ dark = true }) {
  return (
    <div data-bg="light" aria-hidden="true" className={`overflow-hidden py-5 md:py-7 ${dark ? 'bg-dark text-white' : 'border-y border-line'}`}>
      <Marquee speed={4.2}>
        {TICKER.map((t, i) => (
          <span key={t} className="flex items-center gap-[clamp(40px,6vw,88px)] whitespace-nowrap">
            <span className={`display text-[clamp(32px,5vw,64px)] ${i % 2 ? 'italic text-yellow' : ''}`}>{t}</span>
            <span className="size-2 rounded-full bg-yellow inline-block" />
          </span>
        ))}
      </Marquee>
    </div>
  )
}
