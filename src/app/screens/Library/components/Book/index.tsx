import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import * as Routes from '@constants/routes';
import { DEFAULT_BOOK } from '@constants/book';

import styles from './styles';

interface Props {
  id: number;
  title: string;
  author: string;
  image: { url: string };
}

function Book({ id, title, author, image: { url } }: Props) {
  const navigation = useNavigation();
  const handleClick = () => navigation.navigate(Routes.BOOK_DETAIL.NAME, { id });

  return (
    <TouchableOpacity style={styles.bookContainer} onPress={handleClick}>
      <Image style={styles.bookCover} source={{ uri: url || DEFAULT_BOOK.image.url }} />
      <View style={styles.bookInfo}>
        <Text style={styles.bookTitle} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.bookAuthor}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Book;
