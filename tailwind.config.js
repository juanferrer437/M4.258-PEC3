/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
    theme: {
     
    extend: {
      gridTemplateRows: {
         'layout': '8vh 25vh 35vh',
         
      },
      gridTemplateColumns : {
        'layout':'1fr 3fr 1fr',
        'header':'3fr 7fr',
        'footer':'1fr 4fr 1fr'
      }
      
    },
  },
  variants:{},
  plugins: [],
}

