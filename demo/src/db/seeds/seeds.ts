/* tslint:disable */

/**
 * This file reads the seeds.json in the root of the project and uses that to seed
 * the database.
 */

import Knex = require('knex');
const seedJson = require('../../../seeds.json');

export const seed = async (knex: Knex) => {
  return knex.transaction(async trx => {
    const seed = seedJson as any;
    const keys = Object.keys(seed);
    for (let i = 0; i <= keys.length; i++) {
      await trx(keys[i]).insert(seed[keys[i]]);
    }
    return trx.commit();
  });
};
