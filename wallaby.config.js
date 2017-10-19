module.exports = () => {
  return {
    testFramework: 'jest',
    files: [
      'index.js',
    ],
    tests: [
      'index.test.js'
    ],
    env: {
      type: 'node',
      runner: 'node'
    },
    setup(wallaby) {
      wallaby.testFramework.configure(require('./package.json').jest);
    }
  };
};
