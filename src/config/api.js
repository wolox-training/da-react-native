import { create } from 'apisauce';
import Config from 'react-native-config';

export const localApi = create({
  baseURL: Config.LOCAL_API_BASE_URL,
  timeout: 5000
});

export const hostedApi = create({
  baseURL: Config.APP_API_BASE_URL,
  timeout: 5000
});
