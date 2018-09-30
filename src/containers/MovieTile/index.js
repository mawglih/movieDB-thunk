import React, { Component } from 'react';
import { getMovieInfo } from 'api';
import { Link } from 'react-router-dom';
import './MovieTile.css';

class MovieTile extends Component {
  handleClick = (id) => {
    getMovieInfo(id);
  }
  render() {
    const {
      title,
      overview,
      date,
      id,
    } = this.props;
    return(
      <div className="movieItem">
        <div>
          <h2>
            {title} ({date? date.split('-')[0] : null})
          </h2>
        </div>
        <div>
          <p>
            {overview}
          </p>
        </div>
        <div>
          <Link to={`/movie/${id}`}>
            <button
              onClick={() => this.handleClick(id)}
              className="buttonMore"
            >
              {'Show more'}
            </button>
          </Link>
          
        </div>
      </div>
    );
  }
}

export default MovieTile;
