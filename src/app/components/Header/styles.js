import { StyleSheet, Platform } from 'react-native';

import { WHITE } from '@constants/colors';

const OS_STYLES = {
  headerTitle: {
    ios: {
      left: 0,
      position: 'absolute',
      textAlign: 'center',
      right: 0
    },
    android: {
      textAlign: 'left'
    }
  }
};

export const styles = StyleSheet.create({
  headerBg: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    position: 'relative'
  },
  headerBackBtn: {
    height: 25,
    width: 25
  },
  headerTitle: {
    ...OS_STYLES[Platform.OS],
    color: WHITE,
    fontSize: 16,
    fontWeight: '700'
  }
});

export default styles;
