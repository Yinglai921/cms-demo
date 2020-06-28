import gql from 'graphql-tag';

const Product = gql`
  type Product {
    id: String!
    name: String
    title: String
    content: String
    provider: String
  }

  type Query {
    product(id: String!): Product
    products: [Product]
  }
`;

export default [Product];
