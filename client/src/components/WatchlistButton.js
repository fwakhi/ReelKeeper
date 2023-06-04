import React from "react";
import { saveWatchlist, removeWatchlist } from '../api/services/Watchlist'
import useInfo from "../hooks/useInfo";
import { refreshUser } from "../api/axios";

const WatchlistButton = (props) => {

    const movie = props.movie;
    const { userInfo, setUserInfo } = useInfo();


    const addWatchlistMovie = async (movie) => {
        if (movie && await saveWatchlist(movie, userInfo.id)) {
            setUserInfo(await refreshUser(userInfo.id));
        }
    }

    const removeWatchlistMovie = async (movie) => {
        if (movie && await removeWatchlist(movie.id, userInfo.id)) {
            setUserInfo(await refreshUser(userInfo.id));
        }
    }

    const isMovieInWatchlist = (movie) => {
        if (userInfo?.watchlists?.length === 0) {
            return false
        }
        const found = userInfo?.watchlists?.find(m => m.id === movie.id);
        return found != null;
    }

    const handleClick = async (movie) => {
        isMovieInWatchlist(movie) ? await removeWatchlistMovie(movie) : await addWatchlistMovie(movie);
    }

    return (
        <button className="btn watchlistButton" onClick={() => handleClick(movie)}><i className={` fa-bookmark ${isMovieInWatchlist(movie) ? "fa-solid" : "fa-regular"}`} style={{ color: "#1f1f1f" }}></i></button>
    )
}
export default WatchlistButton;
