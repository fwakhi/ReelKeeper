import axios from 'axios';
import useAuth from './useAuth';

import { REFRESH_URL } from "../utils/Constants";
import { axiosPrivate } from '../api/axios';

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        const response = await axiosPrivate.get(REFRESH_URL, {
            withCredentials: true
        });
        setAuth(prev => {
            return {
                ...prev,
                accessToken: response.data.accessToken
            }
        });
        return response.data.accessToken;
    }
    return refresh;
};
export default useRefreshToken;
