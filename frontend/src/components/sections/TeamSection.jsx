import { TEAM } from '../../data/work'
import { A } from '../../data/site'
import { Eyebrow, H, It, Section } from '../ui/Type'
import { Portrait } from '../ui/Img'

/** Team section: portraits on pastel arch backgrounds that tilt slightly on hover. */
export function TeamSection() {
  const tintColors = {
    lavender: '#E9E4FF',
    blush: '#FFE1EA',
    sky: '#DCEBFF',
    mint: '#DDF5E6',
    peach: '#FFE6D2',
    butter: '#FFF3B0',
  }

  return (
    <Section bg="light">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <Eyebrow dot="#C45CB0">Creative Minds</Eyebrow>
          <H size="lg" className="mt-4">
            Makers at the <It>helm.</It>
          </H>
        </div>
        <p className="lede">
          No layers of account reps. You talk directly with the designers and engineers building your product.
        </p>
      </div>

      <div data-reveal="stagger" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {TEAM.map((member) => (
          <div
            key={member.name}
            className="group flex flex-col transition-transform duration-500 hover:-translate-y-2"
          >
            <div className="relative overflow-hidden rounded-[24px] transition-transform duration-500 group-hover:rotate-1">
              <Portrait
                img={A.portrait[member.p]}
                tint={tintColors[member.tint] || '#E9E4FF'}
                scale={member.scale}
                pos={member.pos}
                alt={member.name}
                ratio="4/5"
              />
            </div>
            <div className="mt-4">
              <h4 className="display text-xl text-ink">{member.name}</h4>
              <p className="text-sm text-ink/60">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
