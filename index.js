module.exports = {
  defaultSeverity: 'warning',
  extends: ['stylelint-config-standard', 'stylelint-config-rational-order'],
  plugins: ['stylelint-order'],
  rules: {
    'at-rule-no-unknown': [true, { ignoreAtRules: ['plugin'] }],
    // 允许嵌套的深度最多 5 层
    'max-nesting-depth': 8,
    'declaration-bang-space-before': null,
    'comment-empty-line-before': null,
    'declaration-empty-line-before': null,
    'function-comma-newline-after': null,
    'function-name-case': null,
    'function-parentheses-newline-inside': null,
    'function-max-empty-lines': null,
    'function-whitespace-after': null,
    indentation: null,
    'number-leading-zero': null,
    'number-no-trailing-zeros': null,
    'rule-empty-line-before': null,
    'unit-no-unknown': null,
    'value-list-max-empty-lines': null,
    'font-family-no-missing-generic-family-keyword': null,
    'no-descending-specificity': null,
    'rule-empty-line-before': ['always', { except: ['after-single-line-comment', 'first-nested'] }],
    'no-descending-specificity': null,
    'selector-combinator-space-after': null,
    'selector-list-comma-newline-after': null,
    'selector-pseudo-element-colon-notation': null,
    'selector-pseudo-element-no-unknown': [ true, { ignorePseudoElements: ['v-deep'] } ],
    'selector-pseudo-class-no-unknown': [ true, { ignorePseudoClasses: ['deep'] } ]
  }
}
