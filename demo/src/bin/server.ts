import { ApolloServer } from 'apollo-server';
import { resolvers } from '../graphql/resolvers';
import { knex } from '../db/knex';
import typeDefs from '../graphql/schema/product';

const { PORT } = process.env!;

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const app = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.

const start = async () => {
  await knex.migrate.latest();
  // await knex.seed.run();

  return app.listen(PORT, () => {
    console.log(`🚀  Server started and listening on ${PORT}`);
  });
};

start().catch(err => {
  console.log(err);
  process.exit(1);
});
