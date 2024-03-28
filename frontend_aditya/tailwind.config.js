/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xsm':'525px',
        'sm': '620px',  // Custom small breakpoint
        'md': '768px',  // Custom medium breakpoint
        'lg': '820px', // Custom large breakpoint
        'xl': '1280px', // Custom extra-large breakpoint
      },
    },
  },
  plugins: [],
}