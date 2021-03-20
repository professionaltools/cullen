module.exports = {
  extends: ['plugin:vue/essential', '@vue/standard'],
  parserOptions: {
    "parser": "babel-eslint"
  },
  rules: {
    "vue/html-quotes": ["error","double"],
    "semi": ["error", "never"],
    "comma-dangle": ["error","always-multiline"],
    "quotes": ["error","double"]
  },
  env:{
    "browser": true,
    "node": true
  }
}
