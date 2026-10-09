import { FAQ } from '../../data/site'
import { Accordion } from '../ui/Accordion'
import { Eyebrow, H, It, Section } from '../ui/Type'

/** FAQ Section with clean accordion */
export function FAQSection() {
  return (
    <Section bg="light">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <Eyebrow dot="#FFD93D">FAQ</Eyebrow>
          <H size="lg" className="mt-4">
            Common questions, <It>straight answers.</It>
          </H>
          <p className="lede mt-6">
            Transparent pricing, clear intellectual property ownership, and agile delivery timelines.
          </p>
        </div>

        <div className="lg:col-span-7">
          <Accordion items={FAQ} />
        </div>
      </div>
    </Section>
  )
}
