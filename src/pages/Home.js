import React, { useEffect } from "react";

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Col, Row } from 'react-bootstrap';

import styles from "../style/Background.module.css"
import '../style/Home.css';

import Carousel from '../components/Carousel';
import { Link } from 'react-router-dom';

// import $ from 'jquery';
// global.jQuery = $;

const Home = () => {
    useEffect(() => {
        document.body.className = styles.dynamicBackground;
        return () => {
            document.body.className = styles.plainBackground;
        }
    }, [])
    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <h1 className="titulo">ReelKeeper</h1>
                </Row>
                <Row className="justify-content-md-center m-5">
                    <Link to="movies"><Button className="mr-5" variant="dark">MOVIES</Button></Link>
                    <Link to="login"><Button className="" variant="dark">LOGIN</Button></Link>
                </Row>
            </Container>
            {/* <Carousel/> */}
        </>
    )
}
export default Home;

