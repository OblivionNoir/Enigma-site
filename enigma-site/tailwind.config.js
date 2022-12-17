/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        'title': '.5rem .5rem .5rem rgb(138, 3, 3)'
    },
    colors: {
      'blood': 'rgb(190, 3, 3)'
    },
    width: {
      'MainScroll': '95.83%'
    },
    margin: {
      'MiniNavM': '96rem'
    },
    padding: {
      'SignLogPad': '87rem'
    }
  },
  plugins: [],
}
}
