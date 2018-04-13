import { createSelector } from 'reselect';

const selectAuthProviderDomain = (state) => state.get('authprovider');

const makeSelectIsAuthenticated = () => createSelector(
  selectAuthProviderDomain,
  (substate) => substate.get('isAuthenticated')
);

export {
  selectAuthProviderDomain,
  makeSelectIsAuthenticated,
};
