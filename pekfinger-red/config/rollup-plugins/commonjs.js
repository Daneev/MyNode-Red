const commonjs = require('@rollup/plugin-commonjs')

module.exports = (options) => commonjs({
  include: /node_modules/
})
