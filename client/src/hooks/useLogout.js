import axios from "../api/axios";
import useAuth from "./useAuth";


const useLogout = () => {
    const { setAuth } = useAuth();

    return async () => {
        setAuth({});
        try {
            const response = await axios('/logout', {
                withCredentials: true
            });
        } catch (err) {
            console.error("Error logging out:", err);
        }
    };
}
export default useLogout
