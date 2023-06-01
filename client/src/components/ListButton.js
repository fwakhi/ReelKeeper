import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

import { getList } from '../api/services/List';
import { getMovieList, saveMovieList, removeMovieList } from '../api/services/MovieList'

const ListButton = (props) => {

    const { auth: { user: { id: userId } } } = useAuth()
    const [lists, setLists] = useState([]);
    const [movielists, setMovielists] = useState([]);
    const movie = props.movie;
    const [listId, setListId] = useState('');

    const getLists = async () => {
        setLists(await getList(userId));
    }

    useEffect(() => {
        getLists();
    }, [])


    const addMovieList = async (listId, movie) => {
        if (movie && listId && await saveMovieList(listId, movie)) {
            setMovielists(await getMovieList(listId));
            setListId(listId);
        }
    }
    console.log("movielists-->", movielists)

    if (movielists?.find(m => m.id == movie.id && m.listId == listId)) {
        return (
            <>
                <li className="nav-item dropdown">
                    <button className="nav-link dropdown-toggle btn listButton p-2" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                        <i className="fa-regular fa-plus" style={{ color: "#1f1f1f" }}></i>
                    </button>
                    <div className="dropdown-menu text-left profileDropdown" aria-labelledby="navbarDropdown">
                        {lists?.map((list) => <li className="dropdown-item px-2" value={list.id} key={list.id} onClick={() => deleteMovieList(list.id, movie)}>{list.title}</li>)}
                    </div>
                </li>
            </>
        )
    }

    const deleteMovieList = async (listId, movie) => {
        if (movie && listId && await removeMovieList(listId, movie)) {
            setMovielists(await getMovieList(listId));
        }
    }

    return (
        <>
            <li className="nav-item dropdown">
                <button className="nav-link dropdown-toggle btn listButton p-2" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                    <i className="fa-regular fa-plus" style={{ color: "#1f1f1f" }}></i>
                </button>

                <div className="dropdown-menu text-left profileDropdown" aria-labelledby="navbarDropdown">
                    {lists?.map((list) => <li className="dropdown-item px-2" value={list.id} key={list.id} onClick={() => addMovieList(list.id, movie)}>{list.title}</li>)}
                </div>
            </li>

        </>
    )
}
export default ListButton;