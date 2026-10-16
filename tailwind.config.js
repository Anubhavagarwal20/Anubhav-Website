/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-main': '#080B12',
        'bg-secondary': '#0D1220',
        'text-primary': '#F4F7FB',
        'text-secondary': '#A7B1C2',
        'electric-blue': '#4F8CFF',
        'cyan-accent': '#4DE2FF',
        'purple-accent': '#9B7BFF',
        'light-bg': '#F5F7FA',
        'dark-text': '#111827',
        'border-subtle': 'rgba(255,255,255,0.12)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      fontSize: {
        'fluid-xl': 'clamp(2.5rem, 8vw, 7rem)',
        'fluid-lg': 'clamp(1.75rem, 5vw, 4rem)',
        'fluid-md': 'clamp(1.25rem, 3vw, 2rem)',
      },
      letterSpacing: {
        'widest-2': '0.2em',
      },
      backgroundImage: {
        'gradient-text': 'linear-gradient(180deg, #F4F7FB 0%, #8FA9C8 100%)',
        'gradient-blue-cyan': 'linear-gradient(135deg, #4F8CFF 0%, #4DE2FF 100%)',
        'gradient-blue-purple': 'linear-gradient(135deg, #4F8CFF 0%, #9B7BFF 100%)',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee2': 'marquee2 30s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
}
