/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-gradient': 'linear-gradient(to top, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)',
      },
      maxHeight: {
        'max-height-calc' : 'calc(100% - 10px)',
      },
    },
  },
  plugins: [],
}