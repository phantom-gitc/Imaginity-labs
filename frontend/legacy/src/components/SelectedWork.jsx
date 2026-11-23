import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import {
  AvenyaArtwork,
  SureNextArtwork,
  EnterpriseArtwork,
} from './WorkCardArtwork';

function WorkCard({ project, onOpenModal, index }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // 3D Tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 320, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 320, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg']);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => onOpenModal(project)}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ y: -6 }}
      data-cursor="View"
      className="group relative h-full bg-white rounded-[24px] border border-[#E6E8EE] hover:border-[#2F5BFF]/50 shadow-[0_4px_24px_-4px_rgba(10,10,15,0.04)] hover:shadow-[0_20px_50px_-10px_rgba(47,91,255,0.14)] transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between select-none"
    >
      {/* 4:3 Visual Artwork Area */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#F7F8FA] border-b border-[#E6E8EE]">
        {/* Artwork Component */}
        <div className="w-full h-full transform transition-transform duration-700 ease-out group-hover:scale-105">
          {project.artwork}
        </div>

        {/* Floating Category Pill in top-left */}
        <div className="absolute top-4 left-4 z-20">
          <span className="font-mono text-[10px] tracking-widest uppercase bg-white/90 backdrop-blur-md text-[#0A0A0F] border border-white/60 px-3 py-1 rounded-full font-bold shadow-xs">
            {project.category}
          </span>
        </div>

        {/* View Bubble that appears on hover */}
        <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
          <div className="w-10 h-10 rounded-full bg-white text-[#0A0A0F] flex items-center justify-center shadow-lg border border-[#E6E8EE]">
            <ArrowUpRight className="w-4 h-4 text-[#2F5BFF]" />
          </div>
        </div>
      </div>

      {/* Body: Title, Description, Metrics, Tag Pills */}
      <div className="p-7 sm:p-8 flex flex-col flex-1 justify-between bg-white">
        <div>
          {/* Title Row */}
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-sans text-[24px] font-bold tracking-tight text-[#0A0A0F] group-hover:text-[#2F5BFF] transition-colors">
              {project.title}
            </h3>
            <span className="font-mono text-[11px] text-[#8A90A0] font-semibold">
              {project.year}
            </span>
          </div>

          {/* Description */}
          <p className="text-[15px] leading-[1.65] text-[#4A4F5C] mb-6">
            {project.description}
          </p>

          {/* Metric Chip */}
          <div className="p-3 rounded-xl bg-[#F7F8FA] border border-[#E6E8EE] mb-6 flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#8A90A0] font-medium">
              Impact Delivered
            </span>
            <span className="font-mono text-[11px] font-bold text-[#2F5BFF]">
              {project.metric}
            </span>
          </div>
        </div>

        {/* Bottom Area: Tags + View Study link */}
        <div className="pt-4 border-t border-[#E6E8EE] flex items-center justify-between">
          <div className="flex items-center gap-1.5 flex-wrap">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full bg-[#F7F8FA] border border-[#E6E8EE] font-mono text-[10px] uppercase tracking-wider text-[#4A4F5C] font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-1 font-sans text-[13px] font-semibold text-[#0A0A0F] group-hover:text-[#2F5BFF] transition-colors">
            <span className="hidden sm:inline">Case Study</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function SelectedWork({ onOpenContact }) {
  const projects = [
    {
      title: 'Avenya',
      category: 'Real-Time Voice AI',
      year: '2025',
      metric: '120k Users • <80ms Latency',
      description:
        'Real-time multilingual communication platform engineered for high-concurrency voice and text translation across 32 languages.',
      tags: ['AI', 'REAL-TIME', 'VOICE'],
      artwork: <AvenyaArtwork />,
    },
    {
      title: 'SureNext',
      category: 'Agentic Dev Platform',
      year: '2025',
      metric: '4.8x Velocity • 50k Engineers',
      description:
        'Intelligent collaborative development platform integrating agentic coding routines and visual architecture canvases.',
      tags: ['GEN AI', 'CANVAS', 'DEVTOOLS'],
      artwork: <SureNextArtwork />,
    },
    {
      title: 'Enterprise Platform',
      category: 'Distributed Operations',
      year: '2024',
      metric: '$40M+ Saved • 99.99% SLA',
      description:
        'Unified operations operating system orchestrating multi-region workflow automation and ERP intelligence for enterprise logistics.',
      tags: ['ENTERPRISE', 'AUTOMATION', 'DATA MESH'],
      artwork: <EnterpriseArtwork />,
    },
  ];

  return (
    <section
      id="work"
      className="relative w-full py-24 sm:py-32 lg:py-36 bg-white border-b border-[#E6E8EE] overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 sm:mb-20">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7F8FA] border border-[#E6E8EE] mb-6 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#2F5BFF]" />
              <span className="font-mono text-[11px] font-semibold tracking-[0.16em] text-[#0A0A0F] uppercase">
                SELECTED CASE STUDIES
              </span>
            </div>

            <h2 className="h2-fluid text-[#0A0A0F]">
              Technology <br />
              <span className="italic font-serif text-gradient-brand">
                brought to life.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end items-start lg:items-end">
            <p className="text-[17px] leading-[1.6] text-[#4A4F5C] max-w-[44ch] mb-6 lg:text-left">
              A curated selection of high-velocity systems and software we have designed and built across generative AI, web platforms, and automated cloud workflows.
            </p>
            <button
              onClick={onOpenContact}
              className="h-12 px-7 rounded-full border border-[#E6E8EE] hover:border-[#2F5BFF] bg-white hover:bg-[#F7F8FA] text-[#0A0A0F] hover:text-[#2F5BFF] text-[14px] font-semibold tracking-wide flex items-center gap-2.5 shadow-2xs transition-all duration-300 cursor-pointer"
            >
              <span>Explore All Case Studies</span>
              <ArrowUpRight className="w-4 h-4 text-[#2F5BFF]" />
            </button>
          </div>
        </div>

        {/* 3 Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {projects.map((project, idx) => (
            <WorkCard
              key={project.title}
              index={idx}
              project={project}
              onOpenModal={onOpenContact}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
