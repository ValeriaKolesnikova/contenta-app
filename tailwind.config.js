/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon': {
          green: '#a3e635',
          dark: '#0a0a0a',
          light: '#1a1a1a'
        }
      },
      fontFamily: {
        graffiti: ['system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
};