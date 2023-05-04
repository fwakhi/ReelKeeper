import React, { useState, useEffect } from "react";

import { Card, Container, Form, Button, Row, NavLink } from 'react-bootstrap';
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
                    <Card className="col-5 mx-auto shadow p-3 mb-5 bg-white rounded">
                        <Card.Body>
                            <Card.Title>Login</Card.Title>
                            <Card.Subtitle className="mb-3">Please enter your user and password!</Card.Subtitle>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" placeholder="Enter username" value={username} onChange={handleUsernameChange} />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                                    
                                </Form.Group>
                                <a className='btn-pass'>Forgot your password?</a>
                                

                                <Button variant="dark" type="submit" className="mx-auto mt-3 mb-3" style={{ width: "100%" }}>Login</Button>
                            
                                <a className='btn-pass text-center'>Don't have an account? Sign in!</a>
                            </Form>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </>
    )
}


export default Login;
