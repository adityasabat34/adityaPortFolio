/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkClay: '#d5bdaf',
        darkClay1: '#e3d5ca',
        darkClay2: '#e8e5e0',
      },
    },
  },
  plugins: [],
};
