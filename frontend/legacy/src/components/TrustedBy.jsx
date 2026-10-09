import React from 'react';
import { Marquee } from './ui/Marquee';
import {
  GoogleCloudLogo,
  VercelLogo,
  AWSLogo,
  MongoDBLogo,
  NvidiaLogo,
} from './Icons';

function OpenAIBrandLogo({ className = "h-5 w-auto" }) {
  return (
    <svg className={className} viewBox="0 0 110 28" fill="currentColor">
      <path d="M12 4.5a6.5 6.5 0 00-5.8 3.5 6.4 6.4 0 00-3.7 4.9 6.5 6.5 0 001.9 6.8 6.5 6.5 0 005.8 3.5 6.4 6.4 0 003.7-4.9 6.5 6.5 0 00-1.9-6.8V4.5z" opacity="0.8" />
      <text x="24" y="19" fontFamily="'Geist', sans-serif" fontSize="13" fontWeight="600" letterSpacing="-0.01em" fill="currentColor">
        OpenAI
      </text>
    </svg>
  );
}

function SupabaseBrandLogo({ className = "h-5 w-auto" }) {
  return (
    <svg className={className} viewBox="0 0 120 28" fill="currentColor">
      <path d="M11 2L2 14h9l-2 12 11-14h-9l2-10z" fill="#2F5BFF" />
      <text x="26" y="19" fontFamily="'Geist', sans-serif" fontSize="13" fontWeight="600" letterSpacing="-0.02em" fill="currentColor">
        supabase
      </text>
    </svg>
  );
}

function StripeBrandLogo({ className = "h-5 w-auto" }) {
  return (
    <svg className={className} viewBox="0 0 90 28" fill="currentColor">
      <text x="4" y="20" fontFamily="'Geist', sans-serif" fontSize="16" fontWeight="700" letterSpacing="-0.04em" fill="currentColor">
        stripe
      </text>
    </svg>
  );
}

export function TrustedBy() {
  const logos = [
    { name: 'Google Cloud', component: <GoogleCloudLogo className="h-6 w-auto" />, hoverColor: 'hover:text-[#4285F4]' },
    { name: 'Vercel', component: <VercelLogo className="h-5 w-auto" />, hoverColor: 'hover:text-[#000000]' },
    { name: 'AWS', component: <AWSLogo className="h-6 w-auto" />, hoverColor: 'hover:text-[#FF9900]' },
    { name: 'NVIDIA', component: <NvidiaLogo className="h-5 w-auto" />, hoverColor: 'hover:text-[#76B900]' },
    { name: 'OpenAI', component: <OpenAIBrandLogo className="h-5 w-auto" />, hoverColor: 'hover:text-[#10A37F]' },
    { name: 'MongoDB', component: <MongoDBLogo className="h-6 w-auto" />, hoverColor: 'hover:text-[#00ED64]' },
    { name: 'Supabase', component: <SupabaseBrandLogo className="h-5 w-auto" />, hoverColor: 'hover:text-[#2F5BFF]' },
    { name: 'Stripe', component: <StripeBrandLogo className="h-6 w-auto" />, hoverColor: 'hover:text-[#635BFF]' },
  ];

  return (
    <section className="relative w-full py-12 bg-white border-b border-[#E6E8EE] overflow-hidden">
      <div className="max-w-[1280px] w-full mx-auto px-6 sm:px-8 lg:px-12 mb-7">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#2F5BFF]" />
            <p className="font-mono text-[11px] tracking-[0.18em] text-[#8A90A0] uppercase font-semibold">
              TRUSTED BY 40+ HIGH-GROWTH TEAMS & ENTERPRISES
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F8FA] border border-[#E6E8EE] text-[11px] font-mono text-[#4A4F5C]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD43B]" />
            <span>GLOBAL CLIENT ROSTER</span>
          </div>
        </div>
      </div>

      {/* Infinite Marquee with edge fade masks */}
      <Marquee speed={32} pauseOnHover={true} className="py-2">
        {logos.map((logo) => (
          <div
            key={logo.name}
            className={`cursor-pointer transition-all duration-300 filter grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transform hover:scale-105 px-6 text-[#0A0A0F] ${logo.hoverColor}`}
            title={logo.name}
          >
            {logo.component}
          </div>
        ))}
      </Marquee>
    </section>
  );
}
