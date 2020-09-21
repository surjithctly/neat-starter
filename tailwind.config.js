module.exports = {
  purge: {
    mode: "all",
    content: ["./**/*.njk"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#176AEF",
        },
      },
    },
  },
  variants: {},
  plugins: [],
  experimental: "all",
  future: {
    purgeLayersByDefault: true,
  },
};
