import axios from "axios";

export const BASE_URL = 'http://localhost:8000'
export const SIGNUP_URL = '/signup';
export const AUTH_URL = '/auth';
export const FAVS_URL = '/favs';
export const WATCHLIST_URL = '/watchlist';
export const HISTORY_URL = '/history';
export const LIST_URL = '/list';
export const LIST_MOVIES_URL = '/movielist';

const api = axios.create({ baseURL: BASE_URL })

api.interceptors.request.use(
    config => {
        const accessToken = localStorage.getItem("accessToken")
        config.headers['Authorization'] = `Bearer ${accessToken}`;
        return config;
    }, (error) => Promise.reject(error)
);
export default api

export const refreshUser = async (userId) => {
    if (userId != undefined && userId != "") {
        try {
            const response = await api.get("/users/" + userId, {});
            if (response.data) {
                // console.log("Refresh user ------>", response.data)
                return response.data;
            }
        } catch (err) {
            console.error("Error: ", err);
        }
    } else {
        console.error("Error: No user ID found", userId);
    }
}
