import React from 'react';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';

const AuthProvider = ({ children }) => React.Children.only(children);

const withReducer = injectReducer({ key: 'authprovider', reducer });
const withSaga = injectSaga({ key: 'authprovider', saga });

export default compose(
  withReducer,
  withSaga,
)(AuthProvider);
