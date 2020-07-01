import gql from 'graphql-tag';

const Product = gql`
  type Link {
    id: String!
  }

  type File {
    contentType: String
    fileName: String
    url: String
  }

  type Action {
    text: String
    name: String
    link: String
  }

  type ContentField {
    title: String
    description: String
    headline: String
    paragraph: String
    image: Link
    button: Action
  }

  type AssetField {
    title: String!
    description: String!
    file: File
  }

  type Sys {
    createdAt: String
    id: String
  }

  type Entry {
    """
    ContentField: to define the smallest items, map to the contentful
    text, rich text, number, date and time, location, media, boolean...
    """
    fields: ContentField
    """
    Sys: I borrow the name Sys from contentful, but I guess it's better to be called Config
    or something. The id here is important since it will be guide frontend to render the correct react component, like the name of content modal in contentful
    """
    sys: Sys
  }

  type Asset {
    fields: AssetField
    sys: Sys
  }

  type Content {
    title: String!
    slug: String!
    """
    Assets: contain all the media data, like images
    """
    assets: [Asset]
    """
    Entry: contain all pieces of content
    """
    entry: [Entry]
  }

  type Product {
    id: String!
    name: String
    title: String
    content: Content
    provider: String
  }

  type Query {
    product(id: String!): Product
    products: [Product]
  }
`;

export default [Product];
