import React from 'react';
import { FlatList } from 'react-native';
import { useHeaderHeight } from '@react-navigation/stack';

import { getBooksList } from '@services/BookService';
import useRequest from '@hooks/useRequest';
import { keyExtractor } from '@utils/renders';
import { serializeBooks } from '@utils/serializers';

import styles from './styles';
import { renderListItem } from './utils';

function Library() {
  const [data] = useRequest(getBooksList);
  const books = serializeBooks(data);
  const headerHeight = useHeaderHeight();
  const padding = styles.bookList.paddingTop;
  return (
    <FlatList
      style={styles.bookList}
      data={books}
      renderItem={renderListItem}
      keyExtractor={keyExtractor}
      contentContainerStyle={{ paddingTop: headerHeight + padding }}
    />
  );
}

export default Library;
