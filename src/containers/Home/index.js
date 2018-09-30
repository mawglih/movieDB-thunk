import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchMoviesStart,
} from 'actions';
import Search from 'containers/Search';
import MovieList from 'components/MovieList';
import {
  displayMovies,
} from 'utility';
import Button from 'components/Button';
import FilterByName from 'components/FilterByName';
import './Home.css';



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      itemsPerPage: 6,
    };
  }
  handleClick(number) {
    this.setState({
      currentPage: Number(number)
    });
  }

  componentDidMount() {
    fetchMoviesStart();
  }

  render() {
    const {
      movies,
    } = this.props;
    const {
      currentPage,
      itemsPerPage,
    } = this.state;
    
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = Object.values(movies).slice(indexOfFirstItem, indexOfLastItem);
    const pageNumbers = Array.from(new Array(4),(val,index)=>index+1);
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <div
          key={number}
          id={number}
          onClick={this.handleClick.bind(this, number)}
          className="paginationItem"
        >
          {number}
        </div>
      );
    });
    // console.log('Home movies: ', movies);
    // console.log('Current page: ', currentPage);
    return(
      <div className="main">
        <div className="search">
          <Search />
        </div>
        <div className="filters">
          <FilterByName
            placeholder={'Filter by name of the movie'}
            value={'title'}
          />
          <div className="buttons">
            <Button
              movies={movies}
              text={'A-Z'}
              buttonClass={'small'}
            />
            <Button
              movies={movies}
              text={'Z-A'}
              buttonClass={'small'}
            />
          </div>
          <FilterByName
            placeholder={'Filter by year of the movie'}
            value={'year'}
          />
        </div>
        <div className="movieList">
          <MovieList
            data={currentItems}
          />
        </div>
        <div className="pagination">
          {renderPageNumbers}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
 {
    movies: displayMovies (state.movies, state.filters),
  }
);

export default connect(
  mapStateToProps, {
    fetchMoviesStart,
  })(Home);
