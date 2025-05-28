const logger = require('./logger');

function validateConfig(config) {
  if (!config.ovner || !config.ovner.match(/^0x[a-fA-F0-9]{40}$/)) {
    logger.error('HATA: tea.yml\'de geçerli bir Ethereum adresi (0x...) yok!');
    process.exit(1);
  }
}

module.exports = validateConfig;
