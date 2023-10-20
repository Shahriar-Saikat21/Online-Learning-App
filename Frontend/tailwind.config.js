/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'primary': '#192655',
      },
      fontFamily:{
        'primary': ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}

