import React from 'react';

import { View, Text, Image } from 'react-native';

import defaultCover from '@assets/img_book1.png';

import styles from './styles';

export const renderListItem = ({ item: { title, author, image_url: cover } }) => (
  <View style={styles.bookContainer}>
    <Image style={styles.bookCover} source={cover ? { uri: cover } : defaultCover} />
    <View style={styles.bookInfo}>
      <Text style={styles.bookTitle}>{title}</Text>
      <Text style={styles.bookAuthor}>{author}</Text>
    </View>
  </View>
);
