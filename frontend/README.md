# NEXORA LABS — Bright, Bold, Precise Digital Studio

A showcase-level marketing landing page for **NEXORA LABS** (software, AI & automation studio) rebuilt with an award-winning creative direction: **"Bright, bold, precise"**. 

Features an airy light palette, electric blue and yellow accents, editorial serif typography with hand-drawn SVG underline, 3D interactive glass elements, horizontal timeline, and high-contrast rhythm.

---

## 🎨 Color System & Tokens

| Token | Hex | Role |
| :--- | :--- | :--- |
| `--bg` | `#FFFFFF` | Primary crisp white background |
| `--bg-soft` | `#F7F8FA` | Neutral soft container tint |
| `--bg-tint` | `#F0F4FF` | Light blue alternating section wash |
| `--line` | `#E6E8EE` | Hairline dividers and borders |
| `--ink` | `#0A0A0F` | Near-black primary text and buttons |
| `--ink-2` | `#4A4F5C` | Secondary text |
| `--ink-3` | `#8A90A0` | Monospace tags and metadata |
| `--blue-600` | `#2F5BFF` | Primary electric blue brand accent |
| `--blue-400` | `#5B8CFF` | Secondary blue glow |
| `--blue-100` | `#E3EBFF` | Light blue badge and mesh tint |
| `--yellow-400` | `#FFD43B` | Pop highlight (underline, active tags, CTA) |
| `--yellow-100` | `#FFF4C2` | Soft ambient mesh warmth |
| `--violet-500` | `#7B5CFF` | Gradient partner for blue |
| `--coral-400` | `#FF7A59` | Micro-accent details |

---

## 🧩 Architectural Structure

1. **Preloader** (`Preloader.jsx`):
   - Fast 0 → 100% counter with pulsing geometric logo mark and gradient progress bar.
2. **Navbar** (`Navbar.jsx`):
   - Floating white glass pill (`backdrop-blur-xl`).
   - Hide on scroll down, show on scroll up.
   - Animated sliding active pill indicator using Framer Motion `layoutId`.
   - Black pill "Let's Talk" button with rotating yellow arrow on hover.
3. **Hero** (`Hero.jsx`):
   - White canvas with drifting light mesh (blue-100, violet tint, yellow-100) and fading grid.
   - Giant fluid headline (`clamp(3.5rem, 8.5vw, 8.5rem)`) with masked line-by-line slide-up.
   - *"forward."* rendered in italic serif with blue-violet-coral gradient.
   - Hand-drawn SVG yellow underline that animates `pathLength: 0 → 1`.
   - 3D interactive glass object that tilts with cursor parallax.
   - 3 floating glass stat chips ("50+ products shipped", "99.9% uptime", "Turning ideas into impact").
   - Dual CTAs with magnetic spring physics and trust badges.
4. **Trusted By** (`TrustedBy.jsx`):
   - Pure white strip with infinite marquee of logos.
   - Grayscale to full brand color on hover.
   - Edge fade gradient masks and live client counter.
5. **Capabilities** (`WhatWeDo.jsx`):
   - Background `--bg-tint` (`#F0F4FF`) with soft light blur blob.
   - 3 white cards with colored icon tiles:
     - Digital Products: Electric Blue (`#2F5BFF`)
     - AI & Intelligent Systems: Violet (`#7B5CFF`)
     - Business Automation: Yellow / Coral (`#FFD43B` / `#FF7A59`)
   - Monospace metric line, tag pills, cursor spotlight glow, and arrow buttons that fill blue on hover.
6. **Our Approach** (`OurApproach.jsx`):
   - **The ONE Dark Section:** Ink black (`#0A0A0F`) with blue and violet aurora glows.
   - 6-step timeline (Discover, Define, Design, Build, Launch, Scale).
   - Animated progress line filling in electric blue (`#2F5BFF`) with active step highlighted in yellow (`#FFD43B`).
   - Glass panel with deliverable chips and Prev / Next navigation.
7. **Selected Work** (`SelectedWork.jsx`):
   - Pure white background with 3 vivid project showcases:
     - `Avenya`: Electric blue gradient with animated voice-waveform.
     - `Halcyon`: Vibrant yellow/coral generative canvas with floating UI blocks.
     - `Enterprise Platform`: Violet/blue distributed node-graph with data pulses.
   - 3D cursor tilt, image zoom, impact chips, and custom "View" cursor bubble.
8. **CTA Section** (`CTASection.jsx`):
   - Rounded-3xl panel with rich blue-600 → violet-500 gradient mesh and film grain.
   - Giant white serif headline with yellow highlight on "next".
   - Glass "delivery pipeline" widget with cycling active phase highlighting.
   - Yellow magnetic primary button and white ghost secondary button.
9. **Footer** (`Footer.jsx`):
   - Light `--bg-soft` (`#F7F8FA`) background.
   - Multi-column navigation and live status indicator.
   - Newsletter field with blue gradient focus border.
   - Giant outlined `NEXORA LABS` wordmark that fills with gradient.
10. **Interactive Utilities**:
    - `CustomCursor.jsx`: Trailing dot and ring with `data-cursor` label bubble ("View").
    - `ScrollProgressBar.jsx`: Top progress bar in blue/violet/yellow.
    - Smooth scrolling with `Lenis`.

---

## 🚀 Running the Project

```bash
# 1. Navigate to frontend directory
cd frontend

# 2. Start Vite development server
npm run dev

# Open http://localhost:5173
```
