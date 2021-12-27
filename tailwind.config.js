const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  presets: [require('windy-radix-palette')],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}