module.exports = {
  "extends": "airbnb",

  "parser": "babel-eslint",

  "plugins": [
    "react"
  ],

  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    }
  },

  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },

  "globals": {
    "Meteor": true,
    "CONFIG": true,
    "describe": true,
    "it": true,
    "parseInt": true,
    "fetch": true,
    "navigator": true,
    "document": true,
    "window": true
  }

  rules: {
    "array-callback-return": 0,
    "no-underscore-dangle": 0,
    "new-cap": 0,
    "import/no-unresolved": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/img-has-alt": 0,
    "jsx-a11y/label-has-for": 0,
    "jsx-quotes": [2, "prefer-single"],
    "global-require": 1,
    "space-before-function-paren": [2, "never"],
    "arrow-body-style": [0, "as-needed"],
    "arrow-parens": 0,
    "no-unneeded-ternary": 0,
    "no-bitwise": 0,
    "class-methods-use-this": 0,
    "max-len": 0,
    "react/prop-types": 0,
    "no-use-before-define": 1,
    "object-curly-spacing": [2, "never"],
    "no-extra-parens": 0,
    "no-unused-expressions": 0,
    "react/sort-comp": 0,
    "react/prefer-es6-class": 1,
    "react/prefer-stateless-function": 1,
    "react/no-multi-comp": 0,
    "react/no-is-mounted": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-filename-extension": 0,
    "react/no-unused-prop-types": 1,
    "react/no-find-dom-node": 1,
    "react/no-did-update-set-state": 1,
    "prefer-rest-params": 1,
    "guard-for-in": 0,
    "import/extensions": 0,
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": 0,
    "import/imports-first": 0,
    "import/no-absolute-path": 0,
    "radix": 0,
    "import/extensions": 0,
    "import/no-named-as-default": 0,
    "import/no-dynamic-require": 0,
    "import/no-named-as-default-member": 0,
    "import/no-mutable-exports": 1,
    "func-names": 0,
    "camelcase": 1,
    "object-shorthand": 0,
    "consistent-return": 0,
    "no-duplicate-case": 0,
    "no-case-declarations": 0,
    "no-prototype-builtins": 0,
    "no-unused-vars": 0,
    "camelcase": 1,
    "no-plusplus": 0,
    "no-empty": 1,
    "no-continue": 0,
    "no-alert": 0,
    "no-console": 0,
    "no-self-compare": 0,
    "default-case": 1,
    "no-restricted-syntax": ["error", "WithStatement"],
    "no-param-reassign": [
      "warn",
      {
        "props": false
      }
    ]
  }
};
