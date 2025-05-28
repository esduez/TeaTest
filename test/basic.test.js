const { loadConfig } = require('../lib/utils/config');
const { getPackageInfo } = require('../lib/utils/package');

describe('TeaTest Basic Tests', () => {
  test('Config loading', () => {
    const config = loadConfig();
    expect(config).toHaveProperty('ovner');
    expect(config.ovner).toBe('0x4265FCDeE267cE15fC493af9967DD5F05EB1Bd1c');
  });

  test('Package info fetching', async () => {
    const info = await getPackageInfo('lodash');
    expect(info).toHaveProperty('name');
    expect(info).toHaveProperty('version');
  });
});
