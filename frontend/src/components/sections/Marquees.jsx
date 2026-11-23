import { Marquee } from '../ui/Marquee'
import { TICKER } from '../../data/site'

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
