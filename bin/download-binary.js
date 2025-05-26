#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const tar = require('tar');
const os = require('os');

async function downloadBinary() {
  const version = require('../package.json').version;
  const platform = os.platform() === 'win32' ? 'windows' : os.platform();
  const binaryName = `teatest-${platform}-amd64${platform === 'windows' ? '.exe' : ''}`;
  const tarUrl = `https://github.com/esduez/TeaTest/releases/download/v${version}/teatest-${platform}.tar.gz`;
  const binDir = path.join(__dirname, '..', 'bin');

  if (!fs.existsSync(binDir)) {
    fs.mkdirSync(binDir, { recursive: true });
  }

  console.log(`📦 Downloading TeaTest binary (v${version}) for ${platform}...`);
  
  try {
    const response = await axios.get(tarUrl, { responseType: 'stream' });
    await new Promise((resolve, reject) => {
      response.data
        .pipe(tar.x({ C: binDir }))
        .on('finish', resolve)
        .on('error', reject);
    });

    // İzinleri ayarla
    fs.chmodSync(path.join(binDir, binaryName), 0o755);
    console.log('✅ Binary downloaded successfully');
  } catch (error) {
    console.error('❌ Download failed:', error.message);
    process.exit(1);
  }
}

downloadBinary();
