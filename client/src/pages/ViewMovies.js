import React, { useEffect, useState } from 'react';

import { searchMovies, popularMovies, upcomingMovies, latestMovies } from '../api/tmdb'
import { getFavorites } from '../api/services/Favorites'
// import { getWatchlist } from '../api/services/Watchlist'

//COMPONENTES
import MovieList from '../components/MovieList';
import MovieListHeading from '../components/MovieListHeading';
import SearchBox from '../components/SearchBox';
import useAuth from '../hooks/useAuth';
import useInfo from '../hooks/useInfo';

const ViewMovies = () => {
    const [movies, setMovies] = useState([]);
    const [popular, setPopular] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    const [latest, setLatest] = useState([]);
    const [searchValue, setSearchValue] = useState('');


    const { auth: { user: { id: userId } } } = useAuth()
    const { favorites, setFavorites } = useInfo()

    const filterMovies = (data) => {
        return data.filter(movie => {
            return movie.poster_path &&
                movie.adult == false &&
                movie.id != 617932 &&
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

    const FavList = (<>
        <div className='row'>
            <MovieList movies={favorites} />
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
                <MovieList movies={movies} />
            </div>

            {/* LATEST MOVIES  */}
            <div className='row d-flec align-items-center  mt-5'>
                <MovieListHeading heading="Latest Movies" />
            </div>
            <div className='row'>
                <MovieList movies={latest} />
            </div>

            {/* UPCOMING MOVIES  */}
            <div className='row d-flec align-items-center'>
                <MovieListHeading heading="Upcoming Movies" />
            </div>
            <div className='row'>
                <MovieList movies={upcoming} />
            </div >

            {/* POPULAR MOVIES  */}
            < div className='row d-flec align-items-center' >
                <MovieListHeading heading="Popular Movies" />
            </div >
            <div className='row'>
                <MovieList movies={popular} />
            </div >

            {/* FAVORITE MOVIES  */}
            < div className='row d-flec align-items-center mt-4 mb-4' >
                <MovieListHeading heading="Favorites" />
            </div >
            {favorites?.length > 0 ? FavList : emptyState}

        </div >
    );
}
export default ViewMovies;
