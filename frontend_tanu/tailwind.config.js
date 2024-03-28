/** @type {import('tailwindcss').Config} */
module.exports = {
  
 
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'grey': '#232323',
      'secondarycolor':'#000000', 
      'primarycolor': '#FFE875',
      'green': '#00AC91',
     
    },
    extend: {
      width: {
        '560': '560px',
        '580':'580px',
      }
 
    },
  },
  plugins: [],
  darkMode: 'class',
}