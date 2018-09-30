import {
  fetchMovies,
} from 'api';
import { put, call } from 'redux-saga/effects';
import {
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
} from 'actionTypes';


export function* fetchMoviesSaga() {
  try {
    const response = yield call(fetchMovies);
    yield put({
      type: FETCH_MOVIES_SUCCESS,
      payload: response,
    })
  } catch(error){
    yield put({
      type: FETCH_MOVIES_FAILURE,
    });
  }
};

export default fetchMoviesSaga();
