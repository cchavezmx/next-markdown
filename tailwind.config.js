/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      'xtream': '1.8rem',
    },    
    extend: {
      h4: {
        fontSize: '2.5rem',
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
