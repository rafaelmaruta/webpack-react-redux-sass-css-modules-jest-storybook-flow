module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.js?(x)',
      'src/**/*.snap',
      '!src/**/test.js?(x)'
    ],
    tests: [
      'src/**/test.js?(x)'
    ],

    env: {
      type: 'node',
      runner: 'node'
    },

    testFramework: 'jest',

    compilers: {
      '**/*.js?(x)': wallaby.compilers.babel()
    },

    debug: true,

    reportConsoleErrorAsError: true
  }
}
