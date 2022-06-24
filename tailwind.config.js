/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Dark': '#222222', //Oscuro
        'Light-purple': '#241145', //Morado claro
        'Yellow':"#FF9200", //Amarillo
        'Dark-purple':"#0D021E", //Morado oscuro   
        'turquoise': '#0C3149', //turquesa azulado
        'Light-Blue':"#057DAD", //Celeste ticongle
      }
    },
  },
  plugins: [],
}
