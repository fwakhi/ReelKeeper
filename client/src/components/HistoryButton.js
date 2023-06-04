import React from "react";
import useAuth from "../hooks/useAuth";
import { saveHistory, removeHistory } from '../api/services/History';
import useInfo from "../hooks/useInfo";
import { refreshUser } from "../api/axios";

const HistoryButton = (props) => {

    const movie = props.movie;
    const { userInfo, setUserInfo } = useInfo()

    const addHistoryMovie = async (movie) => {
        if (movie && userInfo?.id && await saveHistory(movie, userInfo?.id)) {
            setUserInfo(await refreshUser(userInfo?.id));
        }
    }

    const removeHistoryMovie = async (movie) => {
        if (movie && userInfo?.id && await removeHistory(movie.id, userInfo?.id)) {
            setUserInfo(await refreshUser(userInfo?.id));
        }
    }

    const isMovieInHistory = (movie) => {
        if (userInfo?.histories?.length == 0) {
            return false
        }
        const found = userInfo?.histories?.find(m => m.id == movie.id);
        return found != null;
    }

    const handleClick = async (movie) => {
        isMovieInHistory(movie) ? await removeHistoryMovie(movie) : await addHistoryMovie(movie);
    }

    return (
        <button className="btn watchedButton" onClick={() => handleClick(movie)}><i className={`fa-eye ${isMovieInHistory(movie) ? "fa-solid" : "fa-regular"}`} style={{ color: "#1f1f1f" }}></i></button>
    )
}
export default HistoryButton;
