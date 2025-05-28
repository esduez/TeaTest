const { program } = require('commander');
const logger = require('../utils/logger');

program
  .command('uninstall <packages...>')
  .description('Uninstall packages')
  .action((packages) => {
    try {
      logger.info(`Uninstalling ${packages.length} packages...`);
      
      packages.forEach(pkg => {
        logger.success(`Uninstalled: ${pkg}`);
        // Burada gerçek kaldırma işlemi yapılacak
        // Örneğin: npm uninstall paket
      });

      logger.success('Uninstallation completed!');
    } catch (error) {
      logger.error(`Uninstallation failed: ${error.message}`);
      process.exit(1);
    }
  });
