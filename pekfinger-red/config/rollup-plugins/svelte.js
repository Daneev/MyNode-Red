const svelte = require('rollup-plugin-svelte')
const postcss = require('postcss')
const path = require('path')

module.exports = (options) => {
  return svelte({
    extensions: ['.svelte'],
    generate: options.mode,
    hydratable: true,
    dev: options.dev,
    css: (css) => {
      if (options.mode === 'ssr') {
        const postcssOptions = require(path.join(options.configPath, 'rollup-plugins', 'postcss-options.js'))(options)
        postcss(postcssOptions.plugins).process(css.code, { from: options.id + '/bundle.css', to: options.id + '/bundle.css', ...postcssOptions }).then(result => {
          css.code = result.css
          if (options.dev && result.map) css.map = result.map
          css.write(path.join(options.buildFolder, 'bundle.css'), options.dev)
        })
      }
    },
    onwarn: (warning, handler) => {
      // Do not warn on unused exports as they are expected
      if (warning.code === 'unused-export-let') return
      handler(warning)
    }
  })
}
