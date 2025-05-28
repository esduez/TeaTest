const chalk = require('chalk');

const logger = {
  info: (message) => console.log(chalk.blue(`[INFO] ${message}`)),
  success: (message) => console.log(chalk.green(`[SUCCESS] ${message}`)),
  warn: (message) => console.log(chalk.yellow(`[WARN] ${message}`)),
  error: (message) => console.log(chalk.red(`[ERROR] ${message}`))
};

module.exports = logger;
