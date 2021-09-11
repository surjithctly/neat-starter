4
const lib = require("./src/static/js/lib");
const yaml = require("js-yaml");
const { DateTime } = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginTOC = require('eleventy-plugin-toc');
const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {
  // Disable automatic use of your .gitignore
  eleventyConfig.setUseGitIgnore(false);

  // Merge data instead of overriding
  eleventyConfig.setDataDeepMerge(true);

  // is this value an object?
  eleventyConfig.addFilter("type", lib.getTypeof);

  // is this value an object?
  eleventyConfig.addFilter("hexToRgb", lib.hexToRgb);

  // is this value an object?
  eleventyConfig.addFilter("rgbToCmyk", lib.rgbToCmyk);

  // is this value an object?
  eleventyConfig.addFilter("getContrastYIQ", lib.getContrastYIQ);

  // is this value an object?
  eleventyConfig.addFilter("getColorSpacesFromHex", lib.getColorSpacesFromHex);

  // find default value
  eleventyConfig.addFilter("setDefault", lib.displayAsDefault);

  // remove alpha entities
  eleventyConfig.addFilter("stripAlpha", lib.stripAlpha);

  // convert rem to px
  eleventyConfig.addFilter("remToPx", lib.remToPx);

  // sort as numbers
  eleventyConfig.addFilter("sortNumerically", lib.sortNumerically);

  // sort group - ascending
  eleventyConfig.addFilter("sortAsc", lib.sortAsc);

  // object to array
  eleventyConfig.addFilter("toArray", lib.toArray);

  // camelCase from hyphens
  eleventyConfig.addFilter("camelCase", lib.camelCase);

  // get selected elements
  eleventyConfig.addFilter("getHeadings", lib.getHeadings);


  // adds page-level TOC
  eleventyConfig.addPlugin(pluginTOC, {
    tags: ['h2', 'h3'],
    wrapper: 'div',
    wrapperClass: 'page-toc'
  })

  // human readable date
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy"
    );
  });

  // Alias `layout: module` to `layout: layouts/modules.html`
  eleventyConfig.addLayoutAlias("module", "layouts/module.html");
  // Alias `layout: module` to `layout: layouts/modules.html`
  eleventyConfig.addLayoutAlias("base", "base.html");
  // Alias `layout: landing` to `layout: layouts/landing.html`
  eleventyConfig.addLayoutAlias("landing", "layouts/landing.html");
  // Syntax Highlighting for Code blocks
  eleventyConfig.addPlugin(syntaxHighlight);

  // To Support .yaml Extension in _data
  // You may remove this if you can use JSON
  eleventyConfig.addDataExtension("yaml", (contents) =>
    yaml.safeLoad(contents)
  );

  // Copy Static Files to /_Site
  eleventyConfig.addPassthroughCopy({
    "./src/admin/config.yml": "./admin/config.yml",
    "./node_modules/alpinejs/dist/alpine.js": "./static/js/alpine.js",
    "./src/static/js/app.js": "./static/js/app.js",
    "./src/static/js/@alpinejs.persist.min.js": "./static/js/alpine-persist.js",
    "./node_modules/prismjs/themes/prism-tomorrow.css":
      "./static/css/prism-tomorrow.css",
  });

  // Copy Image Folder to /_site
  eleventyConfig.addPassthroughCopy("./src/static/img");

  // Copy favicon to route of /_site
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");

  // Copy font to route of /_site
  eleventyConfig.addPassthroughCopy("./src/static/fonts/Inter.var.woff2");

  // Minify HTML
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    // Eleventy 1.0+: use this.inputPath and this.outputPath instead
    if (outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }

    return content;
  });

  // Let Eleventy transform HTML files as nunjucks
  // So that we can use .html instead of .njk
  return {
    dir: {
      input: "src",
    },
    htmlTemplateEngine: "njk",
  };
};
