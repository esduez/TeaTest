const axios = require('axios');
const fs = require('fs');
const tar = require('tar');
const path = require('path');

const BINARY_URL = 'https://github.com/esduez/TeaTest/releases/latest/download/teatest-${process.platform}.tar.gz';

async function downloadBinary() {
  const binDir = path.join(__dirname, '..', 'bin');
  if (!fs.existsSync(binDir)) fs.mkdirSync(binDir);
  
  console.log('📦 Downloading TeaTest binary...');
  const response = await axios.get(BINARY_URL.replace('${process.platform}', process.platform), { 
    responseType: 'stream' 
  });
  
  response.data.pipe(
    tar.x({
      C: binDir,
      strip: 1
    })
  );
}

downloadBinary().catch(console.error);
