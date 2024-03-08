export default {
  '*': 'npm run format',
  '*.{ts,vue}': [() => 'npm run type-check', 'npm run lint:code'],
  '*{css,vue}': 'npm run lint:style',
};
