import { StyleSheet, Platform } from 'react-native';

import COLORS from '@constants/colors';

type OS = 'ios' | 'android';

const system = Platform.OS as OS;

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
} as const;

export const styles = StyleSheet.create({
  headerBg: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    position: 'relative'
  },
  headerTitle: {
    ...OS_STYLES.headerTitle[system],
    color: COLORS.WHITE,
    fontSize: 16,
    fontWeight: '700'
  },
  headerButton: {
    position: 'relative',
    zIndex: 5
  }
});

export default styles;
