module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    project: 'tsconfig.json',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: false,
    },
    warnOnUnsupportedTypeScriptVersion: false,
  },
  plugins: ['@typescript-eslint', 'prettier', 'only-warn'],
  ignorePatterns: ['@generated/**', '*.config.js', '.*rc.js'],
  rules: {
    // core
    'consistent-return': [1, { treatUndefinedAsUnspecified: true }],
    quotes: [1, 'single', { allowTemplateLiterals: true, avoidEscape: true }],
    semi: [1, 'always'],
    'max-lines': [1, { max: 300 }],
    'max-params': [1, { max: 3 }],
    'no-unneeded-ternary': [1],
    // typescript-eslint
    '@typescript-eslint/no-floating-promises': 1,
    '@typescript-eslint/no-unnecessary-condition': 1,
  },
  overrides: [
    {
      files: ['*.spec.ts', '**/testing/**/*.ts'],
      rules: {
        'consistent-return': 0,
        'max-lines': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-floating-promises': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        '@typescript-eslint/camelcase': 0,
        'import/max-dependencies': 0,
      },
    },
  ],
};
