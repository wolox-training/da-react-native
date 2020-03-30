import api from '@config/api';

export const getBooksList = () => api.get('/books');
