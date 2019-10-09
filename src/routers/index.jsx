import React from 'react';
import { Route, HashRouter, Switch, Redirect } from 'react-router-dom';
import Home from "../containers/Home";
import NestedRoute from "../containers/NestedRoute";
import Item1 from "../containers/NestedRoute/pages/Item1";
import Item2 from "../containers/NestedRoute/pages/Item2";
import NotFound from "../containers/NotFound";

export default class AppRouter extends React.Component {
  render() {
    return(
      <HashRouter>
        <Switch>
          <Route path="/" exact={true} component={ Home } />
          <Route
            path="/nestedRoute"
            render={() => (
              <NestedRoute>
                <Route path="/nestedRoute/item1" component={Item1} />
                <Route path="/nestedRoute/item2" component={Item2} />
              </NestedRoute>
            )}
          />

          {/* 404页面2 输错了将地址转到notFound页面 */}
          <Route path="/notFound" component={NotFound} />
          <Redirect to="/notFound" />
        </Switch>
      </HashRouter>
    )
  }
}