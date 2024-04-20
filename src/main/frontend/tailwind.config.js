/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../resources/templates/**/*.{html,js}"],
  theme: {
    extend: {
        colors: {
            'taming-thymeleaf-green':'darkseagreen'
        }
    },
  },
  plugins: [],
}