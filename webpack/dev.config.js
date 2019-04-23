'use strict'

const Default = require('./default')
const Webpack = require('webpack')

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
    Default.entry.main
  ],

  output: {
    filename: '[name].js',
    publicPath: ''
  },

  context: Default.paths.src,

  devServer: {
    contentBase: Default.paths.public,
    historyApiFallback: true,
    hot: true,
    port: 3001,
    stats: { colors: true }
  },

  devtool: 'source-map',

  mode: 'development',

  module: {
    rules: [
      Default.preLoader,
      Default.jsLoader,
      Default.scssLoader,
      Default.fileLoader,
      Default.urlLoader
    ]
  },

  optimization: Default.optimization,

  plugins: [
    Default.pluginsList.environmentPlugin('development'),
    new Webpack.HotModuleReplacementPlugin(),
    ...Default.plugins
  ],

  resolve: Default.resolve
}
