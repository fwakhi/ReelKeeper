import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import useInfo from "./useInfo";


const useLogout = () => {
    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const { setUserInfo } = useInfo();

    return async () => {
        localStorage.removeItem("accessToken");
        setAuth({ user: null })
        setUserInfo({});
        navigate('/');
    };
}
export default useLogout
