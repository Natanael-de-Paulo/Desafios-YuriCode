/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      AzureRadiant: {
        100: '#00aeff'
      },
      CuriousBlue: {
        100: '#3ea1db'
      }
    },
    extend: {}
  },
  plugins: []
}
