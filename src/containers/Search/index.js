import React, { Component } from 'react';
import  { connect } from 'react-redux';
import {
  searchMovies,
} from 'actions';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
  }

  onInputChange = (event) => {
    this.setState({
      term: event.target.value,
    });
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.searchMovies(this.state.term);
    this.setState({
      term: '',
    });
  }
  render() {
    return (
      <div className="searchForm">
        <form
          onSubmit={this.onFormSubmit}
        >
        <h2>
          {'MovieDB'}
        </h2>
        <h4>
          {'Search for a movie below.'}
        </h4>
        <input
            placeholder="Movie title"
            value={this.state.term}
            onChange={this.onInputChange}
            className="inputSubmit"
          />
          <button
            type="submit"
            className="buttonSubmit"
          >
            {'Submit'}
          </button>
        </form>
      </div>
      
    );
  }
}
export default connect(null, { searchMovies })(Search);