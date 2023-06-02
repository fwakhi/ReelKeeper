import axios, { LIST_MOVIES_URL } from "../axios";


export const saveMovieList = async (listId, movie) => {
    try {
        const response = await axios.post(LIST_MOVIES_URL, { listId, id: movie.id, poster_path: movie.poster_path });
        return { error: false, message: response?.data?.message };
    } catch (error) {
        return { error: true, message: error.response?.data?.message };
    }
}

export const removeMovieList = async (listId, movieId) => {
    try {
        await axios.delete(`${LIST_MOVIES_URL}/${listId}/${movieId}`, {});
    } catch (err) {
        console.error("Error; ", err.message);
        return false
    }
    return true
}
