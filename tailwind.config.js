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
        'disabled': '#F2F2F4',
        'light-grey': 'rgba(174, 174, 186, 0.12)',
        'mid-grey': '#AEAEBA',
        'dark-grey': '#9898A3',
        'charcoal': '#202020',
      },
      screens: {
        'xl': '1140px',
        'lg': '960px',
        'md': '720px',
        'sm': '540px',
      },
      borderRadius: {
        'sm': '2px',
      },
    },
  },
  plugins: [],
  prefix: '',
}
