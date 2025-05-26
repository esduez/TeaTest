#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');
const axios = require('axios');
const tar = require('tar');

// Platform detection
const platformMap = {
  win32: 'windows',
  darwin: 'macos',
  linux: 'linux'
};
const platform = platformMap[os.platform()] || os.platform();
const binaryName = `teatest-${platform}${platform === 'windows' ? '.exe' : ''}`;
const binDir = path.join(__dirname, '..', 'bin');

async function downloadBinary() {
  try {
    const version = require('../package.json').version;
    const tarUrl = `https://github.com/esduez/TeaTest/releases/download/v${version}/teatest-${platform}.tar.gz`;

    console.log(`📦 Downloading TeaTest v${version} for ${platform}...`);

    // Create bin directory if not exists
    if (!fs.existsSync(binDir)) {
      fs.mkdirSync(binDir, { recursive: true });
    }

    // Download and extract
    const response = await axios.get(tarUrl, { responseType: 'stream' });
    await new Promise((resolve, reject) => {
      response.data
        .pipe(tar.x({ C: binDir }))
        .on('finish', resolve)
        .on('error', reject);
    });

    // Verify binary exists
    const binaryPath = path.join(binDir, binaryName);
    if (!fs.existsSync(binaryPath)) {
      throw new Error(`Downloaded binary not found at ${binaryPath}`);
    }

    // Set executable permissions
    fs.chmodSync(binaryPath, 0o755);
    console.log('✅ Binary ready at:', binaryPath);

  } catch (error) {
    console.error('❌ Download failed:', error.message);
    process.exit(1);
  }
}

// Run with error handling
downloadBinary().catch(console.error);
