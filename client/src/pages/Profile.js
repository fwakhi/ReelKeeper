import React, { useContext, useEffect, useState } from "react";

// import styles from "../style/Background.module.css"
import '../style/Home.css';
import { useNavigate } from 'react-router-dom';
import MovieCount from "../components/MovieCount";
import MovieListHeading from "../components/MovieListHeading";
import { getList } from "../api/services/List";
import useAuth from "../hooks/useAuth";




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
            {/* CONTAINER FAVS, HISTORY & WATCHLIST  */}
            <div className="container">
                <div className="row profile">
                    <MovieCount />
                </div>

                <div className="row margin-top justify-content-sm-center profileMovies d-flex">

                    <div className="d-flex flex-column text-center mx-5 favSection">
                        <div className="col-md container rounded " onClick={() => handleClick("favs")}>
                            <i className="fa-solid fa-heart favhover"></i>
                        </div>
                        <h3 className="mt-4">FAVS</h3>
                    </div>


                    <div className="d-flex flex-column text-center mx-5 historySection">
                        <div className="col-md container rounded" onClick={() => handleClick("history")}>
                            <i className="fa-regular fa-eye favhover"></i>
                        </div>
                        <h3>HISTORY</h3>
                    </div>

                    <div className="d-flex flex-column text-center mx-5 watchlistSection">
                        <div className="col-md  container  rounded " onClick={() => handleClick("watchlist")}>
                            <i className="fa-regular fa-bookmark favhover"></i>
                        </div>
                        <h3>WATCHLIST</h3>
                    </div>

                </div>
            </div>

{/* TODO: CREAR UN LISTGRID COMPONENT PARA LAS LISTAS */}
            <div className="container margin-top ">
            <MovieListHeading heading="Your lists" />
                <div className="row margin-top justify-content-sm-center profileMovies d-flex">
                    {lists?.map(list => (<div className="d-flex flex-column text-center mx-5 listsSection">
                        <div className="col-md container rounded " key={list.id}>
                            <i className="fa-solid fa-film favhover"></i>
                        </div>
                        <h3 className="mt-4">{list.title}</h3>
                    </div>))}

                </div>
            </div>

        </>
    )
}
export default Profile;
