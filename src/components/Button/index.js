import React from 'react';
import { connect } from 'react-redux';
import { displayMovies } from 'utility';
import {
  sortByName,
  // sortByNameDesc
} from 'actions';
import './Button.css';

const Button = ({
  text,
  buttonClass,
  dispatch
}) => (
  <div
    className={buttonClass}
    onClick={() => {
      dispatch(sortByName(text));
    }}
  >
    <span>
      {text}
    </span>
  </div>
);

const mapStateToProps = state => (
  {
    movies: displayMovies(state.movies, state.filters),
  }
);

export default connect(mapStateToProps)(Button);
