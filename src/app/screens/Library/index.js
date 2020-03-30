import React from 'react';

import { View } from 'react-native';

import Book from '@components/Book';
import cover from '@assets/img_book1.png';

function Library() {
  return (
    <View>
      <Book cover={cover} title="A little bird Told Me" author="Timothy Cross" />
    </View>
  );
}

export default Library;
