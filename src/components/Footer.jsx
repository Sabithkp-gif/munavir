import React, { useState, useEffect } from 'react';
import { ArrowUp, Sparkles, Heart } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';
import { sound } from '../utils/sound';

export default function Footer({ onReplayIntro }) {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // GMT+5:30 (India Standard Time)
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setTimeStr(now.toLocaleTimeString('en-GB', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    sound.playSelect();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-4 sm:px-8 md:px-12 bg-dark-950 border-t border-white/[0.08] text-xs font-mono text-neutral-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand copyright & live clock */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-white font-bold">{DESIGNER_INFO.name} STUDIO</span>
          </div>
          <span className="hidden sm:inline text-neutral-600">•</span>
          <span>CALICUT / IST: <span className="text-accent font-semibold">{timeStr || '06:35:00'}</span></span>
          <span className="hidden sm:inline text-neutral-600">•</span>
          <span>© 2026 ALL RIGHTS RESERVED</span>
        </div>

        {/* Center: Replay Intro Trigger */}
        <button
          onClick={onReplayIntro}
          className="hover:text-accent transition-colors flex items-center gap-1.5"
        >
          <Sparkles className="w-3.5 h-3.5 text-accent" />
          <span>REPLAY INTRO ANIMATION</span>
        </button>

        {/* Right: Back to Top */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full glass-panel hover:border-accent text-neutral-300 hover:text-white transition-all flex items-center gap-2 group cursor-pointer"
          title="Back to Top"
        >
          <span className="text-[11px] font-mono group-hover:text-accent transition-colors">TOP</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
}
