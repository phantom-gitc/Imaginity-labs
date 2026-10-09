import React from 'react';
import { CTAPanel } from '../ui/CTAPanel';
import { useNavigation } from '../../context/NavigationContext';

export function SolutionsCTA() {
  const { openContact, navigateTo } = useNavigation();

  return (
    <section
      id="solutions-cta"
      data-reveal="cta-section"
      className="relative w-full py-20 sm:py-28 lg:py-36 bg-[#FFFFFF] overflow-hidden border-b border-[#E6E8EE]"
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12">
        <CTAPanel
          eyebrow="HAVE A CHALLENGE?"
          headingPart1="Tell us what you’re trying to"
          headingHighlight="build."
          description="You don't need to know the exact technology or architecture. Tell us what you're trying to achieve, and we'll help define the right solution."
          primaryBtnText="Start a Project →"
          secondaryBtnText="View Our Work →"
          onPrimaryClick={() => openContact()}
          onSecondaryClick={() => navigateTo('/', '#work')}
          pipelineSummary={[
            {
              name: 'Discover',
              step: '01',
              desc: 'Understand goals, users, constraints & technical scope',
            },
            {
              name: 'Design',
              step: '02',
              desc: 'Tactile high-fi prototypes & system architecture RFC',
            },
            {
              name: 'Deliver',
              step: '03',
              desc: 'Production-ready build with full IP & codebase ownership',
            },
          ]}
        />
      </div>
    </section>
  );
}
