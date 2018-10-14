module.exports = {
  env: {
    es6: true,
    node: true,
    mocha: true
  },
  parserOptions: {
    ecmaVersion: 2017
  },
  extends: [
    'eslint:recommended',
    'standard'
  ],
  rules: {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
