/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        rotateKnife: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
      },
      swing: {
        '0%, 100%': { transform: 'rotate(0deg)' },
        '50%': { transform: 'rotate(10deg)' },
      },},
      animation: {
        flicker: 'flicker 1s infinite',
        rotateKnife: 'rotateKnife 1s linear infinite',
        bounce: 'bounce 2s infinite',
        swing: 'swing 1s infinite',
       
      },
    },
  },
  plugins: [],
};
