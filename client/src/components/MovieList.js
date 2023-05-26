import React from 'react';
import { imgUrl } from '../api/tmdb'
import { useNavigate } from 'react-router-dom';
import Buttons from './Buttons';


const MovieList = (props) => {

    const navigate = useNavigate();

    const handleClick = (clickedMovieId) => navigate(`/movie/${clickedMovieId}`)

    return (
        <>
            {React.Children.toArray(props.movies.map((movie) =>
                <div key={movie.id} className='image-container d-flex justify-content-start m-3'>
                    <img onClick={() => handleClick(movie.id)} src={imgUrl + movie.poster_path} alt="poster" className='mb-1'></img>
                    {props.hideButtons ? "" : <Buttons movie={movie} />}
                </div>
            ))}
        </>
    )
}
export default MovieList;
