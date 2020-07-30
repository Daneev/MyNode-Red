const nodeResolve = require('rollup-plugin-node-resolve')
const path = require('path')

module.exports = (options) => nodeResolve({
  customResolveOptions: {
    paths: [
      path.join(options.homeDir, 'node_modules'),
      path.join(options.projectHome, 'node_modules')
    ]
  },
  preferBuiltins: false
})
