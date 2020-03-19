import { StyleSheet } from 'react-native';

import { WHITE, SCORPION } from '@constants/colors';

export default StyleSheet.create({
  bookContainer: {
    backgroundColor: WHITE,
    flexDirection: 'row',
    paddingHorizontal: 35,
    paddingVertical: 20
  },
  bookCover: {
    height: 75,
    marginRight: 20,
    width: 50
  },
  bookInfo: {
    flex: 3,
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
