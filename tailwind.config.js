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
        'primary-500': '#D9BC66',
        'primary-400': '#A68A56',
        'secondary-200': '#5A5A5A',
        'btnColor' : '#BF9460',
        'secondary-300': '#3F3D40',
        'product-primary': '#3F3D40',
        'product-secondary': '#1E1E1E',
        
      },
      content: {
        bannerNew: "url('../public/images/new.png')",
        bannerSale: "url('../public/images/sale.png')"
      },
      animation: {
        'marquee': 'marquee 15s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(50%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      fontFamily: {
        'bebas': ['Bebas Neue', 'cursive'],
        'bruno': ['Bruno Ace', 'cursive'],
        'inter': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
