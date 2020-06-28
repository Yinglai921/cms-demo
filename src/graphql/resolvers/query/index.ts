// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.

const products = [
  {
    id: '123',
    name: 'Harry Potter and the Chamber of Secrets',
    title: 'J.K. Rowling',
    body: 'body1',
  },
  {
    id: '456',
    name: 'Jurassic Park',
    title: 'Michael Crichton',
    body: 'body2',
  },
];

export const Query = {
  products: () => products,
};
