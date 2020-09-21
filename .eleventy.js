module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addWatchTarget("./_tmp/static/css/style.css");

  eleventyConfig.addPassthroughCopy({
    "./_tmp/static/css/style.css": "./static/css/style.css",
    "./admin/config.yml": "./admin/config.yml",
    "./node_modules/alpinejs/dist/alpine.js": "./static/js/alpine.js",
  });

  eleventyConfig.setBrowserSyncConfig({
    injectChanges: false,
  });

  eleventyConfig.addPassthroughCopy("./static/img");

  eleventyConfig.addShortcode("version", function () {
    return String(Date.now());
  });

};
