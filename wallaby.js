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

// module.exports = function (wallaby) {
//   return {
//     files: [
//       { pattern: 'src/**/*.js?(x)', load: false },
//       { pattern: 'src/**/*.snap', load: false },
//       'node_modules/admin-components/**',
//       '!src/**/*test.js?(x)'
//     ],

//     tests: [
//       'src/**/*test.js?(x)'
//     ],

//     env: {
//       type: 'node',
//       runner: 'node'
//     },

//     testFramework: 'jest',

//     compilers: {
//       '**/*.js?(x)': wallaby.compilers.babel()
//     },

//     debug: true,

//     reportConsoleErrorAsError: true,

//     filesWithNoCoverageCalculated: ['node_modules/admin-components/**']
//   }
// }
