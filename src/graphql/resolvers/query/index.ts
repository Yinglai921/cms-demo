// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.

const forms = [
  {
    name: 'Harry Potter and the Chamber of Secrets',
    content: 'J.K. Rowling',
  },
  {
    name: 'Jurassic Park',
    content: 'Michael Crichton',
  },
];

export const Query = {
  forms: () => forms,
};
