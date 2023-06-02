import React from "react";
import useAuth from "../hooks/useAuth";
import { saveHistory, removeHistory } from '../api/services/History';
import useInfo from "../hooks/useInfo";
import { refreshUser } from "../api/axios";

const HistoryButton = (props) => {

    const movie = props.movie;
    const { userInfo, setUserInfo } = useInfo()

    const addHistoryMovie = async (movie) => {
        if (userInfo?.id && await saveHistory(movie, userInfo?.id)) {
            setUserInfo(await refreshUser(userInfo?.id));
        }
    }

    const removeHistoryMovie = async (movie) => {
        if (userInfo?.id && await removeHistory(movie.id, userInfo?.id)) {
            setUserInfo(await refreshUser(userInfo?.id));
        }
    }

    if (userInfo?.histories?.find(m => m.id == movie.id)) {
        return (
            <>
                <button className="btn watchedButton crossed" onClick={() => removeHistoryMovie(movie)}><i className="fa-solid fa-eye" style={{ color: "#1f1f1f" }}></i></button>
            </>
        )
    }

    return (
        <>
            <button className="btn watchedButton" onClick={() => addHistoryMovie(movie)}><i className="fa-regular fa-eye" style={{ color: "#1f1f1f" }}></i></button>
        </>
    )
}
export default HistoryButton;
