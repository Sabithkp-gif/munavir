import posterSwuffa from '../assets/posters/poster-swuffa.jpg';
import posterWebsite from '../assets/posters/poster-website.jpg';
import posterGraphicDesign from '../assets/posters/poster-graphic-design.jpg';
import posterDesignTraining from '../assets/posters/poster-design-training.jpg';

export const POSTERS = {
  swuffa: posterSwuffa,
  website: posterWebsite,
  graphicDesign: posterGraphicDesign,
  designTraining: posterDesignTraining,
};

export const DESIGNER_INFO = {
  name: "MUNAVIR",
  role: "Senior Graphic Designer & Visual Artist",
  subtitle: "Visual Alchemy • Brand Identity • 3D & Kinetic Typography",
  tagline: "I transform bold concepts into timeless visual identities, 3D digital artifacts, and collectible poster art.",
  bio: "Hi, I'm Munavir — a graphic designer and visual artist with 6+ years of experience blending brutalist typography, organic 3D aesthetics, and strategic brand architecture. I partner with ambitious startups, luxury brands, and visionary founders to craft unforgettable identities that stand out in crowded markets.",
  location: "Calicut / Remote Worldwide",
  availability: "Available for Select Projects (Q2/Q3 2026)",
  email: "munavir.design@gmail.com",
  whatsapp: "+919876543210",
  socials: {
    instagram: "https://instagram.com",
    behance: "https://behance.net",
    dribbble: "https://dribbble.com",
    linkedin: "https://linkedin.com",
    x: "https://x.com",
    github: "https://github.com"
  },
  stats: [
    { value: "85+", label: "Projects Delivered", detail: "Across 14 countries" },
    { value: "6+", label: "Years Experience", detail: "Design & Creative Direction" },
    { value: "14", label: "Awards & Honors", detail: "Behance, Awwwards & Typewolf" },
    { value: "99%", label: "Client Satisfaction", detail: "Repeat collaboration rate" }
  ],
  experience: [
    { period: "2023 — Present", role: "Lead Visual Designer", company: "Studio Forma", desc: "Spearheading brand identity systems, kinetic design campaigns, and 3D visual storytelling for global tech and lifestyle clients." },
    { period: "2021 — 2023", role: "Senior Brand Designer", company: "Aesthetic Core Lab", desc: "Developed comprehensive design systems, packaging architectures, and editorial publications for luxury fashion and fintech brands." },
    { period: "2019 — 2021", role: "Graphic & Motion Designer", company: "Vortex Media", desc: "Crafted brand guidelines, concert poster series, animated key visuals, and marketing assets." }
  ]
};

export const COLOR_THEMES = [
  { id: 'lime', name: 'Cyber Lime', color: '#c5ff4a', glow: 'rgba(197, 255, 74, 0.4)', muted: 'rgba(197, 255, 74, 0.12)', hover: '#d4ff70' },
  { id: 'violet', name: 'Neon Violet', color: '#a855f7', glow: 'rgba(168, 85, 247, 0.4)', muted: 'rgba(168, 85, 247, 0.12)', hover: '#bd7bfa' },
  { id: 'orange', name: 'Solar Flame', color: '#ff6b35', glow: 'rgba(255, 107, 53, 0.4)', muted: 'rgba(255, 107, 53, 0.12)', hover: '#ff8559' },
  { id: 'cyan', name: 'Hyper Cyan', color: '#00f0ff', glow: 'rgba(0, 240, 255, 0.4)', muted: 'rgba(0, 240, 255, 0.12)', hover: '#4df4ff' },
  { id: 'gold', name: 'Aura Gold', color: '#f59e0b', glow: 'rgba(245, 158, 11, 0.4)', muted: 'rgba(245, 158, 11, 0.12)', hover: '#fbbf24' },
  { id: 'pearl', name: 'Pure Minimal', color: '#e5e7eb', glow: 'rgba(229, 231, 235, 0.3)', muted: 'rgba(229, 231, 235, 0.1)', hover: '#ffffff' },
];

export const SKILL_CATEGORIES = [
  {
    id: "brand",
    name: "Brand Identity & Systems",
    icon: "Layers",
    description: "Architecting memorable visual universes with bespoke typography, grid geometry, and scalable design tokens.",
    skills: [
      { name: "Brand Architecture", level: 98, exp: "6 yrs" },
      { name: "Custom Wordmarks & Symbols", level: 95, exp: "6 yrs" },
      { name: "Design Guidelines & Systems", level: 96, exp: "5 yrs" },
      { name: "Color Harmonic Theory", level: 94, exp: "6 yrs" },
      { name: "Stationery & Collateral Suite", level: 92, exp: "5 yrs" }
    ],
    tools: ["Adobe Illustrator", "Figma", "Glyphs", "Adobe InDesign"]
  },
  {
    id: "poster",
    name: "Poster & Visual Art",
    icon: "Image",
    description: "Merging experimental brutalism, Swiss grid precision, and tactile analogue textures into expressive visual narratives.",
    skills: [
      { name: "Kinetic Poster Art", level: 96, exp: "5 yrs" },
      { name: "Digital Collage & Distortion", level: 92, exp: "4 yrs" },
      { name: "Editorial Print Systems", level: 90, exp: "5 yrs" },
      { name: "Surrealist Matte Compositing", level: 88, exp: "4 yrs" },
      { name: "Silk Screen & Print Pre-press", level: 91, exp: "5 yrs" }
    ],
    tools: ["Adobe Photoshop", "Illustrator", "Procreate", "Lightroom"]
  },
  {
    id: "motion",
    name: "Motion & 3D Design",
    icon: "Sparkles",
    description: "Breathing dynamic kinetic energy and spatial photorealism into brand marks, packaging, and digital environments.",
    skills: [
      { name: "3D Product & Package Renders", level: 93, exp: "4 yrs" },
      { name: "Kinetic Typography Loops", level: 95, exp: "5 yrs" },
      { name: "Logo Stings & Intros", level: 91, exp: "4 yrs" },
      { name: "Lighting & Procedural Shaders", level: 89, exp: "3 yrs" },
      { name: "Audio-Reactive Visuals", level: 86, exp: "3 yrs" }
    ],
    tools: ["Blender", "Cinema 4D", "After Effects", "Octane Render"]
  },
  {
    id: "ui",
    name: "UI / UX & Digital Artifacts",
    icon: "Monitor",
    description: "Designing sleek, immersive web experiences, high-conversion landing pages, and interactive design systems.",
    skills: [
      { name: "Design System Tokens", level: 94, exp: "5 yrs" },
      { name: "Micro-interactions & Prototyping", level: 92, exp: "4 yrs" },
      { name: "Visual Hierarchy & Layout", level: 97, exp: "6 yrs" },
      { name: "Responsive Dark-mode UI", level: 95, exp: "5 yrs" }
    ],
    tools: ["Figma", "Spline 3D", "Framer", "Adobe XD"]
  }
];

export const PROJECTS = [
  {
    id: "website-digital-presence",
    title: "DO YOU WANT A WEBSITE — 3D UI & Digital Showcase",
    subtitle: "Isometric 3D Product Scenography, Glassmorphic UI & Interactive Web Presence",
    category: "UI/UX",
    year: "2026",
    client: "Sabith / High-Growth Digital Ventures",
    role: "Senior 3D Artist & UI/UX Designer",
    duration: "4 Weeks",
    featured: true,
    thumbnail: posterWebsite,
    heroImage: posterWebsite,
    tags: ["3D UI Mockup", "Spatial Web", "Dark Mode UI", "Poster Art", "Figma"],
    summary: "A futuristic 3D promotional key art campaign and digital identity highlighting high-performance web development and dark-mode analytical interfaces.",
    challenge: "Create an arresting visual hook that instantly communicates modern digital transformation, elevated UI aesthetics, and premium full-stack web architecture.",
    solution: "Composed a floating isometric MacBook on an illuminated neon violet pedestal with orbiting translucent telemetry cards and dynamic spatial lighting.",
    deliverables: [
      "3D Isometric Product Key Visuals",
      "High-Fidelity Dashboard Interface Mockups",
      "Social Media Launch Poster Series",
      "Interactive Web Visual Assets"
    ],
    colorPalette: [
      { name: "Electric Violet", hex: "#9333EA", tag: "Primary Neon" },
      { name: "Obsidian Core", hex: "#0B0B14", tag: "Background" },
      { name: "Vivid Magenta", hex: "#D946EF", tag: "Accent Glow" },
      { name: "Retina White", hex: "#F8FAFC", tag: "Highlight" }
    ],
    typography: {
      primary: "Syne Black & Bold (Headings & Titles)",
      secondary: "JetBrains Mono (Telemetry & UI Tokens)",
      body: "Plus Jakarta Sans (Editorial Narrative)"
    },
    gallery: [
      {
        url: posterWebsite,
        caption: "Hero 3D showcase: Floating isometric MacBook on glowing purple cylinder"
      },
      {
        url: posterDesignTraining,
        caption: "Production environment & digital suite workspace"
      },
      {
        url: posterGraphicDesign,
        caption: "Creative asset preparation and mobile companion interface"
      }
    ],
    stats: {
      reach: "+2.4M Impressions",
      conversions: "340+ Client Inquiries",
      awards: "Featured on 3D Design Showcase"
    }
  },
  {
    id: "be-flexible-creative",
    title: "BE FLEXIBLE CREATIVE — 3D Character & Studio Brand Art",
    subtitle: "Stylized 3D Avatar Creation, Kinetic Typography & Adobe Creative Suite Campaign",
    category: "Brand Identity",
    year: "2026",
    client: "Editzon / Personal Brand Direction",
    role: "Lead 3D Character Artist & Brand Typographer",
    duration: "6 Weeks",
    featured: true,
    thumbnail: posterGraphicDesign,
    heroImage: posterGraphicDesign,
    tags: ["3D Character Art", "Brand Identity", "Kinetic Typography", "Adobe Tools"],
    summary: "A charismatic 3D character and personal brand poster series designed to inspire ambitious creators to embrace flexible creative thinking.",
    challenge: "Bridge friendly approachable character design with high-end editorial typography and industrial tool aesthetics without cluttering the hierarchy.",
    solution: "Sculpted a detailed 3D avatar with signature orange hoodie and purple cap, paired with brutalist typography and an integrated vertical Photoshop tool strip.",
    deliverables: [
      "3D Stylized Character Rig & Texturing",
      "Vertical Graphic Design Typography Lockup",
      "Social Media Profile Brand Kit",
      "High-Resolution Print Poster File"
    ],
    colorPalette: [
      { name: "Solar Orange", hex: "#FF6B35", tag: "Signature Accent" },
      { name: "Cyber Purple", hex: "#7C3AED", tag: "Secondary Core" },
      { name: "Textured Slate", hex: "#18181B", tag: "Analogue Canvas" },
      { name: "Pure Titanium", hex: "#FFFFFF", tag: "Type Primary" }
    ],
    typography: {
      primary: "Brutal Extended Sans (Impact Wordmarks)",
      secondary: "Brush Script Accent (Expressive Notes)",
      body: "Space Grotesk Regular"
    },
    gallery: [
      {
        url: posterGraphicDesign,
        caption: "Master Poster: 3D character with laptop, smartphone, and integrated Photoshop toolbar"
      },
      {
        url: posterDesignTraining,
        caption: "Studio workstation CGI and multi-monitor layout"
      },
      {
        url: posterSwuffa,
        caption: "Event typography and cultural print layout exploration"
      }
    ],
    stats: {
      reach: "180k+ Social Reach",
      conversions: "Top Personal Brand Post",
      awards: "Featured on Creative Typography Annual"
    }
  },
  {
    id: "creative-design-training",
    title: "UNLOCK CREATIVE POTENTIAL — Studio Masterclass & CGI",
    subtitle: "Cinematic Lighting Scenography, Multi-Monitor Workstation & Masterclass Campaign",
    category: "Motion & 3D",
    year: "2026",
    client: "Odizone / Creative Academy",
    role: "CGI Director & Campaign Designer",
    duration: "5 Weeks",
    featured: true,
    thumbnail: posterDesignTraining,
    heroImage: posterDesignTraining,
    tags: ["CGI Scenography", "Masterclass Art", "Photoshop", "Premiere Pro", "Lighting"],
    summary: "A cinematic advertising poster and visual universe crafted for an elite digital arts masterclass, capturing the intense atmosphere of creative production.",
    challenge: "Convey the immersive focus, dual-monitor workflow, and industry-standard tool mastery of professional digital artists in a single heroic frame.",
    solution: "Rendered a high-contrast dual-light studio setup (warm scarlet backlights with cool cyber-blue key lighting) surrounded by floating Adobe tool palettes.",
    deliverables: [
      "Photorealistic CGI Workstation Environment",
      "Floating Tool UI & Bezier Pen Visuals",
      "Academy Campaign Ad Banners",
      "Social Media Story & Reel Covers"
    ],
    colorPalette: [
      { name: "Atmospheric Cyan", hex: "#00F0FF", tag: "Key Ambient" },
      { name: "Crimson Blaze", hex: "#EF4444", tag: "Rim Light" },
      { name: "Studio Midnight", hex: "#060A17", tag: "Shadow Depth" },
      { name: "Interface White", hex: "#F8FAFC", tag: "Typography" }
    ],
    typography: {
      primary: "Syne & Heavy Condensed",
      secondary: "Signature Calligraphy",
      body: "JetBrains Mono"
    },
    gallery: [
      {
        url: posterDesignTraining,
        caption: "Hero CGI Scene: Designer immersed in multi-screen post-production workflow"
      },
      {
        url: posterWebsite,
        caption: "Interactive 3D UI cards and floating platform tokens"
      },
      {
        url: posterGraphicDesign,
        caption: "Creative tools and vector bezier curve composition"
      }
    ],
    stats: {
      reach: "12,000+ Enrolled Students",
      conversions: "100% Workshop Capacity",
      awards: "Creative Academy Visual of the Year"
    }
  },
  {
    id: "team-swuffa-event",
    title: "TEAM SWUFFA — Typography & Cultural Event Poster",
    subtitle: "Malayalam Script Calligraphy, Retrowave Violet Lighting & Retro Sound Identity",
    category: "Poster & Visual Art",
    year: "2026",
    client: "Swuffa Union 26 / Cultural Arts",
    role: "Lead Poster Artist & Typographer",
    duration: "3 Weeks",
    featured: true,
    thumbnail: posterSwuffa,
    heroImage: posterSwuffa,
    tags: ["Malayalam Calligraphy", "Event Poster", "Stage Visuals", "Audio Identity", "Retro Chrome"],
    summary: "A bold typographic and cultural event poster series fusing regional Malayalam calligraphy with vibrant neo-violet gradients and vintage studio microphones.",
    challenge: "Harmonize traditional cultural choral portraiture with modern kinetic concert aesthetics and striking Malayalam headline letterforms.",
    solution: "Layered bold 3D Malayalam typography ('ഇലാഹി ഹബീബ്') over deep purple geometric shapes, framed by a vintage chrome ribbon microphone and clean event telemetry.",
    deliverables: [
      "A1 Master Print Event Poster Suite",
      "Custom 3D Malayalam Title Calligraphy",
      "Social Media Event Teaser Tiles",
      "Stage LED Backdrop Visual Stills"
    ],
    colorPalette: [
      { name: "Vibrant Amethyst", hex: "#7E22CE", tag: "Primary Violet" },
      { name: "Neon Lilac", hex: "#C084FC", tag: "Letterform Glow" },
      { name: "Chrome Silver", hex: "#E2E8F0", tag: "Microphone Sheen" },
      { name: "Deep Royal Plum", hex: "#2E1065", tag: "Background Base" }
    ],
    typography: {
      primary: "Custom 3D Malayalam Calligraphy",
      secondary: "Syne Bold",
      body: "Plus Jakarta Sans"
    },
    gallery: [
      {
        url: posterSwuffa,
        caption: "Official Event Poster: 3D Malayalam title calligraphy with choir vocalists & vintage microphone"
      },
      {
        url: posterGraphicDesign,
        caption: "Modular typography grid & design system"
      },
      {
        url: posterWebsite,
        caption: "Digital stage backdrop & interactive teaser layout"
      }
    ],
    stats: {
      reach: "50,000+ Concert Viewers",
      conversions: "Full House Attendance",
      awards: "Cultural Arts Poster Excellence Award"
    }
  },
  {
    id: "vortex-kinetics",
    title: "VORTEX — Kinetic 3D Type Experiments",
    subtitle: "Generative Typographic Explorations & Spatial Motion Graphics",
    category: "Editorial & Packaging",
    year: "2025",
    client: "Self-Initiated / Open Design Exhibition",
    role: "Creative Director & Motion Sculptor",
    duration: "Ongoing",
    featured: false,
    thumbnail: posterWebsite,
    heroImage: posterWebsite,
    tags: ["Motion Design", "3D Typography", "Blender", "Generative Art"],
    summary: "An avant-garde exploration probing the boundary between legible letterforms, fluid dynamics, and spatial physics.",
    challenge: "Question the traditional rigid constraints of Latin glyphs by treating letterforms as physical liquid, chrome, and magnetic forces.",
    solution: "Constructed custom procedural shaders and physics simulations in Blender & Cinema 4D, generating seamless 60fps kinetic loops.",
    deliverables: [
      "26 Alphabet Kinetic Motion Sculptures (A-Z)",
      "Interactive WebGL Typography Playground",
      "Limited Edition Screenprinted Art Book with Augmented Reality",
      "Looping 4K Video Wall Displays for Art Basel Showcase"
    ],
    colorPalette: [
      { name: "Electric Violet", hex: "#9333EA", tag: "Reflective" },
      { name: "Deep Amethyst", hex: "#4C1D95", tag: "Mystic Base" },
      { name: "Neon Emerald", hex: "#10B981", tag: "Glow Pulse" },
      { name: "Space Void", hex: "#030712", tag: "Infinite Backdrop" }
    ],
    typography: {
      primary: "Custom Procedural Kinetic Glyphs",
      secondary: "Space Grotesk Bold",
      body: "JetBrains Mono Medium"
    },
    gallery: [
      {
        url: posterWebsite,
        caption: "3D Spatial layout and procedural reflections"
      },
      {
        url: posterDesignTraining,
        caption: "Creative suite production environment"
      },
      {
        url: posterGraphicDesign,
        caption: "Typographic vector anatomy"
      }
    ],
    stats: {
      reach: "+1.8M Video Impressions",
      conversions: "35k Downloads",
      awards: "Type Directors Club TDC69 Award"
    }
  },
  {
    id: "chronos-interface",
    title: "CHRONOS — Temporal Web Experience & Design System",
    subtitle: "Immersive UI/UX, Spatial Prototyping & Interactive Token Architecture",
    category: "UI/UX",
    year: "2024",
    client: "Chronos Horizons Lab (San Francisco)",
    role: "Senior UI/UX & Interaction Designer",
    duration: "8 Weeks",
    featured: false,
    thumbnail: posterDesignTraining,
    heroImage: posterDesignTraining,
    tags: ["UI/UX", "Design Systems", "Figma", "Interactive Web"],
    summary: "A sleek, dark-mode analytical suite and interactive design system for real-time temporal climate modeling and satellite intelligence.",
    challenge: "Distill millions of geospatial satellite telemetry data points into an effortless, breathtaking interface for environmental researchers.",
    solution: "Crafted a multi-layered glassmorphic UI system with customizable telemetry modules, micro-charts, and keyboard-first shortcut navigation.",
    deliverables: [
      "220+ Component Figma Design System with Auto-Layout",
      "Interactive High-Fidelity Prototype with Micro-interactions",
      "Responsive Desktop & Tablet Cockpit Workspaces",
      "Design Token Library & Developer Hand-off Documentation"
    ],
    colorPalette: [
      { name: "Deep Space", hex: "#06080F", tag: "Canvas Dark" },
      { name: "Satellite Cyan", hex: "#00E5FF", tag: "Primary Signal" },
      { name: "Telemetry Amber", hex: "#FFB300", tag: "Warning State" },
      { name: "Data Grid", hex: "#1E293B", tag: "Module Border" }
    ],
    typography: {
      primary: "Space Grotesk Medium",
      secondary: "JetBrains Mono",
      body: "Plus Jakarta Sans"
    },
    gallery: [
      {
        url: posterDesignTraining,
        caption: "Studio workstation and UI dashboard design"
      },
      {
        url: posterWebsite,
        caption: "Responsive multi-device layouts and 3D mockups"
      },
      {
        url: posterSwuffa,
        caption: "Typography and color system specifications"
      }
    ],
    stats: {
      reach: "Used by 40+ Research Institutes",
      conversions: "94% Usability Score",
      awards: "Figma Community Featured File"
    }
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "DISCOVER",
    subtitle: "Brand DNA & Deep Immersion",
    description: "Every great visual system starts with rigorous listening. We dissect your core values, audience psychology, competitive landscape, and unexpressed ambitions to unearth your distinct visual territory.",
    deliverables: ["Stakeholder Deep Dive", "Competitive Audit", "Visual Opportunity Matrix", "Strategic Creative Brief"],
    color: "#c5ff4a"
  },
  {
    step: "02",
    title: "RESEARCH",
    subtitle: "Moodboarding & Visual Direction",
    description: "Synthesizing global design benchmarks, historical references, and modern subcultures into curated moodscapes and typographic territory boards that define the mood before a single pixel is drawn.",
    deliverables: ["Curated Moodboards", "Typography Pairings", "Color Harmonic Studies", "Tactile Material Samples"],
    color: "#a855f7"
  },
  {
    step: "03",
    title: "CONCEPT",
    subtitle: "Rapid Prototyping & Exploration",
    description: "Form follows courage. I generate 3 distinct conceptual territories ranging from calculated refinement to radical experimental approaches, presented in real-world application mockups.",
    deliverables: ["3 Distinct Core Directions", "Real-World Mockups", "Logo Geometry Blueprints", "Interactive Feedback Round"],
    color: "#ff6b35"
  },
  {
    step: "04",
    title: "DESIGN",
    subtitle: "System Craft & Refinement",
    description: "Once the winning direction is locked, I expand it into a cohesive design ecosystem: custom type rules, 3D assets, packaging geometry, motion behaviors, and scalable digital design tokens.",
    deliverables: ["Master Vector Marks", "Kinetic Motion Guidelines", "Print Pre-press Specs", "3D Asset Render Suite"],
    color: "#00f0ff"
  },
  {
    step: "05",
    title: "DELIVER",
    subtitle: "Launch Architecture & Mastery",
    description: "Flawless execution to launch. You receive an exhaustive brand guideline bible, neatly categorized cloud asset vaults (SVG, EPS, PDF, MP4, 3D GLB), and ongoing art direction support.",
    deliverables: ["Comprehensive Brand Bible", "Production-Ready Asset Vault", "Developer & Print Hand-off", "Ongoing Creative Advisory"],
    color: "#f59e0b"
  }
];

export const TESTIMONIALS = [
  {
    quote: "Munavir possesses a rare alchemy of meticulous graphic discipline and boundless creative imagination. The 3D visuals and poster identity he engineered propelled our digital presence and created instant market authority.",
    author: "Henrik Lindqvist",
    role: "Chief Brand Officer, Lumina Motors (Stockholm)",
    avatar: posterGraphicDesign,
    project: "Be Flexible Creative & Brand Art"
  },
  {
    quote: "Working with Munavir was hands-down the smoothest creative collaboration of my career. His posters didn't just market our event — they became collectible art pieces with stunning typography.",
    author: "Elena Rostova",
    role: "Founder & Creative Director, Nebula Arts Berlin",
    avatar: posterDesignTraining,
    project: "Creative Design Training Masterclass"
  },
  {
    quote: "His command over 3D spatial renders, typography, and tactile digital layouts is world-class. He transformed our digital presence into an unforgettable visual experience.",
    author: "Jean-Paul Laurent",
    role: "Managing Director, Maison d'Aether Paris",
    avatar: posterWebsite,
    project: "Do You Want A Website 3D UI"
  }
];
