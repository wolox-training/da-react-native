import React from 'react';
import { shape, number } from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import { useHeaderHeight } from '@react-navigation/stack';

import { View, Text, TouchableHighlight, Image } from 'react-native';
import { useRequest } from '@hooks';
import { serializeBook } from '@utils/serializers';
import { getBook } from '@services/BookService';
import { DEFAULT_BOOK } from '@constants/book';
import { CERULEAN, JAVA, SCOOTER, POLAR } from '@constants/colors';
import Loader from '@components/Loader';

import styles from './styles';

function BookDetail({ route }) {
  const { id } = route.params;
  const { data: response, loading } = useRequest(getBook, { id });
  const { imageUrl, title, author, year, genre } = serializeBook(response?.data?.[0]) || DEFAULT_BOOK;
  const headerHeight = useHeaderHeight();
  const padding = styles.bookDetail.paddingTop;
  return loading ? (
    <Loader bgColor={POLAR} />
  ) : (
    <View style={{ ...styles.bookDetail, paddingTop: headerHeight + padding }}>
      <View style={styles.bookContainer}>
        <View style={styles.bookInfoContainer}>
          <Image style={styles.bookCover} source={{ uri: imageUrl || DEFAULT_BOOK.imageUrl }} />
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
        <TouchableHighlight>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={[CERULEAN, JAVA, SCOOTER]}
            style={styles.buttonReturn}>
            <Text style={styles.buttonReturnTitle}>Rent</Text>
          </LinearGradient>
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
