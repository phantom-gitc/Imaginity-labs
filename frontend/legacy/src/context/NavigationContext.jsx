import React, { createContext, useState, useEffect, useCallback } from 'react';

export const NavigationContext = createContext(null);

export function NavigationProvider({ children }) {
  // Read initial path from window.location.pathname
  const [currentPath, setCurrentPath] = useState(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path.startsWith('/about')) return '/about';
      if (path.startsWith('/services')) return '/services';
      if (path.startsWith('/solutions')) return '/solutions';
      return '/';
    }
    return '/';
  });

  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Sync document title and meta description based on route
  useEffect(() => {
    const metaDesc = document.querySelector('meta[name="description"]');

    if (currentPath === '/insights') {
      document.title = 'Insights | Nexora Labs — Software, AI & Technology';
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Explore practical insights from Nexora Labs on AI, software engineering, automation, product development, cloud architecture and emerging technology.'
        );
      }
    } else if (currentPath === '/about') {
      document.title = 'About Nexora Labs | Software, AI & Technology Company';
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Learn about Nexora Labs, our mission, engineering philosophy and approach to building software, AI systems, automation and scalable digital products.'
        );
      }
    } else if (currentPath === '/services') {
      document.title = 'Services | Nexora Labs — Software Development, AI & Automation';
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Explore Nexora Labs services across software development, AI, automation, product design, cloud infrastructure, system architecture, data and ongoing technology support.'
        );
      }
    } else if (currentPath === '/solutions') {
      document.title = 'Solutions | Nexora Labs — Software, AI & Technology Solutions';
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Explore software, AI, automation, enterprise, cloud and data solutions from Nexora Labs. We design and build technology around real business needs.'
        );
      }
    } else {
      document.title = 'NEXORA LABS — High-Impact Software, AI & Automation Studio';
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'We build software that moves businesses forward. High-velocity digital products, agentic AI systems, and resilient automation engineered for category leaders.'
        );
      }
    }
  }, [currentPath]);

  // Listen to browser popstate (back/forward button)
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path.startsWith('/about')) {
        setCurrentPath('/about');
      } else if (path.startsWith('/services')) {
        setCurrentPath('/services');
      } else if (path.startsWith('/solutions')) {
        setCurrentPath('/solutions');
      } else {
        setCurrentPath('/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = useCallback((path, hash = '') => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path + (hash ? hash : ''));
      setCurrentPath(path);
      if (hash) {
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentPath]);

  const openContact = useCallback((project = null) => {
    setSelectedProject(project);
    setIsContactOpen(true);
  }, []);

  const closeContact = useCallback(() => {
    setIsContactOpen(false);
    setSelectedProject(null);
  }, []);

  return (
    <NavigationContext.Provider
      value={{
        currentPath,
        navigateTo,
        isContactOpen,
        openContact,
        closeContact,
        selectedProject,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export { useNavigation } from './useNavigation';
