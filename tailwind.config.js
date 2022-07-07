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
        'purple-bfooter': "#241145", //Morado de bajo el footer
        'purple-cards': "#824599" //Morado de las tarjetas de habilida
      },
      animation:{
        fadeIn:"fadeIn",
        fadeOut:"fadeOut",
        scaleIn:"scaleIn",
        scaleOut:"scaleOut",
      },
      keyframes:{
        fadeIn:{
          "0%":{ opacity:0 },
          "100%":{ opacity:1 }
        },
        fadeOut:{
          "0%":{ opacity:1 },
          "100%":{ opacity:0 }
        },
        scaleIn:{
          "0%":{ transform:"scale(0)" },
          "100%":{ transform:"scale(1)" }
        },
        scaleOut:{
          "0%":{ transform:"scale(1)" },
          "100%":{ transform:"scale(0)" },
        },
      },
      backgroundImage:{
        fondoHeader: "url('../src/assets/imgHome/fondo_header.png')",
        lateralEditPerfil: "url('../src/assets/imgEditPerfil/lateral_fondo.jpg')"
      },
      fontFamily: {
        roboto: ['"Roboto"', 'sans-serif']
      }
    },
  },
  plugins: [],
}
