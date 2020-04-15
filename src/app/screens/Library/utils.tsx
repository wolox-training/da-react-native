import React from 'react';

import { Book as BookType } from '@interfaces/book';

import Book from './components/Book';

interface ItemProps {
  item: BookType;
}

export const renderListItem = ({ item }: ItemProps) => <Book {...item} />;
