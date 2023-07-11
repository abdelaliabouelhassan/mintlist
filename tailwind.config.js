/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors:{
        background:'#2f2f2f',
        primary:'#ea3466',
        secondary:'#ffb74b',
        tertiary:'#36bbbc'
      },
      fontFamily:{
        pnova:['Proxima Nova']
      }
    },
  },
  plugins: [],
}

