import React, { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';

import styles from "./style/Background.module.css"
import './style/App.css';

import Home from './pages/Home';
import ViewMovies from './pages/ViewMovies';
import Login from './pages/Login';
// import Profile from './pages/Profile';
import Playground from "./pages/Playground";
import Signup from "./pages/Signup";
import Layout from "./components/Layout";
import Missing from "./components/Missing";
import MovieDetail from "./components/MovieDetail";


const App = () => {
    useEffect(() => {
        return () => {
            document.body.className = styles.plainBackground;
        }
    }, [])

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {/* Public routes */}
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />

                {/* Protected routes */}
                {/* <Route element={<PersistLogin />}> */}
                {/* <Route element={<RequireAuth />}> */}

                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<ViewMovies />} />
                <Route path='/playground' element={<Playground />} />
                <Route path="/movie/:movie_id" element={<MovieDetail />} />
                {/* <Route path="/profile" element={<Profile />}/> */}

                {/* </Route> */}
                {/* </Route> */}

                {/* All routes */}
                <Route path='*' element={<Missing />} />
            </Route>
        </Routes>
    )
}
export default App;
