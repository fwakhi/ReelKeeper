import { axiosPrivate } from "../api/axios";
import useAuth from "./useAuth";


const useLogout = () => {
    const { setAuth } = useAuth();

    return async () => {
        setAuth({});
        try {
            await axiosPrivate('/logout', {
                withCredentials: true
            });
        } catch (err) {
            console.error("Error logging out:", err);
        }
    };
}
export default useLogout
