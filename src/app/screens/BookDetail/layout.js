import React from 'react';
import { string } from 'prop-types';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useHeaderHeight } from '@react-navigation/stack';

import withLoader from '@components/Loader';
import { CERULEAN, JAVA, SCOOTER, POLAR } from '@constants/colors';
import { DEFAULT_BOOK } from '@constants/book';

import styles from './styles';

function BookDetail({ title, author, year, genre, imageUrl }) {
  const headerHeight = useHeaderHeight();
  const padding = styles.bookDetail.paddingTop;
  return (
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
        <TouchableOpacity style={styles.buttonComments}>
          <Text style={styles.buttonCommentsTitle}>Add a comment</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={[CERULEAN, JAVA, SCOOTER]}
            style={styles.buttonReturn}>
            <Text style={styles.buttonReturnTitle}>Rent</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

BookDetail.propTypes = {
  title: string,
  author: string,
  year: string,
  genre: string,
  imageUrl: string
};

export default withLoader({ bgColor: POLAR })(BookDetail);
