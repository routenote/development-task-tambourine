module.exports = {
    future: {},
    purge: {
      mode: 'jit',
      content: [
        'dist/**/*.html',
        'src/**/*.vue',
      ],
      options: {},
    },
    theme: {extend: {
      colors: {
        gray:{
          dark: '#9898A3',
          mid: '#AEAEBA',
          charcoal: '#202020',
        },
      },
      opacity: {
        '12': '.12',
       },
       
      fontFamily: {
        CeraProMedium: "CeraProMedium",
        CeraProRegular: "CeraProRegular",
      },
    },},
    plugins: [],
    prefix: '',
  }
