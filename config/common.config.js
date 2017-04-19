const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Path              = require('path');
const Webpack           = require('webpack');

const Pj = Path.join;
const Config = {};

Config.bundlePath     = Pj(__dirname, '..', 'public');
Config.srcPath        = Pj(__dirname, '..', 'resources', 'js');
Config.scssPath       = Pj(__dirname, '..', 'resources', 'scss');
Config.actionsPath    = Pj(Config.srcPath, 'actions');
Config.componentsPath = Pj(Config.srcPath, 'components');
Config.entryFile      = Pj(Config.srcPath, 'app.jsx');
Config.helpersPath    = Pj(Config.srcPath, 'helpers');
Config.reducersPath   = Pj(Config.srcPath, 'reducers');
Config.routesPath     = Pj(Config.srcPath, 'routes');
Config.storePath      = Pj(Config.srcPath, 'store');
Config.structurePath  = Pj(Config.srcPath, 'structure');

const cap  = Config.actionsPath;
const ccp  = Config.componentsPath;
const chp  = Config.helpersPath;
const crep = Config.reducersPath;
const crop = Config.routesPath;
const cscp = Config.scssPath;
const cstp = Config.storePath;
const csp  = Config.structurePath;
const Aliases = require('./shared-aliases.js');

Config.aliases = Object.assign({
  MasterPage: csp,
  Actions   : cap,
  Reducers  : crep,
  RootRoute : crop,
  Store     : cstp,

  ActionTypes : Pj(cap, 'ActionTypes'),
  ProductsCart: Pj(crep, 'ProductsCart'),
  Main        : Pj(crop, 'Main'),

  Utils  : Pj(chp, 'Utils'),
  Request: Pj(chp, 'Request'),

  AppConfig: Pj(Config.srcPath, 'AppConfig')
}, Aliases);

Config.resolve = {
  alias     : Config.aliases,
  modules   : [Path.resolve(__dirname), 'node_modules'],
  extensions: ['.css', '.scss', '.js', '.jsx']
};

Config.vendor = [
  'react',
  'react-dom'
];

Config.rules = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader'
      }
    ]
  },
  {
    test: /\.(png|gif|woff|woff2|eot|ttf|svg)$/,
    use: 'url-loader?limit=100000'
  },
  {
    test: /\.(css|scss)$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            localIdentName: '[name]__[local]__[hash:base64:5]',
            minimize: true,
            modules: true
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
      ]
    })
  }
];

Config.plugins = [
  new ExtractTextPlugin({
    filename: 'index.css',
    disable: process.env.NODE_ENV === 'development',
    allChunks: true
  }),
  new Webpack.ProvidePlugin({
    Base: 'Base'
  })
];

module.exports = Config;