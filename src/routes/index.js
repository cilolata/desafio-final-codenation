import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeRoute from './HomeRoute'
import ProductRoute from './ProductRoute';

const Routes = () => (
    <Switch>
      <Route exact path="/" component={HomeRoute}/>
      <Route exact path="/produto/:name" component={ProductRoute}/>
   </Switch>
);
  
export default Routes;