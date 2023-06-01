import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

import { getList } from '../api/services/List';

const ListButton = (props) => {

    const { auth: { user: { id: userId } } } = useAuth()
    const [lists, setLists] = useState([]);
    const movie = props.movie;

    const getLists = async () => {
        setLists(await getList(userId));
    }

    useEffect(() => {
        getLists();
    }, [])

    //TODO1: hacer el model y to la vaina de MovieList
    //TODO2: addToList (aki)
    //TODO4: cambiar la primary key de Lists porque se pueden crear varias con el mismo nombre

    // const addHistoryMovie = async (movie) => {
    //     if (userId && await saveHistory(movie, userId)) {
    //         setHistory(await getHistory(userId));
    //     }
    // }

    // const removeHistoryMovie = async (movie) => {
    //     if (userId && await removeHistory(movie.id, userId)) {
    //         setHistory(await getHistory(userId));
    //     }
    // }

    // if (history?.find(m => m.id == movie.id)) {
    //     return (
    //         <>
    //             <button className="btn watchedButton crossed" onClick={() => removeHistoryMovie(movie)}><i className="fa-solid fa-eye" style={{ color: "#1f1f1f" }}></i></button>
    //         </>
    //     )
    // }

    return (
        <>
            <li className="nav-item dropdown">
                <button className="nav-link dropdown-toggle btn listButton p-2" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/*onClick={() => addHistoryMovie(movie)}*/>
                    <i className="fa-regular fa-plus" style={{ color: "#1f1f1f" }}></i>
                </button>

                <div className="dropdown-menu text-left profileDropdown" aria-labelledby="navbarDropdown">
                    {lists?.map((list) => <li className="dropdown-item px-2" value={list.id} key={list.id}>{list.title}</li>)}
                </div>
            </li>
            {/* <button className="btn listButton" onClick={() => addHistoryMovie(movie)}> <i className="fa-regular fa-plus" style={{ color: "#1f1f1f" }}></i></button > */}
        </>
    )
}
export default ListButton;