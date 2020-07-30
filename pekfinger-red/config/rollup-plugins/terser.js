const { terser } = require('rollup-plugin-terser')

module.exports = (options) => options.dev || options.mode === 'ssr' ? undefined : terser()
