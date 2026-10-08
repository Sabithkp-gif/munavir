# MUNAVIR — Animated Parallax Graphic Designer Portfolio
> **"The portfolio begins inside the laptop."**

A cinematic, interactive portfolio website crafted for **Munavir** (Senior Graphic Designer & Visual Artist), featuring real-time 3D laptop boot sequences, multi-layer mouse parallax, editorial horizontal showcase reels, interactive design labs, and deep-dive case studies.

---

## ⚡ Key Experience & Features

### 1. 💻 Signature 3D Opening Sequence & Laptop Gateway
- **Cinematic Atmosphere**: Dark starfield with floating ambient dust and particles.
- **3D Laptop Model**: Real-time CSS 3D Transforms with realistic aluminium chassis, screen reflections, and illuminated keyboard deck.
- **Opening Animation**: Laptop lid opens smoothly with true 3D perspective and depth.
- **Screen & Backlight Surge**: Backlit keys and CRT/OLED glow activate with futuristic power-up sound synthesis.
- **Live Typing Sequence**: Types designer name `MUNAVIR` and subtitle `GRAPHIC DESIGNER & VISUAL ARTIST` in real time with mechanical click sounds.
- **Screen Zoom Gateway**: Click *"Enter Portfolio"* to plunge through the laptop screen directly into the live portfolio hero. (Skip & Replay options included).

### 2. 🌌 Hero Multi-Layer Parallax
- **Responsive 3D Depth**: Responds to mouse coordinates with multi-layer depth (Background glow, particles, interactive design chips, bold typography).
- **Designer Artifacts**: Floating badges showcasing Pantone color chips, Brutalist 3D tags, and live availability indicators (`● Available for select projects`).
- **Interactive Magnetic Cursor**: Smooth custom cursor with smart hover, view, drag, and blend modes.

### 3. 🎨 Featured Case Studies & Immersive Modal
- **Filterable Showcase**: Filter projects by *Brand Identity*, *Poster & Visual Art*, *Motion & 3D*, *Editorial & Packaging*, and *UI/UX*.
- **Deep-Dive Case Study Modal**:
  - Client, Role, Timeline, and Impact metrics.
  - **Click-to-Copy Color Palette**: Interactive color swatches with instant clipboard copy & toast feedback.
  - **Typographic Hierarchy**: Primary headline, accent monospace, and editorial body specs.
  - **High-Res Visual Artifacts**: Process renders, mockups, and geometry blueprints.

### 4. 🎞️ Horizontal Scroll Selected Works Reel
- Editorial horizontal carousel with smooth mousewheel/drag support, huge typographic index numbers (`01`, `02`, `03`, `04`, `05`), and live progress track bar.

### 5. 🧑‍🎨 "The Designer" — About Section
- Scroll-triggered dynamic portrait that smoothly transitions from blur to crisp sharpness as you scroll.
- Comprehensive designer biography, career milestones, live statistics counter (85+ projects, 6+ years experience, 14 awards), and core design axioms.

### 6. 🛠️ Creative Mastery & Arsenal (Skills)
- Interactive category tabs with modern segmented typographic indicators (rather than generic progress bars).
- Toolchain badges for Photoshop, Illustrator, After Effects, Figma, Blender, Cinema 4D, InDesign, etc.

### 7. 🔄 5-Stage Strategic Methodology (Creative Process)
- Interactive step-by-step breakdown: **01 Discover** ➔ **02 Research** ➔ **03 Concept** ➔ **04 Design** ➔ **05 Deliver** with deliverables blueprints.

### 8. 🧪 Interactive Design Alchemy Lab
- A live in-browser typography & poster playground where visitors can tweak headlines, color frequencies, layer blend modes, kinetic angles, and grid densities in real-time.

### 9. 🔊 Web Audio API Sound System
- Pure zero-dependency synthesizer generating mechanical keyboard clicks, power-up sweeps, UI ticks, and success chords with a floating mute/unmute control.

### 10. 🎨 Real-Time Accent Color Matrix
- Quick palette switcher in the navigation bar allowing instant theme switching between *Cyber Lime*, *Neon Violet*, *Solar Flame*, *Hyper Cyan*, *Aura Gold*, and *Pure Minimal*.

### 11. 📬 Contact Section & Confetti Feedback
- Interactive project inquiry form with service pills, budget slider, copyable email card, direct WhatsApp / Behance / LinkedIn links, and confetti celebration on submit.

---

## 🛠️ Technology Stack
- **Framework**: [React 18](https://react.dev/) + [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) + Custom CSS 3D perspective variables
- **Icons**: [Lucide React](https://lucide.dev/)
- **FX**: Pure Web Audio API + HTML5 Canvas Particles + [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Typography**: Google Fonts (*Syne*, *Space Grotesk*, *Plus Jakarta Sans*, *JetBrains Mono*)

---

## 🚀 Running the Project Locally

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Open in your browser
http://localhost:3000
```

---

## 📦 Production Build

```bash
npm run build
```
The optimized production bundle will be generated in `dist/`.
