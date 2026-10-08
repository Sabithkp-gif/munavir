import React, { useState, useEffect } from 'react';
import { COLOR_THEMES, PROJECTS } from './data/portfolioData';
import { sound } from './utils/sound';

import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';
import TextIntro from './components/TextIntro';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import HorizontalScroll from './components/HorizontalScroll';
import About from './components/About';
import Skills from './components/Skills';
import CreativeProcess from './components/CreativeProcess';
import DesignLab from './components/DesignLab';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [activeTheme, setActiveTheme] = useState(COLOR_THEMES[0]);
  const [isMuted, setIsMuted] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Apply theme CSS variables to document root
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--accent-color', activeTheme.color);
    root.style.setProperty('--accent-glow', activeTheme.glow);
    root.style.setProperty('--accent-muted', activeTheme.muted);
    root.style.setProperty('--accent-hover', activeTheme.hover);
  }, [activeTheme]);

  // Audio mute toggle handler
  const handleToggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    sound.setMuted(nextMuted);
    if (!nextMuted) {
      sound.playSelect();
    }
  };

  const handleExploreClick = () => {
    sound.playSelect();
    const workElem = document.querySelector('#work');
    if (workElem) {
      workElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-dark-950 text-white selection:bg-accent selection:text-black overflow-x-hidden">
      {/* Noise Grain Film Overlay */}
      <div className="grain-overlay" />

      {/* Particle Constellation Background Canvas */}
      <ParticleBackground />

      {/* Custom Trailing Magnetic Cursor */}
      <CustomCursor />

      {/* Cinematic "MUNAVIR" Text Animation Intro */}
      {showIntro && (
        <TextIntro
          onComplete={() => setShowIntro(false)}
          isMuted={isMuted}
          onToggleMute={handleToggleMute}
          activeTheme={activeTheme}
          onThemeChange={setActiveTheme}
        />
      )}

      {/* Main Portfolio Experience */}
      <div className={`transition-opacity duration-1000 ${showIntro ? 'opacity-0' : 'opacity-100'}`}>
        {/* Navigation Bar */}
        <Navbar
          activeTheme={activeTheme}
          onThemeChange={setActiveTheme}
          isMuted={isMuted}
          onToggleMute={handleToggleMute}
          onReplayIntro={() => {
            window.scrollTo({ top: 0, behavior: 'instant' });
            setShowIntro(true);
          }}
        />

        {/* Hero Section */}
        <Hero onExploreClick={handleExploreClick} />

        {/* Featured Case Studies Grid */}
        <Projects onOpenProject={(proj) => setSelectedProject(proj)} />

        {/* Horizontal Scroll Showcase Reel */}
        <HorizontalScroll onOpenProject={(proj) => setSelectedProject(proj)} />

        {/* About Section */}
        <About />

        {/* Capabilities & Creative Arsenal */}
        <Skills />

        {/* Creative Process Section */}
        <CreativeProcess />

        {/* Interactive Design Lab Playground */}
        <DesignLab />

        {/* Testimonials & Accolades */}
        <Testimonials />

        {/* Contact & Inquiry Section */}
        <Contact />

        {/* Footer */}
        <Footer
          onReplayIntro={() => {
            window.scrollTo({ top: 0, behavior: 'instant' });
            setShowIntro(true);
          }}
        />
      </div>

      {/* Full-Screen Project Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onSelectProject={(proj) => setSelectedProject(proj)}
          allProjects={PROJECTS}
        />
      )}
    </div>
  );
}
