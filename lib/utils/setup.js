#!/usr/bin/env node
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 1. Tea CLI zorunlu kurulum
try {
  console.log('🔧 Tea CLI kontrol ediliyor...');
  execSync('export PATH="$HOME/.tea/tea.xyz/v*/bin:$PATH"', { stdio: 'inherit' });
  execSync('tea -v || sh -c "$(curl -fsSL https://tea.xyz/install.sh)"', { stdio: 'inherit' });
} catch (err) {
  console.error('❌ CRITICAL: Tea CLI kurulamadı:', err);
  process.exit(1);
}

// 2. Binary izinleri
try {
  const filePath = path.join(__dirname, '../../bin/teat');
  fs.chmodSync(filePath, 0o755);
  console.log('✅ bin/teat çalıştırma izni ayarlandı');
} catch (err) {
  console.error('❌ Çalıştırma izni hatası:', err);
  process.exit(1);
}
