import React, { useState } from 'react';
import { Layers, Image, Sparkles, Monitor, Cpu, Check, ArrowRight } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { sound } from '../utils/sound';

export default function Skills() {
  const [activeTab, setActiveTab] = useState(SKILL_CATEGORIES[0].id);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Layers': return <Layers className="w-5 h-5 text-accent" />;
      case 'Image': return <Image className="w-5 h-5 text-accent" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-accent" />;
      case 'Monitor': return <Monitor className="w-5 h-5 text-accent" />;
      default: return <Cpu className="w-5 h-5 text-accent" />;
    }
  };

  const currentCategory = SKILL_CATEGORIES.find(c => c.id === activeTab) || SKILL_CATEGORIES[0];

  return (
    <section id="skills" className="relative py-24 sm:py-32 px-4 sm:px-8 md:px-12 bg-dark-900/40">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/[0.08] gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>CAPABILITIES & ARSENAL</span>
            </div>
            <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
              CREATIVE MASTERY.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-neutral-400 font-normal">
            A comprehensive spectrum of craft spanning vector precision, generative typography, procedural 3D, and high-fidelity brand systems.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {SKILL_CATEGORIES.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  sound.playSelect();
                  setActiveTab(cat.id);
                }}
                onMouseEnter={() => sound.playHover()}
                className={`p-4 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between border cursor-pointer ${
                  isActive
                    ? 'bg-accent/10 border-accent shadow-[0_0_25px_var(--accent-glow)]'
                    : 'glass-panel border-white/5 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-xl ${isActive ? 'bg-accent text-black' : 'bg-white/5 text-white'}`}>
                    {getIcon(cat.icon)}
                  </div>
                  {isActive && <span className="w-2 h-2 rounded-full bg-accent animate-ping" />}
                </div>

                <div>
                  <h3 className={`font-heading font-bold text-sm sm:text-base ${isActive ? 'text-white' : 'text-neutral-300'}`}>
                    {cat.name}
                  </h3>
                  <p className="text-[11px] font-mono text-neutral-400 mt-1 line-clamp-1">
                    {cat.tools.join(', ')}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Category Deep Dive */}
        <div className="p-6 sm:p-10 rounded-3xl glass-panel border border-white/10 shadow-2xl relative overflow-hidden animate-in fade-in duration-300">
          {/* Subtle watermarked background title */}
          <div className="absolute right-4 -bottom-6 font-heading font-black text-8xl md:text-9xl text-white/[0.02] select-none pointer-events-none">
            {currentCategory.id.toUpperCase()}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left: Summary & Tools */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-mono mb-4">
                  {currentCategory.name}
                </div>
                <h4 className="font-heading font-black text-2xl sm:text-3xl text-white mb-3">
                  Disciplined Craft & Innovation
                </h4>
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                  {currentCategory.description}
                </p>
              </div>

              {/* Tools Badges */}
              <div className="pt-4 border-t border-white/10">
                <div className="text-[11px] font-mono text-neutral-400 mb-3 tracking-wider uppercase">
                  Primary Toolchain
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentCategory.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-3.5 py-1.5 rounded-full bg-dark-950/80 border border-white/10 text-xs font-mono text-neutral-200 hover:border-accent hover:text-accent transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Interactive Typographic Skill Cards */}
            <div className="lg:col-span-7 flex flex-col gap-3">
              {currentCategory.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-dark-950/60 border border-white/5 hover:border-accent/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
                  onMouseEnter={() => sound.playHover()}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-accent font-bold">0{idx + 1}</span>
                    <span className="font-heading font-bold text-sm sm:text-base text-white group-hover:text-accent transition-colors">
                      {skill.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    {/* Visual Segmented Typographic Indicator */}
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, barIdx) => (
                        <div
                          key={barIdx}
                          className={`w-6 sm:w-8 h-2 rounded-sm transition-all duration-500 ${
                            barIdx < Math.round(skill.level / 20)
                              ? 'bg-accent shadow-[0_0_8px_var(--accent-glow)]'
                              : 'bg-white/10'
                          }`}
                        />
                      ))}
                    </div>

                    <span className="font-mono text-xs text-neutral-400 w-12 text-right">
                      {skill.exp}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
