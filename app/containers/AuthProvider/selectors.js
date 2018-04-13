import { createSelector } from 'reselect';

const selectAuthProviderDomain = (state) => state.get('authprovider');

const makeSelectIsAuthenticated = () => createSelector(
  selectAuthProviderDomain,
  (substate) => substate.get('isAuthenticated')
);

const makeSelectLoggedInUser = () => createSelector(
  selectAuthProviderDomain,
  (substate) => substate.get('loggedIn').username
);


export {
  selectAuthProviderDomain,
  makeSelectIsAuthenticated,
  makeSelectLoggedInUser,
};
