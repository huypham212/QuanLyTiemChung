module.exports = {
  'env': {
    'es6': true,
    'node': true,
    'jest': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    'react-hooks',
  ],
  'rules': {
    'indent': [
      'error',
      2,
      { SwitchCase: 1 }
    ],
    'linebreak-style': [
      'error',
      'windows'
    ],
    'quotes': [
      'error',
      'single',
      { avoidEscape: true }
    ],
    'semi': [
      'error',
      'always'
    ],
    'no-empty-function': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
  },

  settings: {
    react: {
      version: 'detect',
    },
  },
};
