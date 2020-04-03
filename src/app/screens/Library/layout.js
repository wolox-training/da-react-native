import React from 'react';
import { array } from 'prop-types';
import { FlatList } from 'react-native';
import { useHeaderHeight } from '@react-navigation/stack';

import withLoader from '@components/Loader';
import { keyExtractor } from '@utils/renders';
import { POLAR } from '@constants/colors';

import { renderListItem } from './utils';
import styles from './styles';

function Library({ books }) {
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

Library.propTypes = {
  books: array
};

export default withLoader({ bgColor: POLAR })(Library);
