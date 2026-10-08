import React, { useState, useEffect } from 'react';
import { Palette, Volume2, VolumeX, RotateCcw, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { COLOR_THEMES, DESIGNER_INFO } from '../data/portfolioData';
import { sound } from '../utils/sound';

export default function Navbar({ activeTheme, onThemeChange, isMuted, onToggleMute, onReplayIntro }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'Selected', href: '#selected-reel' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Process', href: '#process' },
    { label: 'Design Lab', href: '#lab' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    sound.playSelect();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 py-3 sm:py-4 px-4 sm:px-8 md:px-12 ${
          isScrolled
            ? 'bg-[#06070c]/85 backdrop-blur-xl border-b border-white/[0.07] shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-3'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="group flex items-center gap-3"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 group-hover:border-accent flex items-center justify-center transition-all shadow-[0_0_15px_var(--accent-glow)]">
              <span className="font-heading font-black text-lg text-accent">M</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-heading font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-accent transition-colors">
                  {DESIGNER_INFO.name}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
              </div>
              <span className="text-[10px] font-mono text-neutral-400 tracking-wider hidden sm:block">
                GRAPHIC DESIGN & VISUAL ART
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-dark-900/60 p-1.5 rounded-full border border-white/[0.08] backdrop-blur-md">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                onMouseEnter={() => sound.playHover()}
                className="px-4 py-1.5 rounded-full text-xs font-medium text-neutral-300 hover:text-black hover:bg-accent transition-all duration-300 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Controls: Theme Switcher, Audio, Replay Intro & CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Color Accent Picker */}
            <div className="relative">
              <button
                onClick={() => {
                  sound.playHover();
                  setPaletteOpen(!paletteOpen);
                }}
                className="p-2 sm:px-3 sm:py-1.5 rounded-full glass-panel hover:border-accent text-neutral-300 hover:text-white transition-all flex items-center gap-1.5"
                title="Change Accent Color Theme"
              >
                <div
                  className="w-3.5 h-3.5 rounded-full shadow-[0_0_8px_currentColor]"
                  style={{ backgroundColor: activeTheme.color }}
                />
                <Palette className="w-3.5 h-3.5 text-neutral-400 hidden sm:block" />
              </button>

              {/* Palette Dropdown */}
              {paletteOpen && (
                <div className="absolute right-0 mt-3 p-3 w-56 rounded-2xl bg-dark-900/95 border border-white/10 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-50 animate-in fade-in zoom-in-95 duration-200">
                  <div className="text-[11px] font-mono text-neutral-400 mb-2.5 px-1 uppercase tracking-wider">
                    Accent Color Matrix
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {COLOR_THEMES.map((theme) => (
                      <button
                        key={theme.id}
                        onClick={() => {
                          onThemeChange(theme);
                          setPaletteOpen(false);
                          sound.playSelect();
                        }}
                        className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all border ${
                          activeTheme.id === theme.id
                            ? 'border-accent bg-accent/15 scale-105'
                            : 'border-white/5 hover:border-white/20 bg-dark-850/50'
                        }`}
                      >
                        <div
                          className="w-5 h-5 rounded-full shadow-md"
                          style={{ backgroundColor: theme.color }}
                        />
                        <span className="text-[9px] font-mono text-neutral-300 truncate w-full text-center">
                          {theme.name.split(' ')[0]}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sound FX Toggle */}
            <button
              onClick={onToggleMute}
              className="p-2 rounded-full glass-panel hover:border-accent text-neutral-300 hover:text-white transition-all"
              title={isMuted ? "Unmute Audio FX" : "Mute Audio FX"}
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-red-400" />
              ) : (
                <Volume2 className="w-4 h-4 text-accent" />
              )}
            </button>

            {/* Replay Intro */}
            <button
              onClick={() => {
                sound.playSelect();
                onReplayIntro();
              }}
              className="p-2 rounded-full glass-panel hover:border-accent text-neutral-300 hover:text-accent transition-all hidden md:flex"
              title="Replay Intro Animation"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* Direct CTA */}
            <button
              onClick={() => handleNavClick('#contact')}
              className="hidden sm:flex px-4 py-2 rounded-full bg-accent hover:bg-accent-hover text-black font-heading font-bold text-xs tracking-wider transition-all shadow-[0_0_20px_var(--accent-glow)] items-center gap-1.5 cursor-pointer"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl glass-panel text-neutral-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-dark-950/95 backdrop-blur-2xl flex flex-col justify-center px-8 py-16 lg:hidden animate-in fade-in duration-300">
          <div className="flex flex-col gap-6 text-center">
            {navItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="font-heading font-black text-2xl sm:text-3xl text-neutral-300 hover:text-accent transition-colors flex items-center justify-center gap-3"
              >
                <span className="text-xs font-mono text-accent">0{index + 1}</span>
                <span>{item.label}</span>
              </button>
            ))}

            <div className="pt-8 border-t border-white/10 flex flex-col items-center gap-4">
              <button
                onClick={() => {
                  onReplayIntro();
                  setMobileMenuOpen(false);
                }}
                className="px-6 py-2.5 rounded-full glass-panel text-xs font-mono text-neutral-300 flex items-center gap-2"
              >
                <RotateCcw className="w-3.5 h-3.5 text-accent" />
                <span>REPLAY INTRO</span>
              </button>

              <button
                onClick={() => handleNavClick('#contact')}
                className="w-full max-w-xs py-3 rounded-full bg-accent text-black font-heading font-bold text-sm tracking-wider shadow-[0_0_30px_var(--accent-glow)]"
              >
                START A PROJECT
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
