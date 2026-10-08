PRD — Animated Parallax Graphic Designer Portfolio
1. Product Overview

Project name: Designer Portfolio
Type: Interactive personal portfolio website
Primary goal: Showcase your friend’s graphic design work through a premium, animated, visually impressive website.

Core concept:

The visitor lands on a dark, cinematic scene with a laptop in the center. As the page opens, the laptop powers on. The designer’s name is then typed onto the laptop keyboard/screen, followed by an animated transition into the portfolio.

The website should feel like an interactive design experience, rather than a normal portfolio template.

2. Target User
Portfolio owner

A graphic designer who wants to showcase:

Branding
Posters
Social media designs
Logos
UI designs
Illustrations
Photography/editing
Other creative projects
Visitors
Potential clients
Companies
Recruiters
Other designers
Friends/creative community
3. Main Experience
Opening sequence
BLACK SCREEN
      ↓
Ambient animation
      ↓
Laptop appears
      ↓
Camera slowly moves toward laptop
      ↓
Laptop powers on
      ↓
Keyboard lights up
      ↓
Name begins typing
      ↓
"FRIEND'S NAME"
      ↓
Screen transitions
      ↓
Portfolio homepage

Example:

        ┌─────────────────────────────┐
        │                             │
        │        SABITH'S FRIEND      │
        │                             │
        │       GRAPHIC DESIGNER      │
        │                             │
        └─────────────────────────────┘
             ╲___________________╱
              ░░░░░░░░░░░░░░░░░

The exact name and branding will be replaced with your friend's information.

4. Website Structure
Page 1 — Intro / Hero

Purpose: Create the "wow" moment.

Elements
Full-screen dark background
3D/2.5D laptop
Soft lighting
Floating particles
Subtle background gradients
Parallax movement
Laptop keyboard
Screen glow
Typing animation
Animation

When the page loads:

Background fades in.
Laptop enters from the distance.
Camera approaches laptop.
Laptop opens.
Screen turns on.
Keyboard lights activate.
Name is typed.
Short subtitle appears.

Example:

ALEX JOSEPH
Graphic Designer & Visual Artist

Then:

"Explore my work ↓"

5. Hero Parallax

The hero should react to mouse movement.

Example:

Mouse moves →
             Background moves slightly
             ↓
             Particles move
             ↓
             Laptop moves
             ↓
             Camera perspective changes

Different depth layers:

Layer	Movement
Background	Very slow
Gradient	Slow
Particles	Medium
Laptop	Strong
Screen content	Slight
Cursor effects	Fast

This creates a 3D depth effect without making the page difficult to use.

6. About Section

After the intro:

Heading

The Designer

Short introduction:

I'm [Name], a graphic designer focused on creating visual identities, digital experiences, and memorable designs.

Visual

Use a large portrait/photo or creative artwork.

Possible animation:

Image starts blurred
       ↓
Scroll
       ↓
Image becomes sharp
       ↓
Text slides in
7. Skills Section

Interactive skill cards.

Example:

GRAPHIC DESIGN
████████████████████

BRANDING
██████████████████

UI DESIGN
████████████████

MOTION DESIGN
██████████████

PHOTO EDITING
███████████████

Instead of traditional progress bars, preferably use animated typography/cards so it feels more like a designer's portfolio.

8. Featured Work

This is the most important section after the hero.

Layout

Large project cards:

┌──────────────────────────────┐
│                              │
│        PROJECT IMAGE         │
│                              │
│                              │
└──────────────────────────────┘
     BRAND IDENTITY
     2026

On hover:

Image zoom
Card moves slightly
Project title appears
Cursor changes
Background color subtly changes
9. Project Details

Clicking a project opens a detailed project page/modal.

Example:

Project

Brand Identity — XYZ

Information
Client
XYZ Company

Category
Branding

Year
2026

Role
Graphic Designer

Then:

Full-size designs
Logo
Color palette
Typography
Mockups
Posters
Social media designs
10. Horizontal Scroll Section

For selected work, use horizontal scrolling.

Normal vertical scroll:

↓
↓
↓

Transforms into:

PROJECT 01 → PROJECT 02 → PROJECT 03 → PROJECT 04

This can create a strong editorial/design-portfolio feel.

11. Creative Process

Show how the designer works.

01
DISCOVER

        ↓

02
RESEARCH

        ↓

03
CONCEPT

        ↓

04
DESIGN

        ↓

05
DELIVER

Animate each stage as the user scrolls.

12. Contact Section

Final section should be simple.

Heading

Let's create something.

Buttons:

Instagram
Behance
Dribbble
Email
WhatsApp
LinkedIn

Example:

        LET'S CREATE
        SOMETHING
        GREAT.

        [ GET IN TOUCH ]
13. Footer

Minimal footer:

© 2026 [NAME]

Designed & built with creativity.

Instagram   Behance   Email
14. Animation Requirements

The website should use animations carefully.

Required
Page-load animation
Laptop animation
Typing animation
Scroll-triggered animations
Parallax
Image reveal
Text reveal
Hover animations
Smooth scrolling
Cursor interaction
Project transitions
Avoid

❌ Too many animations
❌ Constant bouncing
❌ Excessive particles
❌ Slow page transitions
❌ Animations that make navigation difficult

The design should feel premium, not like an animation demo.

15. Visual Direction
Recommended style

Dark + minimal + cinematic

Possible palette:

Background
#050505

Primary text
#FFFFFF

Secondary text
#999999

Accent
Designer-specific color

The accent color can be based on your friend's personal branding.

16. Typography

Use a modern combination such as:

Heading

Space Grotesk / Satoshi / Inter

Body

Inter / Manrope

Large typography should be used heavily.

Example:

DESIGN
THAT
SPEAKS.
17. Responsive Design

Must work on:

Desktop

Full interactive laptop experience.

Tablet

Reduced animation complexity.

Mobile

The laptop intro should be redesigned rather than simply shrinking the desktop version.

Example:

Desktop:
3D laptop + camera movement

Mobile:
Laptop + simplified perspective animation

This is important because a complex 3D laptop can become heavy on mobile.

18. Performance Requirements

Target:

Fast initial loading
Lazy-load portfolio images
Compress images
Optimize 3D assets
Avoid unnecessary JavaScript
Respect prefers-reduced-motion
Maintain smooth scrolling

Target:

60 FPS animation where possible.

19. Suggested Technology

For the best version, I'd recommend:

Frontend

Next.js + React

Styling

Tailwind CSS

Animation

GSAP

Smooth scrolling

Lenis

3D

Three.js / React Three Fiber

3D laptop

A lightweight optimized .glb model.

Hosting

Vercel

This stack is particularly suitable for the cinematic/parallax style you're describing.

20. Website Flow
                    VISITOR
                       │
                       ▼
              ┌─────────────────┐
              │ Loading Screen   │
              └────────┬────────┘
                       │
                       ▼
              ┌─────────────────┐
              │ 3D Laptop Intro │
              └────────┬────────┘
                       │
                       ▼
              ┌─────────────────┐
              │ Laptop Opens    │
              └────────┬────────┘
                       │
                       ▼
              ┌─────────────────┐
              │ Name Typed      │
              └────────┬────────┘
                       │
                       ▼
              ┌─────────────────┐
              │ Portfolio Hero  │
              └────────┬────────┘
                       │
             ┌─────────┼─────────┐
             ▼         ▼         ▼
          About     Projects    Skills
             │         │         │
             └─────────┼─────────┘
                       ▼
                  Work Details
                       │
                       ▼
                    Contact
                       │
                       ▼
                    Footer
21. MVP

For the first version, don't build everything at once.

Phase 1

Build:

Dark background
3D laptop
Laptop opening
Name typing animation
Hero section
Smooth scrolling
Parallax
Phase 2

Add:

About
Skills
Portfolio grid
Project pages
Contact
Phase 3

Add advanced effects:

Mouse-based 3D movement
Horizontal project gallery
Advanced image transitions
Custom cursor
Cinematic transitions
Sound effects with a mute/control option
22. Success Criteria

The portfolio is successful if:

The first 5 seconds immediately communicate that this is a designer's portfolio.
The laptop animation feels smooth and intentional.
The designer's name is memorable.
Portfolio work remains the focus.
Visitors can reach projects/contact quickly.
Mobile users get a good experience.
The site loads quickly despite visual effects.
⭐ Signature Feature

The defining feature should be:

"The portfolio begins inside the laptop."

Instead of simply showing a laptop on the page, the laptop becomes the gateway into the designer's portfolio.