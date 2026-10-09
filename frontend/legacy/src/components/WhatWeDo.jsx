import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Layers, Cpu, Workflow } from 'lucide-react';
import { GradientCard } from './ui/GradientCard';

export function WhatWeDo({ onOpenContact }) {
  const capabilities = [
    {
      index: '01',
      title: 'Digital Products',
      subtitle: 'Modern Web & SaaS Systems',
      description:
        'Full-stack digital products engineered with exceptional precision. We design fluid responsive interfaces, robust APIs, and high-velocity frontends.',
      icon: Layers,
      iconBg: 'bg-[#E3EBFF] text-[#2F5BFF] border-[#2F5BFF]/20',
      badgeBg: 'bg-[#E3EBFF] text-[#2F5BFF]',
      tags: ['Next.js & React', 'SaaS Platforms', 'Design Systems', 'Microfrontends'],
      metric: '40% FASTER TIME-TO-MARKET',
      spotlight: 'rgba(47, 91, 255, 0.1)',
    },
    {
      index: '02',
      title: 'AI & Intelligent Systems',
      subtitle: 'Agentic Workflows & LLMs',
      description:
        'Custom multi-agent architectures, production RAG pipelines, fine-tuned models, and generative intelligence embedded directly into your core business operations.',
      icon: Cpu,
      iconBg: 'bg-[#F2EDFF] text-[#7B5CFF] border-[#7B5CFF]/20',
      badgeBg: 'bg-[#F2EDFF] text-[#7B5CFF]',
      tags: ['Autonomous Agents', 'Enterprise RAG', 'Fine-Tuning', 'Vision & Audio AI'],
      metric: '99.2% INFERENCE ACCURACY',
      spotlight: 'rgba(123, 92, 255, 0.12)',
    },
    {
      index: '03',
      title: 'Business Automation',
      subtitle: 'Resilient Infrastructure',
      description:
        'End-to-end workflow automation synchronizing your CRM, ERP, and operational toolchains with event-driven software and self-healing decision routines.',
      icon: Workflow,
      iconBg: 'bg-[#FFF8E1] text-[#E5A500] border-[#FFD43B]/40',
      badgeBg: 'bg-[#FFF4C2] text-[#B45309]',
      tags: ['Event-Driven Mesh', 'ERP Orchestration', 'Self-Healing Loops', 'API Gateways'],
      metric: '10X OPERATIONAL VELOCITY',
      spotlight: 'rgba(255, 212, 59, 0.15)',
    },
  ];

  return (
    <section
      id="capabilities"
      className="relative w-full py-24 sm:py-32 lg:py-36 bg-[#F0F4FF] border-b border-[#E6E8EE] overflow-hidden"
    >
      {/* Soft Ambient Light Blur Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] pointer-events-none z-0">
        <div
          className="w-full h-full rounded-full opacity-60"
          style={{
            background:
              'radial-gradient(circle, rgba(227,235,255,0.8) 0%, rgba(240,244,255,0.4) 50%, transparent 75%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 sm:mb-20">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E6E8EE] mb-6 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#2F5BFF]" />
              <span className="font-mono text-[11px] font-semibold tracking-[0.16em] text-[#0A0A0F] uppercase">
                CAPABILITIES & EXPERTISE
              </span>
            </div>

            <h2 className="h2-fluid text-[#0A0A0F]">
              From ideas to <br />
              <span className="italic font-serif text-gradient-brand">
                intelligent systems.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end items-start lg:items-end">
            <p className="text-[17px] leading-[1.6] text-[#4A4F5C] max-w-[44ch] mb-6 lg:text-left">
              We help enterprises and venture-backed founders turn complex problems into reliable software products, custom AI engines, and automated scale.
            </p>
            <button
              onClick={onOpenContact}
              className="group inline-flex items-center gap-2 text-[14px] font-semibold text-[#0A0A0F] hover:text-[#2F5BFF] transition-colors cursor-pointer"
            >
              <span className="underline underline-offset-4 decoration-[#E6E8EE] group-hover:decoration-[#2F5BFF]">
                Explore custom engineering solutions
              </span>
              <ArrowUpRight className="w-4 h-4 text-[#2F5BFF] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* 3 White Cards with Colored Icon Tiles & Connector Line */}
        <div className="relative">
          {/* Subtle Connector Line behind cards */}
          <div className="hidden md:block absolute top-14 left-16 right-16 h-[1px] bg-gradient-to-r from-[#2F5BFF]/20 via-[#7B5CFF]/20 to-[#FFD43B]/30 z-0 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch relative z-10">
            {capabilities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <GradientCard
                  key={item.index}
                  onClick={onOpenContact}
                  spotlightColor={item.spotlight}
                  className="p-8 sm:p-9 flex flex-col justify-between min-h-[470px] cursor-pointer"
                >
                  <div>
                    {/* Top Header: Monospace index pill + Colored Icon Tile */}
                    <div className="flex items-center justify-between mb-8">
                      <span className="font-mono text-[12px] font-bold text-[#4A4F5C] bg-[#F7F8FA] border border-[#E6E8EE] px-3 py-1 rounded-full">
                        {item.index}
                      </span>

                      {/* Colored Icon Tile (Blue, Violet, Yellow) */}
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-xs transition-transform duration-300 group-hover:scale-110 ${item.iconBg}`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="font-sans text-[23px] font-bold tracking-tight text-[#0A0A0F] mb-1.5 group-hover:text-[#2F5BFF] transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-mono text-[11px] uppercase tracking-wider text-[#8A90A0] font-semibold mb-4">
                      {item.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-[15px] leading-[1.65] text-[#4A4F5C] mb-6">
                      {item.description}
                    </p>

                    {/* Feature Tags as Small Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-full bg-[#F7F8FA] border border-[#E6E8EE] text-[11px] font-medium text-[#4A4F5C]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Footer: Metric in Mono + Arrow Button that fills blue on hover */}
                  <div className="pt-5 border-t border-[#E6E8EE] flex items-center justify-between">
                    <span className="font-mono text-[11px] font-bold tracking-wider text-[#0A0A0F]">
                      {item.metric}
                    </span>

                    <div className="w-9 h-9 rounded-full bg-[#F7F8FA] border border-[#E6E8EE] text-[#0A0A0F] group-hover:bg-[#2F5BFF] group-hover:text-white group-hover:border-[#2F5BFF] flex items-center justify-center shadow-2xs transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </GradientCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
