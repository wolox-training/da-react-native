export interface Book {
  id: number;
  author: string;
  title: string;
  image: { url: string };
  year: string;
  genre: string;
  // eslint-disable-next-line camelcase
  created_at: string;
  // eslint-disable-next-line camelcase
  updated_at: string;
  rents: [];
}
