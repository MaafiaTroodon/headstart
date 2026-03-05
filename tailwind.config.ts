import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Oswald', 'sans-serif'],
        body: ['Manrope', 'sans-serif']
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        fadeUp: 'fadeUp 0.55s ease-out both'
      }
    }
  },
  plugins: []
};

export default config;
