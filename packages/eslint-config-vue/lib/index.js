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
  root:true,
  env:{
    "browser": true,
    "node": true,
  }
}
