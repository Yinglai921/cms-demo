import * as pg from 'pg';

pg.types.setTypeParser(1082, x => x);
pg.types.setTypeParser(1184, x => x);

const PGPOOLMAX = process.env.PGPOOLMAX
  ? parseInt(process.env.PGPOOLMAX, 10)
  : 20;

module.exports = {
  client: 'pg',
  connection: {
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
  },
  pool: { min: 0, max: PGPOOLMAX },
  migrations: {
    directory: `${__dirname}/migrations`,
  },
  seeds: {
    directory: `${__dirname}/seeds`,
  },
};
