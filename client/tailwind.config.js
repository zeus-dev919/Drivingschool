/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js, jsx, ts, tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#3598DB',
      'green-light': '#CBF9D4FC',
      'green': '#26FF4A',
      'yellow': '#FFCA61',
      'red': '#FF5353',
      'orange': '#FFAB2D',
      'purple': '#7e5bef',
      'pink': '#ff49db'
    },
    extend: {},
  },
  plugins: [],
}
