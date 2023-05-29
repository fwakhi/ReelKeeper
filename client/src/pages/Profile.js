import React, { useContext, useEffect } from "react";

// import styles from "../style/Background.module.css"
import '../style/Home.css';
import { useNavigate } from 'react-router-dom';
import useAuth from "../hooks/useAuth";
import useInfo from '../hooks/useInfo';
import { Link } from 'react-router-dom';


const Profile = () => {
    const { auth } = useAuth();
    const name = auth.user.username;
    const { favorites, watchlist, history } = useInfo();
    const totalFavs = favorites.length;
    const totalWatchlist = watchlist.length;
    const totalHistory = history.length;
    const thisYearFilms = history.filter(film => (film.createdAt.split('-')[0] == "2023")).length;

    const navigate = useNavigate();

    const handleClick = (section) => navigate(`/${section}`)

    return (
        <>
            <div className="container">
                <div className="row profile">
                    {/* <div className="col-1">
                        <i className="fa-solid fa-user fa-6x iconProfile" style={{ color: '#8a8a8a' }}></i>
                    </div> */}
                    <div className="col-12 row">
                        <div className="col-md-3">
                            <h2>Hi, @{name}</h2>
                        </div>

                        <div className="row col-md-9 ml-auto movieCount">
                            <div className="col-2 text-center border-dark border-right"><h4>{totalHistory}</h4>FILMS</div>
                            <div className="col-2 text-center border-dark border-right"><h4>{totalFavs}</h4>FAVS</div>
                            <div className="col-2 text-center border-dark border-right"><h4>{thisYearFilms}</h4>2023</div>
                            <div className="col-2 text-center border-dark border-right"><h4>{totalWatchlist}</h4>WATCHLIST</div>
                            <div className="col-2 text-center"><h4>0</h4>LISTS</div>
                        </div>
                    </div>
                </div>

                <div className="row margin-top justify-content-sm-center profileMovies d-flex">

                    <div className="d-flex flex-column text-center mx-5 favSection">
                        <div className="col-md container rounded " onClick={() => handleClick("favs")}>
                            <i className="fa-solid fa-heart favhover"></i>
                        </div>
                        <h3 className="mt-4">FAVS</h3>
                    </div>


                    <div className="d-flex flex-column text-center mx-5 historySection">
                        <div className="col-md container rounded" onClick={() => handleClick("history")}>
                            <i className="fa-regular fa-eye favhover"></i>
                        </div>
                        <h3>HISTORY</h3>
                    </div>

                    <div className="d-flex flex-column text-center mx-5 watchlistSection">
                    <div className="col-md  container  rounded " onClick={() => handleClick("watchlist")}>
                        <i className="fa-regular fa-bookmark favhover"></i>
                    </div>
                    <h3>WATCHLIST</h3>
                    </div>

                </div>
            </div>

        </>
    )
}
export default Profile;
