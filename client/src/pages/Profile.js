import React, { useContext, useEffect } from "react";

// import styles from "../style/Background.module.css"
import '../style/Home.css';

import {useLocation, useNavigate } from 'react-router-dom';
import useAuth from "../hooks/useAuth";


const Profile = () => {
    const { auth } = useAuth();
    const isAuthorized = auth.accessToken != null
    const location = useLocation();
    const navigate = useNavigate();
    const name = auth.user.username;

   

    return (
        <>
           <h1 className="margin-top ml-5">hola @{name}</h1>

        </>
    )
}
export default Profile;
