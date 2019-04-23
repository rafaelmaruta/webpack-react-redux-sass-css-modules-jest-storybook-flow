'use strict'

const { join, resolve } = require('path')
const Aliases = require('./aliases')
const HtmlPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const SassLintPlugin = require('sasslint-webpack-plugin')
const Webpack = require('webpack')

const devMode = process.env.NODE_ENV !== 'production'

const paths = {
  dist: join(__dirname, '..', 'docs'),
  public: join(__dirname, '..', 'public'),
  root: join(__dirname, '..'),
  src: join(__dirname, '..', 'src'),
  importEach: '../src/scss/_import-each'
}

const pluginsList = {
  environmentPlugin: (environment) => (
    new Webpack.EnvironmentPlugin({
      NODE_ENV: environment
    })
  ),


  htmlPlugin: new HtmlPlugin({
    chunksSortMode: 'none',
    minify: { collapseWhitespace: true },
    template: join(paths.src, 'index.ejs'),
    title: 'Admin'
  }),

  miniCssExtractPlugin: new MiniCssExtractPlugin({
    filename: '[name]-[chunkhash:8].css',
    chunkFilename: '[id].[hash].css'
  }),

  sassLintPlugin: new SassLintPlugin({
    configFile: join(paths.root, '.sass-lint.yml'),
    glob: 'src/**/*.s?(a|c)ss',
    ignorePlugins: [
      'extract-text-webpack-plugin'
    ]
  })
}

module.exports = {
  paths,
  pluginsList,

  entry: {
    main: join(paths.src, 'js', 'index')
  },

  resolve: {
    alias: Aliases(paths),
    modules: [resolve(__dirname), '..', 'node_modules'],
    extensions: ['.css', '.scss', '.js', '.json', '.jsx']
  },

  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ],
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles.css',
          test: /\.s?css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },

  preLoader: {
    enforce: 'pre',
    test: /\.jsx?$/,
    include: paths.src,
    exclude: /node_modules/,
    use: {
      loader: 'standard-loader',
      options: {
        parser: 'babel-eslint'
      }
    }
  },

  jsLoader: {
    test: /\.jsx?$/,
    include: paths.src,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            modules: false,
            targets: {
              browsers: ['last 2 versions']
            }
          }],
          '@babel/preset-react',
          '@babel/preset-flow'
        ],
        plugins: [
          'react-hot-loader/babel',
          ['@babel/plugin-proposal-class-properties', {
            loose: false
          }],
          ['@babel/plugin-proposal-decorators', {
            legacy: true }
          ],
          '@babel/plugin-proposal-function-bind',
          ['@babel/plugin-proposal-optional-chaining', {
            loose: false
          }],
          ['@babel/plugin-proposal-pipeline-operator', {
            proposal: 'minimal'
          }],
          '@babel/plugin-syntax-dynamic-import',
          ['@babel/plugin-transform-runtime', {
            helpers: false,
            regenerator: true
          }],
          ['module-resolver', {
            root: ['./src/js'],
            alias: {
              App: './src/js',
              Helpers: './src/js/helpers',
              MasterPage: './src/js/masterpage',
              Modules: './src/js/modules',
              Reducers: './src/js/reducers',
              Routes: './src/js/routes',
              Store: './src/js/store'
            }
          }],
          ['react-css-modules', {
            context: paths.src,
            generateScopedName: '[local]-[hash:base64:5]',
            filetypes: {
              '.scss': {
                syntax: 'postcss-scss'
              }
            },
            webpackHotModuleReloading: true
          }]
        ]
      }
    }
  },

  scssLoader: {
    test: /\.s?css$/,
    // exclude: /node_modules/,
    use: [
      devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          localIdentName: '[local]-[hash:base64:5]',
          minimize: true,
          modules: true,
          sourceMap: true
        }
      },
      {
        loader: 'sass-loader',
        options: {
          data: `@import "${paths.importEach}";`,
          sourceMap: true,
          includePaths: [ resolve(paths.src) ]
        }
      }
    ]
  },

  fileLoader: {
    test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|txt)(\?.*)?$/,
    include: paths.src,
    exclude: /node_modules/,
    use: {
      loader: 'file-loader',
      options: {
        name: 'media/[name].[hash:8].[ext]'
      }
    }
  },

  urlLoader: {
    test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
    include: paths.src,
    exclude: /node_modules/,
    use: {
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: 'media/[name].[hash:8].[ext]'
      }
    }
  },

  plugins: [
    pluginsList.htmlPlugin,
    pluginsList.miniCssExtractPlugin
    // pluginsList.sassLintPlugin
  ]
}
