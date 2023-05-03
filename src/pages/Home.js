import React, { useEffect } from "react";

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap/dist/css/bootstrap.min.css";

import styles from "../style/Background.module.css"
import '../style/Home.css';

import Header from '../components/Header';
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
            <div className="container1">
                <h1 className="display-1 titulo">ReelKeeper</h1>
            </div>

            <Link to="movies"><button className="btn btn-dark centerbutton">MOVIES</button></Link>
            <Link to="login"><button className="btn btn-dark loginButton">LOGIN</button></Link>

            {/* <Carousel/> */}
        </>
    )
}
export default Home;

