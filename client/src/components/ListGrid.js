import React from 'react';
import { imgUrl } from '../api/tmdb'
import { useNavigate } from 'react-router-dom';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import MovieListHeading from './MovieListHeading';


const ListGrid = (props) => {

    const navigate = useNavigate();

    // const handleClick = (clickedListId) => navigate(`/list/${clickedListId}`);

    return (
        <Container fluid className='margin-top'>
             <MovieListHeading heading="Your lists" />
            <Row className="mx-auto margin-top justify-content-sm-center profileMovies d-flex">
                {React.Children.toArray(props.lists.map((list) =>
                    <Col md={3} className="d-flex flex-column image-container text-center m-3 listsSection">
                         <div className="col-md container rounded" key={list.id}>
                            <i className="fa-solid fa-film favhover"></i>
                        </div>
                        <h3 className="mt-4">{list.title}</h3>
                        {/* <Image className='mb-1 mt-4' src={imgUrl + movie.poster_path} onClick={() => handleClick(movie.id)} alt="poster" rounded fluid /> */}
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
export default ListGrid;
