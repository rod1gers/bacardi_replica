/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      '9xl': '18rem'
    },
    extend: {},
  },
  plugins: [
    require("@designbycode/tailwindcss-text-stroke"),
  ],
}

