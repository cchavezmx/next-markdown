/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      'xtream': '6.28rem',
      'font-base': '4.25rem',
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
