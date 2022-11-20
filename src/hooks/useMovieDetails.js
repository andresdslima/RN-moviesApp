import { useEffect, useState } from 'react';
import { moviesDB } from '../services/moviesDB';

const MovieDetails = {
  isLoading: true,
  movieFull: undefined,
  cast: [],
};

export function useMovieDetails(movieId) {
  const [state, setState] = useState(MovieDetails);

  const getMovieDetails = async () => {
    const movieDetailsPromise = moviesDB.get(`${movieId}`);
    const castPromise = moviesDB.get(`${movieId}/credits`);

    const [movieDetailsResponse, castResponse] = await Promise.all([
      movieDetailsPromise,
      castPromise,
    ]);
    
    setState({
      isLoading: false,
      movieFull: movieDetailsResponse.data,
      cast: castResponse.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return { ...state };
}
