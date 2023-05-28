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
    console.log("HISTORY-->", history);
    const totalFavs = favorites.length;
    const totalWatchlist = watchlist.length;
    const totalHistory = history.length;
    const thisYearFilms = history.filter(film => (film.createdAt.split('-')[0] == "2023")).length;

    const navigate = useNavigate();

    const handleClick = (section) => navigate(`/${section}`)

    return (
        <>
            <div className="container">
                <div className="row margin-top">
                    <div className="col-1">
                        <i className="fa-solid fa-user fa-6x iconProfile" style={{ color: '#8a8a8a;' }}></i>
                    </div>
                    <div className="col-10 ml-5">
                        <div className="col-12">
                            <h1>Hi, @{name}</h1>
                        </div>

                        <div className="row movieCount mt-4">
                            <div className="col-2 text-center border-dark border-right"><h4>{totalHistory}</h4>FILMS</div>
                            <div className="col-2 text-center border-dark border-right"><h4>{totalFavs}</h4>FAVS</div>
                            <div className="col-2 text-center border-dark border-right"><h4>{thisYearFilms}</h4>2023</div>
                            <div className="col-2 text-center border-dark border-right"><h4>{totalWatchlist}</h4>WATCHLIST</div>
                            <div className="col-2 text-center"><h4>0</h4>LISTS</div>
                        </div>
                    </div>
                </div>

                <div className="row margin-top justify-content-md-center profileMovies d-flex">
                    
                        <div className="col-3 container border rounded" onClick={() => handleClick("favs")}>
                            <i className="fa-solid fa-heart" style={{ color: '#d9d9d9' }}></i>
                            
                        </div>
                        
                    
                    
                    <div className="col-3  container border rounded" onClick={() => handleClick("history")}>
                        <i className="fa-regular fa-eye fa-8x" style={{ color: "#d9d9d9" }}></i>
                    </div>
                   
                    <div className="col-3  container border rounded" onClick={() => handleClick("watchlist")}>
                      <i className="fa-regular fa-bookmark fa-8x" style={{ color: "#d9d9d9" }}></i>
                    </div>
                   
                </div>
            </div>

        </>
    )
}
export default Profile;
