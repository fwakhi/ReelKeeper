import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import useLogout from "../hooks/useLogout";
import useAuth from '../hooks/useAuth';
import "../style/Header.css"
import { refreshUser } from '../api/axios';
import useInfo from '../hooks/useInfo';


const Header = () => {

    const { auth } = useAuth()
    const { userInfo, setUserInfo } = useInfo();
    const isAuthorized = localStorage.getItem("accessToken") != null
    const logout = useLogout();

    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setShowDropdown(false);
            return
        }
    };
    const handleToggleButtonClick = () => setShowDropdown(!showDropdown);

    const loadUser = async (userId) => setUserInfo(await refreshUser(userId));
    useEffect(() => {
        if (auth.user != null && userInfo == null) {
            loadUser(auth.user?.id);
        }
    }, [auth]);

    const signOut = async () => {
        await logout();
    }

    const loginButton = (
        <Link to="login" style={{ textDecoration: 'none' }}><span className="nav-link text-white">LOGIN</span></Link>
    )

    const listButton = (
        <li className="nav-item">
            <Link to="lists" style={{ textDecoration: 'none' }}><span className="nav-link amarillo borde text-white">Lists</span></Link>
        </li>
    )

    const moviesButton = (
        <li className="nav-item">
            <Link to="movies" style={{ textDecoration: 'none' }}><span className="nav-link verde borde text-white">Movies</span></Link>
        </li>
    )

    const profileButton = (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fa-solid fa-user mr-2"></i>
            </a>
            <div className="dropdown-menu text-left profileDropdown" aria-labelledby="navbarDropdown">
                <Link to="profile" className="dropdown-item px-2" >Go to profile</Link>
                <Link to="playground" className="dropdown-item px-2">Playground</Link>
                <button className="dropdown-item px-2" onClick={signOut}>Sign Out</button>
            </div>
        </li>
    )

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">

                <div className="container-fluid">

                    <div className="mr-auto">
                        <Link className="navbar-brand" to="/" style={{ textDecoration: 'none' }}>
                            <i className="fa-solid fa-film mr-3 text-dark"></i>
                            <span className="display-6 text-dark">ReelKeeper</span>
                        </Link>
                    </div>

                    <button className={`navbar-toggler negro ${showDropdown ? 'collapsed' : ''}`} onClick={handleToggleButtonClick} type="button">
                        <span className="navbar-toggler-icon text-white"></span>
                    </button>
                    <div id="navbarSupportedContent" className={`collapse navbar-collapse col-8 ${showDropdown ? 'show' : ''}`} ref={dropdownRef}>
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active rojito borde text-white" aria-current="page" href="#">About</a>
                            </li>

                            {isAuthorized ? moviesButton : ""}
                            {isAuthorized ? listButton : ""}

                            <li className="nav-item purple borde rounded ml-3">
                                {isAuthorized ? profileButton : loginButton}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Header;
