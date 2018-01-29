/* eslint-env node */

"use strict";

module.exports = {
  parser: "babel-eslint",

  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "google",
    "prettier",
    "prettier/react"
  ],

  plugins: ["react", "prettier"],

  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
    ecmaFeatures: {
      classes: true,
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },

  rules: {
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
        singleQuote: true,
        printWidth: 100
      }
    ],
    "require-jsdoc": 0,
    "react/prop-types": 0,
    "no-invalid-this": 0,
    "react/display-name": 0,
    "new-cap": 0,
    "react/jsx-no-bind": 0,
    "valid-jsdoc": 0,
    "guard-for-in": 0,
    "no-unused-vars": 1,
    camelcase: 0,
    "no-console": 0,
    "no-case-declarations": 1,
    "no-empty": 1,
    "require-yield": 1,
    "no-useless-escape": 0,
    "react/no-unescaped-entities": 1
  }
};
