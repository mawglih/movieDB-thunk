import {
  GET_SORTED_BY_NAME,
  SET_TEXT_FILTER,
  SET_DATE_FILTER,
} from 'actionTypes';

const DEFAULT_STATE = {
  sortBy: '',
  text: '',
  date: '',
};

const filterReducer = (state = DEFAULT_STATE, {type, payload}) => {
  switch(type) {
    case GET_SORTED_BY_NAME:
      return {
        ...state,
        sortBy: payload,
      };
    case SET_TEXT_FILTER:
      return {
        ...state,
        text: payload,
      };
    case SET_DATE_FILTER:
      return {
        ...state,
        date: payload,
      }
    default:
      return state;
  }
};

export default filterReducer;