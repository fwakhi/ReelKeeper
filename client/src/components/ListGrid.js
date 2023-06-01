import React, { useEffect, useRef, useState } from 'react';
import { imgUrl } from '../api/tmdb'
import { useNavigate } from 'react-router-dom';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import MovieListHeading from './MovieListHeading';
import { getList, saveList } from '../api/services/List';
import useAuth from "../hooks/useAuth";
import useInfo from '../hooks/useInfo';


const ListGrid = (props) => {
    const { auth } = useAuth();
    const userId = auth.user.id;
    const { lists, setLists } = useInfo()

    // const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');
    const [scssMsg, setScssMsg] = useState('');
    const [msgClass, setMsgClass] = useState("offscreen");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (userId) {
            const res = await saveList(inputValue, userId);

            if (res.error) {
                setMsgClass("scssMsg error");
                setScssMsg(res.message);
            } else {
                setMsgClass("scssMsg");
                setScssMsg(res.message);
                setLists(await getList(auth.user.id));
            }
            setInputValue('');
            setTimeout(() => {
                setScssMsg('');
                setMsgClass("offscreen");
            }, 3000);
        }
    };

    // const handleClick = (clickedListId) => navigate(`/list/${clickedListId}`);

    return (
        <Container fluid className='margin-top'>
            <MovieListHeading heading="Your lists" />
            <p className={msgClass} aria-live="assertive">{scssMsg}</p>
            <Row className="mx-auto margin-top justify-content-sm-center profileMovies d-flex">
                <div className='d-flex flex-column'>
                    <div className="castTag d-flex flex-column text-center m-5 listsSection newList" data-toggle="collapse" href="#collapseForm" role="button" aria-expanded="false" aria-controls="collapseForm">
                        <i className="fa-solid fa-plus"></i>
                    </div>
                    <div className="collapse mt-3" id="collapseForm">
                        <form>
                            <input type='text' placeholder='Title of the list' value={inputValue} className='form-control' onChange={handleInputChange} name='title' id='title' />
                            <button type="submit" className='btn btn-dark mt-1' onClick={handleSubmit} data-toggle="collapse" href="#collapseForm" >Create</button>
                        </form>
                    </div>
                </div>

                {React.Children.toArray(lists.map((list) =>
                    <Col md={3} className="d-flex flex-column image-container text-center m-3 listsSection mb-5">
                        <div className="col-md container rounded" key={list.id}>
                            <i className="fa-solid fa-film"></i>
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
