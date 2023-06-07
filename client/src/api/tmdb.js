import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3'
export const imgUrl = "http://image.tmdb.org/t/p/w500/";

export const API_KEY = "18f61adb80d286bb036df43e60d7aae6";
export const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGY2MWFkYjgwZDI4NmJiMDM2ZGY0M2U2MGQ3YWFlNiIsInN1YiI6IjVlNjgyMGUxMTUxYzVjMDAxNzA0MjkwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mOvG3o9OkZwZHVLud8NGCMjxnMsCHbi6RF-nZ0zVuLE";

export const searchMovies = (query) => tmdbApi.get(`/search/movie?language=en-US&page=1&include_adult=false&query=${query}`);
export const popularMovies = () => tmdbApi.get(`/movie/popular?language=en-US&page=1&region=US&include_adult=false`);
export const upcomingMovies = () => tmdbApi.get(`/movie/upcoming?language=en-US&page=1&region=US&include_adult=false`);
export const latestMovies = () => tmdbApi.get(`/movie/now_playing?language=en-US&page=1&region=US&include_adult=false`);
export const fetchCollection = (collectionId) => tmdbApi.get(`/collection/${collectionId}?api_key=${API_KEY}`);

export const fetchSingleMovie = (movieId) => tmdbApi.get(`https://api.themoviedb.org/3/movie/${movieId}?append_to_response=credits%2Crecommendations%2Cvideos&language=en-US`);

export const tmdbApi = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${ACCESS_TOKEN}` },
})
