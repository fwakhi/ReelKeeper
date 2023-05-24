import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { getFavorites, saveFavorite, removeFavorite } from '../api/services/Favorites'

const AddFavourites = (props) => {
    const favourites = props.favourites;
    const movie = props.movie;

    const { auth: { user: { id: userId } } } = useAuth()


    const addFavouriteMovie = async (movie) => {
        if (userId && await saveFavorite(movie, userId)) {
            if (props.onFavouritesAdded(movie));
        }
    }

    const removeFavouriteMovie = async (movie) => {
        if (userId && await removeFavorite(movie.id, userId)) {
            props.onFavouritesRemoved(movie);
        }
    }

    if (favourites.find(m => m.id == movie.id)) {
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
