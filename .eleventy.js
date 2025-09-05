module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css/*.css");
    eleventyConfig.addPassthroughCopy("images/**");
};