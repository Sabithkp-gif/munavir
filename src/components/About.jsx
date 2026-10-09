import React, { useState, useEffect, useRef } from 'react';
import { Award, Sparkles, CheckCircle2, FileText, ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';
import { DESIGNER_INFO, POSTERS } from '../data/portfolioData';
import { sound } from '../utils/sound';

export default function About() {
  const [blurAmount, setBlurAmount] = useState(16);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;
      const rect = imageRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate visibility ratio
      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
        const blur = Math.max(0, 16 - progress * 24);
        setBlurAmount(blur);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-8 md:px-12 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/[0.08] gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>THE DESIGNER & ARTIST</span>
            </div>
            <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
              MEET MUNAVIR.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-neutral-400 font-normal">
            Obsessed with the intersection of typography, spatial 3D composition, and timeless brand architecture.
          </p>
        </div>

        {/* 2-Column Editorial Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Interactive Image with Scroll Blur-to-Sharp Reveal */}
          <div className="lg:col-span-5 relative">
            <div
              ref={imageRef}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-2xl group"
            >
              <img
                src={POSTERS.graphicDesign}
                alt="Munavir - Graphic Designer & Visual Artist"
                className="w-full h-full object-cover grayscale-[20%] contrast-110 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                style={{
                  filter: `blur(${blurAmount}px)`,
                }}
              />

              {/* Lighting overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-80" />
              
              {/* Floating artwork stamp badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel border border-white/10 backdrop-blur-md flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-accent">MUNAVIR STUDIO</div>
                  <div className="text-xs font-bold text-white">Visual Arts & Creative Direction</div>
                </div>
                <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Narrative & Key Principles */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="space-y-4 text-base sm:text-lg text-neutral-300 leading-relaxed font-light">
              <p>
                {DESIGNER_INFO.bio}
              </p>
              <p className="text-neutral-400 text-sm sm:text-base">
                My approach is rooted in rigorous conceptual research. I don't just decorate surfaces; I engineer visual languages that tell unforgettable stories, trigger emotional resonance, and solve business challenges across both physical print and digital spatial dimensions.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {DESIGNER_INFO.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl glass-panel border border-white/5 hover:border-accent/40 transition-all group"
                  onMouseEnter={() => sound.playHover()}
                >
                  <div className="font-heading font-black text-2xl sm:text-3xl text-white group-hover:text-accent transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-neutral-200 mt-1">
                    {stat.label}
                  </div>
                  <div className="text-[10px] font-mono text-neutral-400 mt-0.5">
                    {stat.detail}
                  </div>
                </div>
              ))}
            </div>

            {/* Design Philosophy Badges */}
            <div className="pt-2">
              <div className="text-xs font-mono text-neutral-400 mb-3 tracking-wider uppercase">
                Core Design Axioms
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl glass-card flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white">Grid Precision</div>
                    <div className="text-[11px] text-neutral-400">Swiss typography rules with intentional rule-breaking</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl glass-card flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white">Spatial Depth</div>
                    <div className="text-[11px] text-neutral-400">3D lighting & tactile unboxing experiences</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl glass-card flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white">Strategic Intent</div>
                    <div className="text-[11px] text-neutral-400">Every bezier curve has a psychological purpose</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  sound.playSelect();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-full bg-accent hover:bg-accent-hover text-black font-heading font-bold text-xs tracking-wider transition-all shadow-[0_0_20px_var(--accent-glow)] flex items-center gap-2 cursor-pointer"
              >
                <span>COLLABORATE WITH MUNAVIR</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={DESIGNER_INFO.socials.behance}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-full glass-panel hover:border-accent text-neutral-300 hover:text-white font-mono text-xs flex items-center gap-2 transition-colors"
              >
                <span>VIEW BEHANCE PORTFOLIO</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
