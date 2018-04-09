
import request from 'utils/request';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOGIN } from './constants';
import { reposLoaded, repoLoadingError } from './actions';

/**
 * Github repos request/response handler
 */
export function* authenticate(username, password) {
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* login(username, password) {
  yield takeLatest(LOGIN, authenticate, { username, password });
}
