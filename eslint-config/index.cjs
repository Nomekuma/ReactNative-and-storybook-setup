const globals = require("globals");

module.exports = {
  env: {
    node: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["@typescript-eslint"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
  },
  globals: {
    ...globals.browser,
    ...globals.node,
    vitest: true,
    describe: true,
    it: true,
    expect: true,
    React: true,
    JSX: true,
    process: true,
    setTimeout: true,
    document: true,
    clearTimeout: true,
    NodeJS: true,
    window: true,
    localStorage: true,
    fetch: true,
    PR: true,
  },
  rules: {
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-require-imports": "off", 
  },
};
