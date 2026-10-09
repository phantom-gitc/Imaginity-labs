import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';
import { Eyebrow } from '../ui/Eyebrow';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubmitted(true);
  };

  return (
    <section
      id="newsletter"
      data-reveal="newsletter"
      className="relative w-full py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#E6E8EE]"
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="rounded-[28px] sm:rounded-[32px] bg-[#F7F8FA] border border-[#E6E8EE] p-8 sm:p-12 lg:p-16 max-w-4xl mx-auto shadow-[0_4px_24px_rgba(10,10,15,0.02)]">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <Eyebrow dotColor="bg-[#2F5BFF]">DISPATCHES</Eyebrow>
            </div>

            <h2 className="font-display text-[32px] sm:text-[44px] leading-[1.1] text-[#0A0A0F] mb-4">
              Stay ahead of{' '}
              <span className="italic font-serif text-gradient-brand">
                what's changing.
              </span>
            </h2>

            <p className="text-[16px] leading-[1.65] text-[#4A4F5C] mb-8">
              Occasional insights on AI, software engineering, product development and emerging technology. No spam, ever.
            </p>

            {submitted ? (
              <div className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#065F46] font-medium text-[14px]">
                <CheckCircle2 className="w-5 h-5 text-[#10B981]" />
                <span>You’re subscribed. We’ll notify you when new articles publish.</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
              >
                <div className="relative w-full">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A90A0]" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-11 pr-4 py-3.5 rounded-full bg-white border border-[#E6E8EE] text-[14px] text-[#0A0A0F] placeholder-[#8A90A0] focus:outline-none focus:border-[#2F5BFF] focus:ring-2 focus:ring-[#2F5BFF]/10 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto shrink-0 px-6 py-3.5 rounded-full bg-[#0A0A0F] hover:bg-[#2F5BFF] text-white text-[14px] font-semibold transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            <p className="font-mono text-[11px] text-[#8A90A0] mt-5">
              Strict privacy. Unsubscribe in one click at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
