import React, { useEffect, useState } from 'react';

import { searchMovies, popularMovies, upcomingMovies, latestMovies } from '../api/tmdb'
import { getFavorites } from '../api/services/Favorites'

//COMPONENTES
import MovieList from '../components/MovieList';
import MovieListHeading from '../components/MovieListHeading';
import SearchBox from '../components/SearchBox';
import AddFavourites from '../components/AddFavourites';
import useAuth from '../hooks/useAuth';


const ViewMovies = () => {
    const [movies, setMovies] = useState([]);
    const [favourites, setFavourites] = useState([]);
    const [popular, setPopular] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    const [latest, setLatest] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const { auth: { user: { id: userId } } } = useAuth()

    const filterMovies = (data) => {
        return data.filter(movie => {
            return movie.poster_path &&
                movie.adult == false &&
                !movie.overview.toLowerCase().includes("sex") &&
                !movie.overview.toLowerCase().includes("sexual") &&
                !movie.overview.toLowerCase().includes("erotic") &&
                !movie.overview.toLowerCase().includes("porn") &&
                !movie.title.toLowerCase().includes("porn") &&
                !movie.title.toLowerCase().includes("porno") &&
                !movie.title.toLowerCase().includes("erotic") &&
                !movie.title.toLowerCase().includes("sexy");
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
            const limited = response.data.results.filter((_, i) => i < 10)
            setPopular(limited);
        }
        getPopularMovies();
    }, []);

    useEffect(() => {
        const getUpcomingMovies = async () => {
            const response = await upcomingMovies();
            const limited = response.data.results.filter((_, i) => i < 10)
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
            if (userId) {
                const favs = await getFavorites(userId);
                favs && setFavourites(favs);
            }
        }
        loadFavorites()
    }, [userId]);


    

    const refreshFavsAdd = (newMovie) => {
        const newFavouriteList = [...favourites, newMovie];
        setFavourites(newFavouriteList);
    }

    const refreshFavsRemove = (newMovie) => {
        
        const newFavouriteList = favourites.filter((fav) => fav.id.toString() !== newMovie.id.toString());
        setFavourites(newFavouriteList);
        console.log(newMovie, newFavouriteList);
    }

    const FavList = (<>
        <div className='row'>
            <MovieList
                movies={favourites}
                favourites={favourites}
                onFavouritesAdded={refreshFavsAdd} 
                onFavouritesRemoved={refreshFavsRemove}/>
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
                    favourites={favourites}
                    onFavouritesAdded={refreshFavsAdd} 
                    onFavouritesRemoved={refreshFavsRemove}/>
            </div>

            {/* LATEST MOVIES  */}
            <div className='row d-flec align-items-center  mt-5'>
                <MovieListHeading heading="Latest Movies" />
            </div>
            <div className='row'>
                <MovieList
                    movies={latest}
                    favourites={favourites}
                    onFavouritesAdded={refreshFavsAdd} 
                    onFavouritesRemoved={refreshFavsRemove}/>
            </div>

            {/* UPCOMING MOVIES  */}
            <div className='row d-flec align-items-center'>
                <MovieListHeading heading="Upcoming Movies" />
            </div>
            <div className='row'>
                <MovieList movies={upcoming} favourites={favourites}
                    onFavouritesAdded={refreshFavsAdd} 
                    onFavouritesRemoved={refreshFavsRemove}/>
            </div>

            {/* POPULAR MOVIES  */}
            <div className='row d-flec align-items-center'>
                <MovieListHeading heading="Popular Movies" />
            </div>
            <div className='row'>
                <MovieList movies={popular} favourites={favourites}
                    onFavouritesAdded={refreshFavsAdd} 
                    onFavouritesRemoved={refreshFavsRemove}/>
            </div>

            {/* FAVOURITES MOVIES  */}
            <div className='row d-flec align-items-center mt-4 mb-4'>
                <MovieListHeading heading="Favourites" />
            </div>

            {favourites.length > 0 ? FavList : emptyState}

        </div>
    );
}
export default ViewMovies;
