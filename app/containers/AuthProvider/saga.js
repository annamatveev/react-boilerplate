import { take, call, put, fork, race } from 'redux-saga/effects';
import { browserHistory } from 'react-router';
import { loginRequestStart, loginRequestFail, loginRequestFinish,
  logoutRequestStart, logoutRequestFail, logoutRequestFinish,
  restoreRequestStart, restoreRequestFail, restoreRequestFinish,
  loginSuccess, logoutSuccess, restoreSuccess } from './actions';
import { LOGOUT_REQUEST, LOGIN_REQUEST } from './constants';
import { mockRequest } from '../../utils/request';

const BASE_URL = 'https://localhost:3000';


export function* loginFlow() {
  while (true) {
    const request = yield take(LOGIN_REQUEST);
    const { username, password } = request.data;

    // A `LOGOUT` action may happen while the `authorize` effect is going on, which may
    // lead to a race condition. This is unlikely, but just in case, we call `race` which
    // returns the "winner", i.e. the one that finished first
    const winner = yield race({
      auth: call(login, { username, password }),
      logout: take(LOGOUT_REQUEST),
    });

    if (winner.auth) {
      yield put(loginSuccess(winner.auth));
      // TODO: Handle login form reset
    }
  }
}

export function* login({ username, password }) {
  yield put(loginRequestStart());

  try {
    const options = {
      body: { username, password },
    };
    return yield call(mockRequest, `${BASE_URL}/sign_in.json`, options);
  } catch (error) {
    yield put(loginRequestFail());
    return false;
  } finally {
    yield put(loginRequestFinish());
  }
}

export function* logoutFlow() {
  while (true) {
    yield take(LOGOUT_REQUEST);
    yield put(logoutSuccess());

    yield call(logout);
    forwardTo('/');
  }
}

export function* logout() {
  yield put(logoutRequestStart());

  try {
    return yield call(mockRequest, `${BASE_URL}/sign_out.json`);
  } catch (error) {
    yield put(logoutRequestFail());
    return false;
  } finally {
    yield put(logoutRequestFinish());
  }
}

export function* restoreFlow() {
  // A `LOGOUT` action may happen while the `authorize` effect is going on, which may
  // lead to a race condition. This is unlikely, but just in case, we call `race` which
  // returns the "winner", i.e. the one that finished first
  const winner = yield race({
    auth: call(restore),
    logout: take(LOGOUT_REQUEST),
  });

  if (winner.auth) {
    yield put(restoreSuccess(winner.auth));
    // TODO: Handle login form reset
  }
}

export function* restore() {
  yield put(restoreRequestStart());

  try {
    return yield call(mockRequest, `${BASE_URL}/sign_in.json`);
  } catch (error) {
    yield put(restoreRequestFail());
    return false;
  } finally {
    yield put(restoreRequestFinish());
  }
}

export default function* root() {
  yield restoreFlow();
  yield fork(loginFlow);
  yield fork(logoutFlow);
}

function forwardTo(location) {
  browserHistory.push(location);
}
