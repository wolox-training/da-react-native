import withCustomHeader from '@components/Header';

export const APP_OPTIONS = {
  header: withCustomHeader({ hasLogoutBtn: true }),
  headerMode: 'float',
  headerTransparent: true,
  headerStyle: { height: 114 }
};

export const LOGIN_OPTIONS = {
  headerShown: false
};