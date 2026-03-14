const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const yaml = require("js-yaml");

module.exports = function(eleventyConfig) {

  // Pass through static assets
  eleventyConfig.addPassthroughCopy("assets");

  // Don't use .gitignore to exclude files
  eleventyConfig.setUseGitIgnore(false);

  // Enable YAML data files
  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

  // Markdown configuration
  const markdownLib = markdownIt({
    html: true,
    breaks: false,
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
