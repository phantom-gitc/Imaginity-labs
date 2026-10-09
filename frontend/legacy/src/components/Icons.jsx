import React from 'react';

// Brand Logos in clean monochrome currentColor with consistent optical height (24px)
export function GoogleCloudLogo({ className = "h-6 w-auto" }) {
  return (
    <svg className={className} viewBox="0 0 168 28" fill="currentColor" aria-label="Google Cloud">
      {/* Cloud graphic */}
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-4.42 0-8 3.58-8 8 0 .42.04.83.1 1.23C1.72 13.98 0 16.29 0 19c0 3.87 3.13 7 7 7h12c3.31 0 6-2.69 6-6 0-2.97-2.16-5.43-5-5.91-.21-1.39-.93-2.67-1.95-3.65l1.3-1.4z" />
      {/* Wordmark */}
      <text x="32" y="19" fontFamily="'Geist', -apple-system, sans-serif" fontSize="13" fontWeight="500" letterSpacing="-0.01em" fill="currentColor">
        Google Cloud
      </text>
    </svg>
  );
}

export function VercelLogo({ className = "h-6 w-auto" }) {
  return (
    <svg className={className} viewBox="0 0 115 28" fill="currentColor" aria-label="Vercel">
      <path d="M11 5L22 24H0L11 5Z" />
      <text x="32" y="19" fontFamily="'Geist', -apple-system, sans-serif" fontSize="13.5" fontWeight="500" letterSpacing="-0.02em" fill="currentColor">
        Vercel
      </text>
    </svg>
  );
}

export function AWSLogo({ className = "h-6 w-auto" }) {
  return (
    <svg className={className} viewBox="0 0 88 28" fill="currentColor" aria-label="AWS">
      <text x="2" y="18" fontFamily="'Geist', -apple-system, sans-serif" fontSize="15" fontWeight="700" letterSpacing="-0.03em" fill="currentColor">
        aws
      </text>
      {/* AWS Smile arrow */}
      <path d="M4 22.5C14 26.5 28 26.5 38 21" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M36 19.5L39.5 21.5L36.5 23.5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MongoDBLogo({ className = "h-6 w-auto" }) {
  return (
    <svg className={className} viewBox="0 0 135 28" fill="currentColor" aria-label="MongoDB">
      {/* Leaf icon */}
      <path d="M11 2C11 2 6 8 6 14C6 18.2 8.8 21.5 11 24.5C13.2 21.5 16 18.2 16 14C16 8 11 2 11 2Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 4V22.5" stroke="currentColor" strokeWidth="1" />
      <text x="26" y="19" fontFamily="'Geist', -apple-system, sans-serif" fontSize="13.5" fontWeight="500" letterSpacing="-0.01em" fill="currentColor">
        MongoDB
      </text>
    </svg>
  );
}

export function NvidiaLogo({ className = "h-6 w-auto" }) {
  return (
    <svg className={className} viewBox="0 0 120 28" fill="currentColor" aria-label="NVIDIA">
      {/* Nvidia spiral eye */}
      <path d="M10 5C5.8 5 2.5 8.3 2.5 12.5C2.5 16.7 5.8 20 10 20C13.3 20 16 17.8 17 14.8H13.6C12.8 16.2 11.5 17.2 10 17.2C7.4 17.2 5.3 15.1 5.3 12.5C5.3 9.9 7.4 7.8 10 7.8C11.5 7.8 12.8 8.8 13.6 10.2H17C16 7.2 13.3 5 10 5Z" />
      <text x="24" y="19" fontFamily="'Geist', -apple-system, sans-serif" fontSize="13" fontWeight="700" letterSpacing="0.04em" fill="currentColor">
        NVIDIA
      </text>
    </svg>
  );
}

// Service Icons: 20px thin-line SVG icons (1.25px stroke, emerald)
export function DigitalProductIcon({ className = "w-5 h-5 text-[#1D4A37]" }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.25">
      <rect x="2.5" y="2.5" width="15" height="15" rx="0.5" />
      <line x1="2.5" y1="6.5" x2="17.5" y2="6.5" />
      <line x1="7.5" y1="6.5" x2="7.5" y2="17.5" />
      <circle cx="12.5" cy="12" r="2" strokeDasharray="1 1.5" />
    </svg>
  );
}

export function AiBrainIcon({ className = "w-5 h-5 text-[#1D4A37]" }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.25">
      <circle cx="10" cy="4" r="1.75" />
      <circle cx="4.5" cy="13.5" r="1.75" />
      <circle cx="15.5" cy="13.5" r="1.75" />
      <circle cx="10" cy="10.5" r="1.25" fill="currentColor" fillOpacity="0.15" />
      <line x1="10" y1="5.75" x2="10" y2="9.25" />
      <line x1="8.75" y1="11.25" x2="6" y2="12.75" />
      <line x1="11.25" y1="11.25" x2="14" y2="12.75" />
      <path d="M6 14.5C8 16.5 12 16.5 14 14.5" strokeDasharray="1.5 2" />
    </svg>
  );
}

export function AutomationWorkflowIcon({ className = "w-5 h-5 text-[#1D4A37]" }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.25">
      <rect x="2.5" y="2.5" width="4" height="4" rx="0.5" />
      <rect x="13.5" y="2.5" width="4" height="4" rx="0.5" />
      <rect x="13.5" y="13.5" width="4" height="4" rx="0.5" />
      <rect x="2.5" y="13.5" width="4" height="4" rx="0.5" />
      <path d="M6.5 4.5H13.5" />
      <path d="M15.5 6.5V13.5" />
      <path d="M13.5 15.5H6.5" strokeDasharray="1.5 2" />
      <path d="M4.5 13.5V6.5" />
      <polyline points="9 8.5 11 10 9 11.5" />
    </svg>
  );
}

// Arrow UI icons: precise 14px / hairline
export function ArrowRight({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <line x1="1.5" y1="7" x2="12.5" y2="7" />
      <polyline points="8.5 3 12.5 7 8.5 11" />
    </svg>
  );
}

export function ArrowUpRight({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="11" x2="11" y2="3" />
      <polyline points="5.5 3 11 3 11 8.5" />
    </svg>
  );
}

export function ChevronLeft({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="10 3 5 8 10 13" />
    </svg>
  );
}

export function ChevronRight({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 3 11 8 6 13" />
    </svg>
  );
}
