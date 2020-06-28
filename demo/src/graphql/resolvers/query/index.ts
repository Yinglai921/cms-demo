// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.

import { select } from '../../../db/queries';

export const Query = {
  products: async () => {
    try {
      const result = await select();
      return result;
    } catch (error) {
      console.log('error', error);
    }
  },
};
