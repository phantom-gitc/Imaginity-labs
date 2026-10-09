import React from 'react';
import { CTAPanel } from '../ui/CTAPanel';
import { useNavigation } from '../../context/NavigationContext';

export function AboutCTA() {
  const { openContact, navigateTo } = useNavigation();

  return (
    <section
      id="about-cta"
      data-reveal="cta-section"
      className="relative w-full py-20 sm:py-28 lg:py-36 bg-[#FFFFFF] overflow-hidden border-b border-[#E6E8EE]"
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12">
        <CTAPanel
          eyebrow="LET'S BUILD TOGETHER"
          headingPart1="Have a problem worth"
          headingHighlight="solving?"
          description="Tell us what you're trying to accomplish. We'll help you explore the technology, product and path forward."
          primaryBtnText="Start a Project →"
          secondaryBtnText="Explore Our Work →"
          onPrimaryClick={() => openContact()}
          onSecondaryClick={() => navigateTo('/', '#work')}
          pipelineSummary={[
            {
              name: 'Problem',
              step: '01',
              desc: 'Understand the business goal and core user challenge',
            },
            {
              name: 'Architecture',
              step: '02',
              desc: 'Select the right technology and design system blueprint',
            },
            {
              name: 'Outcome',
              step: '03',
              desc: 'Deploy resilient software that delivers measurable value',
            },
          ]}
        />
      </div>
    </section>
  );
}
