import { StyleSheet } from 'react-native';

import { POLAR, SCORPION, BLACK, WHITE } from '@constants/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: POLAR,
    flex: 1,
    paddingHorizontal: 40
  },
  bookContainer: {
    backgroundColor: WHITE,
    borderRadius: 5,
    flexDirection: 'row',
    marginBottom: 10,
    paddingHorizontal: 35,
    paddingVertical: 20,
    shadowColor: BLACK,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.1,
    shadowRadius: 1
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
