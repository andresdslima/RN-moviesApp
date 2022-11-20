import { useEffect, useState } from 'react';
import { moviesDB } from '../services/moviesDB';

const MoviesState = {
  nowPlaying: [],
  popular: [],
  topRated: [],
  upcoming: [],
};

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState(MoviesState);

  const getMovies = async () => {
    try {
      const nowPlayingPromise = moviesDB.get('/now_playing');
      const popularPromise = moviesDB.get('/popular');
      const topRatedPromise = moviesDB.get('/top_rated');
      const upcomingPromise = moviesDB.get('/upcoming');

      const response = await Promise.all([
        nowPlayingPromise,
        popularPromise,
        topRatedPromise,
        upcomingPromise,
      ]);

      setMoviesState({
        nowPlaying: response[0].data.results,
        popular: response[1].data.results,
        topRated: response[2].data.results,
        upcoming: response[3].data.results,
      });

      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    ...moviesState,
    isLoading,
  };
};
