import { ArrowUpRight } from 'lucide-react'
import { TLink } from './TLink'
import { ArrowCircle } from './Button'
import { Frame } from './Img'
import { Tag } from './Type'
import { AnimatedCounter } from './AnimatedCounter'

/** Giant serif number with superscript +, mono label, count-up on enter. */
export function Stat({ n, suffix = '', label, decimals = 0, className = '' }) {
  const plus = suffix === '+'
  return (
    <div className={className}>
      <div className="num-xl flex items-start leading-none">
        <AnimatedCounter value={n} decimals={decimals} />
        {suffix && (
          <span className={plus ? 'mt-[0.12em] ml-1 text-[0.42em] leading-none it' : 'ml-1 text-[0.4em] self-end leading-none muted'}>{suffix}</span>
        )}
      </div>
      <p className="eyebrow mt-4">{label}</p>
    </div>
  )
}

/** Image-led work card. Hover: image zoom + "View case" cursor + arrow rotates. */
export function WorkCard({ c, ratio = '4/3', index, className = '', flip = false }) {
  return (
    <TLink to={`/work/${c.slug}`} className={`group block ${className}`} data-cursor="View case" {...(flip ? { 'data-flip-id': c.slug } : {})}>
      <Frame img={c.img} ratio={ratio} grade bg={`var(--c-${c.tint}, #E9E4FF)`} alt={`${c.title} — ${c.line}`}>
        <div className="absolute inset-x-0 top-0 z-10 flex items-start justify-between p-4 md:p-5">
          <Tag tint={c.tint}>{c.category}</Tag>
          {index != null && <span className="mono rounded-full bg-white/80 px-3 py-2 backdrop-blur">{String(index + 1).padStart(2, '0')}</span>}
        </div>
      </Frame>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="display h-sm">{c.title}</h3>
          <p className="muted mt-2 line-clamp-1 text-[15px]">{c.line}</p>
        </div>
        <ArrowCircle />
      </div>
    </TLink>
  )
}

/** Blog card with image overlay + category tag. */
export function BlogCard({ a, className = '', ratio = '4/5' }) {
  return (
    <TLink to={`/insights/${a.slug}`} className={`group relative block overflow-hidden rounded-[24px] bg-dark text-white ${className}`} data-cursor="Read" style={{ aspectRatio: ratio }}>
      <div className="card-media absolute inset-0 rounded-none">
        <img src={a.cover.src} width={a.cover.w} height={a.cover.h} alt="" loading="lazy" decoding="async" className="size-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12] via-[#0a0a12]/40 to-transparent" />
      <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5">
        <Tag tint={a.tint}>{a.category}</Tag>
        <span className="mono rounded-full bg-black/40 px-3 py-2 text-white backdrop-blur">{a.readTime}</span>
      </div>
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-6">
        <h3 className="display h-sm line-clamp-3 max-w-[18ch] text-white">{a.title}</h3>
        <span className="arrow-btn"><ArrowUpRight /></span>
      </div>
    </TLink>
  )
}
