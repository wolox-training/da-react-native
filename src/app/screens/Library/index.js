import React from 'react';
import { FlatList } from 'react-native';

import { getBooksList } from '@services/BookService';
import useRequest from '@hooks/useRequest';
import { keyExtractor } from '@utils/renders';
import { serializeBooks } from '@utils/serializers';

import styles from './styles';
import { renderListItem } from './utils';

function Library() {
  const [data] = useRequest(getBooksList);
  const books = serializeBooks(data);
  return (
    <FlatList style={styles.bookList} data={books} renderItem={renderListItem} keyExtractor={keyExtractor} />
  );
}

export default Library;
