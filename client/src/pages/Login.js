import React, { useState, useEffect, useRef, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import { Card, Container, Form, Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from "../style/Background.module.css"
import '../style/Login.css';
import axios from 'axios'

const URL = 'http://localhost:8000/users/';
// const LOGIN_URL = '/auth';

// import $ from 'jquery';
// global.jQuery = $;

const Login = () => {
    const {setAuth} = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    useEffect(() => {
        document.body.className = styles.dynamicBackground;
        return () => {
            document.body.className = styles.plainBackground;
        }
    }, [])

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        setErrMsg('');
    }, [username, password])


    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(URL, JSON.stringify({username, password}), 
            {
                headers: { 'Content-Type' : 'application/json'},
                withCredentials: true
            }
        );
            console.log(JSON.stringify(response?.data));
            // const accessToken = response?.data?.accessToken;
            // const roles= response?.data?.roles;
            setAuth({username, password});
            setUsername('');
            setPassword('');
            setSuccess(true);

        } catch (err) {
            if(!err?.response){
                setErrMsg('No server response');

            }else if (err.response?.status === 400){
                setErrMsg('Missing Username or Password');

            } else if (err.response?.status === 401){
                setErrMsg('Unauthorized');
            } else{
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
       
       
    };

    return (
        <>
        {success ? (
            <section>
                <h1>You're logged in!</h1>
            </section>
        ) : (

            <Container className="h-100 mt-5 ">
                
                <Row className="align-items-center h-100">
                
                    <Card className="col-5 mx-auto shadow p-3 mb-5 bg-white rounded min-width">
                        <Card.Body>
                        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                            <Card.Title>Login</Card.Title>
                            <Card.Subtitle className="mb-3">Please enter your user and password!</Card.Subtitle>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label htmlFor="username">Username</Form.Label>
                                    <Form.Control type="text" placeholder="Enter username" ref={userRef} id="username" value={username} onChange={handleUsernameChange} required />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label htmlFor="password">Password</Form.Label>
                                    <Form.Control type="password" id="password" placeholder="Password" value={password} onChange={handlePasswordChange} />

                                </Form.Group>
                                <Link className='btn-pass'>Forgot your password?</Link>

                                <Button variant="dark" type="submit" className="mx-auto mt-3 mb-3" style={{ width: "100%" }}>Login</Button>

                                <Link to="/signup" className='btn-pass text-center'>Don't have an account? Sign up!</Link>
                            </Form>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
            ) }
        </>
        
    )
}


export default Login;
