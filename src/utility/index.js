export const displayMovies = (movies, {sortBy, text, date}) => {
  return Object.values(movies)
  .filter((movie) => {
    const textMatch = movie.title.toLowerCase().includes(text.toLowerCase());
    const dateMatch = movie.release_date.split('-')[0].includes(date);
    return textMatch && dateMatch;
  })
  .sort((a, b) => {
    if (sortBy === 'A-Z') {
      return a.title > b.title ? 1 : -1;
    } else if (sortBy === 'Z-A') {
      return a.title < b.title ? 1 : -1;
    }
    return Object.values(movies);
  });
}

export default {}
