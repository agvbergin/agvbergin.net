const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
    // Output directory: _site
  
    // Copy `img/` to `_site/img`
    eleventyConfig.addPassthroughCopy("img");
  
    // Copy `css/fonts/` to `_site/css/fonts`
    // Keeps the same directory structure.
    eleventyConfig.addPassthroughCopy("css");

    // RSS plugin
    eleventyConfig.addPlugin(pluginRss);

    // 11ty Rocks year shortcode
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  
  };
  
