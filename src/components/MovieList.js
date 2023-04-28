import React from 'react';

const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent

    const replaceImage = (error) => {
        error.target.src = "images/default.jpg";
    }

    return(
        <>
        {props.movies.map((movie,index)=>
        <div className='image-container d-flex justify-content-start m-3'>
            <img src={movie.Poster} alt="poster" onError={replaceImage}></img>
            <div onClick={() => props.handleFavouritesClick(movie)} className='overlay d-flex align-items-center justify-items-center'>
            <FavouriteComponent/>
            </div>
        </div>)}
        </>
    )
}
export default MovieList;