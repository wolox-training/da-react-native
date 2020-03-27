import React from 'react';
import { string, number } from 'prop-types';
import { View, Text, Image } from 'react-native';

import styles from './styles';

function Book({ title, author, cover }) {
  return (
    <View style={styles.bookContainer}>
      <Image style={styles.bookCover} source={cover} />
      <View style={styles.bookInfo}>
        <Text style={styles.bookTitle}>{title}</Text>
        <Text style={styles.bookAuthor}>{author}</Text>
      </View>
    </View>
  );
}

Book.propType = {
  bookAuthor: string,
  bookTitle: string,
  cover: number
};

export default Book;
