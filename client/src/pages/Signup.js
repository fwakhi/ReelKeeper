import React, { useState, useEffect, useRef } from "react";

import { Card, Container, Form, Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import styles from "../style/Background.module.css"
import '../style/Login.css';
import axios from "axios";
import { SIGNUP_URL } from "../utils/Constants";
import { axiosPrivate } from "../api/axios";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


const Login = () => {
    useEffect(() => {
        document.body.className = styles.dynamicBackground;
        return () => {
            document.body.className = styles.plainBackground;
        }
    }, [])

    const userRef = useRef();
    const emailRef = useRef();
    const errorRef = useRef();

    const [user, setUser] = useState('');
    const [validUser, setValidUser] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [matchPassword, setMatchPassword] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errorMsg, setErrorMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (userRef.current) {
            userRef.current.focus();
        }
    }, [])

    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        console.log(email, result);
        setValidEmail(result);
    }, [email])

    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(user, result);
        setValidUser(result);
    }, [user])

    useEffect(() => {
        const result = PASSWORD_REGEX.test(password);
        console.log(password, result);
        setValidPassword(result);
        const match = password === matchPassword;
        setValidMatch(match);
    }, [password, matchPassword])

    useEffect(() => {
        setErrorMsg('');
    }, [user, email, password, matchPassword])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = USER_REGEX.test(user);
        const v2 = PASSWORD_REGEX.test(password);
        if (!v1 || !v2) {
            setErrorMsg("Invalid Entry");
            return;
        }
        try {
            const response = await axiosPrivate.post(SIGNUP_URL,
                JSON.stringify({ user, password, email })
            );
            console.log(response?.data);
            console.log(JSON.stringify(response))
            setSuccess(true);
            //clear state and controlled inputs
            //need value attrib on inputs for this
            setUser('');
            setPassword('');
            setMatchFocus('');
        } catch (err) {
            if (!err?.response) {
                setErrorMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrorMsg('Username Taken');
            } else if (err.response?.status === 408) {
                setErrorMsg('Email Taken');
            } else {
                setErrorMsg(`Registration failed: ${err.message}`)
            }
            errorRef.current?.focus();
        }
    }

    const signupContent =
        (<>
            <Card className="col-5 mx-auto shadow p-3 mb-5 bg-white rounded min-width">
                <Card.Body>
                    <Card.Title>Sign up</Card.Title><Card.Subtitle className="mb-3">Please enter your user and password!</Card.Subtitle><p ref={errorRef} className={errorMsg ? "errmsg" : "offscreeen"} aria-live="assertive">{errorMsg}</p><Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Username:
                                <span className={validUser ? "valid" : "hide"}>
                                    <i className="fa-solid fa-check"></i>
                                </span>
                                <span className={validUser || !user ? "hide" : "invalid"}>
                                    <i className="fa fa-times"></i>
                                </span>
                            </Form.Label>
                            <Form.Control
                                type="text"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                                required
                                aria-invalid={validUser ? "false" : "true"}
                                aria-describedby="uidnote"
                                onFocus={() => setUserFocus(true)}
                                onBlur={() => setUserFocus(false)} />
                        </Form.Group>
                        <p id="uidnote" className={userFocus && user && !validUser ? "instructions" : "offscreen"}>
                            <i className="fa-solid fa-circle-info fa-fw" />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.<br />
                        </p>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email:
                                <span className={validEmail ? "valid" : "hide"}>
                                    <i className="fa-solid fa-check"></i>
                                </span>
                                <span className={validEmail || !email ? "hide" : "invalid"}>
                                    <i className="fa fa-times"></i>
                                </span>
                            </Form.Label>
                            <Form.Control
                                type="text"
                                ref={emailRef}
                                autoComplete="off"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                required
                                aria-invalid={validEmail ? "false" : "true"}
                                aria-describedby="emailnote"
                                onFocus={() => setEmailFocus(true)}
                                onBlur={() => setEmailFocus(false)} />
                        </Form.Group>
                        <p id="emailnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                            <i className="fa-solid fa-circle-info fa-fw" />
                            4 to 24 characters.<br />
                        </p>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password:
                                <span className={validPassword ? "valid" : "hide"}>
                                    <i className="fa-solid fa-check"></i>
                                </span>
                                <span className={validPassword || !password ? "hide" : "invalid"}>
                                    <i className="fa fa-times"></i>
                                </span>
                            </Form.Label>
                            <Form.Control
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                required
                                aria-invalid={validPassword ? "false" : "true"}
                                aria-describedby="pwdnote"
                                onFocus={() => setPasswordFocus(true)}
                                onBlur={() => setPasswordFocus(false)} />
                        </Form.Group>
                        <p id="pwdnote" className={passwordFocus && password && !validPassword ? "instructions" : "offscreen"}>
                            <i className="fa-solid fa-circle-info fa-fw" />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>

                        <Form.Group controlId="formBasicPasswordConfirmation">
                            <Form.Label>Confirm Password:
                                <span className={validMatch && matchPassword ? "valid" : "hide"}>
                                    <i className="fa-solid fa-check"></i>
                                </span>
                                <span className={validMatch || !matchPassword ? "hide" : "invalid"}>
                                    <i className="fa fa-times"></i>
                                </span>
                            </Form.Label>
                            <Form.Control
                                type="password"
                                onChange={(e) => setMatchPassword(e.target.value)}
                                value={matchPassword}
                                required
                                aria-invalid={validMatch ? "false" : "true"}
                                aria-describedby="confirmnote"
                                onFocus={() => setMatchFocus(true)}
                                onBlur={() => setMatchFocus(false)} />
                        </Form.Group>
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            <i className="fa-solid fa-circle-info fa-fw" />
                            Must match the first password input field.
                        </p>

                        <Button variant="dark" type="submit" disabled={!!(!validUser || !validPassword || !validMatch)} className="mx-auto mt-3 mb-3" style={{ width: "100%" }}>Sign up</Button>

                        <Link to="/login" className='btn-pass text-center'>Already registered? Sign in!</Link>
                    </Form>
                </Card.Body>
            </Card>
        </>)

    const signupSuccessContent =
        (<>
            <Card className="col-5 mx-auto shadow p-3 mb-5 bg-white rounded min-width">
                <Card.Body><section>
                    <Card.Title>Success!</Card.Title>
                    <p>
                        <Link to="/login" className='btn-pass text-center'>Sign In</Link>
                    </p>
                </section>
                </Card.Body>
            </Card>
        </>)

    return (
        <>
            (<Container className="h-100 mt-5 ">
                <Row className="align-items-center h-100">
                    {success ? signupSuccessContent : signupContent}
                </Row>
            </Container>
        </>
    )
}

export default Login;
