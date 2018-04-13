import { fromJS } from 'immutable';
import {
  SENDING_LOGIN_REQUEST,
  SENDING_RESTORE_REQUEST,
  SENDING_LOGOUT_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  RESTORE_SUCCESS,
} from './constants';

const initialState = fromJS({
  loggedIn: '',
  isAuthenticated: false,
  currentlySending: false,
  error: '',
});

function privateRouteReducer(state = initialState, action) {
  if (action.error) {
    return state
      .set('error', action.payload);
  }
  switch (action.type) {
    case LOGIN_SUCCESS:
    case RESTORE_SUCCESS:
      return state
        .set('loggedIn', action.payload.user)
        .set('isAuthenticated', true);
    case LOGOUT_SUCCESS:
      return state
        .set('username', '')
        .set('isAuthenticated', false);
    case SENDING_LOGIN_REQUEST:
    case SENDING_LOGOUT_REQUEST:
    case SENDING_RESTORE_REQUEST:
      return state
        .set('currentlySending', action.meta.sending);
    default:
      return state;
  }
}

export default privateRouteReducer;
