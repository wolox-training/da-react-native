import Header from '@components/Header';
import { Platform } from 'react-native';

export const HEADER_MODE = {
  ios: 'float',
  android: 'screen'
};

export const APP_OPTIONS = {
  header: Header,
  headerMode: HEADER_MODE[Platform.OS],
  headerTransparent: true,
  headerStyle: { height: 114 }
};

export const LOGIN_OPTIONS = {
  headerShown: false
};
