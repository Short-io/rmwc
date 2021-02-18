const fs = require('fs-extra');
const childProcess = require('child_process');

fs.readdir('react-versions', function(err, files) {
  const reactVersions = files.filter(f => f.startsWith('react-'));

  reactVersions.forEach((reactVersion, index, arr) => {
    const versionNum = reactVersion.split('-')[1];
    const isLastRun = index === arr.length - 1;
    console.log('Running tests for', versionNum);
    childProcess.execSync(
      //prettier-ignore
      `react-app-rewired test --maxWorkers=2 --env=jsdom ${isLastRun ? '--coverage' : ''}`,
      { stdio: [0, 1, 2], env: { REACT_TEST_VERSION: String(versionNum), CI: "true" } }
    );
  });
});
