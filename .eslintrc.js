module.exports = {
  extends: ['airbnb-base', 'plugin:prettier/recommended', 'plugin:promise/recommended'],

  plugins: ['prettier', 'promise'],

  env: {
    jest: true,
    browser: true,
    jquery: true,
    node: true,
    es2017: true,
  },
  /**
   * Ignore the MUI gatsby plugin
   */
  ignorePatterns: ['src/frontend/plugins/gatsby-plugin-top-layout/'],

  rules: {
    'prettier/prettier': ['error'],
    /**
     * Disallow the use of console
     * https://eslint.org/docs/rules/no-console
     */
    'no-console': 'off',
    'consistent-return': 'off',
    'no-restricted-syntax': 'off',
    'no-param-reassign': 'off',
    'promise/always-return': 'off',
  },
};
