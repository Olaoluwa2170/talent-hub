/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a192f",
        secondary: "#FD7537"
        
      },
      fontFamily: {
        "cursive": 'Righteous',
        "fatface": 'Abril Fatface',
        "montserrat": 'Montserrat'
      },
      backgroundImage: {
        'homebg': "url('../assets/img/logo.png')"
      }
    },
  },
  plugins: [],
}
