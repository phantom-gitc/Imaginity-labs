import React from 'react';
import { CTAPanel } from '../ui/CTAPanel';
import { useNavigation } from '../../context/NavigationContext';

export function ServicesCTA() {
  const { openContact, navigateTo } = useNavigation();

  return (
    <section
      id="services-cta"
      data-reveal="cta-section"
      className="relative w-full py-20 sm:py-28 lg:py-36 bg-[#FFFFFF] overflow-hidden border-b border-[#E6E8EE]"
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12">
        <CTAPanel
          eyebrow="READY TO BUILD?"
          headingPart1="Tell us what you need. We'll help you figure out the"
          headingHighlight="rest."
          description="Whether you need a new product, an AI system, business automation or help modernizing an existing platform, let’s discuss your goals."
          primaryBtnText="Start a Project →"
          secondaryBtnText="View Our Work →"
          onPrimaryClick={() => openContact()}
          onSecondaryClick={() => navigateTo('/', '#work')}
          pipelineSummary={[
            {
              name: 'Plan',
              step: '01',
              desc: 'Product strategy, discovery & technical roadmapping',
            },
            {
              name: 'Design & Build',
              step: '02',
              desc: 'Tactile UI/UX design, full-stack engineering & AI pipelines',
            },
            {
              name: 'Launch & Scale',
              step: '03',
              desc: 'Cloud deployment, continuous telemetry & ongoing support',
            },
          ]}
        />
      </div>
    </section>
  );
}
