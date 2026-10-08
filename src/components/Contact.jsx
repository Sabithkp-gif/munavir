import React, { useState } from 'react';
import { Send, Check, Copy, Sparkles, MessageSquare, Mail, Phone, Instagram, Linkedin, Globe, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { DESIGNER_INFO } from '../data/portfolioData';
import { sound } from '../utils/sound';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Brand Identity',
    budget: '$3k – $5k',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const services = ['Brand Identity', 'Poster & Visual Art', 'Motion & 3D', 'Editorial & Packaging', 'UI/UX'];
  const budgets = ['$1k – $3k', '$3k – $5k', '$5k – $10k', '$10k+'];

  const handleSubmit = (e) => {
    e.preventDefault();
    sound.playSuccess();
    setIsSubmitted(true);

    // Confetti burst
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#c5ff4a', '#a855f7', '#ffffff', '#00f0ff']
    });

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        service: 'Brand Identity',
        budget: '$3k – $5k',
        message: ''
      });
    }, 6000);
  };

  const copyEmail = () => {
    sound.playSelect();
    navigator.clipboard.writeText(DESIGNER_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-8 md:px-12 bg-dark-950">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/[0.08] gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>INITIATE COLLABORATION</span>
            </div>
            <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-none">
              LET'S CREATE
              <br />
              <span className="bg-gradient-to-r from-accent via-white to-accent bg-clip-text text-transparent">
                SOMETHING GREAT.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-neutral-400 font-normal">
            Have a project in mind or want to discuss creative direction? Send a transmission or connect directly via socials.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl glass-panel border border-white/10 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Direct Transmission</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </div>

              {/* Copyable Email Card */}
              <div className="p-4 rounded-2xl bg-dark-950/80 border border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-neutral-400 uppercase">Direct Email</div>
                  <div className="font-mono text-sm sm:text-base text-white font-bold">{DESIGNER_INFO.email}</div>
                </div>

                <button
                  onClick={copyEmail}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-accent hover:text-black text-neutral-300 transition-all flex items-center gap-1.5 text-xs font-mono"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-[11px] text-emerald-400 font-bold">COPIED!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span className="text-[11px]">COPY</span>
                    </>
                  )}
                </button>
              </div>

              {/* Direct Channels */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`https://wa.me/${DESIGNER_INFO.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl bg-dark-950/80 border border-white/5 hover:border-emerald-500/50 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-mono text-white">WhatsApp</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-emerald-400 transition-colors" />
                </a>

                <a
                  href={DESIGNER_INFO.socials.behance}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl bg-dark-950/80 border border-white/5 hover:border-blue-500/50 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <Globe className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-mono text-white">Behance</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-blue-400 transition-colors" />
                </a>

                <a
                  href={DESIGNER_INFO.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl bg-dark-950/80 border border-white/5 hover:border-pink-500/50 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <Instagram className="w-4 h-4 text-pink-400" />
                    <span className="text-xs font-mono text-white">Instagram</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-pink-400 transition-colors" />
                </a>

                <a
                  href={DESIGNER_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl bg-dark-950/80 border border-white/5 hover:border-accent/50 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-accent" />
                    <span className="text-xs font-mono text-white">LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-accent transition-colors" />
                </a>
              </div>
            </div>

            {/* Location & Status note */}
            <div className="p-6 rounded-3xl glass-card text-xs font-mono space-y-2">
              <div className="text-neutral-400">BASED IN: <span className="text-white font-bold">{DESIGNER_INFO.location}</span></div>
              <div className="text-neutral-400">RESPONSE TIME: <span className="text-accent font-bold">Within 24 Hours</span></div>
            </div>
          </div>

          {/* Right: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-white/10 shadow-2xl relative">
              {isSubmitted ? (
                <div className="py-16 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 mx-auto rounded-full bg-accent/20 border border-accent flex items-center justify-center text-accent shadow-[0_0_30px_var(--accent-glow)]">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
                    TRANSMISSION RECEIVED!
                  </h3>
                  <p className="text-sm font-mono text-neutral-300 max-w-md mx-auto">
                    Thank you, {formData.name || 'Friend'}. I will review your project brief and get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Service Selection */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                      I'm interested in:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {services.map((srv) => (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => {
                            sound.playHover();
                            setFormData({ ...formData, service: srv });
                          }}
                          className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer border ${
                            formData.service === srv
                              ? 'border-accent bg-accent/20 text-white font-bold'
                              : 'border-white/5 bg-dark-950/80 text-neutral-400 hover:border-white/20'
                          }`}
                        >
                          {srv}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Selection */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                      Anticipated Budget (USD):
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgets.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => {
                            sound.playHover();
                            setFormData({ ...formData, budget: b });
                          }}
                          className={`py-2 rounded-xl text-xs font-mono transition-all cursor-pointer border text-center ${
                            formData.budget === b
                              ? 'border-accent bg-accent/20 text-white font-bold'
                              : 'border-white/5 bg-dark-950/80 text-neutral-400 hover:border-white/20'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Elena Lindqvist"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-dark-950/90 border border-white/10 text-white placeholder-neutral-600 text-sm focus:border-accent focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="elena@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-dark-950/90 border border-white/10 text-white placeholder-neutral-600 text-sm focus:border-accent focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                      Project Details & Timeline *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about your brand, goals, target launch date, and specific deliverables..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-dark-950/90 border border-white/10 text-white placeholder-neutral-600 text-sm focus:border-accent focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    onMouseEnter={() => sound.playHover()}
                    className="w-full py-4 rounded-2xl bg-accent hover:bg-accent-hover text-black font-heading font-black text-sm tracking-wider transition-all duration-300 shadow-[0_0_30px_var(--accent-glow)] flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <span>SEND PROJECT TRANSMISSION</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
