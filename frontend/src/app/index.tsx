import * as React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { DashboardCards } from '../containers/DashboardCards';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
});

export class App extends React.Component {
  public render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <title>Dashboard</title>
          <h4>Hello world</h4>
          <DashboardCards />
        </div>
      </ApolloProvider>
    );
  }
}
