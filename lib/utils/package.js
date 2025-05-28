const axios = require('axios');
const logger = require('./logger');

async function getPackageInfo(packageName, version = 'latest') {
  try {
    const response = await axios.get(`https://registry.npmjs.org/${packageName}`);
    const packageData = response.data;
    
    if (version === 'latest') {
      version = packageData['dist-tags'].latest;
    }

    return {
      name: packageName,
      version,
      description: packageData.description,
      dependencies: packageData.versions[version].dependencies || {}
    };
  } catch (error) {
    logger.error(`Failed to fetch package ${packageName}: ${error.message}`);
    return null;
  }
}

module.exports = {
  getPackageInfo
};
