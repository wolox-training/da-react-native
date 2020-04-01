/* eslint-disable camelcase */
import { Serializer } from 'cerealizr';

import { isNotEmptyObject } from './objects';
import { isNotEmptyArray } from './arrays';

const bookSerializer = new Serializer({
  descriptor: {
    image_url: 'imageUrl'
  },
  mapAllValues: true
});

export const serializeBook = book => isNotEmptyObject(book) && bookSerializer.serialize(book);

export const serializeBooks = books =>
  isNotEmptyArray(books) && books.map(book => bookSerializer.serialize(book));
