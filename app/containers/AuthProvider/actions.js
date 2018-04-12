import {
  SENDING_RESTORE_REQUEST,
  SENDING_LOGIN_REQUEST,
  SENDING_LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGIN_SUCCESS,
  RESTORE_SUCCESS,
} from './constants';

/* SEND LOGIN REQUEST */
export function loginRequestStart() {
  return {
    type: SENDING_LOGIN_REQUEST,
    meta: {
      sending: true,
    },
  };
}

export function loginRequestFail() {
  return {
    type: SENDING_LOGIN_REQUEST,
    error: true,
  };
}
export function loginRequestFinish() {
  return {
    type: SENDING_LOGIN_REQUEST,
    meta: {
      sending: false,
    },
  };
}

/* SEND RESTORE REQUEST */
export function restoreRequestStart() {
  return {
    type: SENDING_RESTORE_REQUEST,
    meta: {
      sending: true,
    },
  };
}

export function restoreRequestFail() {
  return {
    type: SENDING_RESTORE_REQUEST,
    error: true,
  };
}

export function restoreRequestFinish() {
  return {
    type: SENDING_RESTORE_REQUEST,
    meta: {
      sending: false,
    },
  };
}

/* SEND LOGOUT REQUEST */
export function logoutRequestStart() {
  return {
    type: SENDING_LOGOUT_REQUEST,
    meta: {
      sending: true,
    },
  };
}

export function logoutRequestFail() {
  return {
    type: SENDING_LOGOUT_REQUEST,
    error: true,
  };
}

export function logoutRequestFinish() {
  return {
    type: SENDING_LOGOUT_REQUEST,
    meta: {
      sending: false,
    },
  };
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    payload: { user },
  };
}


export function restoreSuccess(user) {
  return {
    type: RESTORE_SUCCESS,
    payload: { user },
  };
}

export function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
  };
}
