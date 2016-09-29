module.exports = {
  "extends": "airbnb",

  "plugins": [],

  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    }
  },

  globals: {},

  rules: {
    "no-underscore-dangle": 0,
    "new-cap": 0,
    "import/no-unresolved": 0,
    "jsx-quotes": [2, "prefer-single"],
    "global-require": 1,
    "space-before-function-paren": [2, "never"],
    "arrow-body-style": [0, "as-needed"],
    "no-unneeded-ternary": 0,
    "max-len": 0,
    "react/prop-types": 0,
    "no-use-before-define": 1,
    "object-curly-spacing": [2, "never"],
    "no-extra-parens": 0,
    "react/sort-comp": 0,
    "react/prefer-es6-class": 1,
    "react/prefer-stateless-function": 1,
    "react/no-multi-comp": 0,
    "guard-for-in": 0,
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": 0,
    "import/imports-first": 0,
    "object-shorthand": 0,
    "consistent-return": 0,
    "no-restricted-syntax": ["error", "WithStatement"],
    "no-param-reassign": [
      "error",
      {
        "props": false
      }
    ]
  }

};
