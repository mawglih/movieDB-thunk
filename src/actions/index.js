import {
  FETCH_MOVIES_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  SEARCH_MOVIES_START,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_FAILURE,
  GET_SORTED_BY_NAME,
  SET_TEXT_FILTER,
  SET_DATE_FILTER,
} from 'actionTypes';
import {
  searchMovies as searchMoviesApi,
} from 'api';

// with saga
export const fetchMoviesStart = () => (
  {
    type: FETCH_MOVIES_START,
  }
);

export const fetchMoviesSuccess = ({ movies }) => (
  {
    type: FETCH_MOVIES_SUCCESS,
    payload: movies,
  }
)

export const fetchMoviesFailure = () => (
  {
      type: FETCH_MOVIES_FAILURE,
  }
);

// with thunk

export const searchMovies = term => async dispatch => {
  dispatch({
    type: SEARCH_MOVIES_START
  });
  try {
    const movies = await searchMoviesApi(term);
    dispatch({
      type: SEARCH_MOVIES_SUCCESS,
      payload: movies,
    });
  } catch(error) {
    dispatch({
      type: SEARCH_MOVIES_FAILURE,
      payload: error,
      error: true,
    });
  };
};

//sorting actions

export const sortByName = (text) => (
  {
    type: GET_SORTED_BY_NAME,
    payload: text
  }
);

export const setTextFilter = (text = '') => (
  {
  type: SET_TEXT_FILTER,
  payload: text,
  }
);

export const setDateFilter = (date = '') => (
  {
    type: SET_DATE_FILTER,
    payload: date,
  }
);
