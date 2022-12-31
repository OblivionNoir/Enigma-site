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
