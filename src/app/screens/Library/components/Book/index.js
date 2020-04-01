import React from 'react';
import { string, number } from 'prop-types';

import { View, Image, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import * as Routes from '@constants/routes';
import { DEFAULT_BOOK } from '@constants/book';

import styles from './styles';

function Book({ id, title, author, imageUrl }) {
  const navigation = useNavigation();
  const handleClick = () => navigation.navigate(Routes.BOOK_DETAIL.NAME, { id });
  return (
    <TouchableOpacity style={styles.bookContainer} onPress={handleClick}>
      <Image style={styles.bookCover} source={{ uri: imageUrl || DEFAULT_BOOK.imageUrl }} />
      <View style={styles.bookInfo}>
        <Text style={styles.bookTitle} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.bookAuthor}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
}

Book.propTypes = {
  id: number,
  title: string,
  author: string,
  imageUrl: string
};

export default Book;
