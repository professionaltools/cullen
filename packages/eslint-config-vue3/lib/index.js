module.exports = {
  "extends": [
    "plugin:vue/vue3-essential",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"
  ],
  "parserOptions": {
    "ecmaVersion": 2020
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
