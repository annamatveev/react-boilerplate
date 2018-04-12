import { createSelector } from 'reselect';

/**
 * Direct selector to the authProvider state domain
 */
const selectAuthProviderDomain = (state) => state.get('authProvider');

const makeSelectisAuthenticated = () => createSelector(
  selectAuthProviderDomain,
  (substate) => substate.get('isAuthenticated')
);

export default makeSelectisAuthenticated;
export {
  selectAuthProviderDomain,
};
