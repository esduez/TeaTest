#!/usr/bin/env node
import './utils/setup.js';
import { program } from 'commander';
import { loadConfig } from './utils/config.js';
import { verifyProject } from './utils/tea.js';

// ... diğer importlar ...

const config = loadConfig();

// Tea.xyz doğrulama
if (!await verifyProject(config.ovner)) {
  console.error('Hata: Proje tea.xyz ile doğrulanamadı');
  process.exit(1);
}

// ... mevcut kodlar ...
