const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");

module.exports = function(eleventyConfig) {

  // Pass through static assets
  eleventyConfig.addPassthroughCopy("assets");

  // Markdown configuration
  const markdownLib = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  }).use(markdownItAttrs);

  eleventyConfig.setLibrary("md", markdownLib);

  return {
    dir: {
      input: "RootedWisdom/publish",
      includes: "../../_includes",
      data: "../../_data",
      output: "_site"
    }
  };
};