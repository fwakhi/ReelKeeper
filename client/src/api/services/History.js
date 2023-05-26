import axios, { HISTORY_URL } from "../axios";


export const getHistory = async (userId) => {
    try {
        const response = await axios.get(`${HISTORY_URL}/${userId}`, {});
        if (response.data) {
            return response.data
        }
    } catch (err) {
        console.error("Error; ", err);
    }
    return null
}

export const saveHistory = async (movie, userId) => {
    const { id, poster_path } = movie
    try {
        await axios.post(HISTORY_URL, { id, userId, poster_path });
        console.log("History-Added:", id);
        return true
    } catch (err) {
        console.error("Error; ", err);
        return false
    }
}

export const removeHistory = async (id, userId) => {
    try {
        await axios.delete(`${HISTORY_URL}/${userId}/${id}`, {});
        console.log("History-Removed:", id);
        return true
    } catch (err) {
        console.error("Error; ", err);
        return false
    }
}
