import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useHeaderHeight } from '@react-navigation/stack';

import withLoader from '@components/Loader';
import COLORS from '@constants/colors';
import { DEFAULT_BOOK } from '@constants/book';

import styles from './styles';

interface Props {
  title: string;
  author: string;
  year: string;
  genre: string;
  image: { url: string };
}

function BookDetail({ title, author, year, genre, image: { url } }: Props) {
  const headerHeight = useHeaderHeight();
  const padding = styles.bookDetail.paddingTop;
  return (
    <View style={{ ...styles.bookDetail, paddingTop: headerHeight + padding }}>
      <View style={styles.bookContainer}>
        <View style={styles.bookInfoContainer}>
          <Image style={styles.bookCover} source={{ uri: url || DEFAULT_BOOK.image.url }} />
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
            colors={[COLORS.CERULEAN, COLORS.JAVA, COLORS.SCOOTER]}
            style={styles.buttonReturn}>
            <Text style={styles.buttonReturnTitle}>Rent</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default withLoader({ bgColor: COLORS.POLAR })(BookDetail);
