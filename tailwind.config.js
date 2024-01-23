/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.{html,js}",
    "./pages/**/*.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        Clarendon: ['Clarendon'],
        Georgia: ['Georgia']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

