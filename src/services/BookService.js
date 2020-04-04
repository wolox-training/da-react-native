import api from '@config/api';

export const getBooksList = () => api.get('/books');

export const getBook = ({ id }) => api.get(`/books/${id}`);
