import React, { useEffect, useRef, useState } from 'react';
import { imgUrl } from '../api/tmdb'
import { useNavigate } from 'react-router-dom';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import MovieListHeading from './MovieListHeading';
import { getList, saveList } from '../api/services/List';
import useAuth from "../hooks/useAuth";
import useInfo from '../hooks/useInfo';
import { refreshUser } from '../api/axios';


const ListGrid = (props) => {
    const { userInfo, setUserInfo } = useInfo()

    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');
    const [scssMsg, setScssMsg] = useState('');
    const [msgClass, setMsgClass] = useState("offscreen");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (userInfo?.id) {
            const res = await saveList(inputValue, userInfo?.id);

            if (res.error) {
                setMsgClass("scssMsg error");
                setScssMsg(res.message);
            } else {
                setMsgClass("scssMsg");
                setScssMsg(res.message);
                setUserInfo(await refreshUser(userInfo?.id));
            }
            setInputValue('');
            setTimeout(() => {
                setScssMsg('');
                setMsgClass("offscreen");
            }, 3000);
        }
    };

    const handleClick = (clickedList) => navigate(`/profile/lists/${clickedList}`)

    return (
        <Container fluid className='margin-top'>
            <Row>
                <h1 className='mr-5'>Your lists</h1>
                <Button variant="dark" size="lg" data-toggle="collapse" href="#collapseForm" role="button" aria-expanded="false" aria-controls="collapseForm">+</Button>
                <div className="collapse ml-3 mr-1 mt-2 align-middle" id="collapseForm">
                    <input type='text' placeholder='Title of the list' value={inputValue} className='form-control mr-3 align-middle' onChange={handleInputChange} name='title' id='title' />
                    <Button type="submit" className=' btn btn-dark' onClick={handleSubmit} data-toggle="collapse" href="#collapseForm" >Create</Button>
                </div>
            </Row>
            <p className={msgClass} aria-live="assertive">{scssMsg}</p>
            <Row className="mx-auto margin-top justify-content-sm-center profileMovies d-flex">
                {React.Children.toArray(userInfo?.lists?.map((list) =>
                    <Col md={3} className="d-flex flex-column image-container text-center m-3 listsSection mb-5" onClick={() => handleClick(list.id)}>
                        <div className="col-md container rounded">
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
