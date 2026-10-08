import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Filter, Eye } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { sound } from '../utils/sound';

export default function Projects({ onOpenProject }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Brand Identity', 'Poster & Visual Art', 'Motion & 3D', 'Editorial & Packaging', 'UI/UX'];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="work" className="relative py-24 sm:py-32 px-4 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-8 border-b border-white/[0.08] gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>FEATURED CASE STUDIES</span>
            </div>
            <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
              SELECTED WORKS.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-neutral-400 font-normal">
            A curated index of strategic brand transformations, 3D explorations, and experimental poster collections.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  sound.playSelect();
                  setActiveFilter(cat);
                }}
                onMouseEnter={() => sound.playHover()}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-accent text-black font-bold shadow-[0_0_20px_var(--accent-glow)]'
                    : 'glass-panel text-neutral-300 hover:border-white/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              data-cursor="view"
              onClick={() => {
                sound.playSelect();
                onOpenProject(project);
              }}
              onMouseEnter={() => sound.playHover()}
              className="group relative rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-accent/60 transition-all duration-500 flex flex-col cursor-pointer hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_30px_var(--accent-glow)]"
            >
              {/* Image Container with Zoom & Parallax */}
              <div className="relative aspect-[16/10] overflow-hidden bg-dark-950">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Top Badge: Category & Year */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full glass-panel text-[11px] font-mono text-accent font-semibold backdrop-blur-md">
                    {project.category}
                  </span>
                  <span className="px-3 py-1 rounded-full glass-panel text-[11px] font-mono text-white/80 backdrop-blur-md">
                    {project.year}
                  </span>
                </div>

                {/* Floating View Case Study Button on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="px-5 py-2.5 rounded-full bg-accent text-black font-heading font-bold text-xs tracking-wider flex items-center gap-2 shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="w-4 h-4" />
                    <span>VIEW CASE STUDY</span>
                  </div>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 bg-dark-900/90">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-heading font-black text-xl sm:text-2xl text-white group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-accent group-hover:text-black flex items-center justify-center text-neutral-400 transition-all shrink-0">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-neutral-400 text-xs sm:text-sm mt-2 line-clamp-2 font-light">
                    {project.summary}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-white/[0.06]">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-dark-950/80 text-neutral-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
