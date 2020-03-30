import React from 'react';
import { shape, number } from 'prop-types';

import { View, Text, TouchableHighlight, Image } from 'react-native';
import useRequest from '@hooks/useRequest';
import { serializeBook } from '@utils/serializers';
import { getBook } from '@services/BookService';
import { DEFAULT_BOOK } from '@constants/book';
import defaultCover from '@assets/img_book1.png';

import styles from './styles';

function BookDetail({ route }) {
  const { id } = route.params;
  const [data] = useRequest(getBook, { id });
  const { imgUrl, title, author, year, genre } = serializeBook(data?.[0] || DEFAULT_BOOK);
  return (
    <View style={styles.bookDetail}>
      <View style={styles.bookContainer}>
        <View style={styles.bookInfoContainer}>
          <Image style={styles.bookCover} source={imgUrl ? imgUrl : defaultCover} />
          <View style={styles.bookInfo}>
            <Text style={styles.bookTitle} numberOfLines={1}>
              {title}
            </Text>
            <Text style={styles.bookProp}>{author}</Text>
            <Text style={styles.bookProp}>{year}</Text>
            <Text style={styles.bookProp}>{genre}</Text>
          </View>
        </View>
        <TouchableHighlight style={styles.buttonComments}>
          <Text style={styles.buttonCommentsTitle}>Add a comment</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.buttonReturn}>
          <Text style={styles.buttonReturnTitle}>Return a book</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

BookDetail.propTypes = {
  route: shape({
    params: shape({
      id: number
    })
  })
};

export default BookDetail;
