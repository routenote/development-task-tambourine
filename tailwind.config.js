module.exports = {
    future: {},
    purge: {
      mode: 'jit',
      content: [
        'dist/**/*.html',
        'src/**/*.vue',
      ],
      options: {},
    },// customize the button color and font
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
      screens: {
        'sm': {'max': '540px'},
        'md': {'max': '720px'},
        'lg': {'max': '960px'},
        'xl': {'max': '1140px'},
      },
    },
    
  },
    plugins: [],
    prefix: '',
  }
