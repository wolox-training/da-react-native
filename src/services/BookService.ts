import api from '@config/api';
import { Book } from '@interfaces/book';

export const getBooksList = () => api.get<Book[]>('/books');

export const getBook = ({ id }: { id: number }) => api.get<Book>(`/books/${id}`);
