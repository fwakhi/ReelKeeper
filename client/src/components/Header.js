import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useLogout from "../hooks/useLogout";
import { getFavorites } from '../api/services/Favorites'
import "../style/Header.css"
import useAuth from '../hooks/useAuth';
import useInfo from '../hooks/useInfo';

const Header = () => {
   
    const { auth } = useAuth()
    
    const { favorites, setFavorites } = useInfo()
    const isAuthorized = localStorage.getItem("accessToken") != null
    const logout = useLogout();

    useEffect(() => {
        const loadFavorites = async () => {
            if (auth && favorites.length == 0) {
                const favs = await getFavorites(auth.user.id);
                favs && setFavorites(favs);
            }
        }
        loadFavorites()
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
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="profile" className="dropdown-item" >Go to profile</Link>
                <Link to="playground" className="dropdown-item">Playground</Link>
                <button className="dropdown-item" onClick={signOut}>Sign Out</button>
            </div>
        </li>
    )

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">

                <div className="container-fluid">

                    <div className="mr-auto">
                        <a className="navbar-brand " href="#">
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <i className="fa-solid fa-film mr-3 text-dark"></i>
                                <span className="display-6 text-dark">ReelKeeper</span>
                            </Link>
                        </a>
                    </div>

                    <button className="navbar-toggler negro" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-white"></span>
                    </button>
                    <div className="collapse navbar-collapse col-8" id="navbarSupportedContent">
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
