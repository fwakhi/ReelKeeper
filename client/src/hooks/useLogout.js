import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import useInfo from "./useInfo";


const useLogout = () => {
    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const {setFavorites } = useInfo();

    return async () => {
        localStorage.removeItem("accessToken");
        setAuth({ user: null })
        setFavorites([]);
        navigate('/');
    };
}
export default useLogout
