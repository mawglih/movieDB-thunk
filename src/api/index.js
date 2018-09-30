import axios from 'axios';
const API_MOVIE = 'api_key=5bb7a72a3185435136178e1839494fa4';
const BASE_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&';
const MOVIE_URL = 'https://api.themoviedb.org/3/movie/';
export const URL = `${BASE_URL}${API_MOVIE}`;
export const SEARCH_MOVIE_URL = `${SEARCH_URL}${API_MOVIE}`;

export const fetchMovies = () => {
  return axios({
    method: 'get',
    url: URL
  })
  .then(response => {
    return response.data.results;
  });
}

export const searchMovies = async term => {
  return axios.get(`${SEARCH_MOVIE_URL}&query=${term}`)
    .then(response => {
      console.log('search api: ', response.data.results);
      return response.data.results;
    })
    .catch(err => {
      console.log(err);
    });
};

export const getMovieInfo = (movieId) => {
  return axios.get(`${MOVIE_URL}${movieId}?${API_MOVIE}`)
    .then(response => {
      console.log('Single movie: ', response.data);
      return response.data;
    });
};
export const IMAGE_URL = 'http://image.tmdb.org/t/p/w500';
export default {};
