/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      '9xl': '18rem',
      '8.8xl': '12rem',
      '8xl': '10rem',
      '7xl': '9rem',
      '6xl': '8rem',
      '2xl': '1rem',
    },
    extend: {},
  },
  plugins: [
    require("@designbycode/tailwindcss-text-stroke"),
  ],
}

