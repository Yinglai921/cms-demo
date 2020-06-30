import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { DashboardRoute } from './Dashboard';
import { ProductsRoute } from './Products';

export const RootRoute: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/products" component={ProductsRoute} />
      <Route path="/" component={DashboardRoute} />
    </Switch>
  </Router>
);
