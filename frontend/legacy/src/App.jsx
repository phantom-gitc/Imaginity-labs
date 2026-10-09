import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustedBy } from './components/TrustedBy';
import { WhatWeDo } from './components/WhatWeDo';
import { OurApproach } from './components/OurApproach';
import { SelectedWork } from './components/SelectedWork';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Preloader } from './components/ui/Preloader';
import { SolutionsPage } from './pages/SolutionsPage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { InsightsPage } from './pages/InsightsPage';

function MainContent() {
  const { currentPath, isContactOpen, closeContact, selectedProject, openContact } =
    useNavigation();

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-[#0A0A0F] font-sans antialiased selection:bg-[#2F5BFF] selection:text-white">
      {/* 0. Page Load Preloader */}
      <Preloader />

      {/* 1. Subtle Film Grain Texture */}
      <div className="film-grain" />

      {/* 2. Top Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* 3. Custom Precision Cursor with Label Bubble Support */}
      <CustomCursor />

      {/* 4. Floating Pill Navbar */}
      <Navbar />

      {/* 5. Main Route View */}
      <main className="w-full">
        {currentPath === '/insights' ? (
          <InsightsPage />
        ) : currentPath === '/about' ? (
          <AboutPage />
        ) : currentPath === '/services' ? (
          <ServicesPage />
        ) : currentPath === '/solutions' ? (
          <SolutionsPage />
        ) : (
          <>
            {/* Hero Section */}
            <Hero onOpenContact={() => openContact()} />

            {/* Trusted By Marquee Strip */}
            <TrustedBy />

            {/* Capabilities Section */}
            <WhatWeDo onOpenContact={() => openContact()} />

            {/* Our Approach (The ONE Dark Section on Home) */}
            <OurApproach />

            {/* Selected Work Showcase */}
            <SelectedWork onOpenContact={(project) => openContact(project)} />

            {/* CTA Section with Blue-Violet Gradient Panel */}
            <CTASection onOpenContact={() => openContact()} />
          </>
        )}
      </main>

      {/* 6. Footer (Light BG-Soft Section) */}
      <Footer />

      {/* 7. Contact & Project Inquiry Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={closeContact}
        selectedProject={selectedProject}
      />
    </div>
  );
}

export default function App() {
  return (
    <NavigationProvider>
      <MainContent />
    </NavigationProvider>
  );
}
