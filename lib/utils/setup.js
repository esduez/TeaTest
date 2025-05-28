#!/usr/bin/env node
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 1. Mutlak yol ile Tea kontrolü
try {
  execSync('/usr/local/tea/tea.xyz/v*/bin/tea --version', { stdio: 'inherit' });
} catch {
  console.log('🔧 Tea CLI bulunamadı, kurulum yapılıyor...');
  execSync('curl -fsSL https://tea.xyz/install.sh | sh -s -- --yes --prefix=/usr/local', { stdio: 'inherit' });
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
