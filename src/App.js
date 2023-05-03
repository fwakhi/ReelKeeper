import React, { useEffect } from "react";

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap/dist/css/bootstrap.min.css";

import './style/App.css';
import styles from "./style/Background.module.css"

import { Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import ViewMovies from './pages/ViewMovies';
import Login from './pages/Login';


const App = () => {
    useEffect(() => {
        return () => {
            document.body.className = styles.plainBackground;
        }
    }, [])

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<ViewMovies />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
