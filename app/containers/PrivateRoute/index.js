import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

import makeSelectIsAuthenticated from 'containers/AuthProvider/selectors';

class PrivateRoute extends React.Component {

  constructor(props) {
    super(props);
    console.log('kakki constructor', this);
  }

  render() {
    console.log('kaki', this);
    const { renderComponent, isAuthenticated, ...rest } = this.props;
    if (!isAuthenticated) {
      return <Route {...rest} render={() => <div>Fuck you mroe!</div>} />;
    }
    return <Route {...rest} render={renderComponent} />;
  }

}


const mapStateToProps = createStructuredSelector({
  isAuthenticated: makeSelectIsAuthenticated(),
});

const withConnect = connect(mapStateToProps);

export default withConnect(PrivateRoute);


// const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
//   console.log('kaki', isAuthenticated);
//   return (
//     <Route
//       {...rest}
//       render={(props) => (
//         isAuthenticated ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{
//               pathname: '/login',
//               state: { from: props.location },
//             }}
//           />
//         )
//       )}
//     />
//   );
// };
//
// PrivateRoute.propTypes = {
//   isAuthenticated: PropTypes.bool,
//   component: PropTypes.object,
//   location: PropTypes.string,
// };
//
// const mapStateToProps = createStructuredSelector({
//   isAuthenticated: makeSelectIsAuthenticated(),
// });
//
// const withConnect = connect(mapStateToProps);
//
// export default compose(
//   withConnect,
//   withRouter
// )(PrivateRoute);
