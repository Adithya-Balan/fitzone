/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "c1": "#fecf3b",
        "c2": "#0c0c0c",
        "c3": "#818181",
        'nav': "#ffffff",
        'c4': "#e8e8e8",
      },
      fontWeight: {
        '1000': '1000',
        '1100': '1100',
        '1120': '1120',
      },
      fontFamily:{
        'bebas-neue-regular': ['Bebas Neue', 'sans-serif'],
        'f2': ['helvetica-extended', 'sans-serif'],
        'sixtyfour-convergence': ['Sixtyfour Convergence', 'sans-serif']
      },
    },
  },
  plugins: [],
}

