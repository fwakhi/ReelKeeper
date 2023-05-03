import React from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap/dist/css/bootstrap.min.css";

import '../style/loginPage.css';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

// import $ from 'jquery';
// global.jQuery = $;

const LoginPage = () => {
    return (
        <>
            <body>
                <Header />
                <section class="vh-50 gradient-custom pt-5">
                    <div class="container py-5 h-75 ">
                        <div class="row d-flex justify-content-center align-items-center h-75 ">
                            <div class="col-12 col-md-8 col-lg-6 col-xl-5 ">
                                <div class="card bg-dark text-white">
                                    <div class="card-body p-5 text-center">

                                        <div class="mb-md-5 mt-md-4 pb-5">

                                            <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                                            <p class="text-white-50 mb-5">Please enter your mail and password!</p>

                                            <div class="form-outline form-white mb-4">
                                                <input type="email" id="typeEmailX" class="form-control form-control-lg" />
                                                <label class="form-label" for="typeEmailX">Email</label>
                                            </div>

                                            <div class="form-outline form-white mb-5">
                                                <input type="password" id="typePasswordX" class="form-control form-control-lg" />
                                                <label class="form-label mb-5" for="typePasswordX">Password</label>
                                            </div>
                                            <button class="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
                                            <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
                                        </div>
                                        <div>
                                            <p class="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </body>
        </>
    )
}
export default LoginPage;
