import React, { useEffect, useState } from 'react';

import { searchMovies, popularMovies, upcomingMovies, latestMovies } from '../api/tmdb'

//COMPONENTES
import MovieList from '../components/MovieList';
import MovieListHeading from '../components/MovieListHeading';
import SearchBox from '../components/SearchBox';
import AddFavourites from '../components/AddFavourites';
import RemoveFavourites from '../components/RemoveFavourites';


const ViewMovies = () => {
    const [movies, setMovies] = useState([]);
    const [favourites, setFavourites] = useState([]);
    const [popular, setPopular] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    const [latest, setLatest] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const getMovieRequest = async (searchValue) => {
        const response = await searchMovies(searchValue);
        console.log(response);
        if (response.data.results) {
            //Filter no poster movies and adult movies
            const filteredMovies = filterMovies(response.data.results);
            setMovies(filteredMovies)
        }
    }

    const filterMovies = (data) => {
        return data.filter(movie => {
            return movie.poster_path &&
                !movie.overview.includes("sex") &&
                !movie.overview.includes("sexual") &&
                !movie.overview.includes("erotic") &&
                !movie.title.includes("Erotic") &&
                !movie.title.includes("Sexy") &&
                !movie.title.includes("Erotic");
        });
    }
    const getPopularMovies = async () => {
        const response = await popularMovies();
        var limited = response.data.results.filter((_, i) => i < 10)

        setPopular(limited);
    }
    const getUpcomingMovies = async () => {
        const response = await upcomingMovies();
        var limited = response.data.results.filter((_, i) => i < 10)

        setUpcoming(limited);
    }

    const getLatestMovies = async () => {
        const response = await latestMovies();
        var limited = response.data.results.reverse().filter((_, i) => i < 10);
       
        setLatest(limited);
    }


    useEffect(() => {
        getMovieRequest(searchValue);
    }, [searchValue]);

    useEffect(() => {
        getPopularMovies();
    }, []);

    useEffect(() => {
        getUpcomingMovies();
    }, []);

    useEffect(() => {
        getLatestMovies();
    }, []);

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
        const newFavouriteList = favourites.filter((favourite) => favourite.id !== movie.id);
        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
    }

    return (

        <div className="container-fluid movie-app">
              {/* LATEST MOVIES  */}
              <div className='row d-flec align-items-center  mt-5'>
                <MovieListHeading heading="Latest Movies" />
            </div>
            <div className='row'>
                <MovieList movies={latest} handleFavouritesClick={addFavouriteMovie}
                    favouriteComponent={AddFavourites} />
            </div>

             {/* UPCOMING MOVIES  */}
             <div className='row d-flec align-items-center'>
                <MovieListHeading heading="Upcoming Movies" />
            </div>
            <div className='row'>
                <MovieList movies={upcoming} handleFavouritesClick={addFavouriteMovie}
                    favouriteComponent={AddFavourites} />
            </div>

            {/* POPULAR MOVIES  */}
            <div className='row d-flec align-items-center'>
                <MovieListHeading heading="Popular Movies" />
            </div>
            <div className='row'>
                <MovieList movies={popular} handleFavouritesClick={addFavouriteMovie}
                    favouriteComponent={AddFavourites} />
            </div>

           
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
