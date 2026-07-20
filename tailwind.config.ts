import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Core academic palette — see DESIGN.md for rationale
        navy: {
          DEFAULT: '#0A1F2C',
          50: '#EAF0F3',
          100: '#CBDBE1',
          200: '#9FBAC5',
          300: '#6C93A3',
          400: '#3F6A7C',
          500: '#204759',
          600: '#13324A', // surface (dark mode cards)
          700: '#0F2739',
          800: '#0A1F2C', // primary dark bg
          900: '#061420',
          950: '#030A10',
        },
        emerald: {
          DEFAULT: '#0E6E4E',
          50: '#E7F5EF',
          100: '#C6E7D9',
          200: '#98D2B9',
          300: '#63B896',
          400: '#329C74',
          500: '#0E6E4E', // primary accent
          600: '#0B5C41',
          700: '#0A4933',
          800: '#083627',
          900: '#05241A',
        },
        gold: {
          DEFAULT: '#B8935A',
          50: '#FBF6EE',
          100: '#F3E6D0',
          200: '#E6CDA1',
          300: '#D8B372',
          400: '#C6A15B', // secondary accent
          500: '#B8935A',
          600: '#96733E',
          700: '#795A31',
          800: '#5B4325',
          900: '#3D2C18',
        },
        paper: '#F8F9F7',
        ink: {
          DEFAULT: '#1C2733',
          light: '#46545F',
          muted: '#6B7A85',
        },
      },
      fontFamily: {
        display: ['"Newsreader"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      backgroundImage: {
        'hex-lattice': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100' viewBox='0 0 56 100'%3E%3Cpath fill='none' stroke='%230E6E4E' stroke-opacity='0.08' stroke-width='1' d='M28 0L0 16v34l28 16 28-16V16zM28 66l-28 16v18M28 66l28 16v18'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(10, 31, 44, 0.12)',
        'glass-lg': '0 20px 60px -10px rgba(10, 31, 44, 0.25)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      typography: () => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
          },
        },
      }),
    },
  },
  plugins: [],
} satisfies Config;
