/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        'primary-500': '#590202',
        'primary-400': '#D93D4A',
        'bannerBG-primary': '#F2F2F2',
        'bannerBG-secondary': '#8C837B'
      },
      content: {
        bannerNew: "url('../public/images/new.png')"
      }
    },
  },
  plugins: [],
}
