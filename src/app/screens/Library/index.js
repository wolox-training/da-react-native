import React from 'react';

import { getBooksList } from '@services/BookService';
import { useRequest } from '@hooks';
import { serializeBooks } from '@utils/serializers';

import Library from './layout';

function LibraryContainer() {
  const { data: response, loading } = useRequest(getBooksList);
  const books = serializeBooks(response?.data) || [];
  return <Library isLoading={loading} books={books} />;
}

export default LibraryContainer;
