import { Frame } from '../ui/Img'
import { Stat } from '../ui/Cards'
import { Eyebrow, H, It, Section } from '../ui/Type'
import { A, STATS } from '../../data/site'
import { Globe } from 'lucide-react'
import { AnimatedCounter } from '../ui/AnimatedCounter'

export function StatsRow() {
  return (
    <Section bg="light" tight>
      <div className="g12 items-center gap-y-14">
        <div className="relative col-span-12 md:col-span-5">
          <Frame img={A.team} ratio="4/5" parallax={8} pos="42% 50%" alt="The Imaginity team collaborating at a long studio table" className="!rounded-t-[999px]" />
          <div className="glass float rot-a absolute -right-3 bottom-8 z-10 flex items-center gap-3 px-4 py-3 md:-right-8" style={{ '--rot': '-2deg' }}>
            <span className="ico-sq !size-10"><Globe size={18} /></span>
            <span className="leading-tight">
              <b className="display block text-[26px]">
                <AnimatedCounter value={4} />
              </b>
              <span className="mono !text-[9px] text-ink/55">countries served</span>
            </span>
          </div>
          <span className="sticker rot-b absolute -left-2 top-16 z-10">Est. 2026</span>
        </div>
        <div className="col-span-12 md:col-span-7 lg:pl-12">
          <Eyebrow dot="#FFD93D">In numbers</Eyebrow>
          <H size="lg" className="mt-5 max-w-[12ch]">Small team, <It>big</It> output</H>
          <div data-reveal="stagger" className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12">
            {STATS.map((s) => (
              <Stat key={s.label} n={s.n} suffix={s.suffix} label={s.label} className="border-t border-line pt-6" />
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
