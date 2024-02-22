/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'light-bg': "url('/bg/3.jpg')",
        'dark-bg': "url('/bg/4.jpg')",
        'header': "url('/bg/header-bg.jpg')",

      },
      colors: {
        transparent: 'transparent',
        'dark-blue': '#0f2167ff',
        'light-pink': '#ffd1dc',
        'blue': '#00c4ffff',
        'light-blue': '#b6eafaff',
        'vanilla': '#fff5b8ff',
        'pink': '#ff55bbff',
        'light-green': '#73e0da',
        'blue': '#00c4ffff',
        'lime': '#ffffba',
        
      },
    },
  },
  plugins: [],

}

//FDFD96 yellow         'blue': '#00c4ffff',          'lilac': '#e0abef',


