import React from 'react';
import { RouteComponentProps, Switch, Route } from 'react-router';
import { Products } from './containers/Products';
import { Product } from './containers/Product';

export const ProductsRoute: React.FC<RouteComponentProps> = ({ match }) => (
  <Switch>
    <Route path={`${match.url}/:slug`} component={Product} />
    <Route path={`${match.url}`} component={Products} />
  </Switch>
);
