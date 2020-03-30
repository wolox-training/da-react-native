import { StyleSheet } from 'react-native';

import { WHITE, POLAR, GRAY, CERULEAN, TUNDORA } from '@constants/colors';
import { BOX_SHADOW } from '@styles/shadows';

const COMMON_STYLES = {
  button: {
    alignItems: 'center',
    borderColor: CERULEAN,
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
};

export const styles = StyleSheet.create({
  bookDetail: {
    backgroundColor: POLAR,
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 20
  },
  bookContainer: {
    ...BOX_SHADOW.type1,
    backgroundColor: WHITE,
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
    height: 105,
    marginRight: 20,
    width: 70
  },
  bookTitle: {
    color: TUNDORA,
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 30
  },
  bookProp: {
    color: GRAY,
    fontWeight: '600'
  },
  buttonReturn: {
    ...COMMON_STYLES.button,
    backgroundColor: CERULEAN
  },
  buttonComments: {
    ...COMMON_STYLES.button,
    backgroundColor: WHITE,
    marginBottom: 12
  },
  buttonReturnTitle: {
    ...COMMON_STYLES.buttonTitle,
    color: WHITE
  },
  buttonCommentsTitle: {
    ...COMMON_STYLES.buttonTitle,
    color: CERULEAN
  }
});

export default styles;
