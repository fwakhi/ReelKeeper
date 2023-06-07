import React, { useEffect, useState } from 'react';

import { fetchCollection } from '../api/tmdb'

//COMPONENTES
import MovieList from '../components/MovieList';
import MovieListHeading from '../components/MovieListHeading';
import LoadingSpinner from '../components/Loading';
import { fetchCollections } from '../api/services/Movies';


const ViewMovies = () => {
    const ids = [10, 8936, 119, 1241, 33514, 2602, 123800, 264]
    const [collections, setCollections] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getCollections = async () => {
            setCollections(await fetchCollections(ids));
            setIsLoading(false);
        }
        getCollections();
    }, []);

    const movieCollections =
        React.Children.toArray(
            collections?.map(col =>
            (<>
                <div className='row d-flec align-items-center  mt-5'>
                    <MovieListHeading heading={col.name} />
                </div>
                <div className='row'>
                    <MovieList movies={col?.parts} hideButtons={false} />
                </div>
            </>)
            ))

    return (
        <div className="container-fluid movie-app">
            {isLoading ? <LoadingSpinner /> : movieCollections}
        </div>
    );
}
export default ViewMovies;
