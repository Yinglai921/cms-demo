import * as React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { RootRoute } from './pages/Root';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
});

export class App extends React.Component {
  public render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <title>Demo</title>
          <h4>DEMO</h4>
          <RootRoute />
        </div>
      </ApolloProvider>
    );
  }
}
