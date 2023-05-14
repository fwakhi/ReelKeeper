import axios from "axios";
import useAuth from "./useAuth";

import { LOGOUT_URL } from "../utils/Constants";


const useLogout = () => {
    const { setAuth } = useAuth();

    const logout = async () => {
        setAuth({});
        try {
            const response = await axios.post(LOGOUT_URL, {});
        } catch (err) {
            console.error(err);
        }
    }

    return logout;
}
export default useLogout
