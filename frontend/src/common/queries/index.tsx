import { gql } from 'apollo-boost';

export const PRODUCTS_QUERY = gql`
  query ProductsQuery {
    products {
      id
      name
      title
      content
      provider
    }
  }
`;
