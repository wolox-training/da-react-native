import React from 'react';
import { string, number } from 'prop-types';

import { View, Image, Text, TouchableOpacity } from 'react-native';

import defaultCover from '@assets/img_book1.png';
import { useNavigation } from '@react-navigation/native';
import * as Routes from '@constants/routes';

import styles from './styles';

function Book({ id, title, author, imageUrl }) {
  const navigation = useNavigation();
  const handleClick = () => navigation.navigate(Routes.BOOK_DETAIL.NAME, { id });
  return (
    <TouchableOpacity style={styles.bookContainer} onPress={handleClick}>
      <Image style={styles.bookCover} source={imageUrl ? { uri: imageUrl } : defaultCover} />
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
