import React from 'react';
import { FlatList } from 'react-native';
import { useHeaderHeight } from '@react-navigation/stack';
import Loader from '@components/Loader';

import { getBooksList } from '@services/BookService';
import { useRequest } from '@hooks';
import { keyExtractor } from '@utils/renders';
import { serializeBooks } from '@utils/serializers';
import { POLAR } from '@constants/colors';

import styles from './styles';
import { renderListItem } from './utils';

function Library() {
  const { data: response, loading } = useRequest(getBooksList);
  const books = serializeBooks(response?.data);
  const headerHeight = useHeaderHeight();
  const padding = styles.bookList.paddingTop;
  return loading ? (
    <Loader bgColor={POLAR} />
  ) : (
    <FlatList
      style={styles.bookList}
      data={books}
      renderItem={renderListItem}
      keyExtractor={keyExtractor}
      contentContainerStyle={{ ...styles.bookListContainer, paddingTop: headerHeight + padding }}
    />
  );
}

export default Library;
