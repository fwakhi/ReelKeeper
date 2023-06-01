import React, { useContext, useEffect } from "react";
import '../style/Home.css';
import { useNavigate } from 'react-router-dom';
import useAuth from "../hooks/useAuth";
import useInfo from '../hooks/useInfo'
import MovieGrid from '../components/MovieGrid';
import NoMovies from "../components/NoMovies";
import BackButton from "../components/BackButton";


const Watchlist = () => {
    const { auth } = useAuth();
    const name = auth.user.username;
    const { watchlist } = useInfo();
    const navigate = useNavigate();
    const handleClick = () => navigate(`/profile`)

    return (

        <div className="container">
            <div className="row margin-top">
            <BackButton/>
                <div className="col-10">
                    <h2>Hi, @{name}, this is your Watchlist:</h2>
                </div>
                <div className="col-12 ml-5">
                    <div>
                        {watchlist.length > 0 ? <MovieGrid movies={watchlist} /> : <NoMovies/>}
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Watchlist;
