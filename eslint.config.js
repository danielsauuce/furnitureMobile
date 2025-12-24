import expo from 'eslint-config-expo';
import prettier from 'eslint-config-prettier';

export default [
  expo,
  prettier,
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    rules: {
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
      'react-native/no-inline-styles': 'off',
    },
  },
];
