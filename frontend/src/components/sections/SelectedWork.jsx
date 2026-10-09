import { CASES } from '../../data/work'
import { WorkCard } from '../ui/Cards'
import { Eyebrow, H, It, Section } from '../ui/Type'
import { ArrowLink } from '../ui/Button'

/** Selected Work on the warm beige band (#F4EFE6) — 2x2 grid of image-led cards. */
export function SelectedWork() {
  const selected = CASES.slice(0, 4)

  return (
    <Section bg="warm" className="text-[#0A0A0A]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
        <div>
          <Eyebrow dot="#3B5BFF">Selected Work</Eyebrow>
          <H size="lg" className="mt-4">
            Proof in <It>production.</It>
          </H>
        </div>
        <div className="flex flex-col items-start md:items-end gap-3">
          <p className="lede text-ink/70">
            Real products, verifiable metrics, zero stock templates.
          </p>
          <ArrowLink to="/work">View all 6 case studies</ArrowLink>
        </div>
      </div>

      <div data-reveal="stagger" className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {selected.map((c, i) => (
          <WorkCard key={c.slug} c={c} index={i} ratio="16/10" />
        ))}
      </div>
    </Section>
  )
}
