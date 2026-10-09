import React, { useEffect } from 'react';
import { SolutionsHero } from '../components/solutions/SolutionsHero';
import { SolutionsCategoriesOverview } from '../components/solutions/SolutionsCategoriesOverview';
import { DetailedSolutionBlocks } from '../components/solutions/DetailedSolutionBlocks';
import { IndustrySolutions } from '../components/solutions/IndustrySolutions';
import { SolutionsByBusinessNeed } from '../components/solutions/SolutionsByBusinessNeed';
import { TechnologyApproach } from '../components/solutions/TechnologyApproach';
import { HowWeDeliver } from '../components/solutions/HowWeDeliver';
import { SolutionsCTA } from '../components/solutions/SolutionsCTA';

export function SolutionsPage() {
  // Ensure page scrolls to top or target hash when rendered
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
      {/* 1. HERO (light bg, subtle grid, composed glass visual, trust strip) */}
      <SolutionsHero />

      {/* 2. SOLUTION CATEGORIES OVERVIEW (tint bg, 4x2 grid) */}
      <SolutionsCategoriesOverview />

      {/* 3. DETAILED SOLUTION BLOCKS (light bg, 8 categories, flow diagrams, stepper) */}
      <DetailedSolutionBlocks />

      {/* 4. INDUSTRY SOLUTIONS (tint bg, 4x2 grid) */}
      <IndustrySolutions />

      {/* 5. SOLUTION BY BUSINESS NEED (dark bg, 6 interactive tabs) */}
      <SolutionsByBusinessNeed />

      {/* 6. TECHNOLOGY APPROACH (light bg, 5 principle bento cards) */}
      <TechnologyApproach />

      {/* 7. HOW WE DELIVER (tint bg, 6-step horizontal timeline) */}
      <HowWeDeliver />

      {/* 8. FINAL CTA PANEL (blue-violet gradient panel with pipeline widget) */}
      <SolutionsCTA />
    </div>
  );
}
