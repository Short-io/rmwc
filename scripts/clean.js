process.env.NODE_ENV = process.env.NODE_ENV || 'production';

const glob = require('glob');
const rimraf = require('rimraf');

rimraf.sync('./build');

const removeFileOrDir = f => rimraf.sync(f);

glob('./src/*/dist/', { ignore: 'node_modules' }, function(er, files) {
  files.forEach(removeFileOrDir);
});

glob('./src/*/styles.js', { ignore: 'node_modules' }, function(er, files) {
  files.forEach(removeFileOrDir);
});

glob('./src/*/styles.d.ts', { ignore: 'node_modules' }, function(er, files) {
  files.forEach(removeFileOrDir);
});

glob('./src/*/next/', { ignore: 'node_modules' }, function(er, files) {
  files.forEach(removeFileOrDir);
});
