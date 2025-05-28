const { program } = require('commander');
const { loadConfig } = require('./utils/config');
const logger = require('./utils/logger');

// Komutları yükle
require('./commands/install');
require('./commands/uninstall');
require('./commands/list');

// Ana program yapılandırması
program
  .name('teat')
  .description('TeaTest - NPM tabanlı paket yöneticisi')
  .version('1.0.0');

// Config yükleme
try {
  const config = loadConfig();
  logger.info(`Config loaded from ${config.filePath}`);
} catch (err) {
  logger.error('Config loading failed:', err.message);
  process.exit(1);
}

program.parse(process.argv);
