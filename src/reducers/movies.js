import {
  FETCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_SUCCESS,
} from '../actionTypes';

const INITIAL_STATE = [];

const MoviesReducer = (state = INITIAL_STATE, {type, payload}) => {
  switch(type) {

    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        ...payload,
      };
    case SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default MoviesReducer;
