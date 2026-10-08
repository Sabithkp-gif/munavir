import React, { useState, useEffect } from 'react';
import { ArrowDown, Sparkles, Compass, Eye, Layers, Terminal, Download, ArrowUpRight } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';
import { sound } from '../utils/sound';

export default function Hero({ onExploreClick }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 px-4 sm:px-8 md:px-12 flex flex-col justify-between overflow-hidden"
    >
      {/* Dynamic Multi-layered Parallax Ambient Gradients */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent/10 rounded-full blur-[160px] pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate(calc(-50% + ${mousePos.x * 30}px), calc(-50% + ${mousePos.y * 30}px))`,
        }}
      />
      
      <div
        className="absolute top-2/3 right-1/4 w-[500px] h-[400px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)`,
        }}
      />

      {/* Floating 3D Graphic Design Badges / Artifacts (Parallax Layers) */}
      <div
        className="absolute top-32 left-[8%] hidden lg:flex items-center gap-3 p-3 rounded-2xl glass-panel border border-white/10 shadow-2xl transition-transform duration-300 pointer-events-none animate-float"
        style={{
          transform: `translate(${mousePos.x * -45}px, ${mousePos.y * -45}px)`,
        }}
      >
        <div className="w-8 h-8 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center text-accent">
          <Layers className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[10px] font-mono text-neutral-400">PANTONE® 2026</div>
          <div className="text-xs font-bold text-white">#C5FF4A • PHOTON LIME</div>
        </div>
      </div>

      <div
        className="absolute top-44 right-[10%] hidden lg:flex items-center gap-3 p-3 rounded-2xl glass-panel border border-white/10 shadow-2xl transition-transform duration-300 pointer-events-none animate-float"
        style={{
          animationDelay: '1.5s',
          transform: `translate(${mousePos.x * 55}px, ${mousePos.y * 55}px)`,
        }}
      >
        <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300">
          <Sparkles className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[10px] font-mono text-neutral-400">DISCIPLINE</div>
          <div className="text-xs font-bold text-white">BRUTALIST & KINETIC 3D</div>
        </div>
      </div>

      <div
        className="absolute bottom-28 right-[12%] hidden xl:flex items-center gap-3 p-3 rounded-2xl glass-panel border border-white/10 shadow-2xl transition-transform duration-300 pointer-events-none animate-float"
        style={{
          animationDelay: '3s',
          transform: `translate(${mousePos.x * -35}px, ${mousePos.y * -35}px)`,
        }}
      >
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-xs font-mono text-neutral-300">CALICUT / GLOBAL CLIENTS</span>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto w-full my-auto flex flex-col items-center text-center z-10">
        {/* Availability Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel border-white/10 mb-6 sm:mb-8 hover:border-accent/50 transition-colors">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-mono tracking-wider text-neutral-300 uppercase">
            {DESIGNER_INFO.availability}
          </span>
        </div>

        {/* Massive Bold Headline with 3D Depth */}
        <div
          className="relative transition-transform duration-200 ease-out"
          style={{
            transform: `perspective(1000px) rotateX(${mousePos.y * -4}deg) rotateY(${mousePos.x * 4}deg)`,
          }}
        >
          <h2 className="text-xs sm:text-sm md:text-base font-mono uppercase tracking-[0.3em] text-accent mb-2 sm:mb-4">
            VISUAL ALCHEMY & BRAND ARCHITECTURE
          </h2>

          <h1 className="font-heading font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter text-white leading-[0.95] uppercase">
            DESIGN
            <br />
            <span className="bg-gradient-to-r from-white via-neutral-200 to-white/60 bg-clip-text text-transparent">
              THAT SPEAKS.
            </span>
          </h1>
        </div>

        {/* Subtitle / Bio summary */}
        <p className="max-w-2xl text-neutral-400 text-sm sm:text-base md:text-lg mt-6 sm:mt-8 font-normal leading-relaxed">
          {DESIGNER_INFO.tagline}
        </p>

        {/* Action Button Suite */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10">
          <button
            onClick={() => {
              sound.playSelect();
              onExploreClick();
            }}
            onMouseEnter={() => sound.playHover()}
            className="px-8 py-4 rounded-full bg-accent hover:bg-accent-hover text-black font-heading font-bold text-sm tracking-wider transition-all duration-300 shadow-[0_0_30px_var(--accent-glow)] hover:scale-105 flex items-center gap-2.5 cursor-pointer group"
          >
            <span>EXPLORE FEATURED WORKS</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              sound.playSelect();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            onMouseEnter={() => sound.playHover()}
            className="px-6 py-4 rounded-full glass-panel hover:border-accent text-white hover:text-accent font-heading font-semibold text-sm tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer"
          >
            <span>COMMISSION A PROJECT</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Bottom Hero Telemetry & Scroll Anchor */}
      <div className="max-w-7xl mx-auto w-full pt-8 sm:pt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.06] text-xs font-mono text-neutral-400 z-10">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-accent font-bold">01</span>
            <span>BRAND IDENTITY</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent font-bold">02</span>
            <span>POSTERS & ART</span>
          </div>
          <div className="flex items-center gap-2 hidden md:flex">
            <span className="text-accent font-bold">03</span>
            <span>3D & MOTION</span>
          </div>
        </div>

        <button
          onClick={() => {
            sound.playSelect();
            onExploreClick();
          }}
          className="flex items-center gap-2 text-neutral-400 hover:text-accent transition-colors group cursor-pointer"
        >
          <span className="tracking-widest uppercase text-[11px]">SCROLL TO EXPLORE</span>
          <div className="w-6 h-6 rounded-full border border-neutral-700 group-hover:border-accent flex items-center justify-center transition-colors">
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </div>
        </button>
      </div>
    </section>
  );
}
