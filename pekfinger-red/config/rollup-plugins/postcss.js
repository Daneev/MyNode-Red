const postcss = require('rollup-plugin-postcss')
const path = require('path')

module.exports = (options) => postcss(
  require(path.join(options.configPath, 'rollup-plugins', 'postcss-options.js'))(options)
)
