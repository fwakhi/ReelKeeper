import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap/dist/css/bootstrap.min.css";
import '../style/App.css';

//COMPONENTES
import MovieList from '../components/MovieList';
import MovieListHeading from '../components/MovieListHeading';
import SearchBox from '../components/SearchBox';
import AddFavourites from '../components/AddFavourites';
import RemoveFavourites from '../components/RemoveFavourites';
import Header from '../components/Header';

// import $ from 'jquery';
// global.jQuery = $;

const ViewMovies = () => {
    const [movies, setMovies] = useState([]);
    const [favourites, setFavourites] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const getMovieRequest = async (searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=48b027b6`;
        const response = await fetch(url);
        const responsJson = await response.json();
        if (responsJson.Search) {
            setMovies(responsJson.Search)
        }

    }
    useEffect(() => {
        getMovieRequest(searchValue);
    }, [searchValue]);

    useEffect(() => {
        const favsCookie = localStorage.getItem('react-movie-app-favs')
        if (favsCookie) {
            const movieFavourites = JSON.parse(favsCookie);
            setFavourites(movieFavourites);
        }
    }, []);

    const saveToLocalStorage = (items) => {
        localStorage.setItem('react-movie-app-favs', JSON.stringify(items));
    }

    const addFavouriteMovie = (movie) => {
        const newFavouriteList = [...favourites, movie];
        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);

    }
    const removeFavouriteMovie = (movie) => {
        const newFavouriteList = favourites.filter((favourite) => favourite.imdbID !== movie.imdbID);
        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
    }

    return (

        <div className="container-fluid movie-app">
            <Header />

            <div className='row d-flec align-items-center mt-4 mb-4'>
                <MovieListHeading heading="Movies" />
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
            </div>
            <div className='row'>
                <MovieList
                    movies={movies}
                    handleFavouritesClick={addFavouriteMovie}
                    favouriteComponent={AddFavourites} />
            </div>

            <div className='row d-flec align-items-center mt-4 mb-4'>
                <MovieListHeading heading="Favourites" />
            </div>

            <div className='row'>
                <MovieList
                    movies={favourites}
                    handleFavouritesClick={removeFavouriteMovie}
                    favouriteComponent={RemoveFavourites} />
            </div>
        </div>
    );
}

export default ViewMovies;
