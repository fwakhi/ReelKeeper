import React from "react";
import useAuth from "../hooks/useAuth";
import { getWatchlist, saveWatchlist, removeWatchlist } from '../api/services/Watchlist'
import useInfo from "../hooks/useInfo";

const WatchlistButton = (props) => {

    const { auth: { user: { id: userId } } } = useAuth()
    const { watchlist, setWatchlist } = useInfo()

    const movie = props.movie;

    const addWatchlistMovie = async (movie) => {
        if (userId && await saveWatchlist(movie, userId)) {
            setWatchlist(await getWatchlist(userId));
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
