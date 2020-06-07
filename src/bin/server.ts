import { ApolloServer, gql } from 'apollo-server';
import { resolvers } from '../graphql/resolvers';
import { knex } from '../db/knex';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type Form {
    name: String
    content: String
  }

  type Query {
    forms: [Form]
  }
`;

const { PORT } = process.env!;

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const app = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.

const start = async () => {
  await knex.migrate.latest();

  return app.listen(PORT, () => {
    console.log(`🚀  Server started and listening on ${PORT}`);
  });
};

start().catch(err => {
  console.log(err);
  process.exit(1);
});
