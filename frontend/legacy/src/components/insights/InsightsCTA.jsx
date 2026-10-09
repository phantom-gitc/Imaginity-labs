import React from 'react';
import { CTAPanel } from '../ui/CTAPanel';
import { useNavigation } from '../../context/NavigationContext';

export function InsightsCTA() {
  const { openContact, navigateTo } = useNavigation();

  return (
    <section
      id="insights-cta"
      data-reveal="insights-cta"
      className="relative w-full py-20 sm:py-28 lg:py-36 bg-[#FFFFFF] overflow-hidden border-b border-[#E6E8EE]"
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12">
        <CTAPanel
          eyebrow="BUILDING SOMETHING?"
          headingPart1="Let's turn ideas into"
          headingHighlight="working technology."
          description="If an article helped you identify an opportunity, challenge or idea worth exploring, let's talk about it."
          primaryBtnText="Start a Project →"
          secondaryBtnText="Explore Our Services →"
          onPrimaryClick={() => openContact()}
          onSecondaryClick={() => navigateTo('/services')}
          pipelineSummary={[
            {
              name: 'Explore',
              step: '01',
              desc: 'Discuss technical feasibility, architecture and tradeoffs',
            },
            {
              name: 'Prototype',
              step: '02',
              desc: 'Build working proofs of concept and validate core hypotheses',
            },
            {
              name: 'Scale',
              step: '03',
              desc: 'Engineer resilient production systems built to evolve',
            },
          ]}
        />
      </div>
    </section>
  );
}
