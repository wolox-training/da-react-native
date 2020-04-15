import React from 'react';
import { FlatList } from 'react-native';
import { useHeaderHeight } from '@react-navigation/stack';

import withLoader from '@components/Loader';
import { keyExtractor } from '@utils/renders';
import COLORS from '@constants/colors';
import { Book } from '@interfaces/book';

import { renderListItem } from './utils';
import styles from './styles';

interface Props {
  books: Book[];
}

function Library({ books }: Props) {
  const headerHeight = useHeaderHeight();
  const padding = styles.bookList.paddingTop;

  return (
    <FlatList
      style={styles.bookList}
      data={books}
      renderItem={renderListItem}
      keyExtractor={keyExtractor}
      contentContainerStyle={{ ...styles.bookListContainer, paddingTop: headerHeight + padding }}
    />
  );
}

export default withLoader({ bgColor: COLORS.POLAR })(Library);
