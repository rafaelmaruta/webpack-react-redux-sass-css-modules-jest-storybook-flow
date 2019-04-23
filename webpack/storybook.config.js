'use strict'

const Default = require('./default')
const WebpackConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js')

module.exports = (config, env) => {
  const newConfig = WebpackConfig(config, env)
  newConfig.context = Default.paths.src
  newConfig.module.rules.unshift(Default.preLoader)
  newConfig.module.rules.push(Object.assign({}, Default.scssLoader, {
    test: /\.(scss)$/
  }))

  Object.assign(newConfig.resolve, {
    alias: Default.resolve.alias,
    extensions: Default.resolve.extensions
  })

  newConfig.plugins.push(Default.pluginsList.extractTextPlugin)

  return newConfig
}