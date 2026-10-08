import React, { useState } from 'react';
import { Sparkles, CheckCircle, ArrowRight, Compass, Layers, Cpu } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';
import { sound } from '../utils/sound';

export default function CreativeProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const current = PROCESS_STEPS[activeStep];

  return (
    <section id="process" className="relative py-24 sm:py-32 px-4 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/[0.08] gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>STRATEGIC METHODOLOGY</span>
            </div>
            <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
              FROM CHAOS TO CLARITY.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-neutral-400 font-normal">
            A disciplined 5-stage creative process engineered to eliminate guesswork and produce enduring visual excellence.
          </p>
        </div>

        {/* Step Navigation Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.step}
                onClick={() => {
                  sound.playSelect();
                  setActiveStep(idx);
                }}
                onMouseEnter={() => sound.playHover()}
                className={`p-4 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between border cursor-pointer ${
                  isActive
                    ? 'bg-accent/10 border-accent shadow-[0_0_25px_var(--accent-glow)]'
                    : 'glass-panel border-white/5 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-mono text-sm font-bold ${isActive ? 'text-accent' : 'text-neutral-500'}`}>
                    {step.step}
                  </span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-accent animate-ping" />}
                </div>

                <div className={`font-heading font-bold text-sm sm:text-base ${isActive ? 'text-white' : 'text-neutral-300'}`}>
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Presentation Container */}
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-white/10 shadow-2xl relative overflow-hidden animate-in fade-in duration-300">
          {/* Large step watermark */}
          <div className="absolute right-6 -bottom-10 font-heading font-black text-9xl md:text-[14rem] text-white/[0.02] select-none pointer-events-none">
            {current.step}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left: Stage description */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-mono mb-4">
                STAGE {current.step} // {current.title}
              </div>

              <h3 className="font-heading font-black text-2xl sm:text-4xl text-white mb-4">
                {current.subtitle}
              </h3>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light mb-8">
                {current.description}
              </p>

              {/* Action: Next Step */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => {
                    sound.playSelect();
                    setActiveStep((activeStep + 1) % PROCESS_STEPS.length);
                  }}
                  className="px-6 py-3 rounded-full bg-white/10 hover:bg-accent hover:text-black text-white font-heading font-bold text-xs tracking-wider transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>NEXT STAGE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Deliverables Blueprint */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-dark-950/80 border border-white/5 space-y-4">
              <div className="text-xs font-mono text-neutral-400 tracking-wider uppercase flex items-center gap-2">
                <Compass className="w-4 h-4 text-accent" />
                <span>Phase Deliverables</span>
              </div>

              <div className="space-y-3">
                {current.deliverables.map((item, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl glass-card flex items-center gap-3 text-xs sm:text-sm text-neutral-200"
                  >
                    <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
