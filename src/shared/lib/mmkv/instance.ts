import * as Device from 'expo-device';
import { MMKV, Mode } from 'react-native-mmkv';

export const mmkv = new MMKV({
  id: `${Device.manufacturer}-${Device.modelName}-storage`,
  encryptionKey: 'hunter2',
  mode: Mode.MULTI_PROCESS,
});

console.log('mmkv', mmkv);
