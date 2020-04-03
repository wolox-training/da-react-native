import { localApi } from '@config/api';

export const getBooksList = () => localApi.get('/books');

export const getBook = id => localApi.get('/books', id);
