import moviesResponse from '../mocks/with-results.json';
import errorResponse from '../mocks/no-results.json';

export function useMovies() {
  const movies = moviesResponse.Search;

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }));

  return { movies: mappedMovies };
}