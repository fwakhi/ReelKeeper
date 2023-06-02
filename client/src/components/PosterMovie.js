import React from 'react';
import { imgUrl } from '../api/tmdb'
import { useNavigate } from 'react-router-dom';
import Buttons from './Buttons';
import { Image, Row } from 'react-bootstrap';


const PosterMovie = (props) => {

    const navigate = useNavigate();
    const handleClick = (clickedMovieId) => navigate(`/movie/${clickedMovieId}`)

    return (
        <Row className='d-flex flex-column justify-content-start m-3'>
            <Image className='image-container mb-1 mt-4' src={imgUrl + props.movie.poster_path} onClick={() => handleClick(props.movie.id)} alt="poster" rounded />
            <Buttons movie={props.movie} />
        </Row>
    );
}
export default PosterMovie;
