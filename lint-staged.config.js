export default {
  '*': 'yarn format',
  '*.{ts,tsx,vue}': [() => 'yarn type', 'yarn lint:code'],
  '*{css,vue}': 'yarn lint:style',
};
