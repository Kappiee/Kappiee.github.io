const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  env: {
    browser: true,
    es6: true,
  },
  plugins: [ "@typescript-eslint", "vue", "markdown" ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/essential",
    "plugin:markdown/recommended-legacy",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },

  overrides: [
    {
      files: [ "**/*.{js,mjs,cjs,ts,vue,md}" ],
      rules: {
        "no-irregular-whitespace": "error",
        camelcase: "error",
        "no-sparse-arrays": "error",
        "spaced-comment": "error",

        "object-curly-spacing": [ "error", "always" ],
        "array-bracket-spacing": [ "error", "always" ],
        "computed-property-spacing": [ "error", "always" ],
        "space-before-blocks": [ "error", "always" ],

      },
    },
  ],
});
