/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Add Poppins font
        montserrat: ["Montserrat", "sans-serif"], // Optionally, add Montserrat as well
        NotoSarif: ["Noto Serif", "serif"],
        Mali: ["Mali", 'cursive']
      },
    },
  },
  plugins: [require('daisyui'),],
}

