import React from 'react';
import { imgUrl } from '../api/tmdb'
import { useNavigate } from 'react-router-dom';
import Buttons from './Buttons';
import AddFavourites from '../components/AddFavourites';

const MovieList = (props) => {

    const navigate = useNavigate();

    const handleClick = (clickedMovieId) => {
        navigate(`/movie/${clickedMovieId}`)
    }

    return (
        <>
            {props.movies.map((movie, _) =>
                <div key={movie.id} className='image-container d-flex justify-content-start m-3'>
                    <img onClick={() => handleClick(movie.id)} src={imgUrl + movie.poster_path} alt="poster" className='mb-1'></img>
                    <div onClick={() => props.handleFavouritesClick(movie)} className='justify-content-end'>
                        <AddFavourites />
                    </div>
                   {/* <Buttons  movies={movie}
                    handleFavouritesClick={addFavouriteMovie} /> */}
                </div>
            )}
        </>
    )
}
export default MovieList;
