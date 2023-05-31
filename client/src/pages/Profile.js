import React, { useContext, useEffect, useState } from "react";
// import styles from "../style/Background.module.css"
import '../style/Home.css';
import { useNavigate } from 'react-router-dom';
import MovieCount from "../components/MovieCount";
import { getList, saveList, removeList } from "../api/services/List";
import useAuth from "../hooks/useAuth";
import ListGrid from "../components/ListGrid";



const Profile = () => {
    const navigate = useNavigate();
    const { auth } = useAuth();
    const userId = auth.user.id;
    const [lists, setLists] = useState([]);

    const getLists = async () => {
        setLists(await getList(userId));
    }

    useEffect(() => {
        getLists();
    }, [])

    const handleClick = (section) => navigate(`/${section}`)

    return (
        <>
            <div className="container">
                {/* CONTAINER FAVS, HISTORY & WATCHLIST  */}
                <div className="container">
                    <div className="row profile">
                        <MovieCount />
                    </div>
                    {/* FAV BUTTON  */}
                    <div className="row margin-top justify-content-sm-center profileMovies d-flex">
                        <div className="d-flex flex-column text-center mx-5 favSection">
                            <div className="col-md container rounded " onClick={() => handleClick("favs")}>
                                <i className="fa-solid fa-heart"></i>
                            </div>
                            <h3 className="mt-4">FAVS</h3>
                        </div>

                        {/* HISTORY BUTTON  */}
                        <div className="d-flex flex-column text-center mx-5 historySection">
                            <div className="col-md container rounded" onClick={() => handleClick("history")}>
                                <i className="fa-regular fa-eye"></i>
                            </div>
                            <h3>HISTORY</h3>
                        </div>

                        {/* WATCHLIST BUTTON  */}
                        <div className="d-flex flex-column text-center mx-5 watchlistSection">
                            <div className="col-md  container  rounded " onClick={() => handleClick("watchlist")}>
                                <i className="fa-regular fa-bookmark"></i>
                            </div>
                            <h3>WATCHLIST</h3>
                        </div>

                    </div>
                </div>


                <ListGrid lists={lists} />
            </div>
        </>
    )
}
export default Profile;
