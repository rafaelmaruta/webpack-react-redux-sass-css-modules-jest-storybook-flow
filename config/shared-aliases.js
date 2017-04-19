const Path   = require('path');
const Pj     = Path.join;
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

module.exports = {
  MasterPage: csp,
  Actions   : cap,
  Reducers  : crep,
  RootRoute : crop,
  Store     : cstp,
};
