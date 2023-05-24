import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { getFavorites, saveFavorite, removeFavorite } from '../api/services/Favorites'
import useInfo from "../hooks/useInfo";

const AddFavourites = (props) => {

    const { movie } = props;

    const { auth: { user: { id: userId } } } = useAuth()
    const { favorites, setFavorites } = useInfo()

    const addFavouriteMovie = async (movie) => {
        if (userId && await saveFavorite(movie, userId)) {
            const newFavouriteList = [...favorites, movie];
            setFavorites(newFavouriteList);
        }
    }

    const removeFavouriteMovie = async (movie) => {
        if (userId && await removeFavorite(movie.id, userId)) {
            const newFavouriteList = favorites.filter((fav) => fav.id.toString() !== movie.id.toString());
            setFavorites(newFavouriteList);
        }
    }

    if (favorites?.find(m => m.id == movie.id)) {
        return (
            <>
                <button className="btn favButton broken" onClick={() => removeFavouriteMovie(movie)}>
                    <i className="fa-solid fa-heart" style={{ color: '#8a8a8a;' }}></i>
                </button>
            </>
        )
    }

    return (
        <>
            <button className="btn favButton" onClick={() => addFavouriteMovie(movie)}>
                <i className="fa-regular fa-heart" style={{ color: '#8a8a8a;' }}></i>
            </button>
        </>
    )
}
export default AddFavourites;
