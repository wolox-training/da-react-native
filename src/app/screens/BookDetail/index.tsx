import React from 'react';

import { useRequest } from '@hooks/index';
import { getBook } from '@services/BookService';
import { Book } from '@interfaces/book';
import { DEFAULT_BOOK } from '@constants/book';

import BookDetail from './layout';

interface Props {
  route: { params: { id: number } };
}

interface Response {
  data: Book;
}

function BookDetailContainer({ route }: Props) {
  const { id } = route.params;
  const { data: response, loading } = useRequest<Response>(getBook, { id });
  const { image, title, author, year, genre } = response?.data || DEFAULT_BOOK;
  return (
    <BookDetail image={image} title={title} author={author} year={year} genre={genre} isLoading={loading} />
  );
}

export default BookDetailContainer;
