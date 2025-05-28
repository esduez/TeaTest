
#!/usr/bin/env node
import './utils/setup.js';
import { program } from 'commander';
import { loadConfig } from './utils/config.js';
import { verifyProject } from './utils/tea.js';
import logger from './utils/logger.js';

// Komutlar
import './commands/install.js';
import './commands/uninstall.js';
import './commands/list.js';

// Başlangıç
(async () => {
  try {
    const config = loadConfig();
    
    if (!await verifyProject(config.ovner)) {
      logger.error('Tea.xyz doğrulama başarısız!');
      process.exit(1);
    }

    program
      .name('teat')
      .description('TeaTest - Tea.xyz uyumlu paket yöneticisi')
      .version('1.0.2');

    program.parse(process.argv);

  } catch (err) {
    logger.error('Başlatma hatası:', err.message);
    process.exit(1);
  }
})();
