import React, { useState, useEffect } from 'react';
import { Sparkles, FastForward, Volume2, VolumeX, ArrowRight } from 'lucide-react';
import { sound } from '../utils/sound';

export default function TextIntro({ onComplete, isMuted, onToggleMute, activeTheme, onThemeChange }) {
  const [phase, setPhase] = useState('initial'); // 'initial' -> 'animating-letters' -> 'subtitle' -> 'ready' -> 'entering'
  const [activeCharIndex, setActiveCharIndex] = useState(-1);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const letters = ['M', 'U', 'N', 'A', 'V', 'I', 'R'];
  const subtitle = "SENIOR GRAPHIC DESIGNER & VISUAL ARTIST";

  // Mouse Parallax
  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
    const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);
    setMousePos({ x, y });
  };

  useEffect(() => {
    let timers = [];

    // 1. Start letter stagger sequence
    timers.push(setTimeout(() => {
      setPhase('animating-letters');
      sound.playPowerUp();
    }, 400));

    // Stagger each letter
    letters.forEach((_, idx) => {
      timers.push(setTimeout(() => {
        setActiveCharIndex(idx);
        sound.playKeyClick();
      }, 500 + idx * 180));
    });

    // 2. Subtitle Reveal
    timers.push(setTimeout(() => {
      setPhase('subtitle');
      sound.playSelect();
    }, 500 + letters.length * 180 + 300));

    // 3. Ready state with Enter CTA
    timers.push(setTimeout(() => {
      setPhase('ready');
    }, 500 + letters.length * 180 + 900));

    return () => timers.forEach(clearTimeout);
  }, []);

  const handleEnter = () => {
    sound.playSelect();
    setPhase('entering');
    setTimeout(() => {
      onComplete();
    }, 700);
  };

  const handleSkip = () => {
    sound.playSelect();
    setPhase('entering');
    setTimeout(() => {
      onComplete();
    }, 250);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`fixed inset-0 z-50 bg-[#030306] flex flex-col justify-between p-6 sm:p-12 overflow-hidden select-none transition-all duration-700 ${
        phase === 'entering' ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Dynamic Background Mesh Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-accent/15 rounded-full blur-[180px] pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate(calc(-50% + ${mousePos.x * 40}px), calc(-50% + ${mousePos.y * 40}px))`,
        }}
      />

      {/* Subtle Background Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* TOP BAR */}
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between z-20">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-accent animate-ping" />
          <span className="text-xs font-mono text-neutral-400 tracking-wider">
            PORTFOLIO TRANSMISSION // 2026
          </span>
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleMute}
            className="p-2.5 rounded-full glass-panel hover:border-accent text-neutral-300 hover:text-white transition-all text-xs flex items-center gap-1.5"
            title={isMuted ? "Unmute Audio" : "Mute Audio"}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-accent" />}
            <span className="text-[10px] font-mono hidden md:inline">{isMuted ? "SOUND OFF" : "SOUND ON"}</span>
          </button>

          <button
            onClick={handleSkip}
            className="px-5 py-2 rounded-full glass-panel hover:bg-accent/15 hover:border-accent text-neutral-300 hover:text-accent font-mono text-xs font-bold flex items-center gap-1.5 transition-all group"
          >
            <span>SKIP INTRO</span>
            <FastForward className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* CENTER: GIANT KINETIC "MUNAVIR" TYPOGRAPHY ANIMATION */}
      <div className="max-w-7xl mx-auto w-full my-auto flex flex-col items-center justify-center text-center z-10 py-8">
        {/* Top Tagline */}
        <div
          className={`transition-all duration-700 ${
            phase !== 'initial' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-white/10 mb-6 sm:mb-8 text-xs font-mono text-accent">
            <Sparkles className="w-3.5 h-3.5 text-accent animate-spin-slow" />
            <span className="tracking-widest">VISUAL ALCHEMY & BRAND ARCHITECTURE</span>
          </div>
        </div>

        {/* Giant Staggered Letters with 3D Parallax Tilt */}
        <div
          className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 perspective-laptop"
          style={{
            transform: `rotateX(${mousePos.y * -8}deg) rotateY(${mousePos.x * 8}deg)`,
          }}
        >
          {letters.map((char, index) => {
            const isRevealed = index <= activeCharIndex;
            return (
              <div
                key={index}
                className={`relative font-heading font-black text-6xl sm:text-8xl md:text-9xl lg:text-[13rem] leading-none tracking-tighter transition-all duration-700 select-none ${
                  isRevealed
                    ? 'opacity-100 scale-100 translate-y-0 rotate-0 text-white'
                    : 'opacity-0 scale-50 translate-y-16 -rotate-12 text-transparent'
                }`}
                style={{
                  transitionDelay: `${index * 60}ms`,
                  textShadow: isRevealed
                    ? '0 0 40px var(--accent-glow), 0 20px 50px rgba(0,0,0,0.8)'
                    : 'none',
                }}
              >
                {/* Main letter */}
                <span className="bg-gradient-to-b from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent hover:text-accent transition-colors cursor-default">
                  {char}
                </span>

                {/* Subtle Accent Glow Ring on hover */}
                {isRevealed && (
                  <span className="absolute -inset-2 bg-accent/10 rounded-3xl blur-xl opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />
                )}
              </div>
            );
          })}
        </div>

        {/* Subtitle with expanding letter spacing */}
        <div className="min-h-[40px] mt-6 sm:mt-10 overflow-hidden">
          <p
            className={`font-mono text-xs sm:text-sm md:text-base tracking-[0.3em] sm:tracking-[0.45em] text-accent font-bold uppercase transition-all duration-1000 ${
              phase === 'subtitle' || phase === 'ready' || phase === 'entering'
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            {subtitle}
          </p>
        </div>

        {/* Designer Disciplines Badge Bar */}
        <div
          className={`flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-6 transition-all duration-700 ${
            phase === 'ready' || phase === 'entering'
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          {['BRAND IDENTITY', '3D & MOTION', 'POSTER ART', 'UI/UX'].map((item, i) => (
            <span
              key={i}
              className="text-[10px] sm:text-xs font-mono px-3.5 py-1 rounded-full bg-dark-900/90 border border-white/10 text-neutral-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* BOTTOM ACTION BAR: ENTER PORTFOLIO CTA */}
      <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 z-20">
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>CALICUT / GLOBAL CLIENTS • 2026</span>
        </div>

        {/* Big Glow Button */}
        <div
          className={`transition-all duration-700 ${
            phase === 'ready' || phase === 'entering'
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-90 pointer-events-none'
          }`}
        >
          <button
            onClick={handleEnter}
            onMouseEnter={() => sound.playHover()}
            className="px-8 sm:px-10 py-4 rounded-full bg-accent hover:bg-accent-hover text-black font-heading font-black text-xs sm:text-sm tracking-wider shadow-[0_0_35px_var(--accent-glow)] hover:scale-105 transition-all duration-300 flex items-center gap-2.5 cursor-pointer group animate-pulse-glow"
          >
            <span>ENTER PORTFOLIO</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="text-xs font-mono text-neutral-500 hidden sm:block">
          PRESS 'ENTER' OR SCROLL
        </div>
      </div>
    </div>
  );
}
