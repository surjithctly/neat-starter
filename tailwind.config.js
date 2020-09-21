module.exports = {
  purge: {
    enabled: true,
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
};
