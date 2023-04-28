import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import React from "react";
import '../style/inicio.css';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Inicio from '../components/Inicio';
import { Link } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import $ from 'jquery';

global.jQuery = $;

const Home = () => {
    return (
        <>
      <body>
        <Header/>
        <Inicio/>
       
        <Link to="ViewMovies"><button className="btn btn-dark centerbutton">MOVIES</button></Link>
        <Link to="login"><button className="btn btn-dark loginButton">LOGIN</button></Link>
     
        {/* <Carousel/> */}
        </body>
        </>
    )
}
export default Home;

