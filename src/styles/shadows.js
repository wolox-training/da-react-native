import { StyleSheet } from 'react-native';

import { BLACK } from '@constants/colors';

export const BOX_SHADOW = StyleSheet.create({
  type1: {
    shadowColor: BLACK,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.1,
    shadowRadius: 1
  }
});
