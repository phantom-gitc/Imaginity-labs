import Image from 'next/image'
import { Clock } from 'lucide-react'
import { A } from '../../data/site'
import { Button } from './Button'
import { Eyebrow, H, It } from './Type'
import { Obj } from './Img'

/** Blue→violet CTA panel (28px radius) with floating glass card on the right. */
export function CTAPanel({ title, line = 'Tell us what you are building. We reply within one working day.' }) {
  return (
    <section data-bg="light" className="section-tight">
      <div className="wrap">
        <div className="relative isolate overflow-hidden rounded-[28px] p-8 text-white md:p-16" style={{ background: 'var(--grad-cta)' }}>
          <div className="grain-local" aria-hidden="true" />
          <div className="blob -right-24 -top-24 h-[420px] w-[420px] opacity-60" aria-hidden="true" />
          <div className="absolute inset-0 -z-10 opacity-40" aria-hidden="true" style={{ backgroundImage: 'radial-gradient(circle, rgb(255 255 255 / .35) 1px, transparent 1.4px)', backgroundSize: '28px 28px', maskImage: 'linear-gradient(120deg, #000, transparent 60%)', WebkitMaskImage: 'linear-gradient(120deg, #000, transparent 60%)' }} />
          <div className="relative grid items-center gap-12 lg:grid-cols-12">
            <div className="flex flex-col items-start gap-6 lg:col-span-7">
              <Eyebrow dot="#FFD93D" className="!text-white/70">Start a project</Eyebrow>
              <H size="xl">{title || (<>Let&apos;s build something <It>remarkable</It></>)}</H>
              <p data-reveal="up" className="max-w-[34ch] text-white/75">{line}</p>
              <div data-reveal="up" className="flex flex-wrap gap-3 pt-2">
                <Button to="/contact" variant="yellow">Start a project</Button>
                <Button to="/work" variant="ghost-light">See our work</Button>
              </div>
            </div>

            <div className="relative min-h-[260px] lg:col-span-5">
              <div className="float absolute -top-8 right-0 grid size-28 place-items-center rounded-full bg-white shadow-[0_12px_30px_-12px_rgba(10,10,60,.5)] md:-top-14 md:right-4 md:size-32" style={{ '--rot': '-3deg' }} aria-hidden="true">
                <Obj img={A.obj[0]} className="w-[80%]" />
              </div>
              <div className="glass float rot-b relative ml-auto max-w-[340px] !border-white/30 !bg-white/15 p-5 text-white" style={{ '--rot': '2deg' }}>
                <div className="flex items-center gap-3">
                  <div className="-space-x-2">
                    <div className="flex -space-x-2">
                      {A.portrait.slice(0, 3).map((p, i) => (
                        <Image key={i} src={p.src} width={40} height={40} alt="" className="size-10 rounded-full border-2 border-white/80 object-cover" />
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Talk to a senior lead</p>
                    <p className="flex items-center gap-2 text-xs text-white/70"><span className="live-dot" /> Available this week</p>
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between rounded-2xl bg-white/90 p-3 text-ink">
                  <span className="flex items-center gap-2 text-sm"><Clock size={16} /> 30 min intro call</span>
                  <span className="mono">Free</span>
                </div>
              </div>
              <div className="sticker rot-a absolute -bottom-2 left-4 md:left-12">24h reply</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
