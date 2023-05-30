import React, { useEffect, useState } from 'react';

import { searchMovies } from '../api/tmdb'
import { filterMovies, getLatestMovies, getPopularMovies, getUpcomingMovies } from '../api/services/Movies';

import MovieList from '../components/MovieList';
import MovieListHeading from '../components/MovieListHeading';
import SearchBox from '../components/SearchBox';
import useInfo from '../hooks/useInfo';
import LoadingSpinner from '../components/Loading';


const ViewMovies = () => {
    const [movies, setMovies] = useState([]);
    const [popular, setPopular] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    const [latest, setLatest] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const { favorites } = useInfo()

    const fetchMovies = async () => {
        setPopular(await getPopularMovies());
        setUpcoming(await getUpcomingMovies());
        setLatest(await getLatestMovies());
        setIsLoading(false);
    } 

    useEffect(() => {
        fetchMovies();
    }, []);

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

            {React.Children.toArray([
                { title: "Latest Movies", movies: latest },
                { title: "Upcoming Movies", movies: upcoming },
                { title: "Popular Movies", movies: popular },
                { title: "Favorites", movies: favorites }].map((k) =>
                    <>
                        <div className='row d-flec align-items-center  mt-5'>
                            <MovieListHeading heading={k.title} />
                        </div>
                        <div className='row'>
                            {
                                isLoading
                                    ? <LoadingSpinner />
                                    : k.movies.length > 0
                                        ? <MovieList movies={k.movies} />
                                        : <p>No movies available</p>
                            }
                        </div>
                    </>
                ))}
        </div >
    );
}
export default ViewMovies;
