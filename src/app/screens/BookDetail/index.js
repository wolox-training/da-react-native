import React from 'react';
import { shape, number } from 'prop-types';

import { useRequest } from '@hooks';
import { serializeBook } from '@utils/serializers';
import { getBook } from '@services/BookService';
import { DEFAULT_BOOK } from '@constants/book';

import BookDetail from './layout';

function BookDetailContainer({ route }) {
  const { id } = route.params;
  const { data: response, loading } = useRequest(getBook, { id });
  const { image, title, author, year, genre } = serializeBook(response?.data) || DEFAULT_BOOK;
  return (
    <BookDetail image={image} title={title} author={author} year={year} genre={genre} isLoading={loading} />
  );
}

BookDetailContainer.propTypes = {
  route: shape({
    params: shape({
      id: number
    })
  })
};

export default BookDetailContainer;
