import React from "react";

import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';


import "../style/Header.css"


const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">

                <div className="container-fluid">

                    <div className="mr-auto">
                        <a className="navbar-brand " href="#">
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <i className="fa-solid fa-film mr-3 text-dark"></i>
                                <span className="display-6 text-dark">ReelKeeper</span>
                            </Link>
                        </a>
                    </div>

                    <button className="navbar-toggler negro" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-white"></span>
            </button>
                    <div className="collapse navbar-collapse col-8" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active rojito borde text-white" aria-current="page" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link amarillo borde text-white" href="#">Lists</a>
                            </li>

                            {/* DROPDOWN  */}
                            <li className="nav-item dropdown verde">
                                <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Movies
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Popular this week</a>
                                    <a className="dropdown-item" href="#">By genre</a>
                                    <a className="dropdown-item" href="#">By director</a>
                                    <a className="dropdown-item" href="#">By country</a>
                                </div>
                            </li>

                            <li className="nav-item purple borde rounded ml-3">
                                <Link to="login" style={{ textDecoration: 'none' }}><span className="nav-link text-white">LOGIN</span></Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}
export default Header;
