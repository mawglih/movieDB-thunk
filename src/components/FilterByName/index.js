import React from 'react';
import { connect } from 'react-redux';
import {
  setTextFilter,
  setDateFilter,
} from 'actions';
import './FilterByName.css';

const FilterByName = ({
  dispatch,
  placeholder,
  filters,
  value,
}) => (
  <div className="filterInput">
    <input
      placeholder={placeholder}
      // value={filters.text}
      type="text"
      onChange={(e) => {
        if (value === 'title') {
          dispatch(setTextFilter(e.target.value));
        } else if (value === 'year') {
          dispatch(setDateFilter(e.target.value));
        }
      }}
    />
  </div>
);

const mapStateToProps = state => (
  {
    filters: state.filters,
  }
);

export default connect(mapStateToProps)(FilterByName);
