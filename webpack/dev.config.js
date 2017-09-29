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
    port: 8080,
    stats: { colors: true }
  },

  devtool: 'source-map',

  module: {
    rules: [
      Default.preLoader,
      Default.jsLoader,
      Default.scssLoader,
      Default.cssLoader,
      Default.fileLoader,
      Default.urlLoader
    ]
  },

  plugins: [
    new Webpack.EnvironmentPlugin({
      NODE_ENV: 'development'
    }),

    new Webpack.HotModuleReplacementPlugin(),

    ...Default.plugins
  ],

  resolve: Default.resolve
}
