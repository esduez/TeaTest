const fs = require('fs');
const path = require('path');

const makeExecutable = () => {
  try {
    const filePath = path.join(__dirname, '../../bin/teat');
    fs.chmodSync(filePath, 0o755); // 755 = rwxr-xr-x (executable)
  } catch (err) {
    console.error('Çalıştırma izni ayarlanamadı:', err.message);
  }
};

makeExecutable();
