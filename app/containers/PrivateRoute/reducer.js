import { fromJS } from 'immutable';
import {
  LOGIN,
  FAILED,
  RECEIVED,
  SIGNOUT,
} from './constants';

const initialState = fromJS({
  loading: false,
  isAuthenticated: false,
  client: null,
  accessToken: null,
  uid: null,
  expiry: null
});

function privateRouteReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST:
      return Object.assign(
        {},
        state,
        {
          loading: true,
        });
    case RECEIVED:
      return Object.assign(
        {},
        state,
        {
          loading: false,
          isAuthenticated: true,
          uid: action.uid,
          client: action.client,
          accessToken: action.accessToken,
          expiry: action.expiry,
        }
      );
    case FAILED:
      return Object.assign(
        {},
        state,
        {
          loading: false,
        }
      );
    case SIGNOUT:
      return Object.assign(
        {},
        initialState
      );
    default: return state;
  }
}

export default privateRouteReducer;
