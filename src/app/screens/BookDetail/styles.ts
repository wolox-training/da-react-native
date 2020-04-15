import { StyleSheet } from 'react-native';

import COLORS from '@constants/colors';
import { BOX_SHADOW } from '@styles/shadows';

const COMMON_STYLES = {
  button: {
    alignItems: 'center',
    borderColor: COLORS.CERULEAN,
    borderRadius: 100,
    borderStyle: 'solid',
    borderWidth: 2,
    justifyContent: 'center',
    height: 50,
    width: '100%'
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: '900',
    textTransform: 'uppercase'
  }
} as const;

export const styles = StyleSheet.create({
  bookDetail: {
    backgroundColor: COLORS.POLAR,
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingTop: 20
  },
  bookContainer: {
    ...BOX_SHADOW.type1,
    backgroundColor: COLORS.WHITE,
    borderRadius: 4,
    flexDirection: 'column',
    paddingHorizontal: 30,
    paddingVertical: 20
  },
  bookInfoContainer: {
    flexDirection: 'row',
    marginBottom: 35
  },
  bookInfo: {
    flex: 1,
    flexDirection: 'column'
  },
  bookCover: {
    backgroundColor: COLORS.GRAY,
    height: 105,
    marginRight: 20,
    width: 70
  },
  bookTitle: {
    color: COLORS.TUNDORA,
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 30
  },
  bookProp: {
    color: COLORS.GRAY,
    fontWeight: '600'
  },
  buttonReturn: {
    ...COMMON_STYLES.button,
    backgroundColor: COLORS.CERULEAN,
    borderColor: COLORS.TRANSPARENT
  },
  buttonComments: {
    ...COMMON_STYLES.button,
    backgroundColor: COLORS.WHITE,
    marginBottom: 12
  },
  buttonReturnTitle: {
    ...COMMON_STYLES.buttonTitle,
    color: COLORS.WHITE
  },
  buttonCommentsTitle: {
    ...COMMON_STYLES.buttonTitle,
    color: COLORS.CERULEAN
  }
});

export default styles;
