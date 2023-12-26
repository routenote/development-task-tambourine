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
    theme: {
      extend: {
        colors: {
          'light-grey': '#AEAEBA', // use at 12% opacity for lightest grey
          'mid-grey': '#AEAEBA',
          'dark-grey': '#9898A3',
          'charcoal': '#202020',
        },
      },
    },
    plugins: [],
    prefix: '',
  }
