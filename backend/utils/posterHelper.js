const formatMovies = (movies = []) => {
  return movies.map((movie) => ({
    ...movie,
    Poster:
      movie.Poster && movie.Poster !== "Currently Not Available!"
        ? movie.Poster
        : null,
  }));
};

module.exports = { formatMovies };