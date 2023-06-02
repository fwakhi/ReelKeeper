import React, { useEffect, useState } from "react";
import { saveMovieList, removeMovieList } from '../api/services/MovieList'
import useInfo from "../hooks/useInfo";
import { refreshUser } from "../api/axios";

const ListButton = (props) => {

    const movie = props.movie;

    const { userInfo, setUserInfo } = useInfo();
    const [listsMap, setListsMap] = useState([]);

    useEffect(() => {
        mapMoviesInList();
    }, [movie, userInfo])

    const addMovieList = async (listId, movie) => {
        if (movie && listId && await saveMovieList(listId, movie)) {
            setUserInfo(await refreshUser(userInfo.id));
        }
    }

    const deleteMovieList = async (listId, movie) => {
        if (movie && listId && await removeMovieList(listId, movie)) {
            setUserInfo(await refreshUser(userInfo.id));
        }
    }

    const mapMoviesInList = () => {
        const list = userInfo?.lists?.map(list => { { return { id: list.id, contains: list.movielists.find(k => k.id == movie.id) != null } } })
        setListsMap(list);
    }

    const isMovieInList = (listId) => {
        if (listsMap?.length == 0) {
            return false
        }
        const found = listsMap?.find(list => list.id == listId && list.contains);
        return found != null;
    }

    const handleClick = async (listId, movie) => {
        isMovieInList(listId) ? await deleteMovieList(listId, movie) : await addMovieList(listId, movie);
    }

    return (
        <>
            <li className="nav-item dropdown">
                <button className="nav-link dropdown-toggle btn listButton p-2" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                    <i className="fa-regular fa-plus" style={{ color: "#1f1f1f" }}></i>
                </button>

                <div className="dropdown-menu text-left profileDropdown" aria-labelledby="navbarDropdown">
                    {userInfo?.lists?.map((list) => <li className={`dropdown-item px-2 ${isMovieInList(list.id) ? "item-selected" : ""}`} value={list.id} key={list.id} onClick={() => handleClick(list.id, movie)}>{list.title}</li>)}
                </div>
            </li>

        </>
    )
}
export default ListButton;
