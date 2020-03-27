import React from 'react';

import { ScrollView } from 'react-native';

import Book from '@components/Book';
import { getBooksList } from '@services/BookService';
import useRequest from '@hooks/useRequest';

import styles from './styles';

function Library() {
  const [data] = useRequest(getBooksList);
  return (
    <ScrollView style={styles.container}>
      {data?.map(({ id, title, author, image_url: img }) => (
        <Book key={id} cover={img} title={title} author={author} />
      ))}
    </ScrollView>
  );
}

export default Library;
