/* eslint-disable no-undef */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['airbnb-typescript', 'prettier'],
  rules: {
    'no-underscore-dangle': 0,
    'no-unused-vars': 'off',
    'linebreak-style': 0,
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/destructuring-assignment': 0,
    'import/no-unresolved': 'error',
    'import/extensions': 0,
    'consistent-return': 0,
    'no-noninteractive-element-to-interactive-role': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/no-danger': 0,
    'react/prop-types': 0,
    'import/prefer-default-export': 'off',
    'eqeqeq': 'off',
    'no-use-before-define': 'off',
    'camelcase': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: true,
        peerDependencies: true,
      },
    ],
    'max-len': [
      'error',
      {
        code: 220,
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        args: 'none',
      },
    ],
  },
};
