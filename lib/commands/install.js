const { program } = require('commander');
const { getPackageInfo } = require('../utils/package');
const logger = require('../utils/logger');
const { loadConfig } = require('../utils/config');

program
  .command('install [packages...]')
  .description('Install packages')
  .action(async (packages) => {
    try {
      const config = loadConfig();
      
      // Yüklenecek paketleri birleştir (config + CLI argümanları)
      const packagesToInstall = [
        ...(config.packages || []),
        ...packages.map(pkg => ({ name: pkg, version: 'latest' }))
      ];

      logger.info(`Installing ${packagesToInstall.length} packages...`);

      for (const pkg of packagesToInstall) {
        const info = await getPackageInfo(pkg.name, pkg.version);
        if (info) {
          logger.success(`Fetched package: ${info.name}@${info.version}`);
          // Burada gerçek kurulum işlemi yapılacak
          // Örneğin: npm install paket@versiyon
        }
      }

      logger.success('Installation completed!');
    } catch (error) {
      logger.error(`Installation failed: ${error.message}`);
      process.exit(1);
    }
  });
