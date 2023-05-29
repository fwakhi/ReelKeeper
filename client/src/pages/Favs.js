import React, { useContext, useEffect } from "react";
import '../style/Home.css';
import { useNavigate } from 'react-router-dom';
import useAuth from "../hooks/useAuth";
import useInfo from '../hooks/useInfo'
import MovieGrid from '../components/MovieGrid';
import NoMovies from "../components/NoMovies";

const Favs = () => {
    const { auth } = useAuth();
    const name = auth.user.username;
    const { favorites, watchlist, history } = useInfo();
    const navigate = useNavigate();

    const handleClick = () => navigate(`/profile`)

    return (

        <div className="container">
            <div className="row margin-top">
                <div className="col-1 mt-2 ">
                    <i class="fa-solid fa-circle-left fa-2xl ml-auto" style={{ color: '#8a8a8a;' }} onClick={() => handleClick()}></i>
                </div>
                <div className="col-10">
                    <h2>Hi @{name}, these are your favs:</h2>
                </div>
                <div className="col-12">
                    <div>
                        {favorites.length > 0 ? <MovieGrid movies={favorites} /> : <NoMovies/>}
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Favs;
