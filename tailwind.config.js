/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html", 
    "../**/*.{html,js}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage : {
        'loro': "url('../img/loro.jpg')",
        'leopard': "url('../img/leopard.jpg')",
        'leon': "url('../img/leon.jpg')",
        'aguila': "url('../img/aguila.jpg')",
        'elefante': "url('../img/elefante.jpg')",
        'puma': "url('../img/puma.jpg')",
        'tigre': "url('../img/tigre.jpg')",
        'cocodrilo': "url('../img/cocodrilo.jpg')",
        'miami': "url('../img/miami.jpg')",
        'delfin': "url('../img/1.jpg')",
        'sapo': "url('../img/2.jpg')",
        'raton': "url('../img/3.jpg')",
        'pescado': "url('../img/4.jpg')",
        'elefantito': "url('../img/5.jpg')",
        'fieras': "url('../img/6.jpg')",
      },
      backgroundColor: theme =>({
        ...theme('colors'),
        'primary' : '#06772F',
        'secondary' : '#28B463',
        'terciary' : '#808B96'
      }),
      textColor : {
        'primary' : '#28B463',
        'secondary' : '#F4F6F7',
        'terciary' : '#808B96'
      },
      fontFamily:{
        Montserrat : ['Montserrat', 'sans-serif']
      }
    },
  },
  variants:{
    width: ["responsive", 'hover', 'focus'],
    scrollbar: ['rounded', 'dark']
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
