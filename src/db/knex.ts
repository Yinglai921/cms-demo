import Knex from 'knex';
import knexfile = require('./knexfile');

export const knex = Knex(knexfile);
