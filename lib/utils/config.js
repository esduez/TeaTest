const fs = require('fs-extra');
const path = require('path');
const yaml = require('yaml');

const CONFIG_FILE = 'tea.yml';

function loadConfig() {
  const filePath = path.join(process.cwd(), CONFIG_FILE);
  
  if (!fs.existsSync(filePath)) {
    throw new Error(`Config file ${CONFIG_FILE} not found`);
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const config = yaml.parse(fileContent);

  // Tea.xyz için gerekli alanları kontrol et
  if (!config.ovner || !config.ovner.startsWith('0x')) {
    throw new Error('Geçersiz ovner adresi (0x... formatında olmalı)');
  }

  return {
    ...config,
    filePath
  };
}

module.exports = {
  loadConfig
};
