module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'react-app',
    'standard'
  ],
  globals: {
    __PATH_PREFIX__: true
  },
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react']
}
