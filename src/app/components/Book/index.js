import React from 'react';
import { View, Text, Image } from 'react-native';

import BookCover from '@assets/img_book1.png';

import styles from './styles';

function Book() {
  return (
    <View style={styles.bookContainer}>
      <Image style={styles.bookCover} source={BookCover} />
      <View style={styles.bookInfo}>
        <Text style={styles.bookTitle}>A little Bird Told Me</Text>
        <Text style={styles.bookAuthor}>Timothy Cross</Text>
      </View>
    </View>
  );
}

export default Book;
