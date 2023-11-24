/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        'layout': '0.08fr 1fr',
      },
      gridTemplateColumns: {
        'layout': '1fr',
      }
    },
  },
  plugins: [],
}

