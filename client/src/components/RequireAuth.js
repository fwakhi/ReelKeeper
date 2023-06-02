import React, { useLocation, Navigate, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import api, { AUTH_URL } from "../api/axios"
import LoadingSpinner from "./Loading";


const RequireAuth = () => {
    const { auth, setAuth } = useAuth();
    const [loading, setLoading] = useState(true)

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const userAuth = async () => {
            try {
                const response = await api.get(AUTH_URL);
                setAuth({ user: response.data })
                setLoading(false)
            } catch (error) {
                if (error.response?.status === 401) {
                    navigate('/login', { state: { from: location }, replace: true });
                }
            }
        }
        userAuth();
    }, [])


    if (loading) {
        return <LoadingSpinner />
    }
    return (
        auth.user
            ? <Outlet />
            : <Navigate to="/login" state={{ from: location }} replace />
    );
}
export default RequireAuth;
