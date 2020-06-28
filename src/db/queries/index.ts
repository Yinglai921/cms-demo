import { knex } from '../knex';

export const select = () => {
  const q = knex
    .select('id', 'name', 'title', 'content', 'provider')
    .from('product');

  return q;
};
