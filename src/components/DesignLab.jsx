import React, { useState, useRef } from 'react';
import { Sparkles, Sliders, RefreshCw, Download, Layers, Type, Palette, Zap } from 'lucide-react';
import { sound } from '../utils/sound';

export default function DesignLab() {
  const [headline, setHeadline] = useState('VISUAL ALCHEMY');
  const [subline, setSubline] = useState('MUNAVIR // GRAPHIC DESIGN LAB 2026');
  const [blendMode, setBlendMode] = useState('difference');
  const [gridSize, setGridSize] = useState(24);
  const [rotation, setRotation] = useState(-4);
  const [colorScheme, setColorScheme] = useState('lime');
  const [noiseLevel, setNoiseLevel] = useState(40);
  const [isExporting, setIsExporting] = useState(false);

  const posterRef = useRef(null);

  const colorPresets = {
    lime: { bg: '#06070a', text: '#c5ff4a', accent: '#a855f7', border: 'rgba(197, 255, 74, 0.4)' },
    violet: { bg: '#08050e', text: '#a855f7', accent: '#00f0ff', border: 'rgba(168, 85, 247, 0.4)' },
    orange: { bg: '#0a0503', text: '#ff6b35', accent: '#ffe600', border: 'rgba(255, 107, 53, 0.4)' },
    cyan: { bg: '#03080b', text: '#00f0ff', accent: '#ff007a', border: 'rgba(0, 240, 255, 0.4)' },
    mono: { bg: '#000000', text: '#ffffff', accent: '#888888', border: 'rgba(255, 255, 255, 0.3)' }
  };

  const activeColors = colorPresets[colorScheme];

  const randomize = () => {
    sound.playSelect();
    const words = ['KINETIC FORM', 'SYNTHETIC SOUL', 'VOID & MATTER', 'DIGITAL ECHO', 'SWISS BRUTALISM', 'NEO FUTURE'];
    const subwords = ['EXPERIMENTAL COMPOSITION // EDITION 09', 'STUDIO PROTOTYPE // TOKYO 2026', 'OPTICAL FREQUENCIES // 120BPM'];
    const schemes = ['lime', 'violet', 'orange', 'cyan', 'mono'];
    const blends = ['difference', 'exclusion', 'screen', 'normal'];

    setHeadline(words[Math.floor(Math.random() * words.length)]);
    setSubline(subwords[Math.floor(Math.random() * subwords.length)]);
    setColorScheme(schemes[Math.floor(Math.random() * schemes.length)]);
    setBlendMode(blends[Math.floor(Math.random() * blends.length)]);
    setRotation(Math.floor(Math.random() * 20 - 10));
    setGridSize(Math.floor(Math.random() * 30 + 15));
  };

  return (
    <section id="lab" className="relative py-24 sm:py-32 px-4 sm:px-8 md:px-12 bg-dark-900/40 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/[0.08] gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>INTERACTIVE PLAYGROUND</span>
            </div>
            <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
              DESIGN ALCHEMY LAB.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-neutral-400 font-normal">
            Take control of the typography engine. Tweak optical distortion, kinetic grids, and harmonic blend modes in real time.
          </p>
        </div>

        {/* 2-Column Lab Studio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Interactive Controls Panel */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <h3 className="font-heading font-bold text-lg text-white flex items-center gap-2">
                <Sliders className="w-4 h-4 text-accent" />
                <span>Parametric Controls</span>
              </h3>

              <button
                onClick={randomize}
                className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-accent hover:text-black text-neutral-300 text-xs font-mono flex items-center gap-1.5 transition-all"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Randomize</span>
              </button>
            </div>

            {/* Input Headline */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                <Type className="w-3.5 h-3.5 text-accent" />
                <span>Poster Headline</span>
              </label>
              <input
                type="text"
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-dark-950/80 border border-white/10 text-white font-heading font-bold text-sm focus:border-accent focus:outline-none transition-colors"
              />
            </div>

            {/* Input Subline */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                <Type className="w-3.5 h-3.5 text-accent" />
                <span>Subline / Metadata</span>
              </label>
              <input
                type="text"
                value={subline}
                onChange={(e) => setSubline(e.target.value)}
                className="w-full px-4 py-2 rounded-xl bg-dark-950/80 border border-white/10 text-neutral-200 font-mono text-xs focus:border-accent focus:outline-none transition-colors"
              />
            </div>

            {/* Color Scheme Picker */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5 text-accent" />
                <span>Color Frequency</span>
              </label>
              <div className="grid grid-cols-5 gap-2">
                {Object.keys(colorPresets).map((scheme) => (
                  <button
                    key={scheme}
                    onClick={() => {
                      sound.playHover();
                      setColorScheme(scheme);
                    }}
                    className={`py-2 rounded-xl text-[10px] font-mono uppercase transition-all border ${
                      colorScheme === scheme
                        ? 'border-accent bg-accent/20 text-white font-bold'
                        : 'border-white/5 bg-dark-950 text-neutral-400 hover:border-white/20'
                    }`}
                  >
                    {scheme}
                  </button>
                ))}
              </div>
            </div>

            {/* Blend Mode */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-accent" />
                <span>Layer Blend Mode</span>
              </label>
              <div className="grid grid-cols-4 gap-2">
                {['difference', 'exclusion', 'screen', 'normal'].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => {
                      sound.playHover();
                      setBlendMode(mode);
                    }}
                    className={`py-2 rounded-xl text-[10px] font-mono capitalize transition-all border ${
                      blendMode === mode
                        ? 'border-accent bg-accent/20 text-white font-bold'
                        : 'border-white/5 bg-dark-950 text-neutral-400 hover:border-white/20'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>

            {/* Rotation Slider */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-mono text-neutral-400">
                <span>Kinetic Angle</span>
                <span className="text-accent">{rotation}°</span>
              </div>
              <input
                type="range"
                min="-25"
                max="25"
                value={rotation}
                onChange={(e) => setRotation(Number(e.target.value))}
                className="w-full accent-accent bg-dark-950 cursor-pointer"
              />
            </div>

            {/* Grid Density Slider */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-mono text-neutral-400">
                <span>Grid Density</span>
                <span className="text-accent">{gridSize}px</span>
              </div>
              <input
                type="range"
                min="10"
                max="50"
                value={gridSize}
                onChange={(e) => setGridSize(Number(e.target.value))}
                className="w-full accent-accent bg-dark-950 cursor-pointer"
              />
            </div>
          </div>

          {/* Right: Live Interactive Poster Viewport */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div
              ref={posterRef}
              style={{
                backgroundColor: activeColors.bg,
                borderColor: activeColors.border,
                backgroundImage: `radial-gradient(${activeColors.accent}20 1px, transparent 1px)`,
                backgroundSize: `${gridSize}px ${gridSize}px`,
              }}
              className="relative w-full max-w-md aspect-[3/4] rounded-3xl p-8 flex flex-col justify-between overflow-hidden shadow-2xl border transition-all duration-500 select-none group"
            >
              {/* Noise texture */}
              <div className="scanlines absolute inset-0 opacity-20 pointer-events-none" />

              {/* Poster Top Bar */}
              <div className="flex items-center justify-between text-[10px] font-mono tracking-widest z-10" style={{ color: activeColors.text }}>
                <span>POSTER STUDIO // № 008</span>
                <span>CALICUT 2026</span>
              </div>

              {/* Center Kinetic Typography */}
              <div
                className="my-auto text-center transition-transform duration-300"
                style={{
                  transform: `rotate(${rotation}deg)`,
                  mixBlendMode: blendMode,
                }}
              >
                {/* Visual geometry sphere */}
                <div
                  className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 rounded-full border-2 border-dashed animate-spin-slow opacity-60"
                  style={{ borderColor: activeColors.text }}
                />

                <h2
                  className="font-heading font-black text-4xl sm:text-5xl md:text-6xl tracking-tighter uppercase leading-[0.85]"
                  style={{ color: activeColors.text }}
                >
                  {headline}
                </h2>

                <div
                  className="mt-4 font-mono text-[9px] sm:text-[11px] tracking-widest uppercase font-semibold"
                  style={{ color: activeColors.accent }}
                >
                  {subline}
                </div>
              </div>

              {/* Poster Bottom Bar */}
              <div className="flex items-center justify-between text-[9px] font-mono border-t pt-4 z-10" style={{ borderColor: `${activeColors.text}30`, color: activeColors.text }}>
                <span>MUNAVIR DESIGN SYSTEM</span>
                <span>60 FPS INTERACTIVE</span>
              </div>
            </div>

            <p className="text-xs font-mono text-neutral-400 mt-4 text-center">
              ▲ Parametric visual created live with web typography & blend shaders
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
