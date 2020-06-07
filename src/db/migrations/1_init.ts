import Knex = require('knex');

export const up = async (knex: Knex) => {
  await knex.schema.createTableIfNotExists('form', t => {
    t.uuid('id');
    t.text('name').nullable();
    t.text('content').nullable();
  });
};

export const down = async (knex: Knex) => {
  await knex.schema.dropTableIfExists('form');
};
