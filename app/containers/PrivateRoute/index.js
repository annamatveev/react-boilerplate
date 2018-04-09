import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Route, Redirect, withRouter } from 'react-router-dom';


import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectPrivateRoute from './selectors';
import reducer from './reducer';
import saga from './saga';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
    isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: props.location },
        }}
      />
    )
  )}
  />
)
PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool,
  component: PropTypes.object,
  location: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  privateRoute: makeSelectPrivateRoute(),
});

const withConnect = connect(mapStateToProps);
const withReducer = injectReducer({ key: 'privateRoute', reducer });
const withSaga = injectSaga({ key: 'privateRoute', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withRouter
)(PrivateRoute);
