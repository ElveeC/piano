import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import stylisticJs from '@stylistic/eslint-plugin-js';


/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: [ '**/*.{js,ts,jsx,tsx}' ] },
  { ignores: [ 'dist/*', 'node_modules/*' ] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  { plugins: {
    '@stylistic/js': stylisticJs
  },
  },
  
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': 'off',

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          'args': 'all',
          'argsIgnorePattern': '^_',
          'caughtErrors': 'all',
          'caughtErrorsIgnorePattern': '^_',
          'destructuredArrayIgnorePattern': '^_',
          'varsIgnorePattern': '^_',
          'ignoreRestSiblings': true
        }
      ],
      'react/button-has-type': [ 'error', {
        button: true
      } ],
      'no-undef': 'off',
      'react/jsx-indent': [ 2, 2 ],
      'indent': [ 2, 2 ],
      'react/jsx-indent-props': [ 2, 2 ],
      'react/jsx-filename-extension': [ 2, { extensions: [ '.js', '.jsx', '.tsx' ] } ],
      'import/no-unresolved': 'off',
      'max-len': [ 'error', { ignoreComments: true, code: 100 } ],

      '@stylistic/js/array-bracket-spacing': [ 'error', 'always' ],
      '@stylistic/js/object-curly-spacing': [ 'error', 'always' ],
      '@stylistic/js/no-trailing-spaces': [ 'error', { 'skipBlankLines': true } ],
      '@stylistic/js/no-multi-spaces': 'error',
      '@stylistic/js/jsx-quotes': [ 'error', 'prefer-single' ],
      '@stylistic/js/quotes': [ 'error', 'single' ],
      '@stylistic/js/no-multiple-empty-lines': [ 'error', { 'max': 2, 'maxEOF': 0 } ],
    },
  },
  {
    'settings': {
      'react': {
        'version': 'detect'
      }
    }
  }
];
