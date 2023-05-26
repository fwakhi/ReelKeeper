import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import useInfo from "./useInfo";


const useLogout = () => {
    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const { setFavorites, setHistory, setWatchlist } = useInfo();

    return async () => {
        localStorage.removeItem("accessToken");
        setAuth({ user: null })
        setFavorites([]);
        setHistory([]);
        setWatchlist([]);
        navigate('/');
    };
}
export default useLogout
