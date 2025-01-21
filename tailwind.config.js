/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          500: "#FF4C61",
          600: "#FF3B51",
        },
        Yellow:{
          light:"#fdfb00",
        }
      },
    },
  },
  plugins: [],
}

