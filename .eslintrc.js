module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.jsx', '.js', '.ts', '.tsx'] },
    ],
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    'no-console': ['warn', { allow: ['tron'] }],
  },
};