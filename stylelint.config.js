/** @type {import('stylelint').Config} */
export default {
  extends: [ 'stylelint-config-standard-scss' ],
  'plugins': [
    '@stylistic/stylelint-plugin'
  ],
  'rules': {
    'selector-class-pattern': null,
    'value-keyword-case': null,

    '@stylistic/indentation': [ 4 ],
    '@stylistic/color-hex-case': 'lower',
    
    /*'scss/double-slash-comment-whitespace-inside': 'never',*/
    
    /*'value-keyword-case': [
      'lower', {
        ignoreProperties: [ '/^(b|B)ackground$/', '--font-family-main' ]
      }
    ],*/
  }
};
