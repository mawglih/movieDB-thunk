import React, { Component } from 'react';
import {
  getMovieInfo,
  IMAGE_URL,
} from 'api'; 
import { Link } from 'react-router-dom';
import './MovieItem.css';

class MovieItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }
  componentDidMount() {
    getMovieInfo(this.props.match.params.id)
    .then(response => {
      this.setState({
        data: response,
      });
    })
    
  }
  render() {
    console.log('movie info: ', this.state.data);
    const {
      data
    } = this.state;
    
    return (
      <Movie {...data} />
    );
  }
}

export default MovieItem;

const Movie = ({
  original_title,
  poster_path,
  overview,
  tagline,
  release_date,
}) => (
  <div className="movieSingle">
    <h2>
      <span>
        {original_title}
      </span>
    </h2>
    <h3>
      {release_date && original_title &&
        (<span>
        ({release_date.split('-')[0]})
      </span>)
      }
    </h3>
    <h4>{tagline}</h4>
    {poster_path &&
      <div>
        <img src={`${IMAGE_URL}${poster_path}`} alt={original_title}/>
      </div>
    }
    <div className="overview">
      <p>{overview}</p>
    </div>
    <div>
      <Link to='/'>
        {'Go back'}
      </Link>
    </div>
  </div>
);
