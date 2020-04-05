import { StyleSheet } from 'react-native';

import { SCORPION, WHITE, GRAY } from '@constants/colors';

import { BOX_SHADOW } from '@styles/shadows';

export default StyleSheet.create({
  bookContainer: {
    ...BOX_SHADOW.type1,
    backgroundColor: WHITE,
    borderRadius: 5,
    flexDirection: 'row',
    marginBottom: 10,
    paddingHorizontal: 35,
    paddingVertical: 20
  },
  bookCover: {
    backgroundColor: GRAY,
    height: 75,
    marginRight: 20,
    width: 50
  },
  bookInfo: {
    flex: 1,
    flexDirection: 'column'
  },
  bookTitle: {
    fontWeight: 'bold',
    marginBottom: 5
  },
  bookAuthor: {
    color: SCORPION
  }
});
