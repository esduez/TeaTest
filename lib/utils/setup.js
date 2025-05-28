#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 1. Tea CLI kontrolü ve PATH ayarı
try {
  execSync('export PATH="$HOME/.tea/tea.xyz/v*/bin:$PATH"', { stdio: 'inherit' });
  execSync('which tea || curl -fsS https://tea.xyz/install.sh | sh', { stdio: 'inherit' });
} catch (err) {
  console.error('⚠️ Tea CLI kurulum hatası:', err.message);
}

// 2. Çalıştırma izni ayarı
try {
  const filePath = path.join(__dirname, '../../bin/teat');
  fs.chmodSync(filePath, 0o755); // rwxr-xr-x
  console.log('✅ bin/teat çalıştırma izni ayarlandı');
} catch (err) {
  console.error('❌ Çalıştırma izni hatası:', err.message);
  process.exit(1);
}
