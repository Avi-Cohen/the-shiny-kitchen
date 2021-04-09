import React from "react";
import { Switch, Route} from 'react-router-dom'

function Router() {
  return (
    <div>
        <Switch>
          <Route exact to="/"> </Route>
          <Route exact to="/contact"></Route>
          <Route exact to="/cart"> </Route>
          <Route exact to="/about"></Route>
          <Route exact to="/faq"></Route>
          <Route exact to="/register"> </Route>
          <Route exact to="/login"> </Route>
        </Switch>
    </div>
  );
}

export default Router;
