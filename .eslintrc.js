module.exports = {
  extends: ["react-app", "react-app/jest"],
  rules: {
    'react/button-has-type': 0,
    'react/destructuring-assignment': 0,
    'react/forbid-prop-types': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': 0,
    'react/jsx-no-bind': [0],
    'react/jsx-one-expression-per-line': 0,
    'react/prefer-stateless-function': 0,
    'react/no-danger': 0,

    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/no-dynamic-require': 0,
    'import/prefer-default-export': 0,

    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/no-autofocus': 0,
    'jsx-a11y/href-no-hash': 0,
    'jsx-a11y/no-static-element-interactions': 0,

    'no-unused-expressions': 0,
    'no-useless-escape': 0,
    'no-underscore-dangle': 0,
    'no-mixed-operators': 0,
    'no-bitwise': 0,
    'no-prototype-builtins': 0,
    'no-path-concat': 0,
    'no-nested-ternary': 0,
    'no-sequences': 0,
    'no-unneeded-ternary': 0,
    'no-confusing-arrow': ['error', { allowParens: true }],
    'no-plusplus': 0,
    'no-constant-condition': ['error', { checkLoops: false }],

    'global-require': 0,
    'arrow-parens': 0,
    'operator-assignment': 0,
    indent: [2, 2, { SwitchCase: 1, flatTernaryExpressions: true }],
  }
};
