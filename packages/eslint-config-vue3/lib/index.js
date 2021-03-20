module.exports = {
  "extends": [
    "plugin:vue/vue3-essential"
  ],
  "plugins": [
    "@typescript-eslint",
    "typescript"
  ],
  "parserOptions": {
    "parser": "@typescript-eslint/parser"
  },
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
