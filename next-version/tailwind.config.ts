import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0545B3',
          dark: '#01367F',
        },
        heading: '#0B0B0B',
        body: '#444444',
        'bg-light': '#F9FAFB',
        success: '#10B981',
        error: '#EF4444',
        'gray-light': '#E5E7EB',
      },
      fontFamily: {
        sans: ['Noto Sans JP', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        sm: '0 1px 2px rgb(0 0 0 / 5%)',
        md: '0 2px 4px rgb(0 0 0 / 8%)',
        lg: '0 4px 8px rgb(0 0 0 / 12%)',
      },
      maxWidth: {
        container: '1200px',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'stroke-draw': 'strokeDraw 3s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        strokeDraw: {
          '0%': { strokeDashoffset: '1400', strokeWidth: '3.5px', fill: 'transparent' },
          '40%': { fill: 'transparent' },
          '60%': { strokeWidth: '3.5px' },
          '90%': { strokeDashoffset: '0' },
          '100%': { strokeWidth: '0px', fill: '#0B0B0B' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
