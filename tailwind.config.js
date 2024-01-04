module.exports = {
  future: {},
  purge: {
    mode: "jit",
    content: ["dist/**/*.html", "src/**/*.vue"],
    options: {},
  },
  theme: {
    extend: {
      colors: {
        grey: {
          200: "#F2F2F4",
          300: "#A0A0AB29",
          400: "#AEAEBA",
          500: "#9898A3",
        },
        charcoal: "#202020",
      },
      fontFamily: {
        cerapro: ["CeraPro", "sans-serif"],
      },
    },
    screens: {
      sm: "540px",
      md: "720px",
      lg: "960px",
      xl: "1140px",
    },
  },
  plugins: [],
  prefix: "",
};
