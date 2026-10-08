import React, { useState } from 'react';
import { X, ExternalLink, Check, Copy, Sparkles, ChevronLeft, ChevronRight, Layers, ArrowUpRight } from 'lucide-react';
import { sound } from '../utils/sound';

export default function ProjectModal({ project, onClose, onSelectProject, allProjects }) {
  const [copiedHex, setCopiedHex] = useState(null);

  if (!project) return null;

  const handleCopyColor = (hex) => {
    sound.playSelect();
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 md:p-10 bg-dark-950/90 backdrop-blur-2xl overflow-y-auto animate-in fade-in duration-300">
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-dark-900 border border-white/10 rounded-3xl shadow-[0_30px_100px_rgba(0,0,0,0.9)] overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-30 px-6 py-4 bg-dark-900/90 backdrop-blur-xl border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent font-mono text-xs font-semibold">
              {project.category}
            </span>
            <span className="text-neutral-500 text-xs font-mono">• {project.year}</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Prev / Next switchers */}
            <button
              onClick={() => {
                sound.playHover();
                onSelectProject(prevProject);
              }}
              className="p-2 rounded-full glass-panel hover:border-accent text-neutral-300 hover:text-white"
              title="Previous Case Study"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                sound.playHover();
                onSelectProject(nextProject);
              }}
              className="p-2 rounded-full glass-panel hover:border-accent text-neutral-300 hover:text-white"
              title="Next Case Study"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Close */}
            <button
              onClick={() => {
                sound.playSelect();
                onClose();
              }}
              className="p-2 ml-2 rounded-full bg-white/5 hover:bg-red-500/20 text-neutral-300 hover:text-red-400 border border-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-12">
          {/* Hero Banner */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src={project.heroImage || project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h1 className="font-heading font-black text-2xl sm:text-4xl md:text-5xl text-white">
                {project.title}
              </h1>
              <p className="text-accent font-mono text-xs sm:text-sm mt-1">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Key Project Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl glass-panel border border-white/5">
            <div>
              <div className="text-[10px] font-mono text-neutral-400 uppercase">Client</div>
              <div className="text-xs sm:text-sm font-bold text-white mt-1">{project.client}</div>
            </div>
            <div>
              <div className="text-[10px] font-mono text-neutral-400 uppercase">Role</div>
              <div className="text-xs sm:text-sm font-bold text-white mt-1">{project.role}</div>
            </div>
            <div>
              <div className="text-[10px] font-mono text-neutral-400 uppercase">Timeline</div>
              <div className="text-xs sm:text-sm font-bold text-white mt-1">{project.duration}</div>
            </div>
            <div>
              <div className="text-[10px] font-mono text-neutral-400 uppercase">Impact / Recognition</div>
              <div className="text-xs sm:text-sm font-bold text-accent mt-1">{project.stats?.awards || "Featured"}</div>
            </div>
          </div>

          {/* Challenge & Solution Narrative */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-dark-950/70 border border-white/5 space-y-2">
              <h3 className="font-heading font-bold text-lg text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                The Creative Challenge
              </h3>
              <p className="text-neutral-300 text-sm leading-relaxed font-light">
                {project.challenge}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-dark-950/70 border border-white/5 space-y-2">
              <h3 className="font-heading font-bold text-lg text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                The Strategic Solution
              </h3>
              <p className="text-neutral-300 text-sm leading-relaxed font-light">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Interactive Color Palette System (Clickable copy hex) */}
          {project.colorPalette && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading font-black text-xl text-white flex items-center gap-2">
                  <Layers className="w-5 h-5 text-accent" />
                  Color Harmonic System
                </h3>
                <span className="text-xs font-mono text-neutral-400">Click swatch to copy HEX</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {project.colorPalette.map((color, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleCopyColor(color.hex)}
                    className="group p-3 rounded-2xl glass-panel border border-white/5 hover:border-accent text-left transition-all cursor-pointer"
                  >
                    <div
                      className="w-full h-16 rounded-xl mb-3 shadow-inner border border-white/10 flex items-end justify-end p-2 transition-transform group-hover:scale-[1.02]"
                      style={{ backgroundColor: color.hex }}
                    >
                      {copiedHex === color.hex ? (
                        <span className="p-1 rounded-md bg-black/75 text-accent text-[10px] font-mono flex items-center gap-1">
                          <Check className="w-3 h-3" /> COPIED
                        </span>
                      ) : (
                        <Copy className="w-3.5 h-3.5 text-black/60 group-hover:text-black transition-colors" />
                      )}
                    </div>
                    <div className="font-heading font-bold text-xs text-white">{color.name}</div>
                    <div className="font-mono text-[11px] text-accent font-semibold">{color.hex}</div>
                    <div className="text-[10px] text-neutral-400 mt-0.5">{color.tag}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Typography Pairings */}
          {project.typography && (
            <div className="p-6 rounded-2xl glass-panel border border-white/5 space-y-4">
              <h3 className="font-heading font-black text-xl text-white">
                Typographic Hierarchy
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
                <div className="p-3 bg-dark-950/60 rounded-xl border border-white/5">
                  <span className="text-neutral-500 block mb-1">PRIMARY HEADLINE</span>
                  <span className="text-white font-bold">{project.typography.primary}</span>
                </div>
                <div className="p-3 bg-dark-950/60 rounded-xl border border-white/5">
                  <span className="text-neutral-500 block mb-1">TELEMETRY & ACCENT</span>
                  <span className="text-accent font-bold">{project.typography.secondary}</span>
                </div>
                <div className="p-3 bg-dark-950/60 rounded-xl border border-white/5">
                  <span className="text-neutral-500 block mb-1">EDITORIAL BODY</span>
                  <span className="text-neutral-300">{project.typography.body}</span>
                </div>
              </div>
            </div>
          )}

          {/* Deliverables Suite */}
          {project.deliverables && (
            <div className="space-y-4">
              <h3 className="font-heading font-black text-xl text-white">
                Deliverables & Production Assets
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-dark-950/60 border border-white/5 flex items-center gap-3 text-sm text-neutral-200"
                  >
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Visual Gallery / Mockups */}
          {project.gallery && (
            <div className="space-y-6">
              <h3 className="font-heading font-black text-xl text-white">
                Visual Artifacts & Process Renders
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.gallery.map((item, idx) => (
                  <div
                    key={idx}
                    className="group relative rounded-2xl overflow-hidden glass-panel border border-white/10"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={item.url}
                        alt={item.caption}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-4 bg-dark-950/90 border-t border-white/5">
                      <p className="text-xs font-mono text-neutral-300">{item.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Project CTA */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-accent/15 via-dark-850 to-dark-950 border border-accent/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h4 className="font-heading font-bold text-xl text-white">
                Need a transformative identity like this?
              </h4>
              <p className="text-xs font-mono text-neutral-400 mt-1">
                Let's discuss timelines, scope, and deliverables for your brand.
              </p>
            </div>

            <button
              onClick={() => {
                onClose();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-full bg-accent hover:bg-accent-hover text-black font-heading font-bold text-xs tracking-wider transition-all shadow-[0_0_25px_var(--accent-glow)] shrink-0 flex items-center gap-2 cursor-pointer"
            >
              <span>INQUIRE ABOUT THIS WORK</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
