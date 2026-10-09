import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Magnetic } from './ui/Magnetic';
import { useNavigation } from '../context/NavigationContext';

export function Navbar() {
  const { currentPath, navigateTo, openContact } = useNavigation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY && !mobileMenuOpen) {
          setIsVisible(false); // scrolling down
        } else {
          setIsVisible(true); // scrolling up
        }
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  // Exact links in order specified in prompt:
  // Solutions, Services, Work, About, Insights, Careers, Contact
  const navLinks = [
    { name: 'Solutions', path: '/solutions', isRoute: true },
    { name: 'Services', path: '/services', isRoute: true },
    { name: 'Work', path: '/', hash: '#work' },
    { name: 'About', path: '/about', isRoute: true },
    { name: 'Insights', path: '/insights', isRoute: true },
    { name: 'Careers', path: '/about', hash: '#careers' },
    { name: 'Contact', action: 'contact' },
  ];

  const handleLinkClick = (link, e) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (link.action === 'contact') {
      openContact();
      return;
    }

    if (link.isRoute) {
      navigateTo(link.path);
    } else {
      navigateTo(link.path, link.hash);
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    navigateTo('/');
  };

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -90 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 pt-4 sm:pt-6 px-4 sm:px-6 pointer-events-none"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Floating Pill Nav Container */}
        <div className="w-full h-14 px-4 sm:px-5 rounded-full bg-white/90 backdrop-blur-xl border border-[#E6E8EE] shadow-[0_8px_30px_rgba(10,10,15,0.06)] flex items-center justify-between gap-3 sm:gap-4">
          
          {/* Logo Mark: Electric Blue Accent + Black Typography */}
          <a
            href="/"
            onClick={handleLogoClick}
            className="flex items-center gap-2.5 sm:gap-3 group focus-visible:outline-none shrink-0"
            aria-label="Nexora Labs Home"
          >
            <div className="relative w-7 h-7 rounded-full bg-[#0A0A0F] flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-105">
              <span className="w-2 h-2 rounded-full bg-[#2F5BFF] transition-transform duration-300 group-hover:scale-125" />
            </div>

            <div className="flex items-baseline gap-1.5">
              <span className="font-sans font-bold text-[14px] tracking-[0.2em] text-[#0A0A0F]">
                NEXORA
              </span>
              <span className="font-mono text-[10px] tracking-widest text-[#2F5BFF] font-semibold">
                LABS
              </span>
            </div>
          </a>

          {/* Centered Desktop Navigation with Animated Sliding Active Pill */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive =
                (link.name === 'Solutions' && currentPath === '/solutions') ||
                (link.name === 'Services' && currentPath === '/services') ||
                (link.name === 'About' && currentPath === '/about') ||
                (link.name === 'Insights' && currentPath === '/insights');

              return (
                <a
                  key={link.name}
                  href={link.path || '#'}
                  onClick={(e) => handleLinkClick(link, e)}
                  className={`relative px-3 py-1.5 text-[13px] font-medium transition-colors select-none rounded-full ${
                    isActive ? 'text-[#0A0A0F] font-semibold' : 'text-[#6B7280] hover:text-[#0A0A0F]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-[#E3EBFF] rounded-full z-0 border border-[#2F5BFF]/15"
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {link.name}
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2F5BFF]" />
                    )}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Right Action: Black Pill Button with Rotating Arrow on Hover */}
          <div className="hidden sm:flex items-center gap-2">
            <Magnetic strength={0.25}>
              <button
                onClick={() => openContact()}
                className="group h-9 px-4 sm:px-5 bg-[#0A0A0F] text-white text-[13px] font-medium rounded-full flex items-center gap-2 shadow-xs transition-all duration-300 btn-primary-sheen cursor-pointer border border-[#0A0A0F]"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#FFD43B] transition-transform duration-300 group-hover:rotate-45" />
              </button>
            </Magnetic>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#0A0A0F] rounded-full hover:bg-[#F7F8FA] transition-colors cursor-pointer"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mt-3 max-w-sm mx-auto bg-white/95 backdrop-blur-2xl border border-[#E6E8EE] rounded-3xl p-5 shadow-2xl pointer-events-auto"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive =
                  (link.name === 'Solutions' && currentPath === '/solutions') ||
                  (link.name === 'Services' && currentPath === '/services') ||
                  (link.name === 'About' && currentPath === '/about') ||
                  (link.name === 'Insights' && currentPath === '/insights');
                return (
                  <a
                    key={link.name}
                    href={link.path || '#'}
                    onClick={(e) => handleLinkClick(link, e)}
                    className={`text-[14px] font-medium py-2.5 px-4 rounded-xl flex items-center justify-between cursor-pointer ${
                      isActive
                        ? 'bg-[#E3EBFF] text-[#2F5BFF] font-semibold'
                        : 'text-[#4A4F5C] hover:bg-[#F7F8FA]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive ? (
                      <span className="w-2 h-2 rounded-full bg-[#2F5BFF]" />
                    ) : (
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#8A90A0]" />
                    )}
                  </a>
                );
              })}
              <div className="pt-3 mt-1 border-t border-[#E6E8EE]">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openContact();
                  }}
                  className="w-full h-11 bg-[#0A0A0F] text-white text-[13px] font-medium flex items-center justify-center gap-2 rounded-full cursor-pointer shadow-sm"
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight className="w-4 h-4 text-[#FFD43B]" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
