const { execSync } = require('child_process');

module.exports = () => {
  const changed = execSync('node_modules/.bin/lerna list')
    .toString()
    .split('\n')
    .map(v => v.replace('@srmwc/', ''))
    .filter(Boolean);
  return changed;
};
