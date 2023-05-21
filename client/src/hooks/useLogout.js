import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";


const useLogout = () => {
    const { setAuth } = useAuth();
    const navigate = useNavigate();

    return async () => {
        localStorage.removeItem("accessToken");
        setAuth({ user: null })
        navigate('/');
    };
}
export default useLogout
