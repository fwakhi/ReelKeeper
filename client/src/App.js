import React, { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';

import styles from "./style/Background.module.css"
import './style/App.css';

import Home from './pages/Home';
import ViewMovies from './pages/ViewMovies';
import MovieCollections from './pages/MovieCollections';
import Login from './pages/Login';
import Playground from "./pages/Playground";
import Signup from "./pages/Signup";
import Layout from "./components/Layout";
import Missing from "./components/Missing";
import MovieDetail from "./components/MovieDetail";
import RequireAuth from "./components/RequireAuth";
import Profile from './pages/Profile';
import Favs from './pages/Favs';
import History from './pages/History';
import Watchlist from './pages/Watchlist';
import ListDetail from "./pages/ListDetail";
import About from "./pages/About";


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
                <Route path="/" element={<Home />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path='/about' element={<About />} />

                {/* Protected routes */}
                <Route element={<RequireAuth />}>
                    <Route path="/movies" element={<ViewMovies />} />
                    <Route path="/lists" element={<MovieCollections />} />
                    <Route path='/playground' element={<Playground />} />
                    <Route path="/movie/:movie_id" element={<MovieDetail />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/profile/lists/:list_id" element={<ListDetail />} />
                    <Route path="/favs" element={<Favs />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/watchlist" element={<Watchlist />} />
                </Route>

                {/* All routes */}
                <Route path='*' element={<Missing />} />
            </Route>
        </Routes>
    )
}
export default App;
