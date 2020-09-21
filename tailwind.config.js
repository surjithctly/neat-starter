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
      colors: {},
    },
  },
  variants: {},
  plugins: [],
  experimental: "all",
  future: {
    purgeLayersByDefault: true,
  },
};
