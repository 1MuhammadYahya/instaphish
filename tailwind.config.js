module.exports = {
  mode: 'JIT',
  content: [
    "public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'btn-blue': '#00b7ff',
        'grayed': '#ababab',
        'foreground': '#FAFAFA',
        'lightlygrayed': '#ECECEC',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      width: {
        'norm': '17em'
      },
      maxWidth: {
        'norm' : '17rem',
      },
      borderRadius: {
        'norm': '2px'
      },
      scale: {
        'norm': '80%',
      },
      backgroundImage: {
        'logo': 'url("https://i.ibb.co/3W8Rrwq/logo.png")',
      }
    }
  },
  plugins: [],
}
