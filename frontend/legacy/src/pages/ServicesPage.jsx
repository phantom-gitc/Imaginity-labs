import React, { useEffect } from 'react';
import { ServicesHero } from '../components/services/ServicesHero';
import { ServicesOverview } from '../components/services/ServicesOverview';
import { DetailedServiceBlocks } from '../components/services/DetailedServiceBlocks';
import { HowServicesFitTogether } from '../components/services/HowServicesFitTogether';
import { ServiceModels } from '../components/services/ServiceModels';
import { WhyNexora } from '../components/services/WhyNexora';
import { ServicesCTA } from '../components/services/ServicesCTA';

export function ServicesPage() {
  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="w-full">
      {/* 1. HERO (light bg, subtle grid, composed artwork, stat chips) */}
      <ServicesHero />

      {/* 2. SERVICES OVERVIEW (tint bg, 4x2 grid) */}
      <ServicesOverview />

      {/* 3. DETAILED SERVICE BLOCKS (light bg, full spectrum, diagrams, steppers) */}
      <DetailedServiceBlocks />

      {/* 4. HOW SERVICES FIT TOGETHER (tint bg, 7-stage delivery journey) */}
      <HowServicesFitTogether />

      {/* 5. SERVICE MODELS (dark bg, 3 flexible engagement models) */}
      <ServiceModels />

      {/* 6. WHY NEXORA (light bg, 5 advantages bento grid) */}
      <WhyNexora />

      {/* 7. FINAL CTA PANEL (blue-violet gradient panel) */}
      <ServicesCTA />
    </div>
  );
}
