import axios, { FAVS_URL } from "../axios";
import { fetchSingleMovie } from '../tmdb'

// @ts-ignore
const fetchMovies = async (ids) => {
    const fetchedMovies = []
    ids.forEach(async movieId => {
        const response = await fetchSingleMovie(movieId.id);
        if (response.data) {
            fetchedMovies.push(response.data)
        }
    });
    return fetchedMovies;
}

export const getFavorites = async (userId) => {
    try {
        const response = await axios.get(`${FAVS_URL}/${userId}`, {});
        if (response.data) {
            return response.data
        }
    } catch (err) {
        console.error("Error; ", err);
    }
    return null
}

export const saveFavorite = async (movie, userId) => {
    const { id, poster_path } = movie
    try {
        await axios.post(FAVS_URL, { id, userId, poster_path });
        return true
    } catch (err) {
        console.error("Error; ", err);
        return false
    }
}

export const removeFavorite = async (id, userId) => {
    try {
        await axios.delete(`${FAVS_URL}/${userId}/${id}`, {});
    } catch (err) {
        console.error("Error; ", err);
        return false
    }
    return true
}
