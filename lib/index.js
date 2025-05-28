require('./utils/setup'); // Çalıştırma izni için

const { program } = require('commander');
const { loadConfig } = require('./utils/config');
const validateConfig = require('./utils/validate');
const logger = require('./utils/logger');

// Komutları yükle
require('./commands/install');
require('./commands/uninstall');
require('./commands/list');

// Config yükleme ve doğrulama
try {
  const config = loadConfig();
  validateConfig(config);
  logger.info(`Config loaded from ${config.filePath}`);
} catch (err) {
  logger.error('Config hatası:', err.message);
  process.exit(1);
}

program
  .name('teat')
  .description('TeaTest - Tea.xyz uyumlu paket yöneticisi')
  .version('1.0.0');

program.parse(process.argv);
