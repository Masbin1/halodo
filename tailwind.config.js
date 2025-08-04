module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./*.html"],
  theme: {
    extend: {
      fontFamily: {
        moreSugar: ['MoreSugar', 'cursive'],
      },
      aspectRatio: {
        '16/9': '16 / 9',
      },
      height: {
        'screen-16/9': 'calc(100vh * 9 / 16)',
      },
      maxHeight: {
        'screen-16/9': 'calc(100vh * 9 / 16)',
      },
      spacing: {
        '1/20': '5%',
        '1/10': '10%',
        '3/20': '15%',
        '1/5': '20%',
      }
    },
  },
  plugins: [],
}
