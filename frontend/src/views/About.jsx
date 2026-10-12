'use client'

import { useRef } from 'react'
import { A } from '../data/site'
import { VALUES, TEAM, AWARDS } from '../data/work'
import { useReveal } from '../hooks/useReveal'
import { Eyebrow, H, It, Section, SectionHeader } from '../components/ui/Type'
import { Frame, Portrait } from '../components/ui/Img'
import { CTAPanel } from '../components/ui/CTAPanel'
import { GradientBackdrop } from '../components/ui/GradientBackdrop'
import { Globe } from 'lucide-react'

export default function About() {
  const root = useRef(null)
  useReveal(root)

  return (
    <div ref={root} className="relative isolate w-full pt-28">
      <GradientBackdrop variant="about" />
      {/* 1. Big Editorial Statement */}
      <Section bg="light" className="pt-8 pb-16">
        <div className="max-w-4xl">
          <Eyebrow intro dot="#C45CB0">About Imaginity Labs</Eyebrow>
          <H as="h1" intro size="xl" className="mt-6 leading-[1.05]">
            A senior studio creating software that people <It>actually enjoy using.</It>
          </H>
          <p className="lede mt-8 text-xl leading-relaxed max-w-[48ch]">
            Imaginity Labs (popularly known as iLabs, Imaginity Technology, or Imaginity) is a senior product, agentic AI, and software engineering studio. We operate without middlemen, inflated decks, or corporate bureaucracy. We focus on direct collaboration between visionary leaders and senior technologists who take pride in craftsmanship.
          </p>
        </div>
      </Section>

      {/* 2. Photo with Floating Stat Chips */}
      <Section bg="light" tight>
        <div className="relative">
          <Frame
            img={A.team}
            ratio="21/9"
            alt="The Imaginity studio team"
            eager={true}
            radius={28}
            className="shadow-md"
          />

          <div className="glass float rot-a absolute -bottom-6 left-8 z-10 hidden sm:flex items-center gap-3 px-5 py-4" style={{ '--rot': '-2deg' }}>
            <span className="ico-sq !size-10"><Globe size={18} /></span>
            <div>
              <b className="display block text-2xl text-ink">Global Reach</b>
              <span className="mono !text-[10px] text-ink/60">Bhubaneswar &middot; Remote Worldwide</span>
            </div>
          </div>

          <div className="glass float rot-b absolute -top-6 right-8 z-10 hidden sm:flex items-center gap-3 px-5 py-4" style={{ '--rot': '2deg' }}>
            <span className="sticker !bg-[#FFD93D]">100% Senior Pods</span>
          </div>
        </div>
      </Section>

      {/* 2.5 Engineering Philosophy & Studio Origin */}
      <Section bg="light" className="py-20 border-t border-line/60">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <Eyebrow dot="#E5A624">Engineering Philosophy</Eyebrow>
            <H as="h2" size="lg" className="mt-4 leading-tight">
              Why we built Imaginity Labs <It>differently.</It>
            </H>
            <p className="lede mt-6 text-base leading-relaxed text-ink/75">
              Founded in 2024 in Bhubaneswar, Imaginity Labs (iLabs) was formed by senior technologists who saw a recurring failure mode in digital consulting: bloated account management layers, junior developers substituted behind the scenes, and brittle code disguised behind glossy keynote slides.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              We replaced that agency theater with autonomous senior pods. When you partner with us, you work directly with seasoned architects, full-stack engineers, and product designers who take personal pride in every line of code committed to production.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-7 rounded-[24px] bg-white border border-line shadow-xs">
              <span className="mono text-xs text-[#3B5BFF] font-semibold uppercase tracking-wider block mb-2">01 / Direct Collaboration</span>
              <h3 className="display text-xl text-ink font-semibold mb-2">Zero Account Managers</h3>
              <p className="text-sm text-ink/70 leading-relaxed">
                You speak directly with the engineers and designers building your application. Weekly demos, shared communication channels, and unblocked progress.
              </p>
            </div>

            <div className="p-7 rounded-[24px] bg-white border border-line shadow-xs">
              <span className="mono text-xs text-[#C45CB0] font-semibold uppercase tracking-wider block mb-2">02 / Production Rigor</span>
              <h3 className="display text-xl text-ink font-semibold mb-2">Measured, Reliable AI</h3>
              <p className="text-sm text-ink/70 leading-relaxed">
                We engineer agentic workflows and retrieval systems with deterministic guardrails, evals, and human checkpoints to prevent unverified model outputs.
              </p>
            </div>

            <div className="p-7 rounded-[24px] bg-white border border-line shadow-xs">
              <span className="mono text-xs text-[#167A4A] font-semibold uppercase tracking-wider block mb-2">03 / Total Transparency</span>
              <h3 className="display text-xl text-ink font-semibold mb-2">Complete Code Ownership</h3>
              <p className="text-sm text-ink/70 leading-relaxed">
                All repositories, infrastructure configs, and design tokens live inside your cloud accounts from day one. Zero vendor lock-in, full IP transfer.
              </p>
            </div>

            <div className="p-7 rounded-[24px] bg-white border border-line shadow-xs">
              <span className="mono text-xs text-[#8A6A00] font-semibold uppercase tracking-wider block mb-2">04 / Speed &amp; Longevity</span>
              <h3 className="display text-xl text-ink font-semibold mb-2">Ship in Weeks, Scale for Years</h3>
              <p className="text-sm text-ink/70 leading-relaxed">
                We ship functional MVPs in 3 to 6 weeks, built on clean modular architectures that your in-house team can understand and scale for years.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. Values as Pastel Tiles */}
      <Section bg="warm">
        <SectionHeader
          eyebrow="Core Values"
          dot="#3B5BFF"
          title={<>Principles behind every <It>commit.</It></>}
          line="How we stay grounded and deliver excellence consistently."
        />

        <div data-reveal="stagger" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {VALUES.map((val) => (
            <div
              key={val.t}
              className={`tinted tint-${val.tint} p-7 rounded-[24px] flex flex-col justify-between min-h-[220px] shadow-sm`}
            >
              <div className="flex items-center justify-between">
                <span className="ico-sq"><val.icon /></span>
                <span className="tag">VALUE</span>
              </div>
              <div>
                <h3 className="display text-2xl text-ink font-semibold mb-2">{val.t}</h3>
                <p className="text-sm text-ink/70 leading-relaxed">{val.d}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. Team Portraits */}
      <Section bg="light">
        <SectionHeader
          eyebrow="Leadership"
          dot="#7B61FF"
          title={<>The creative <It>partners.</It></>}
          line="Meet the leaders directing engineering, design, and AI research."
        />

        <div data-reveal="stagger" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {TEAM.map((m) => (
            <div key={m.name} className="group">
              <Portrait
                img={A.portrait[m.p]}
                tint={
                  m.tint === 'lavender' ? '#E9E4FF' :
                  m.tint === 'blush' ? '#FFE1EA' :
                  m.tint === 'sky' ? '#DCEBFF' :
                  m.tint === 'peach' ? '#FFE6D2' :
                  m.tint === 'butter' ? '#FFF3B0' :
                  '#DDF5E6'
                }
                scale={m.scale}
                pos={m.pos}
                alt={m.name}
                ratio="4/5"
              />
              <div className="mt-4">
                <h4 className="display text-xl text-ink">{m.name}</h4>
                <p className="text-sm text-ink/60">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. Awards Row */}
      <Section bg="light" tight>
        <div className="border-y border-line py-10 flex flex-wrap items-center justify-between gap-6">
          <span className="mono text-xs text-ink/40">INDUSTRY HONORS</span>
          {AWARDS.map((aw) => (
            <span key={aw} className="display text-lg text-ink/80">
              {aw}
            </span>
          ))}
        </div>
      </Section>

      {/* 6. CTA */}
      <CTAPanel title={<>Work with people who <It>care.</It></>} />
    </div>
  )
}

