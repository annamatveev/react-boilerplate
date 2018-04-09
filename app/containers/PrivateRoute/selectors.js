import { createSelector } from 'reselect';

/**
 * Direct selector to the privateRoute state domain
 */
const selectPrivateRouteDomain = (state) => state.get('privateRoute');

const makeSelectPrivateRoute = () => createSelector(
  selectPrivateRouteDomain,
  (substate) => substate.get('isAuthenticated')
);

export default makeSelectPrivateRoute;
export {
  selectPrivateRouteDomain,
};
