import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { getHistory, saveHistory, removeHistory } from '../api/services/History';
import useInfo from "../hooks/useInfo";

const HistoryButton = (props) => {
    
    const { auth: { user: { id: userId } } } = useAuth()
    const movie = props.movie;
    const { history, setHistory } = useInfo()
    

    const addHistoryMovie = async (movie) => {
        if (userId && await saveHistory(movie, userId)) {
            setHistory(await getHistory(userId));
            
        }
    }

    const removeHistoryMovie = async (movie) => {
        if (userId && await removeHistory(movie.id, userId)) {
            setHistory(await getHistory(userId));
           
        }
    }

    
    if (history?.find(m => m.id == movie.id)) {
        return (
            <>
                <button className="btn watchedButton crossed" onClick={() => removeHistoryMovie(movie)}><i className="fa-solid fa-eye" style={{ color: "#8a8a8a;" }}></i></button>
            </>
        )
    }



    return (
        <>
            <button className="btn watchedButton" onClick={() => addHistoryMovie(movie)}><i className="fa-regular fa-eye" style={{ color: "#8a8a8a;" }}></i></button>
        </>
    )
}
export default HistoryButton;
