/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        glitch: 'glitch 0.3s steps(2, end) 3',
      },
      keyframes: {
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(2px, -2px)' },
          '60%': { transform: 'translate(-1px, 1px)' },
          '80%': { transform: 'translate(1px, -1px)' },
          '100%': { transform: 'translate(0)' },
        },
      },
      fontFamily: {
        cyberpunk: ['Orbitron', 'sans-serif'],
        barcode: ['"Libre Barcode 39"', 'cursive'],
        nunito: ['Nunito', 'sans-serif'],
        MyFont: ['"My Font"', 'serif'],
      },
    },
  },
  plugins: [],
};
