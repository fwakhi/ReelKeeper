import React, { useState, useEffect } from "react";

import { Card, Container, Form, Button, Row } from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap/dist/css/bootstrap.min.css";

import styles from "../style/Background.module.css"
import '../style/Login.css';


// import $ from 'jquery';
// global.jQuery = $;

const Login = () => {
    useEffect(() => {
        document.body.className = styles.dynamicBackground;
        return () => {
            document.body.className = styles.plainBackground;
        }
    }, [])
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Username: ${username}, Password: ${password}`);
        // TODO - Add login logic here
    };

    return (
        <>
            <Container className="h-100">
                <Row className="align-items-center h-100">
                    {/* <Card className="col-5 mx-auto"> */}
                    {/* <Card.Body> */}
                    {/* <Card.Title>Login</Card.Title> */}
                    {/* <Card.Subtitle className="mb-3">Please enter your mail and password!</Card.Subtitle> */}
                    {/* <Form onSubmit={handleSubmit}> */}
                    <Form className="col-5 mx-auto" onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" value={username} onChange={handleUsernameChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                        </Form.Group>

                        <Button type="submit" size="lg" block>Login</Button>
                        <Button variant="secondary" className="col-12 mx-auto" block>
                            Block level button
                        </Button>
                    </Form>
                    {/* </Card.Body> */}
                    {/* </Card> */}
                </Row>
            </Container>
        </>
    )
}
{/* <section className="vh-50 pt-5">
                <div className="container py-5 h-75 ">
                    <div className="row d-flex justify-content-center align-items-center h-75 ">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5 ">
                            <div className="card bg-dark text-white">
                                <div className="card-body p-5 text-center">
                                    <div className="mb-md-5 mt-md-4">
                                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                        <p className="text-white-50 mb-5">Please enter your mail and password!</p>
                                        <div className="form-outline form-white mb-4">
                                            <label className="form-label">Email</label>
                                            <input type="email" id="typeEmailX" className="form-control form-control-lg" />
                                        </div>

                                        <div className="form-outline form-white mb-5">
                                            <label className="form-label">Password</label>
                                            <input type="password" id="typePasswordX" className="form-control form-control-lg" />
                                        </div>
                                        <button className="btn btn-outline-light btn-lg px-5 mb-5 form-control-lg" type="submit">Login</button>
                                        <p className="small pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
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
            </section> */}

export default Login;
