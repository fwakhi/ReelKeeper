import axios, { FAVS_URL } from "../axios";


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
        console.log("favorites-Added:", id);
        return true
    } catch (err) {
        console.error("Error; ", err);
        return false
    }
}

export const removeFavorite = async (id, userId) => {
    try {
        await axios.delete(`${FAVS_URL}/${userId}/${id}`, {});
        console.log("favorites-Remved:", id);
        return true
    } catch (err) {
        console.error("Error; ", err);
        return false
    }
}
