module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  env: {
    es6: true,
    node: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:@typescript-eslint/recommended'
  ],
  // plugins: [
  //   'promise'
  // ],
  rules: {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-void': 0,
    '@typescript-eslint/no-explicit-any': [0, {
      fixToUnknown: false,
      ignoreRestArgs: true
    }],
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/member-delimiter-style': [2, {
      multiline: {
        'delimiter': 'none'
      }
    }],
    '@typescript-eslint/explicit-function-return-type': [1, {
      allowExpressions: true,
      allowTypedFunctionExpressions: true,
      allowHigherOrderFunctions: true
    }],
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": ["error"],
    "no-dupe-class-members": "off",
    "@typescript-eslint/no-dupe-class-members": ["error"]
  }
}
