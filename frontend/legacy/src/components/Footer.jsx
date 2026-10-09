import React, { useState } from 'react';
import { ArrowUpRight, Check, ArrowUp } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export function Footer() {
  const { navigateTo } = useNavigation();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setEmail(''), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#F7F8FA] text-[#0A0A0F] overflow-hidden border-t border-[#E6E8EE] select-none">
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start mb-16">
          
          {/* Brand & Newsletter Column (Cols 1-5) */}
          <div className="lg:col-span-5 flex flex-col">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group mb-5">
              <div className="w-8 h-8 rounded-full bg-[#0A0A0F] flex items-center justify-center text-white transition-transform group-hover:scale-105">
                <span className="w-2 h-2 rounded-full bg-[#2F5BFF]" />
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-sans font-bold text-[16px] tracking-[0.2em] text-[#0A0A0F]">
                  NEXORA
                </span>
                <span className="font-mono text-[10px] tracking-widest text-[#2F5BFF] font-semibold">
                  LABS
                </span>
              </div>
            </a>

            <p className="text-[15px] leading-[1.65] text-[#4A4F5C] max-w-sm mb-8">
              Designing and engineering high-impact digital products, agentic AI systems, and automated infrastructure for ambitious teams worldwide.
            </p>

            {/* Newsletter Input with Blue Gradient Focus Border */}
            <div className="w-full max-w-md mb-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#8A90A0] mb-2.5 font-semibold">
                ENGINEERING DISPATCH
              </p>
              <form onSubmit={handleSubscribe} className="relative flex items-center">
                <div className="relative w-full rounded-full p-[1px] bg-[#E6E8EE] focus-within:bg-gradient-to-r focus-within:from-[#2F5BFF] focus-within:via-[#7B5CFF] focus-within:to-[#FFD43B] transition-all duration-300 shadow-2xs">
                  <input
                    type="email"
                    required
                    placeholder="Enter your work email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-12 pl-5 pr-14 rounded-full bg-white text-[14px] text-[#0A0A0F] placeholder-[#8A90A0] focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="absolute right-1.5 w-9 h-9 rounded-full bg-[#0A0A0F] hover:bg-[#2F5BFF] text-white flex items-center justify-center transition-colors cursor-pointer shadow-xs"
                  aria-label="Subscribe to newsletter"
                >
                  {subscribed ? (
                    <Check className="w-4 h-4 text-[#FFD43B]" />
                  ) : (
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  )}
                </button>
              </form>
              {subscribed && (
                <p className="font-mono text-[11px] text-[#2F5BFF] mt-2 font-medium">
                  ✓ Confirmed. Welcome to the Nexora dispatch.
                </p>
              )}
            </div>

            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E6E8EE] shadow-2xs w-fit">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="font-mono text-[11px] text-[#4A4F5C] font-medium">
                All systems operational • 99.99% Availability
              </span>
            </div>
          </div>

          {/* Link Columns (Cols 6-12) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* Column 1: SOLUTIONS */}
            <div>
              <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0A0A0F] mb-5 font-bold">
                PAGES
              </h4>
              <ul className="space-y-3">
                {[
                  { name: 'Solutions', path: '/solutions' },
                  { name: 'Services', path: '/services' },
                  { name: 'About Nexora', path: '/about' },
                  { name: 'Insights & Journal', path: '/insights' },
                  { name: 'Selected Work', path: '/', hash: '#work' },
                ].map((item) => (
                  <li key={item.name}>
                    <button
                      type="button"
                      onClick={() => navigateTo(item.path, item.hash)}
                      className="text-[14px] text-[#4A4F5C] hover:text-[#2F5BFF] transition-colors cursor-pointer text-left"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: STUDIO */}
            <div>
              <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0A0A0F] mb-5 font-bold">
                STUDIO
              </h4>
              <ul className="space-y-3">
                {[
                  { name: 'Our Approach', path: '/', hash: '#approach' },
                  { name: 'Selected Work', path: '/', hash: '#work' },
                  { name: 'Our Beliefs', path: '/about', hash: '#beliefs' },
                  { name: 'Working Style', path: '/about', hash: '#working-style' },
                  { name: 'Careers', path: '/about', hash: '#commitment-careers' },
                ].map((item) => (
                  <li key={item.name}>
                    <button
                      type="button"
                      onClick={() => navigateTo(item.path, item.hash)}
                      className="text-[14px] text-[#4A4F5C] hover:text-[#2F5BFF] transition-colors cursor-pointer text-left"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: RESOURCES */}
            <div>
              <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0A0A0F] mb-5 font-bold">
                PUBLICATIONS
              </h4>
              <ul className="space-y-3">
                {[
                  { name: 'AI Agents Blueprint', path: '/insights' },
                  { name: 'RAG Architecture', path: '/insights' },
                  { name: 'Scale Beyond 1k Users', path: '/insights' },
                  { name: 'Workflow Automation', path: '/insights' },
                  { name: 'SaaS Platform Guide', path: '/insights' },
                ].map((item) => (
                  <li key={item.name}>
                    <button
                      type="button"
                      onClick={() => navigateTo(item.path)}
                      className="text-[14px] text-[#4A4F5C] hover:text-[#2F5BFF] transition-colors cursor-pointer text-left"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: CONNECT */}
            <div>
              <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0A0A0F] mb-5 font-bold">
                CONNECT
              </h4>
              <ul className="space-y-3">
                {[
                  { name: 'GitHub', href: 'https://github.com' },
                  { name: 'X / Twitter', href: 'https://x.com' },
                  { name: 'LinkedIn', href: 'https://linkedin.com' },
                  { name: 'Discord', href: 'https://discord.com' },
                  { name: 'hello@nexoralabs.io', href: 'mailto:hello@nexoralabs.io' },
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="text-[14px] text-[#4A4F5C] hover:text-[#2F5BFF] transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Giant Outlined "NEXORA" Wordmark that Fills with Gradient */}
        <div className="relative w-full overflow-hidden flex items-center justify-center py-6 sm:py-10 border-t border-[#E6E8EE]">
          <p className="wordmark-outlined text-[72px] sm:text-[120px] md:text-[170px] lg:text-[220px] leading-none tracking-[-0.04em] select-none text-center pointer-events-auto whitespace-nowrap cursor-default">
            NEXORA LABS
          </p>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 border-t border-[#E6E8EE] flex flex-col sm:flex-row items-center justify-between gap-4 text-[#8A90A0] font-mono text-[11px] tracking-wider uppercase">
          <p>© {new Date().getFullYear()} NEXORA LABS INC. ALL RIGHTS RESERVED.</p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#0A0A0F] transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-[#0A0A0F] transition-colors">
              Terms
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#0A0A0F] hover:text-[#2F5BFF] transition-colors cursor-pointer font-bold"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
