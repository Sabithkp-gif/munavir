import React from 'react';
import { Quote, Sparkles, Star, Award, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';
import { sound } from '../utils/sound';

export default function Testimonials() {
  const accolades = [
    { title: "Behance Curated", source: "Graphic Design Category Winner" },
    { title: "Awwwards Nominee", source: "Site of the Day Nominee" },
    { title: "Typewolf Feature", source: "Typography in Digital Systems" },
    { title: "Graphis Poster Annual", source: "Gold Award 2026" },
  ];

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/[0.08] gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>TESTIMONIALS & RECOGNITION</span>
            </div>
            <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
              PROVEN IMPACT.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-neutral-400 font-normal">
            Endorsements from creative directors, founders, and international design publications.
          </p>
        </div>

        {/* Accolades Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {accolades.map((acc, i) => (
            <div
              key={i}
              className="p-4 rounded-2xl glass-card border border-white/5 hover:border-accent/40 transition-all flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-xl bg-accent/15 flex items-center justify-center text-accent shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <div className="font-heading font-bold text-xs sm:text-sm text-white">{acc.title}</div>
                <div className="text-[10px] font-mono text-neutral-400">{acc.source}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              onMouseEnter={() => sound.playHover()}
              className="p-8 rounded-3xl glass-panel border border-white/10 hover:border-accent/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-colors">
                    <Quote className="w-5 h-5" />
                  </div>
                  <div className="flex gap-1 text-accent">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed mb-8 italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-accent/40"
                />
                <div>
                  <h4 className="font-heading font-bold text-sm text-white">{t.author}</h4>
                  <p className="text-[11px] font-mono text-neutral-400">{t.role}</p>
                  <p className="text-[10px] font-mono text-accent mt-0.5">Project: {t.project}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
