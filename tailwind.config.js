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
      fontWeight:{
        'extra': "1020",
      }
    },
  },
  plugins: [],
}

