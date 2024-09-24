import globals from 'globals';
import pluginJs from '@eslint/js';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  prettierRecommended,
  {
    rules: {
      'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    },
  },
];
