import React from 'react';

import { FlatList } from 'react-native';

import { getBooksList } from '@services/BookService';
import useRequest from '@hooks/useRequest';
import { keyExtractor } from '@utils/renders';

import styles from './styles';
import { renderListItem } from './utils';

function Library() {
  const [data] = useRequest(getBooksList);
  return (
    <FlatList style={styles.container} data={data} renderItem={renderListItem} keyExtractor={keyExtractor} />
  );
}

export default Library;
