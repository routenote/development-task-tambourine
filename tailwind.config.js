module.exports = {
  future: {},
  purge: {
    mode: "jit",
    content: ["dist/**/*.html", "src/**/*.vue"],
    options: {},
  },
  theme: {
    screens: {
      'sm': '540px',
      'md': '720px',
      'lg': '960px',
      'xl': '1140px',
    },
    extend: {
      colors: {
        "mid-grey-opacity-12": "rgba(174, 174, 186, 0.12)",
        "dark-grey": "#9898a3",
        "mid-grey": "#aeaeba",
        charcoal: "#202020",
      },
    },
  },
  plugins: [],
  prefix: "",
};
