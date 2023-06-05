import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { Card, Container, Form, Button, Row } from 'react-bootstrap';
import styles from "../style/Background.module.css"
import '../style/Login.css';

import useAuth from "../hooks/useAuth";
import api, { AUTH_URL, refreshUser } from "../api/axios";
import useInfo from "../hooks/useInfo";


const Login = () => {
    useEffect(() => {
        document.body.className = styles.dynamicBackground;
        return () => {
            document.body.className = styles.plainBackground;
        }
    }, [])

    const { setAuth } = useAuth();
    const { setUserInfo } = useInfo()

    const isAuthorized = localStorage.getItem("accessToken") != null

    const navigate = useNavigate();
    const location = useLocation();

    const userRef = useRef();
    const errorRef = useRef();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');


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
        try {
            const response = await api.post(AUTH_URL,
                { username, password }
            );
            const accessToken = response?.data?.accessToken;
            const user = response?.data?.user;

            localStorage.setItem('accessToken', accessToken);

            setAuth({ accessToken, user });
            setUserInfo(await refreshUser(user?.id));

            setUsername('');
            setPassword('');
            navigate('/movies', { state: { from: location }, replace: true });
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No server response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('No user found with that name');
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
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" ref={userRef} value={username} onChange={(e) => setUsername(e.target.value)} required />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                        </Form.Group>

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
            <Container className="h-100 mt-5 ">
                <Row className="align-items-center h-100">
                    {isAuthorized ? loginSuccessContent : loginContent}
                </Row>
            </Container>
        </>
    )
}
export default Login;
