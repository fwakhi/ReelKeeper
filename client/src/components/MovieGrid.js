import React from 'react';
import { Container, Row } from 'react-bootstrap';
import PosterMovie from './PosterMovie';


const MovieGrid = (props) => {
    return (
        <Container>
            <Row>
                {React.Children.toArray(props.movies?.map((movie) =>
                    <PosterMovie movie={movie} />
                ))}
            </Row>
        </Container>
    );
}
export default MovieGrid;
