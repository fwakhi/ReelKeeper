import React from "react";
import { saveWatchlist, removeWatchlist } from '../api/services/Watchlist'
import useInfo from "../hooks/useInfo";
import { refreshUser } from "../api/axios";

const WatchlistButton = (props) => {

    const movie = props.movie;
    const { userInfo } = useInfo()

    const addWatchlistMovie = async (movie) => {
        if (userInfo?.id && await saveWatchlist(movie, userInfo?.id)) {
            refreshUser();
        }
    }

    const removeWatchlistMovie = async (movie) => {
        if (userInfo?.id && await removeWatchlist(movie.id, userInfo?.id)) {
            refreshUser()
        }
    }

    if (userInfo?.watchlists?.find(m => m.id == movie.id)) {
        return (
            <>
                <button className="btn watchlistButton" onClick={() => removeWatchlistMovie(movie)}><i className="fa-solid fa-bookmark" style={{ color: "#1f1f1f" }}></i></button>
            </>
        )
    }

    return (
        <>
            <button className="btn watchlistButton" onClick={() => addWatchlistMovie(movie)}><i className="fa-regular fa-bookmark" style={{ color: "#1f1f1f" }}></i></button>
        </>
    )
}
export default WatchlistButton;
