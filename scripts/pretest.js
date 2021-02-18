const fs = require('fs');
const childProcess = require('child_process');

['17.0.x', '16.14.x', '16.13.x', '16.12.x', '16.11.x'].forEach(version => {
  if (!fs.existsSync(`react-versions/react-${version}`)) {
    childProcess.execSync(
      `npm i react-test-renderer@${version} react-dom@${version} react@${version} --prefix react-versions/react-${version}`,
      { stdio: [0, 1, 2] }
    );
  }
});
