const { program } = require('commander');
const { loadConfig } = require('../utils/config');
const logger = require('../utils/logger');

program
  .command('list')
  .description('List installed packages')
  .action(() => {
    try {
      const config = loadConfig();
      
      logger.info('Configured packages:');
      (config.packages || []).forEach(pkg => {
        logger.info(`- ${pkg.name}@${pkg.version}`);
      });
    } catch (error) {
      logger.error(`Failed to list packages: ${error.message}`);
      process.exit(1);
    }
  });
