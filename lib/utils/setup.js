import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

try {
  const filePath = path.join(__dirname, '../../bin/teat');
  fs.chmodSync(filePath, 0o755);
  console.log('✓ Çalıştırma izni ayarlandı');
} catch (err) {
  console.error('✗ Hata:', err.message);
  process.exit(1);
}
