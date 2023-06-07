import axios, { LIST_URL } from "../axios";


export const saveList = async (title, userId) => {
    try {
        const response = await axios.post(LIST_URL, { title, userId });
        return { error: false, message: response?.data?.message };
    } catch (error) {
        return { error: true, message: error.response?.data?.message };
    }
}

export const removeList = async (id, userId) => {
    try {
        await axios.delete(`${LIST_URL}/${userId}/${id}`, {});
    } catch (err) {
        console.error("Error; ", err.message);
        return false
    }
    return true
}
