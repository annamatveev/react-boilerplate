import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Route, Redirect } from 'react-router-dom';
import { makeSelectIsAuthenticated, makeSelectLoggedInUser } from 'containers/AuthProvider/selectors';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  console.log(rest);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        isAuthenticated ? (
          <Component {...routeProps} loggedIn={rest.loggedIn} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: routeProps.location },
            }}
          />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  location: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  isAuthenticated: makeSelectIsAuthenticated(),
  loggedIn: makeSelectLoggedInUser(),
});

export default connect(mapStateToProps)(PrivateRoute);
