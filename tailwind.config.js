/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'obsidian': '#0a0e27',
        'cyan-accent': '#00d9ff',
        'cyan-dark': '#0099cc',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
