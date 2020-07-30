const path = require('path')
const PurgeSvelte = require('purgecss-from-svelte')

module.exports = (options) => {
  return {
    use: [
      ['sass', {
        includePaths: [
          path.resolve(options.projectHome, 'pekfinger-red', 'config'),
          path.resolve(options.projectHome, 'pekfinger-red'),
          options.projectHome,
          path.join(__dirname, '..', 'theme'),
          'node_modules'
        ]
      }]
    ],
    plugins: [
      require('@fullhuman/postcss-purgecss')({
        content: options.files,
        defaultExtractor: (content) => {
          const result = PurgeSvelte.extract(content)
          return [...result, ...content.match(/[\w-/.:]+(?<!:)/g)]
        },
        whitelistPatterns: [/svelte-/]
      })
    ]
  }
}
