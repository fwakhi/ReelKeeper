import React, { useContext, useEffect } from "react";
import '../style/Home.css';
import { useNavigate } from 'react-router-dom';
import useAuth from "../hooks/useAuth";
import useInfo from '../hooks/useInfo'
import MovieGrid from '../components/MovieGrid';


const Favs = () => {
    const { auth } = useAuth();
    const name = auth.user.username;
    const { favorites, watchlist, history } = useInfo();
    const navigate = useNavigate();

    const handleClick = () => navigate(`/profile`)

    return (

        <div className="container">
            <div className="row margin-top">
                <div className="col-1">
                    <i class="fa-solid fa-circle-left fa-2xl" style={{ color: '#8a8a8a;' }} onClick={() => handleClick()}></i>
                </div>
                <div className="col-12 ml-5">
                    <div className="col-12">
                        <h1>Hi, @{name}, these are your favs:</h1>
                    </div>

                    <div>
                        <MovieGrid movies={favorites} />
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Favs;
