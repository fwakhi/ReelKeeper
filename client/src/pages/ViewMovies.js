import React, { useEffect, useState } from 'react';

import { searchMovies, popularMovies, upcomingMovies, latestMovies } from '../api/tmdb'
import { getFavorites, saveFavorite, removeFavorite } from '../api/services/Favorites'

//COMPONENTES
import MovieList from '../components/MovieList';
import MovieListHeading from '../components/MovieListHeading';
import SearchBox from '../components/SearchBox';
import AddFavourites from '../components/AddFavourites';
import RemoveFavourites from '../components/RemoveFavourites';


const ViewMovies = () => {
    const [foundUser, setFoundUser] = useState({});
    const [movies, setMovies] = useState([]);
    const [favourites, setFavourites] = useState([]);
    const [popular, setPopular] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    const [latest, setLatest] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        const data = localStorage.getItem('foundUser')
        if (data) {
            const newData = JSON.parse(data);
            setFoundUser(newData);
        }
    }, [])

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

    useEffect(() => {
        const getMovieRequest = async (searchValue) => {
            const response = await searchMovies(searchValue);
            if (response.data.results) {
                //Filter no poster movies and adult movies
                const filteredMovies = filterMovies(response.data.results);
                setMovies(filteredMovies)
            }
        }
        getMovieRequest(searchValue);
    }, [searchValue]);

    useEffect(() => {
        const getPopularMovies = async () => {
            const response = await popularMovies();
            var limited = response.data.results.filter((_, i) => i < 10)
            setPopular(limited);
        }
        getPopularMovies();
    }, []);

    useEffect(() => {
        const getUpcomingMovies = async () => {
            const response = await upcomingMovies();
            var limited = response.data.results.filter((_, i) => i < 10)

            setUpcoming(limited);
        }
        getUpcomingMovies();
    }, []);

    useEffect(() => {
        const getLatestMovies = async () => {
            const response = await latestMovies();
            const limited = response.data.results.reverse().filter((_, i) => i < 10);
            setLatest(limited);
        }
        getLatestMovies();
    }, []);

    useEffect(() => {
        const loadFavorites = async () => {
            const favs = await getFavorites(foundUser.id);
            if (favs != null) {
                console.log("favs", favs)
                setFavourites(favs);
            }
        }
        loadFavorites()
    }, [foundUser]);

    const addFavouriteMovie = async (movie) => {
        if (await saveFavorite(movie, foundUser.id)) {
            const newFavouriteList = [...favourites, movie];
            setFavourites(newFavouriteList);
        }
    }
    const removeFavouriteMovie = async (movie) => {
        if (await removeFavorite(movie.id, foundUser.id)) {
            const newFavouriteList = favourites.filter((favourite) => favourite.id !== movie.id);
            setFavourites(newFavouriteList);
        }
    }

    const movieList = (<>
        <div className='row'>
            <MovieList
                movies={favourites}
                handleFavouritesClick={removeFavouriteMovie}
                favouriteComponent={RemoveFavourites} />
        </div>
    </>)

    const emptyState = (<>
        <p>
            No movies available
        </p>
    </>)

    return (
        <div className="container-fluid movie-app">
            {/* SEARCH MOVIES  */}
            <div className='row d-flec align-items-center margin-top mb-4'>
                <MovieListHeading heading="Movies" />
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
            </div>
            <div className='row'>
                <MovieList
                    movies={movies}
                    handleFavouritesClick={addFavouriteMovie}
                    favouriteComponent={AddFavourites} />
            </div>

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

            {/* FAVOURITES MOVIES  */}
            <div className='row d-flec align-items-center mt-4 mb-4'>
                <MovieListHeading heading="Favourites" />
            </div>

            {favourites.length > 0 ? movieList : emptyState}

        </div>
    );
}
export default ViewMovies;

