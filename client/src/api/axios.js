import axios from "axios";

export const BASE_URL = 'http://localhost:8000'
export const SIGNUP_URL = '/signup';
export const AUTH_URL = '/auth';
export const FAVS_URL = '/favs';
export const WATCHLIST_URL = '/watchlist';
export const HISTORY_URL = '/history';

const api = axios.create({ baseURL: BASE_URL })

api.interceptors.request.use(
    config => {
        const accessToken = localStorage.getItem("accessToken")
        config.headers['Authorization'] = `Bearer ${accessToken}`;
        return config;
    }, (error) => Promise.reject(error)
);
export default api
