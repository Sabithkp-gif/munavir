/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#030305',
          900: '#08080c',
          850: '#0d0e14',
          800: '#13141d',
          700: '#1b1d2a',
          600: '#25283b',
        },
        accent: {
          DEFAULT: 'var(--accent-color, #c5ff4a)',
          glow: 'var(--accent-glow, rgba(197, 255, 74, 0.35))',
          muted: 'var(--accent-muted, rgba(197, 255, 74, 0.15))',
          hover: 'var(--accent-hover, #d4ff70)',
        }
      },
      fontFamily: {
        heading: ['"Syne"', '"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        body: ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
        'grid-flow': 'gridFlow 20s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px var(--accent-glow))' },
          '50%': { opacity: '0.9', filter: 'drop-shadow(0 0 35px var(--accent-glow))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gridFlow: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '40px 40px' },
        }
      },
    },
  },
  plugins: [],
}
