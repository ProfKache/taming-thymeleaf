/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["../resources/templates/**/*.{html,js,svg}"],
  theme: {
    extend: {
        colors: {
            'taming-thymeleaf-green':'darkseagreen'
        },
        fontFamily: {
            sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}