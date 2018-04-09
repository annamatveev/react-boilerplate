import {
  LOGIN,
  RECEIVED,
  FAILED,
  SIGNOUT,
} from './constants';

export function startAuthentication() {
  return {
    type: LOGIN,
  };
}

export function successAuthentication(uid, client, accessToken, expiry) {
  return {
    type: RECEIVED,
    uid,
    client,
    expiry,
  };
}

export function failAuthentication() {
  return {
    type: FAILED,
  };
}

export function doSignout() {
  return {
    type: SIGNOUT,
  };
}
