module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "airbnb-base",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: [
    "vue",
    "@typescript-eslint",
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "linebreak-style": 0,
    "global-require": 0,
    "eslint linebreak-style": [0, "error", "windows"],
    quotes: [2, "double", "avoid-escape"],
  },

};
