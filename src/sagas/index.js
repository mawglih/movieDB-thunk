import { all } from 'redux-saga/effects';
import fetchMoviesSaga from './fetch';

export function* watchFetch() {
  yield all({
    fetchMoviesSaga,
})
}

export default {};
