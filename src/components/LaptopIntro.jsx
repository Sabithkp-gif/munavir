import React, { useState, useEffect } from 'react';
import { Sparkles, FastForward, Volume2, VolumeX, Move3d, Palette } from 'lucide-react';
import { sound } from '../utils/sound';
import ThreeLaptopCanvas from './ThreeLaptopCanvas';

export default function LaptopIntro({ onComplete, isMuted, onToggleMute }) {
  const [phase, setPhase] = useState('approaching');
  const [lidOpenProgress, setLidOpenProgress] = useState(0); // 0 to 1
  const [isScreenOn, setIsScreenOn] = useState(false);
  const [typedName, setTypedName] = useState('');
  const [typedRole, setTypedRole] = useState('');
  const [isWarping, setIsWarping] = useState(false);
  const [rgbColor, setRgbColor] = useState('#c5ff4a');

  const fullName = "MUNAVIR";
  const fullRole = "GRAPHIC DESIGNER & VISUAL ARTIST";

  // Timeline Sequence
  useEffect(() => {
    const timers = [];

    // 1. Open Lid in Three.js
    timers.push(setTimeout(() => {
      setPhase('opening');
      let start = Date.now();
      const duration = 1200;
      const animateLid = () => {
        const elapsed = Date.now() - start;
        const p = Math.min(1, elapsed / duration);
        // Smooth ease-out
        const ease = 1 - Math.pow(1 - p, 3);
        setLidOpenProgress(ease);
        if (p < 1) {
          requestAnimationFrame(animateLid);
        }
      };
      animateLid();
    }, 600));

    // 2. Power on Screen in Three.js
    timers.push(setTimeout(() => {
      setIsScreenOn(true);
      setPhase('booting');
      sound.playPowerUp();
    }, 1800));

    // 3. Start Name Typing in Three.js
    timers.push(setTimeout(() => {
      setPhase('typing');
    }, 2500));

    return () => timers.forEach(clearTimeout);
  }, []);

  // Real-time Name typing loop
  useEffect(() => {
    if (phase !== 'typing') return;

    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullName.length) {
        setTypedName(fullName.slice(0, index));
        sound.playKeyClick();
        index++;
      } else {
        clearInterval(interval);
        // Subtitle typing
        let subIdx = 0;
        const subInterval = setInterval(() => {
          if (subIdx <= fullRole.length) {
            setTypedRole(fullRole.slice(0, subIdx));
            if (subIdx % 2 === 0) sound.playKeyClick();
            subIdx++;
          } else {
            clearInterval(subInterval);
            setPhase('ready');
          }
        }, 35);
      }
    }, 120);

    return () => clearInterval(interval);
  }, [phase]);

  const handleEnter = () => {
    sound.playSelect();
    setIsWarping(true);
  };

  const handleSkip = () => {
    sound.playSelect();
    setIsWarping(true);
  };

  return (
    <div className={`fixed inset-0 z-50 bg-[#020204] flex flex-col justify-between overflow-hidden select-none transition-opacity duration-700 ${
      isWarping ? 'pointer-events-none' : ''
    }`}>
      {/* Top HUD Bar */}
      <div className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between z-20">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-accent animate-ping" />
          <div className="flex flex-col">
            <span className="text-xs font-mono font-bold text-white tracking-widest flex items-center gap-2">
              <span>THREE.JS 3D WORKSTATION</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-accent/20 text-accent border border-accent/40 hidden sm:inline">
                WEBGL ACCELERATED
              </span>
            </span>
            <span className="text-[10px] font-mono text-neutral-400">
              Drag anywhere on canvas to orbit in full 3D space
            </span>
          </div>
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleMute}
            className="p-2.5 rounded-full glass-panel hover:border-accent text-neutral-300 hover:text-white transition-all text-xs flex items-center gap-1.5"
            title={isMuted ? "Unmute Audio" : "Mute Audio"}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-accent" />}
            <span className="text-[10px] font-mono hidden md:inline">{isMuted ? "MUTE" : "AUDIO ON"}</span>
          </button>

          <button
            onClick={handleSkip}
            className="px-5 py-2 rounded-full glass-panel hover:bg-accent/15 hover:border-accent text-white hover:text-accent font-mono text-xs font-bold flex items-center gap-1.5 transition-all group"
          >
            <span>SKIP INTRO</span>
            <FastForward className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* Full-Screen Three.js 3D WebGL Canvas */}
      <div className="absolute inset-0 z-10">
        <ThreeLaptopCanvas
          phase={phase}
          lidOpenProgress={lidOpenProgress}
          typedName={typedName}
          typedRole={typedRole}
          isScreenOn={isScreenOn}
          rgbColor={rgbColor}
          isWarping={isWarping}
          onCameraZoomComplete={onComplete}
        />
      </div>

      {/* Bottom HUD Control & Enter Portfolio Trigger */}
      <div className="w-full max-w-4xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 z-20">
        {/* RGB Color Matrix */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider hidden sm:inline">Theme:</span>
          {[
            { name: 'Lime', color: '#c5ff4a' },
            { name: 'Violet', color: '#a855f7' },
            { name: 'Cyan', color: '#00f0ff' },
            { name: 'Orange', color: '#ff6b35' },
          ].map((theme) => (
            <button
              key={theme.name}
              onClick={() => {
                sound.playHover();
                setRgbColor(theme.color);
              }}
              className={`px-3 py-1 rounded-full text-[10px] font-mono uppercase transition-all flex items-center gap-1.5 border ${
                rgbColor === theme.color
                  ? 'border-white bg-white/20 text-white font-bold'
                  : 'border-white/5 bg-dark-900/80 text-neutral-400 hover:border-white/20'
              }`}
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.color }} />
              <span>{theme.name}</span>
            </button>
          ))}
        </div>

        {/* Enter Portfolio CTA */}
        <button
          onClick={handleEnter}
          className="px-8 py-3.5 rounded-full bg-accent hover:bg-accent-hover text-black font-heading font-black text-xs sm:text-sm tracking-wider shadow-[0_0_35px_var(--accent-glow)] hover:scale-105 transition-all duration-300 flex items-center gap-2 cursor-pointer animate-pulse-glow group"
        >
          <span>ENTER PORTFOLIO</span>
          <Sparkles className="w-4 h-4 group-hover:rotate-45 transition-transform" />
        </button>
      </div>
    </div>
  );
}
