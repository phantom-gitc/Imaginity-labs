import { useEffect, useRef } from 'react'
import { Compass, Palette, TrendingUp, Zap } from 'lucide-react'
import { gsap } from '../../lib/gsap'
import { useMagnetic } from '../../hooks/useMagnetic'
import { A } from '../../data/site'
import { Obj } from '../ui/Img'
import { Eyebrow } from '../ui/Type'

const SHADOW_MAP = {
  lavender: 'hover:shadow-[0_12px_32px_-6px_rgba(74,59,208,0.32)]',
  butter: 'hover:shadow-[0_12px_32px_-6px_rgba(138,106,0,0.32)]',
  mint: 'hover:shadow-[0_12px_32px_-6px_rgba(22,122,74,0.32)]',
  sky: 'hover:shadow-[0_12px_32px_-6px_rgba(31,86,196,0.32)]',
}

function InteractiveChip({ chip, Icon, tint, iconMotion }) {
  const chipRef = useRef(null)
  useMagnetic(chipRef, 7)

  return (
    <span
      ref={chipRef}
      className={`group sw tinted tint-${tint} ${SHADOW_MAP[tint] || ''} mr-[0.2em] inline-flex cursor-pointer items-center gap-[0.25em] rounded-full px-[0.45em] align-middle text-[0.62em] leading-[1.5] will-change-transform transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-108 hover:-translate-y-0.5 active:scale-98`}
      aria-hidden="true"
    >
      <Icon
        className={`size-[0.7em] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${iconMotion}`}
        style={{ color: 'var(--tint-ink)' }}
        strokeWidth={1.8}
      />
      <span className="italic transition-colors duration-500">{chip}</span>
    </span>
  )
}

function InteractiveImagePill({ img }) {
  const pillRef = useRef(null)
  useMagnetic(pillRef, 7)

  return (
    <span
      ref={pillRef}
      className="group sw mr-[0.22em] inline-block h-[0.82em] w-[1.7em] -translate-y-[0.06em] cursor-pointer overflow-hidden rounded-full align-middle will-change-transform transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-115 hover:-translate-y-0.5 hover:rotate-1 hover:shadow-[0_14px_32px_-6px_rgba(0,0,0,0.3)] active:scale-98"
      aria-hidden="true"
    >
      <img
        src={img.src}
        width={img.w}
        height={img.h}
        alt=""
        loading="lazy"
        className="size-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
      />
    </span>
  )
}

const TOKENS = [
  'Crafting',
  { chip: 'Creativity', icon: Palette, tint: 'lavender', iconMotion: 'group-hover:rotate-12 group-hover:scale-125' },
  'and',
  { chip: 'Innovation', icon: Zap, tint: 'butter', iconMotion: 'group-hover:-rotate-12 group-hover:scale-125' },
  'into software, AI and automation for',
  { img: A.team },
  'teams that',
  { chip: 'Scale', icon: TrendingUp, tint: 'mint', iconMotion: 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-125' },
  'with',
  { chip: 'Strategy', icon: Compass, tint: 'sky', iconMotion: 'group-hover:rotate-45 group-hover:scale-125' },
]

/** Large statement: key words are pastel chips; words fade gray → ink as you scroll (scrubbed). */
export function Statement() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = ref.current?.querySelectorAll('.sw')
      if (words && words.length) {
        gsap.fromTo(
          words,
          { opacity: 0.18 },
          {
            opacity: 1,
            ease: 'none',
            stagger: 0.18,
            scrollTrigger: { trigger: ref.current, start: 'top 80%', end: 'bottom 55%', scrub: 0.5 },
          },
        )
      }
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section data-bg="light" className="section relative overflow-hidden">
      <div className="wrap relative flex flex-col items-center text-center">
        <Eyebrow dot="#C45CB0">What we believe</Eyebrow>
        <p
          ref={ref}
          className="display mt-8 w-full max-w-none text-center text-[clamp(44px,5.8vw,92px)] !leading-[1.18] tracking-[-0.02em] md:!leading-[1.20]"
          aria-label="Crafting creativity and innovation into software, AI and automation for teams that scale with strategy."
        >
          {TOKENS.map((t, i) => {
            if (typeof t === 'string') {
              return t.split(' ').map((w, j) => (
                <span key={`${i}-${j}`} className="sw inline-block pr-[0.22em]" aria-hidden="true">{w}</span>
              ))
            }
            if (t.img) {
              return <InteractiveImagePill key={i} img={t.img} />
            }
            return (
              <InteractiveChip
                key={i}
                chip={t.chip}
                Icon={t.icon}
                tint={t.tint}
                iconMotion={t.iconMotion}
              />
            )
          })}
        </p>
      </div>
      <div data-parallax="14" className="pointer-events-none absolute -right-6 top-8 -z-10 hidden w-[clamp(140px,18vw,260px)] opacity-60 md:block">
        <Obj img={A.obj[1]} className="w-full rotate-12" />
      </div>
      <div className="pointer-events-none absolute bottom-4 left-[2%] -z-10 hidden w-[clamp(90px,11vw,160px)] -rotate-12 opacity-70 md:block" data-reveal="fade">
        <Obj img={A.obj[4]} className="w-full" />
      </div>
    </section>
  )
}
