const Config            = require('./common.config');
const Path              = require('path');
const Webpack           = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const I18nPlugin        = require("i18n-webpack-plugin");

require('babel-core/register');
require.resolve('babel-polyfill');

const languages = {
  'pt-br': null,
  'en-us': require('../languages/en-us.json'),
};

module.exports = Object.keys(languages).map(language => ({
  name: language,
  entry: {
    index: [
      'react-hot-loader/patch',
      'webpack/hot/only-dev-server',
      'babel-polyfill',
      Config.entryFile
    ]
  },
  output: {
    filename: `${language}.[name].js`,
    path    : Config.bundlePath
  },
  devServer: {
    contentBase       : Config.bundlePath,
    historyApiFallback: true,
    hot               : true,
    port              : 8080,
  },
  resolve: Config.resolve,
  devtool: 'source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        test   : /\.jsx?$/,
        loader : 'semistandard-loader',
        exclude: /node_modules/
      },
      ...Config.rules
    ]
  },
  plugins: [
    new I18nPlugin(
      languages[language]
    ),
    new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV : JSON.stringify('development')
      }
    }),
    new HTMLWebpackPlugin({
      //basePath: '/',
      template: Path.join(__dirname, '..', 'index.ejs')
    }),
    new Webpack.HotModuleReplacementPlugin(),
    ...Config.plugins
  ]
}));