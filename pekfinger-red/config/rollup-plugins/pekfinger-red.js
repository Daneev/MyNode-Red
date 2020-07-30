const path = require('path')

module.exports = (options) => {
  const pekfingerRedPlugin = require(path.join(options.srcPath, 'util', 'rollup-plugin-pekfinger-red.js'))
  return pekfingerRedPlugin(options)
}
