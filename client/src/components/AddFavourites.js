import React, { } from "react";
import { saveFavorite, removeFavorite } from '../api/services/Favorites'
import useInfo from "../hooks/useInfo";
import { refreshUser } from "../api/axios";

const AddFavourites = (props) => {

    const { movie } = props;
    const { userInfo, setUserInfo } = useInfo()

    const addFavouriteMovie = async (movie) => {
        if (userInfo?.id && await saveFavorite(movie, userInfo?.id)) {
            const newFavouriteList = [...userInfo?.favorites, movie];
            setUserInfo(await refreshUser(userInfo?.id));
        }
    }

    const removeFavouriteMovie = async (movie) => {
        if (userInfo?.id && await removeFavorite(movie.id, userInfo?.id)) {
            const newFavouriteList = userInfo?.favorites.filter((fav) => fav.id?.toString() !== movie.id?.toString());
            setUserInfo(await refreshUser(userInfo?.id));
        }
    }

    if (userInfo?.favorites?.find(m => m.id == movie.id)) {
        return (
            <>
                <button className="btn favButton broken" onClick={() => removeFavouriteMovie(movie)}>
                    <i className="fa-solid fa-heart" style={{ color: '#1f1f1f' }}></i>
                </button>
            </>
        )
    }

    return (
        <>
            <button className="btn favButton" onClick={() => addFavouriteMovie(movie)}>
                <i className="fa-regular fa-heart" style={{ color: '#1f1f1f' }}></i>
            </button>
        </>
    )
}
export default AddFavourites;
