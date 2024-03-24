export default {
  '*': 'npm run format',
  '*.{ts,tsx,vue}': [() => 'yarn run', 'yarn run lint:code'],
  '*{css,vue}': 'yarn run lint:style',
};
