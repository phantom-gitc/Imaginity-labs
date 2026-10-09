import React, { useEffect } from 'react';
import { AboutHero } from '../components/about/AboutHero';
import { AboutStoryMissionVision } from '../components/about/AboutStoryMissionVision';
import { AboutBeliefsAndMindset } from '../components/about/AboutBeliefsAndMindset';
import { AboutHowWeThinkAndWork } from '../components/about/AboutHowWeThinkAndWork';
import { AboutDifferenceAndCulture } from '../components/about/AboutDifferenceAndCulture';
import { AboutJourneyAndTeam } from '../components/about/AboutJourneyAndTeam';
import { AboutCommitmentAndCareers } from '../components/about/AboutCommitmentAndCareers';
import { AboutCTA } from '../components/about/AboutCTA';

export function AboutPage() {
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
      {/* 1. HERO ("We build technology with a reason.") */}
      <AboutHero />

      {/* 2. OUR STORY + MISSION + VISION */}
      <AboutStoryMissionVision />

      {/* 3. OUR BELIEFS (6 Principles) + TECHNOLOGY MINDSET */}
      <AboutBeliefsAndMindset />

      {/* 4. HOW WE THINK (Pipeline) + HOW WE WORK (Collaboration) */}
      <AboutHowWeThinkAndWork />

      {/* 5. WHAT MAKES US DIFFERENT (Dark Section) + CULTURE */}
      <AboutDifferenceAndCulture />

      {/* 6. OUR JOURNEY + TEAM / FOUNDER + TECH ECOSYSTEM */}
      <AboutJourneyAndTeam />

      {/* 7. OUR COMMITMENT + CAREERS CTA */}
      <AboutCommitmentAndCareers />

      {/* 8. FINAL CTA ("Have a problem worth solving?") */}
      <AboutCTA />
    </div>
  );
}
