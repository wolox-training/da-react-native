import React from 'react';

import { getBooksList } from '@services/BookService';
import { useRequest } from '@hooks/index';
import { Book } from '@interfaces/book';

import Library from './layout';

interface Response {
  data: Book[];
}

function LibraryContainer() {
  const { data: response, loading } = useRequest<Response>(getBooksList);
  console.log(response);
  const books = response?.data || [];
  return <Library isLoading={loading} books={books} />;
}

export default LibraryContainer;
