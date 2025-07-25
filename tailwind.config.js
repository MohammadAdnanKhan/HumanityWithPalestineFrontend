/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    animation: {
      bounceSlow: 'bounceSlow 2s infinite',
    },
    keyframes: {
      bounceSlow: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-4px)' },
      },
    },
  },
},
  plugins: [require("daisyui")],
}

