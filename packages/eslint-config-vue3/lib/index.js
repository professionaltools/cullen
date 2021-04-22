module.exports = {
  "extends": [
    "plugin:vue/vue3-essential",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"
  ],
  "parserOptions": {
    "parser": "@typescript-eslint/parser"
  },
  "plugins": [
    "@typescript-eslint",
    "typescript"
  ],
  "rules": {
    "vue/html-quotes": ["error", "double"],
    "semi": ["error", "never"],
    "comma-dangle": ["error", "always-multiline"],
    "quotes": ["error", "double"]
  },
  "env": {
    "node": true,
    "browser": true,
  }
}
