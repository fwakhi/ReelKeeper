import React, { useState } from "react";
import useAuth from "../hooks/useAuth";

import { saveMovieList, removeMovieList } from '../api/services/MovieList'
import useInfo from "../hooks/useInfo";
import { refreshUser } from "../api/axios";

const ListButton = (props) => {

    const movie = props.movie;

    const [listId, setListId] = useState('');
    const { userInfo, setUserInfo } = useInfo();

    const addMovieList = async (listId, movie) => {
        if (movie && listId && await saveMovieList(listId, movie)) {
            setUserInfo(await refreshUser(userInfo?.id));
            setListId(listId);
        }
    }

    const deleteMovieList = async (listId, movie) => {
        if (movie && listId && await removeMovieList(listId, movie)) {
            setUserInfo(await refreshUser(userInfo?.id));
        }
    }

    if (userInfo?.lists?.movielists?.find(m => m.id == movie.id && m.listId == listId)) {
        return (
            <>
                <li className="nav-item dropdown">
                    <button className="nav-link dropdown-toggle btn listButton p-2" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                        <i className="fa-regular fa-plus" style={{ color: "#1f1f1f" }}></i>
                    </button>
                    <div className="dropdown-menu text-left profileDropdown" aria-labelledby="navbarDropdown">
                        {userInfo?.lists?.map((list) => <li className="dropdown-item px-2" value={list.id} key={list.id} onClick={() => deleteMovieList(list.id, movie)}>{list.title}</li>)}
                    </div>
                </li>
            </>
        )
    }

    return (
        <>
            <li className="nav-item dropdown">
                <button className="nav-link dropdown-toggle btn listButton p-2" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                    <i className="fa-regular fa-plus" style={{ color: "#1f1f1f" }}></i>
                </button>

                <div className="dropdown-menu text-left profileDropdown" aria-labelledby="navbarDropdown">
                    {userInfo?.lists?.map((list) => <li className="dropdown-item px-2" value={list.id} key={list.id} onClick={() => addMovieList(list.id, movie)}>{list.title}</li>)}
                </div>
            </li>

        </>
    )
}
export default ListButton;