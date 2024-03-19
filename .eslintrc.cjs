/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  ignorePatterns: ['node_modules/', 'dist/',  './src/components/ui'],
  overrides: [
    {
      files: ['./src/components/ui'],  // Change this to default.vue path
      rules: {
        'vue/multi-word-component-names': 'off',
      }
    }
  ]

}
