/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage';
import AuthProvider from 'containers/AuthProvider/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import PrivateRoute from 'containers/PrivateRoute/Loadable';

export default function App() {
  return (
    <AuthProvider>
      <div>
        <Switch>
          <PrivateRoute path="/private" component={HomePage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </div>
    </AuthProvider>
  );
}
