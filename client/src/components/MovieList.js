import React, { useState } from 'react';
import { imgUrl } from '../api/tmdb'
import { Link, useNavigate } from 'react-router-dom';



const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent
    const navigate = useNavigate();


    // const replaceImage = (error) => {
    //     error.target.src = "images/default2.png";
    // }

    const handleClick = (clickedMovieId) => {
        navigate(`/movie/${clickedMovieId}`)
    }

    return (
        <>
            {props.movies.map((movie, index) =>
                <div className='image-container d-flex justify-content-start m-3'>
                    <img onClick={() => handleClick(movie.id)} src={imgUrl + movie.poster_path} alt="poster"></img>
                    <div onClick={() => props.handleFavouritesClick(movie)} className='justify-content-end'>
                        <FavouriteComponent />
                    </div>
                </div>
            )}
        </>
    )
}
export default MovieList;