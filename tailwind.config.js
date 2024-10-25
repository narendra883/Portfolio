/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Specify where to look for Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#1f324b',
        'golden-yellow':'#ffb800',
        'teal-green':'#1f4b32',
      }
    },
  },
  plugins: [],
};
