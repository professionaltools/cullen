module.exports = {
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended"
  ],
  "plugins": ["@typescript-eslint", "typescript"],
  "rules": {
    "vue/script-indent": [
      "error",2
    ],
    "vue/html-quotes": ["error", "double"],
    "semi": ["error", "never"],
    "comma-dangle": ["error", "always-multiline"],
    "quotes": ["error", "double"],
    "@typescript-eslint/no-empty-function": "off"
  },
  "root": true,
  "env": {
    "node": true,
    "browser": true
  }
}