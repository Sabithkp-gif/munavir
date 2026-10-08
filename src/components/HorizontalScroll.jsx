import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { sound } from '../utils/sound';

export default function HorizontalScroll({ onOpenProject }) {
  const scrollContainerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setScrollProgress((scrollLeft / maxScroll) * 100);
    }
  };

  const scrollBy = (offset) => {
    sound.playHover();
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section id="selected-reel" className="relative py-24 sm:py-32 bg-dark-900/60 overflow-hidden border-y border-white/[0.06]">
      {/* Background ambient light */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[350px] bg-accent/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 mb-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>EDITORIAL SHOWCASE REEL</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight">
              SELECTED CURATIONS.
            </h2>
          </div>

          {/* Navigation Arrows & Drag Instruction */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-neutral-500 hidden md:inline">
              DRAG OR SCROLL HORIZONTALLY →
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollBy(-420)}
                className="p-3 rounded-full glass-panel hover:border-accent text-neutral-300 hover:text-white transition-all cursor-pointer"
                title="Scroll Left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => scrollBy(420)}
                className="p-3 rounded-full glass-panel hover:border-accent text-neutral-300 hover:text-white transition-all cursor-pointer"
                title="Scroll Right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Carousel Track */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        data-cursor="drag"
        className="flex gap-6 sm:gap-8 px-4 sm:px-8 md:px-12 overflow-x-auto no-scrollbar scroll-smooth pb-8"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {PROJECTS.map((project, index) => (
          <div
            key={project.id}
            onClick={() => {
              sound.playSelect();
              onOpenProject(project);
            }}
            onMouseEnter={() => sound.playHover()}
            style={{ scrollSnapAlign: 'start' }}
            className="group relative flex-shrink-0 w-[300px] sm:w-[420px] md:w-[480px] rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-accent/60 transition-all duration-500 cursor-pointer flex flex-col justify-between"
          >
            {/* Massive Index Watermark */}
            <div className="absolute top-4 right-6 font-heading font-black text-6xl sm:text-8xl text-white/[0.04] group-hover:text-accent/10 transition-colors pointer-events-none select-none">
              0{index + 1}
            </div>

            {/* Project Imagery */}
            <div className="relative aspect-[16/11] overflow-hidden bg-dark-950">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-80" />

              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full glass-panel text-[11px] font-mono text-accent font-semibold backdrop-blur-md">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Editorial Card Bottom */}
            <div className="p-6 sm:p-8 bg-dark-900/90 relative z-10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
                    {project.client} • {project.year}
                  </div>
                  <h3 className="font-heading font-black text-lg sm:text-2xl text-white group-hover:text-accent transition-colors line-clamp-1">
                    {project.title.split('—')[0]}
                  </h3>
                  <p className="text-xs sm:text-sm font-light text-neutral-400 mt-2 line-clamp-2">
                    {project.subtitle}
                  </p>
                </div>

                <div className="w-9 h-9 rounded-full bg-white/5 group-hover:bg-accent group-hover:text-black flex items-center justify-center text-neutral-300 transition-all shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Track Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 mt-4">
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-accent transition-all duration-300 shadow-[0_0_10px_var(--accent-glow)]"
            style={{ width: `${Math.max(15, scrollProgress)}%` }}
          />
        </div>
      </div>
    </section>
  );
}
