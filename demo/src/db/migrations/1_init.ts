import Knex = require('knex');

export const up = async (knex: Knex) => {
  await knex.schema.createTable('product', t => {
    t.string('id')
      .notNullable()
      .unique();
    t.text('name').nullable();
    t.text('title').nullable();
    t.jsonb('content').nullable();
    t.string('provider').nullable();
  });
};

export const down = async (knex: Knex) => {
  await knex.schema.dropTableIfExists('product');
};
