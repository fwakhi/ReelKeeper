import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3'
export const imgUrl = "http://image.tmdb.org/t/p/w500";

export const API_KEY = "18f61adb80d286bb036df43e60d7aae6";
export const Popular_URL =
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
export const Discover_URL =
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;


export const searchMovies = (query) => tmdbApi.get(`/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`);
export const popularMovies = () => tmdbApi.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1&region=US&include_adult=false`);
export const upcomingMovies = () => tmdbApi.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1&region=US&include_adult=false`);
export const latestMovies = () => tmdbApi.get(`/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=US&include_adult=false`);

export const fetchSingleMovie = (movieId) => tmdbApi.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`);

export const fetchSingleMovieCredits = (movieId) => tmdbApi.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`);
export const fetchRecommendations = (movieId) => tmdbApi.get(`/movie/${movieId}/similar?api_key=${API_KEY}`);

export const fetchCollection = (collectionId) => tmdbApi.get(`/collection/${collectionId}?api_key=${API_KEY}`);
export const fetchGenres = () => tmdbApi.get(`/genre/movie/list?api_key=${API_KEY}`);

export const tmdbApi = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
})
