import axios, { LIST_URL } from "../axios";
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

export const getList = async (userId) => {
    try {
        const response = await axios.get(`${LIST_URL}/${userId}`, {});
        if (response.data) {
            return response.data
        }
    } catch (err) {
        console.error("Error; ", err);
    }
    return null
}

export const saveList = async (title, userId) => {
    // const { id, poster_path } = movie
    try {
        await axios.post(LIST_URL, { title, userId});
        return true
    } catch (err) {
        console.error("Error; ", err);
        return false
    }
}

export const removeList = async (title, userId) => {
    try {
        await axios.delete(`${LIST_URL}/${userId}/${title}`, {});
        
    } catch (err) {
        console.error("Error; ", err);
        return false
    }
    return true
}
