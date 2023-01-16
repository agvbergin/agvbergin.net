const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
  // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.setServerPassthroughCopyBehavior("./src/img");

  // Copy `css/fonts/` to `_site/css/fonts`
  // Keeps the same directory structure.
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.setServerPassthroughCopyBehavior("./src/css");

  // RSS plugin
  eleventyConfig.addPlugin(pluginRss);

  // 11ty Rocks year shortcode
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Import prior to `module.exports` within `.eleventy.js`
  const { DateTime } = require("luxon");

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  // Output directory: _site
  return {
    dir: {
      input: "src"
    }
  };
};
