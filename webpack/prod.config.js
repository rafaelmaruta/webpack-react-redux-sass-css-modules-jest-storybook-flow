'use strict'

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const CleanPlugin = require('clean-webpack-plugin')
const Default = require('./default')
const HtmlIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')
const SWPrecachePlugin = require('sw-precache-webpack-plugin')

module.exports = {
  entry: Default.entry,

  output: {
    filename: '[name]-[chunkhash:8].js',
    path: Default.paths.dist
  },

  context: Default.paths.src,

  devtool: 'source-map',

  mode: 'production',

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
    // Default.pluginsList.environmentPlugin('production', ''),
    new CleanPlugin(['build'], {
      root: Default.paths.root
    }),
    new SWPrecachePlugin({
      cacheId: 'Webpack Boilerplate',
      filename: 'service-worker.js',
      replacePrefix: 'http://localhost:3001/',
      stripPrefix: Default.paths.dist,
      staticFileGlobsIgnorePatterns: [/.*\.html/]
    }),
    ...Default.plugins,
    new HtmlIncludeAssetsPlugin({
      assets: ['service-worker.js'],
      append: true
    })
  ].concat(process.env.ANALYZER ? new BundleAnalyzerPlugin() : []),

  resolve: Default.resolve
}
