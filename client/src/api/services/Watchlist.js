import axios, { WATCHLIST_URL } from "../axios";


export const getWatchlist = async (userId) => {
    try {
        const response = await axios.get(`${WATCHLIST_URL}/${userId}`, {});
        if (response.data) {
            return response.data
        }
    } catch (err) {
        console.error("Error; ", err);
    }
    return null
}

export const saveWatchlist = async (movie, userId) => {
    const { id, poster_path } = movie
    try {
        await axios.post(WATCHLIST_URL, { id, userId, poster_path });
        console.log("Watchlist-Added:", id);
        return true
    } catch (err) {
        console.error("Error; ", err);
        return false
    }
}

export const removeWatchlist = async (id, userId) => {
    try {
        await axios.delete(`${WATCHLIST_URL}/${userId}/${id}`, {});
        console.log("Watchlist-Removed:", id);
        return true
    } catch (err) {
        console.error("Error; ", err);
        return false
    }
}
