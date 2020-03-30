/* eslint-disable camelcase */
import { Serializer } from 'cerealizr';

const bookSerializer = new Serializer({
  descriptor: {
    image_url: 'imageUrl'
  },
  mapAllValues: true
});

export const serializeBook = book => book && bookSerializer.serialize(book);

export const serializeBooks = books => !!books?.length && books.map(book => bookSerializer.serialize(book));
