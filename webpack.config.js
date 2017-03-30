const devConfig = require('./config/webpack.dev.config.js');
const prodConfig = require('./config/webpack.prod.config.js');

var config;

switch (process.env.npm_lifecycle_event) {
  case 'start':
    config = devConfig;
    break;
  case 'build':
    config = prodConfig;
    break;
  default:
    config = devConfig;
    break;
}

module.exports = config;
