'use strict'

const CleanPlugin = require('clean-webpack-plugin')
const Default = require('./default')
const HtmlIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')
const SWPrecachePlugin = require('sw-precache-webpack-plugin')
const Webpack = require('webpack')

module.exports = {

  entry: Default.entry,

  output: {
    filename: '[name]-[chunkhash:8].js',
    path: Default.paths.dist
  },

  context: Default.paths.src,

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
      NODE_ENV: 'production'
    }),

    new Webpack.optimize.UglifyJsPlugin({
      cacheFolder: Default.paths.dist,
      debug: true,
      compress: { warnings: false },
      output: { comments: false },
      sourceMap: true
    }),

    new CleanPlugin(['build'], {
      root: Default.paths.root
    }),

    new HtmlIncludeAssetsPlugin({
      assets: ['service-worker.js'],
      append: true
    }),

    new SWPrecachePlugin({
      cacheId: 'Freedom Admin',
      filename: 'service-worker.js',
      replacePrefix: 'http://localhost:3001/',
      stripPrefix: Default.paths.dist,
      staticFileGlobsIgnorePatterns: [/.*\.html/]
    }),

    ...Default.plugins
  ],

  resolve: Default.resolve
}
