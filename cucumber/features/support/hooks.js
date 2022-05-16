import {Before, After} from '@cucumber/cucumber';
import detox from 'detox';

Before({timeout: 500 * 1000}, async () => {
  await detox.init('ios');
  // eslint-disable-next-line no-undef
  await device.launchApp();
  // eslint-disable-next-line no-undef
  await device.reloadReactNative();
});
After({timeout: 500 * 1000}, async () => {
  await detox.cleanup();
});
