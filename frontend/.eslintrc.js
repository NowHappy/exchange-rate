module.exports = {
  root: true,
  env: {
    node: true
  },
  plugins: ['babel', 'prettier'],
  extends: ['tui', 'prettier', 'plugin:vue/recommended'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    camelcase: 'off',
    'no-shadow' : 'off',
    'max-params' : 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': 'off'
  },
  globals: {
    PROFILE: false,
    DOMAIN: false
  }
}
