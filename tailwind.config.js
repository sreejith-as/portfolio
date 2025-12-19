/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#222831',
        secondary: '#393E46',
        accent: '#948979',
        light: '#DFD0B8',
      },
      borderRadius: {
        'card': '14px',
      },
      animation: {
        'slide-left': 'slide-left 20s linear infinite',
      },
      keyframes: {
        'slide-left': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}
