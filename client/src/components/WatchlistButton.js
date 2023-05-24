import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { getWatchlist, saveWatchlist, removeWatchlist } from '../api/services/Watchlist'

const WatchlistButton = (props) => {
    
    const { auth: { user: { id: userId } } } = useAuth()
    const movie = props.movie;
    const [watchlist, setWatchlist] = useState([]);
    

    const addWatchlistMovie = async (movie) => {
        if (userId && await saveWatchlist(movie, userId)) {
            setWatchlist(await getWatchlist(userId));
            //TODO aun no se guarda aunque se mete dentro
        }
    }

    const removeWatchlistMovie = async (movie) => {
        if (userId && await removeWatchlist(movie.id, userId)) {
            setWatchlist(await getWatchlist(userId));
           
        }
    }

    
    if (watchlist?.find(m => m.id == movie.id)) {
        return (
            <>
                <button className="btn watchlistButton" onClick={() => removeWatchlistMovie(movie)}><i className="fa-solid fa-bookmark" style={{ color: "#8a8a8a;" }}></i></button>
            </>
        )
    }



    return (
        <>
            <button className="btn watchlistButton" onClick={() => addWatchlistMovie(movie)}><i className="fa-regular fa-bookmark" style={{ color: "#8a8a8a;" }}></i></button>
        </>
    )
}
export default WatchlistButton;
