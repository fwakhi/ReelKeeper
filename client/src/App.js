import React, { useEffect } from "react";

import './style/App.css';
import styles from "./style/Background.module.css"

import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import ViewMovies from './pages/ViewMovies';
import Login from './pages/Login';
import Playground from "./pages/Playground";


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
                <Route path='/playground' element={<Playground />} />
            </Routes>
        </div>
    );
}

export default App;
