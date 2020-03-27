import React from 'react';
import { string } from 'prop-types';
import { View, Text, Image } from 'react-native';

import defaultCover from '@assets/img_book1.png';

import styles from './styles';

function Book({ title, author, cover }) {
  return (
    <View style={styles.bookContainer}>
      <Image style={styles.bookCover} source={cover ? { uri: cover } : defaultCover} />
      <View style={styles.bookInfo}>
        <Text style={styles.bookTitle}>{title}</Text>
        <Text style={styles.bookAuthor}>{author}</Text>
      </View>
    </View>
  );
}

Book.propType = {
  author: string,
  title: string,
  cover: string
};

Book.defaultProps = {
  cover: defaultCover
};

export default Book;
