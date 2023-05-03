import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from "react";

import '../style/header.css';

import { Link } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import $ from 'jquery';

global.jQuery = $;

const Header = () => {
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary ">
                <div className="container-fluid fondoNav">

                    <div className="mr-auto fondoNav">
                        <a className="navbar-brand " href="#">
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-camera-reels mr-2 mb-3 fondoNav" viewBox="0 0 16 16">
                                    <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0z" />
                                    <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7zm6 8.73V7.27l-3.5 1.555v4.35l3.5 1.556zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z" />
                                    <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                </svg>
                                <span className="display-6 text-dark fondoNav">ReelKeeper</span>
                            </Link>
                        </a>
                    </div>

                    <div className="collapse navbar-collapse col-8 fondoNav" id="navbarSupportedContent">
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

                            <li className="nav-item purple borde rounded ml-3 fondoNav">
                                <a className="nav-link text-white " href="#">Login</a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}
export default Header;
