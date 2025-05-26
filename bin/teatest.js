#!/usr/bin/env node
const { execSync } = require('child_process');
const path = require('path');

const platform = process.platform;
const binaryPath = path.join(__dirname, '..', 'bin', `teatest-${platform}`);

try {
  execSync(binaryPath + ' ' + process.argv.slice(2).join(' '), { stdio: 'inherit' });
} catch (error) {
  process.exit(1);
}
