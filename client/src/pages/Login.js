import React, { useState, useEffect, useRef, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import { Card, Container, Form, Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from "../style/Background.module.css"
import '../style/Login.css';
import axios from 'axios'
import { LOGIN_URL } from "../utils/Constants";


const Login = () => {
    useEffect(() => {
        document.body.className = styles.dynamicBackground;
        return () => {
            document.body.className = styles.plainBackground;
        }
    }, [])

    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errorRef = useRef();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        if (userRef.current) {
            userRef.current.focus();
        }
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [username, password])

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("QUE");
        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ username, password }),
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );
            console.log(JSON.stringify(response?.data));
            const accessToken = response?.data?.accessToken;
            setAuth({ username, password, accessToken });
            setUsername('');
            setPassword('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No server response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errorRef.current?.focus();
        }
    };

    const loginContent =
        (<>
            <Card className="col-5 mx-auto shadow p-3 mb-5 bg-white rounded min-width">
                <Card.Body>
                    <p ref={errorRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <Card.Title>Login</Card.Title>
                    {/* <Card.Subtitle className="mb-3">Please enter your user and password!</Card.Subtitle> */}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" ref={userRef} value={username} onChange={(e) => setUsername(e.target.value)} required />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                        </Form.Group>
                        <Link className='btn-pass'>Forgot your password?</Link>

                        <Button variant="dark" type="submit" className="mx-auto mt-3 mb-3" style={{ width: "100%" }}>Login</Button>

                        <Link to="/signup" className='btn-pass text-center'>Don't have an account? Sign up!</Link>
                    </Form>
                </Card.Body>
            </Card>
        </>)

    const loginSuccessContent =
        (<>
            <Card className="col-5 mx-auto shadow p-3 mb-5 bg-white rounded min-width">
                <Card.Body>
                    <section>
                        <Card.Title>You're logged in!</Card.Title>
                        <p>
                            <Link to="/movies" className='btn-pass text-center'>Go to Home</Link>
                        </p>
                    </section>
                </Card.Body>
            </Card>
        </>)

    return (
        <>
            (<Container className="h-100 mt-5 ">
                <Row className="align-items-center h-100">
                    {success ? loginSuccessContent : loginSuccessContent}
                </Row>
            </Container>
        </>
    )
}
export default Login;
