import React, { useEffect } from "react";

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap/dist/css/bootstrap.min.css";

import styles from "../style/Background.module.css"
import '../style/Login.css';

import Header from '../components/Header';
import { Link } from 'react-router-dom';

// import $ from 'jquery';
// global.jQuery = $;

const Login = () => {
    useEffect(() => {
        document.body.className = styles.dynamicBackground;
        return () => {
            document.body.className = styles.plainBackground;
        }
    }, [])
    return (
        <>
            <section className="vh-50 pt-5">
                <div className="container py-5 h-75 ">
                    <div className="row d-flex justify-content-center align-items-center h-75 ">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5 ">
                            <div className="card bg-dark text-white">
                                <div className="card-body p-5 text-center">

                                    <div className="mb-md-5 mt-md-4 pb-5">

                                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                        <p className="text-white-50 mb-5">Please enter your mail and password!</p>

                                        <div className="form-outline form-white mb-4">
                                            <input type="email" id="typeEmailX" className="form-control form-control-lg" />
                                            <label className="form-label" for="typeEmailX">Email</label>
                                        </div>

                                        <div className="form-outline form-white mb-5">
                                            <input type="password" id="typePasswordX" className="form-control form-control-lg" />
                                            <label className="form-label mb-5" for="typePasswordX">Password</label>
                                        </div>
                                        <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
                                        <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
                                    </div>
                                    <div>
                                        <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Login;
