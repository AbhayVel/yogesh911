module.exports = {
  '*.{css,html,js,jsx,json,less,md,scss,ts,msx,yml}': 'prettier --debug-check -c',
  '*.{css,less,scss}': 'stylelint',
  '*.{js,jsx,ts,msx}': [
    () => 'eslint', // https://github.com/okonet/lint-staged/issues/825#issuecomment-620018284
    'cross-env CI=true react-scripts test --bail --findRelatedTests --passWithNoTests',
  ],
};
