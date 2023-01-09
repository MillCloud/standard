module.exports = {
  '*.md': 'markdownlint --fix',
  '*.{js,cjs,mjs,jsx,ts,cts,mts,tsx,vue}':
    'eslint --fix --cache --no-error-on-unmatched-pattern --ignore-path=.gitignore',
};
