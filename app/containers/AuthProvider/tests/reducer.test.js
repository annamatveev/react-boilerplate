
import { fromJS } from 'immutable';
import authProviderReducer from '../reducer';

describe('authProviderReducer', () => {
  it('returns the initial state', () => {
    expect(authProviderReducer(undefined, {})).toEqual(fromJS({}));
  });
});
