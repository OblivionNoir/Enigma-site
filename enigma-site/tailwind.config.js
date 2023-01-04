/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        'title': '.25rem .25rem .25rem rgb(30,64,175)'
    },
    width: {
      'MainScroll': '95.83%'
    },
    padding: {
      'SignLogPad': '87rem'
    }, 
    fontSize: {
      'normaltext': '.95vmax',
      'logosize': '1.9vmax'
    },
    spacing:{
      'mtemp': '32.5%',
    },
    margin:{
      'mtemp': '7.2rem',
    }
  },
  plugins: [],
}
}
