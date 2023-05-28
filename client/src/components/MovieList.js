import React from 'react';
import { imgUrl } from '../api/tmdb'
import { useNavigate } from 'react-router-dom';
import Buttons from './Buttons';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';



const MovieList = (props) => {

    const navigate = useNavigate();

    const handleClick = (clickedMovieId) => navigate(`/movie/${clickedMovieId}`)

    return (
        <>
            {React.Children.toArray(props.movies.map((movie) =>
                <div key={movie.id} className='image-container d-flex justify-content-start m-3'>
                    <Image className='mb-1 mt-4' src={imgUrl + movie.poster_path} onClick={() => handleClick(movie.id)} alt="poster" rounded />
                    {props.hideButtons ? "" : <Buttons movie={movie} />}
                </div>
            ))}
        </>
    )
}
export default MovieList;
