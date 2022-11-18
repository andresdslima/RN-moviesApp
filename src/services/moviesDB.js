import axios from 'axios';

export const moviesDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'c3e8ab85d24f5750bf2af8e4c0b7d45a',
    language: 'en-US',
  },
});
