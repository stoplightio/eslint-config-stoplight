module.exports = {
  parser: 'babel-eslint',

  extends: ['google', 'plugin:react/recommended', 'prettier', 'prettier/react'],

  plugins: ['react', 'prettier'],

  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'module',
    ecmaFeatures: {
      classes: true,
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },

  env: {
    es6: true,
    node: true,
  },

  globals: {
    Meteor: true,
    Electron: true,
    CONFIG: true,
    describe: true,
    it: true,
    parseInt: true,
    fetch: true,
    navigator: true,
    document: true,
    window: true,
  },

  rules: {
    'prettier/prettier': ['error', { trailingComma: 'es5', singleQuote: true, printWidth: 100 }],
    'require-jsdoc': 0,
    'react/prop-types': 0,
    'no-invalid-this': 0,
    'react/display-name': 0,
    'new-cap': 1,
    'react/jsx-no-bind': 1,
  },
};
