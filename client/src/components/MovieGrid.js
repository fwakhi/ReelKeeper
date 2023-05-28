import React from 'react';
import { imgUrl } from '../api/tmdb'
import { useNavigate } from 'react-router-dom';
import Buttons from './Buttons';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';


const MovieGrid = (props) => {

    const navigate = useNavigate();

    const handleClick = (clickedMovieId) => navigate(`/movie/${clickedMovieId}`)

    return (
        <Container>
            <Row className="mx-auto">
                {React.Children.toArray(props.movies.map((movie) =>
                    <Col className="image-container">
                        <Image className='mb-1 mt-4' src={imgUrl + movie.poster_path} onClick={() => handleClick(movie.id)} alt="poster" rounded fluid />
                        <Buttons movie={movie} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
export default MovieGrid;
